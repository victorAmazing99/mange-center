package com.victor.system.service.impl;

import cn.hutool.core.util.ObjectUtil;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.victor.common.core.exception.BizAssertException;
import com.victor.system.service.SysSecurityQuestionService;
import com.victor.system.service.SysUserSecurityService;
import com.victor.system.service.SysUserService;
import com.victor.common.core.constant.CacheConstants;
import com.victor.common.core.utils.BizAssertUtil;
import com.victor.common.dao.system.SysUserSecurityDao;
import com.victor.common.entity.system.SysUser;
import com.victor.common.entity.system.SysUserSecurity;
import com.victor.common.redis.service.RedisService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.concurrent.TimeUnit;

/**
 * <p>
 * 用户密保问题信息 服务实现类
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
@Service
@DS("system")
public class SysUserSecurityServiceImpl extends ServiceImpl<SysUserSecurityDao, SysUserSecurity> implements SysUserSecurityService {

    @Autowired
    private SysUserService sysUserService;
    @Autowired
    private SysSecurityQuestionService sysSecurityQuestionService;

    @Autowired
    private RedisService redisService;
    @Override
    public SysUserSecurity getQuestionByUserName(String userName) {
        BizAssertUtil.notBlank(userName, "用户名不能为空");
        SysUser sysUser = sysUserService.getByUserName(userName);
        if(sysUser ==null){
            sysUser = sysUserService.getByUserNameAll(userName);
            if( sysUser !=null){
               throw  new BizAssertException(userName+",该用户未启用");
            }else {
               throw  new BizAssertException(userName+",该用户不存在");
            }
        }

        SysUserSecurity sysUserSecurity = getOne(new LambdaQueryWrapper<SysUserSecurity>().eq(SysUserSecurity::getUserId, sysUser.getId()));
        BizAssertUtil.notNull(sysUserSecurity, userName + "未查询到密保信息");
        sysUserSecurity.setQuestionDetail1(ObjectUtil.isEmpty(sysSecurityQuestionService.getById(sysUserSecurity.getQuestionId1())) ?
                "" : sysSecurityQuestionService.getById(sysUserSecurity.getQuestionId1()).getQuestion());
        sysUserSecurity.setQuestionDetail2(ObjectUtil.isEmpty(sysSecurityQuestionService.getById(sysUserSecurity.getQuestionId2())) ?
                "" : sysSecurityQuestionService.getById(sysUserSecurity.getQuestionId2()).getQuestion());
        sysUserSecurity.setQuestionDetail3(ObjectUtil.isEmpty(sysSecurityQuestionService.getById(sysUserSecurity.getQuestionId3())) ?
                "" : sysSecurityQuestionService.getById(sysUserSecurity.getQuestionId3()).getQuestion());
        sysUserSecurity.setAnswer1("");
        sysUserSecurity.setAnswer2("");
        sysUserSecurity.setAnswer3("");
        return sysUserSecurity;
    }

    @Override
    public boolean check(SysUserSecurity sysUserSecurity) {
        BizAssertUtil.notNull(sysUserSecurity.getUserId(), "用户信息不能为空");
        SysUserSecurity mySecurity = getOne(new LambdaQueryWrapper<SysUserSecurity>().eq(SysUserSecurity::getUserId, sysUserSecurity.getUserId()));
        boolean flag = sysUserSecurity.getQuestionId1().equals(mySecurity.getQuestionId1()) && sysUserSecurity.getAnswer1().equals(mySecurity.getAnswer1())
                && sysUserSecurity.getQuestionId2().equals(mySecurity.getQuestionId2()) && sysUserSecurity.getAnswer2().equals(mySecurity.getAnswer2())
                && sysUserSecurity.getQuestionId3().equals(mySecurity.getQuestionId3()) && sysUserSecurity.getAnswer3().equals(mySecurity.getAnswer3());
        if (flag) {
            redisService.setCacheObject(CacheConstants.UPDATE_PAS_QUESTION_CHECK_STATUS + sysUserSecurity.getUserId(), flag, Long.valueOf( CacheConstants.PASSWORD_MAX_RETRY_COUNT), TimeUnit.MINUTES);
        }
        return flag;
    }

    @Override
    @Transactional
    public boolean create(SysUserSecurity sysUserSecurity) {
        BizAssertUtil.notNull(sysUserSecurity.getUserId(), "用户信息不能为空");
        this.remove(new LambdaQueryWrapper<SysUserSecurity>().eq(SysUserSecurity::getUserId, sysUserSecurity.getUserId()));
        return this.save(sysUserSecurity);
    }
}
