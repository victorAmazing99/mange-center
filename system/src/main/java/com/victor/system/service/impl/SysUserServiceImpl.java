package com.victor.system.service.impl;

import cn.hutool.core.collection.CollectionUtil;
import cn.hutool.core.util.ObjectUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.json.JSONUtil;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.victor.common.core.constant.CacheConstants;
import com.victor.common.core.constant.UserConstants;
import com.victor.common.core.context.SecurityContextHolder;
import com.victor.common.core.enums.DeleteEnum;
import com.victor.common.core.enums.OrgCategoryEnum;
import com.victor.common.core.enums.UserCategoryEnum;
import com.victor.common.core.enums.UserStatus;
import com.victor.common.core.exception.ServiceException;
import com.victor.common.core.utils.BizAssertUtil;
import com.victor.common.core.utils.EntityConverterUtil;
import com.victor.common.core.utils.StringUtils;
import com.victor.common.core.utils.sm3.Sm3crypto;
import com.victor.common.dao.system.SysUserDao;
import com.victor.common.entity.system.*;
import com.victor.common.redis.service.RedisService;
import com.victor.common.request.system.PassWordAndQuestionRequest;
import com.victor.common.request.system.UpdateStartPassword;
import com.victor.common.request.system.UserAble;
import com.victor.common.response.system.DictionaryUser;
import com.victor.common.response.system.SysUserResp;
import com.victor.system.service.*;

import java.util.Objects;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections4.CollectionUtils;
import org.bouncycastle.util.encoders.Hex;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Base64;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * <p>
 * 用户信息表 服务实现类
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
@Slf4j
@Service
@DS("system")
public class SysUserServiceImpl extends ServiceImpl<SysUserDao, SysUser> implements SysUserService {

    @Value("${system.init.userPassword}")
    private String initPassword;
    @Autowired
    private SysUserSecurityService sysUserSecurityService;

    @Autowired
    private SysDictionaryService sysDictionaryService;

    @Autowired
    private SysAgencyService SysAgencyService;

    @Autowired
    private SysSubAgencyService SysSubAgencyService;

    @Autowired
    private RedisService redisService;

    @Override
    public Boolean createUser(SysUser user) {

        SysUser user1 = baseMapper.selectOne(new LambdaQueryWrapper<SysUser>().eq(SysUser::getUserName, user.getUserName()));

        if (user1 != null) {
            throw new ServiceException("用户名已存在，请重新选择用户名！", 500);
        }
        long thirdCount = count(new LambdaQueryWrapper<SysUser>()
                .eq(SysUser::getOrgCode, user.getOrgCode())
                .eq(SysUser::getThirdNo, user.getThirdNo())
                .eq(SysUser::getIsDelete, DeleteEnum.NOT_DELETE.getCode()));
        BizAssertUtil.isTrue(thirdCount == 0, "用户不能重复绑定第三方工号");
        setUserDictionaryName(user);
        user.setPassword(initPassword);
        byte[] mySalt = Sm3crypto.getSalt();
        //将盐用base64转化为字符串存到数据库中
        user.setSalt(Base64.getEncoder().encodeToString(mySalt));
        user.setPassword(Hex.toHexString(Sm3crypto.pwdSaltedHashValue(mySalt, user.getPassword())));
        boolean flag = baseMapper.insert(user) > 0 ? true : false;
        return flag;
    }


    @Override
    public Boolean updateUserById(SysUser user) {
        if (StringUtils.isNotEmpty(user.getThirdNo())) {
            SysUser sysUser = getById(user.getId());
            long thirdCount = count(new LambdaQueryWrapper<SysUser>()
                    .eq(SysUser::getOrgCode, sysUser.getOrgCode())
                    .eq(SysUser::getThirdNo, user.getThirdNo())
                    .eq(SysUser::getIsDelete, DeleteEnum.NOT_DELETE.getCode())
                    .ne(SysUser::getId, user.getId()));
            BizAssertUtil.isTrue(thirdCount == 0, "用户不能重复绑定第三方工号");
        }
        user.setPassword(null);
        user.setDeptId(ObjectUtil.isNotEmpty(user.getDeptId()) ? user.getDeptId() : -1);
        setUserDictionaryName(user);
        if (Objects.isNull(user.getSignPic())) {
            user.setSignPic("");
        }
        if (Objects.isNull(user.getQrCodePic())) {
            user.setQrCodePic("");
        }
        boolean flag = baseMapper.updateById(user) > 0 ? true : false;
        return flag;
    }

    @Override
    public Boolean updatePasswordById(String password, String newPassword) {
        SysUser user = baseMapper.selectById(SecurityContextHolder.getUserId());

        if (!matchesSm3(user, password)) {
            throw new ServiceException("原始密码错误!", 500);
        } else {
            String saltPassword = Hex.toHexString(Sm3crypto.pwdSaltedHashValue(Base64.getDecoder().decode(user.getSalt()), newPassword));
            user.setPasUpdateDate(new Date());
            user.setPassword(saltPassword);
            return baseMapper.updateById(user) > 0 ? true : false;
        }
    }

