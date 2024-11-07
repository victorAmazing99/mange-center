package com.victor.auth.service;

import com.victor.common.core.constant.Constants;
import com.victor.common.core.utils.ServletUtils;
import com.victor.common.core.utils.StringUtils;
import com.victor.common.core.utils.ip.IpUtils;
import com.victor.common.entity.system.SysLoginLog;
import com.victor.system.controller.SysLoginLogController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * 记录日志方法
 *
 * @author victor
 */
@Component
public class SysRecordLogService
{
    @Autowired
    private SysLoginLogController remoteLogService;

    /**
     * 记录登录信息
     *
     * @param username 用户名
     * @param status 状态
     * @param message 消息内容
     * @return
     */
    public void recordLogininfor(String username, String status, String message)
    {
        SysLoginLog sysLoginInfo = new SysLoginLog();
        sysLoginInfo.setUserName(username);

        sysLoginInfo.setIpaddr(IpUtils.getIpAddr(ServletUtils.getRequest()));
        sysLoginInfo.setMsg(message);
        // 日志状态
        if (StringUtils.equalsAny(status, Constants.LOGIN_SUCCESS, Constants.LOGOUT, Constants.REGISTER))
        {
            sysLoginInfo.setStatus(Constants.LOGIN_SUCCESS_STATUS);
        }
        else if (Constants.LOGIN_FAIL.equals(status))
        {
            sysLoginInfo.setStatus(Constants.LOGIN_FAIL_STATUS);
        }

        remoteLogService.createOne(sysLoginInfo);
    }
}
