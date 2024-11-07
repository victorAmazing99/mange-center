package com.victor.auth.service;

import cn.hutool.core.util.StrUtil;
import com.victor.common.core.constant.Constants;
import com.victor.common.core.domain.R;
import com.victor.common.core.enums.DeleteEnum;
import com.victor.common.core.enums.UserStatus;
import com.victor.common.core.exception.ServiceException;
import com.victor.common.core.utils.StringUtils;
import com.victor.common.entity.system.SysUser;
import com.victor.system.controller.SysAgencyController;
import com.victor.system.controller.SysUserController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * 登录校验方法
 *
 * @author victor
 */
@Component
public class SysLoginService {
    @Autowired
    private SysPasswordService passwordService;

    @Autowired
    private SysUserController userService;

    @Autowired
    private SysAgencyController SysAgencyService;

    @Autowired
    private SysRecordLogService recordLogService;

    /**
     * 登录
     */
    public SysUser login(String username, String password) {
        // 用户名或密码为空 错误
        if (StringUtils.isAnyBlank(username, password)) {
            recordLogService.recordLogininfor(username, Constants.LOGIN_FAIL, "用户/密码必须填写");
            throw new ServiceException("用户/密码必须填写");
        }


        // 查询用户信息
        R<SysUser> userResult = (R<SysUser>) userService.getUserInfo(username);

        if (StringUtils.isNull(userResult) || StringUtils.isNull(userResult.getData())) {
            recordLogService.recordLogininfor(username, Constants.LOGIN_FAIL, "登录用户不存在");
            throw new ServiceException("登录用户：" + username + " 不存在");
        }

        if (R.FAIL == userResult.getCode()) {
            throw new ServiceException(userResult.getMsg());
        }

        SysUser user = userResult.getData();

        if (DeleteEnum.IS_DELETE.getCode().equals(user.getIsDelete())) {
            recordLogService.recordLogininfor(username, Constants.LOGIN_FAIL, "对不起，您的账号已被删除");
            throw new ServiceException("对不起，您的账号：" + username + " 已被删除");
        }
        if (UserStatus.DISABLE.getCode().equals(user.getEnabled())) {
            recordLogService.recordLogininfor(username, Constants.LOGIN_FAIL, "用户已停用，请联系管理员");
            throw new ServiceException("对不起，您的账号：" + username + " 已停用");
        }

        if (StrUtil.isNotBlank(user.getOrgCode())) {
            String closeStatus = SysAgencyService.getOrgCodeCloseStatus(user.getOrgCode()).getData();
            if ("1".equals(closeStatus)) {
                throw new ServiceException("对不起，您的机构已停用");
            }
        }

        passwordService.validate(user, password);
        recordLogService.recordLogininfor(username, Constants.LOGIN_SUCCESS, "登录成功");

        return user;
    }

    public void logout(String loginName) {
        recordLogService.recordLogininfor(loginName, Constants.LOGOUT, "退出成功");
    }


}