    @Override
    public Boolean disableUser(UserAble userAble) {
        BizAssertUtil.notNull(userAble.getId(), "用户id不能为空");
        SysUser sysUser = new SysUser();
        sysUser.setId(userAble.getId());
        sysUser.setEnabled(userAble.getEnable());
        return updateById(sysUser);
    }

    private boolean matchesSm3(SysUser user, String rawPassword) {

        //用密码sm3加密后再加盐，形成新的密码
        String saltPassword = Hex.toHexString(Sm3crypto.pwdSaltedHashValue(Base64.getDecoder().decode(user.getSalt()), rawPassword));

        return saltPassword.equals(user.getPassword()) ? true : false;

    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Boolean updateStartPasswordById(PassWordAndQuestionRequest passWordAndQuestionRequest) {
        SysUserSecurity sysUserSecurity = passWordAndQuestionRequest.getQuestion();
        BizAssertUtil.notNull(sysUserSecurity, "密保问题不能为空");
        UpdateStartPassword updateStartPassword = passWordAndQuestionRequest.getUpdateStartPassword();
        BizAssertUtil.isTrue(ObjectUtil.isNotEmpty(updateStartPassword) &&
                StrUtil.isNotBlank(updateStartPassword.getPassword()), "新密码不能为空");
        BizAssertUtil.notBlank(sysUserSecurity.getUserName(), "用户名不能为空");
        SysUser user = baseMapper.selectOne(new LambdaQueryWrapper<SysUser>()
                .eq(SysUser::getUserName, sysUserSecurity.getUserName())
                .eq(SysUser::getEnabled, UserConstants.NORMAL)
                .eq(SysUser::getIsDelete, DeleteEnum.NOT_DELETE.getCode()));
        log.info("=====" + JSONUtil.toJsonStr(user) + "========" + updateStartPassword.getPassword());
        user.setPassword(Hex.toHexString(Sm3crypto.pwdSaltedHashValue(Base64.getDecoder().decode(user.getSalt()), updateStartPassword.getPassword())));
        user.setPasUpdateDate(new Date());
        Boolean flag = baseMapper.updateById(user) > 0 ? true : false;
        sysUserSecurity.setUserId(user.getId());
        Boolean questionFlag = sysUserSecurityService.create(sysUserSecurity);
        return flag && questionFlag;
    }

    @Override
    public Boolean updateExpiredPasswordById(Long userId, String password) {
        SysUser user = baseMapper.selectById(SecurityContextHolder.getUserId());
        String saltPassword = Hex.toHexString(Sm3crypto.pwdSaltedHashValue(Base64.getDecoder().decode(user.getSalt()), password));
        user.setPasUpdateDate(new Date());
        user.setPassword(saltPassword);
        return updateById(user);
    }

    @Override
    public Boolean updateForgetPasswordByUserName(String userName, String password) {
        BizAssertUtil.notBlank(userName, "用户名不能为空");
        SysUser user = getByUserName(userName);
        BizAssertUtil.notNull(user, "未查询到有效用户");
        // 密保问题校验状态
        boolean flag = redisService.getCacheObject(CacheConstants.UPDATE_PAS_QUESTION_CHECK_STATUS + user.getId());
        BizAssertUtil.isTrue(ObjectUtil.isNotEmpty(flag) && flag, "密保验证失效，请重新提交!");
        String saltPassword = Hex.toHexString(Sm3crypto.pwdSaltedHashValue(Base64.getDecoder().decode(user.getSalt()), password));
        user.setPasUpdateDate(new Date());
        user.setPassword(saltPassword);
        return updateById(user);
    }

    @Override
    public Boolean updateResetPasswordById(String userId) {
        SysUser user = baseMapper.selectById(userId);
        String saltPassword = Hex.toHexString(Sm3crypto.pwdSaltedHashValue(Base64.getDecoder().decode(user.getSalt()), initPassword));
        user.setPasUpdateDate(new Date());
        user.setPassword(saltPassword);
        return updateById(user);
    }

    @Override
    public List<SysUserResp> getFamilyDoc() {
        String hospitalId = SecurityContextHolder.getHospitalId();
        List<SysUser> sysUsers = baseMapper.selectList(new LambdaQueryWrapper<SysUser>()
                .eq(SysUser::getOrgCode, hospitalId)
                .eq(SysUser::getCategoryCode, UserCategoryEnum.FAMILY_DOC.getCode())
                .eq(SysUser::getIsDelete, DeleteEnum.NOT_DELETE.getCode())
                .eq(SysUser::getEnabled, UserStatus.OK.getCode()));
        return EntityConverterUtil.convertList(sysUsers, SysUserResp.class);
    }

    @Override
    public List<SysUserResp> getUserByOrg(String orgCode) {
        List<SysUser> users = baseMapper.selectList(new LambdaQueryWrapper<SysUser>()
                .eq(SysUser::getOrgCode, orgCode)
                .eq(SysUser::getIsDelete, DeleteEnum.NOT_DELETE.getCode())
                .eq(SysUser::getEnabled, UserStatus.OK.getCode()));
        return EntityConverterUtil.convertList(users, SysUserResp.class);
    }


    @Override
    public List<SysUserResp> getMedicalAssistanceInfo(List<Integer> body) {
        LambdaQueryWrapper<SysUser> wrapper = new LambdaQueryWrapper<>();
        if (CollectionUtils.isNotEmpty(body)) {
            wrapper.notIn(SysUser::getId, body);
        }
        wrapper.eq(SysUser::getCategoryCode, UserCategoryEnum.FAMILY_ASSISTANT.getCode())
                .eq(SysUser::getIsDelete, DeleteEnum.NOT_DELETE.getCode())
                .eq(SysUser::getEnabled, UserStatus.OK.getCode())
                .eq(SysUser::getOrgCode, SecurityContextHolder.getHospitalId());
        List<SysUser> sysUsers = list(wrapper);
        return EntityConverterUtil.convertList(sysUsers, SysUserResp.class);
    }

    @Override
    public List<SysUserResp> getUserByCategory(String categoryCode) {
        String hospitalId = SecurityContextHolder.getHospitalId();
        List<SysUser> sysUsers = list(new LambdaQueryWrapper<SysUser>()
                .eq(StringUtils.isNotEmpty(hospitalId), SysUser::getOrgCode, hospitalId)
                .eq(SysUser::getCategoryCode, categoryCode)
                .eq(SysUser::getIsDelete, DeleteEnum.NOT_DELETE.getCode()));
        return EntityConverterUtil.convertList(sysUsers, SysUserResp.class);
    }

    @Override
    public SysUser getByUserName(String name) {
        return baseMapper.selectOne(new LambdaQueryWrapper<SysUser>()
                .eq(SysUser::getUserName, name)
                .eq(SysUser::getEnabled, UserStatus.OK.getCode())
                .eq(SysUser::getIsDelete, DeleteEnum.NOT_DELETE.getCode()));
    }


    @Override
    public SysUser getByUserNameAll(String name) {
        List<SysUser> list = baseMapper.selectList(new LambdaQueryWrapper<SysUser>()
                .eq(SysUser::getUserName, name)
                .eq(SysUser::getIsDelete, DeleteEnum.NOT_DELETE.getCode()));

        if (CollectionUtils.isNotEmpty(list)) {
            return list.get(0);
        } else {
            return null;
        }
    }

    /**
     * 给用户相关内容映射字典值
     *
     * @param user
     */
    private void setUserDictionaryName(SysUser user) {
        //用户相关字典
        DictionaryUser dictionaryUser = sysDictionaryService.getDictionaryUser();
        //人员类别字典
        Map<String, String> categoryMap = dictionaryUser.getCategoryDic().stream().collect(Collectors.toMap(SysDictionary::getCode, SysDictionary::getValue));
        //职称字典
        Map<String, String> professionMap = dictionaryUser.getProfessionDic().stream().collect(Collectors.toMap(SysDictionary::getCode, SysDictionary::getValue));
        //职务字典
        Map<String, String> dutyMap = dictionaryUser.getDutyDic().stream().collect(Collectors.toMap(SysDictionary::getCode, SysDictionary::getValue));

        if (StrUtil.isNotEmpty(user.getCategoryCode())) {
            user.setCategoryName(categoryMap.get(user.getCategoryCode()));
        }

        if (StrUtil.isNotEmpty(user.getProfessionCode())) {
            user.setProfessionName(professionMap.get(user.getProfessionCode()));
        }

        if (StrUtil.isNotEmpty(user.getDutyCode())) {
            user.setDutyName(dutyMap.get(user.getDutyCode()));
        }

        //主机构
        if (StrUtil.isNotEmpty(user.getOrgCode())) {
            SysAgency hospital = SysAgencyService.getBaseMapper().selectOne(new LambdaQueryWrapper<SysAgency>()
                    .select(SysAgency::getOrgName)
                    .eq(SysAgency::getOrgCode, user.getOrgCode()));
            user.setOrgName(hospital.getOrgName());
        }

        //子机构
        if (StrUtil.isNotEmpty(user.getOrgSubCode())) {
            SysSubAgency subHospital = SysSubAgencyService.getBaseMapper().selectOne(new LambdaQueryWrapper<SysSubAgency>()
                    .select(SysSubAgency::getOrgSubName)
                    .eq(SysSubAgency::getOrgSubCode, user.getOrgSubCode()));
            user.setOrgSubName(subHospital.getOrgSubName());
        }
    }

}
