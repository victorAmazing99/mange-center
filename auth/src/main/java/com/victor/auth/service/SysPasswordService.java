package com.victor.auth.service;

import com.victor.common.core.constant.CacheConstants;
import com.victor.common.core.constant.Constants;
import com.victor.common.core.exception.ServiceException;
import com.victor.common.core.utils.sm3.Sm3crypto;
import com.victor.common.entity.system.SysUser;
import com.victor.common.redis.service.RedisService;
import org.bouncycastle.util.encoders.Hex;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Base64;
import java.util.concurrent.TimeUnit;

/**
 * 登录密码方法
 *
 * @author victor
 */
@Component
public class SysPasswordService {
    @Autowired
    private RedisService redisService;

    private int maxRetryCount = CacheConstants.PASSWORD_MAX_RETRY_COUNT;

    private Long lockTime = CacheConstants.PASSWORD_LOCK_TIME;

    @Autowired
    private SysRecordLogService recordLogService;

    /**
     * 登录账户密码错误次数缓存键名
     *
     * @param username 用户名
     * @return 缓存键key
     */
    private String getCacheKey(String username) {
        return CacheConstants.PWD_ERR_CNT_KEY + username;
    }

    public void validate(SysUser user, String password) {
        String username = user.getUserName();

        lockTime = Long.valueOf(user.getLoginLockDuration());

        maxRetryCount = user.getPasswordErrorCount();

        Integer retryCount = redisService.getCacheObject(getCacheKey(username));

        if (retryCount == null) {
            retryCount = 0;
        }

        if (retryCount >= Integer.valueOf(maxRetryCount).intValue()) {

            String errMsg = String.format("密码输入错误%s次，帐户锁定%s分钟", maxRetryCount, lockTime);

            recordLogService.recordLogininfor(username, Constants.LOGIN_FAIL, errMsg);
            throw new ServiceException(errMsg);
        }

        if (!matchesSm3(user, password)) {
            retryCount = retryCount + 1;
            recordLogService.recordLogininfor(username, Constants.LOGIN_FAIL, String.format("密码输入错误%s次", retryCount));
            redisService.setCacheObject(getCacheKey(username), retryCount, lockTime, TimeUnit.MINUTES);
            throw new ServiceException("用户不存在/密码错误");
        } else {
            clearLoginRecordCache(username);
        }
    }


    public boolean matchesSm3(SysUser user, String rawPassword) {

        //用密码sm3加密后再加盐，形成新的密码
        String saltPassword = Hex.toHexString(Sm3crypto.pwdSaltedHashValue(Base64.getDecoder().decode(user.getSalt()), rawPassword));

        return saltPassword.equals(user.getPassword()) ? true : false;

    }


    public void clearLoginRecordCache(String loginName) {
        if (redisService.hasKey(getCacheKey(loginName))) {
            redisService.deleteObject(getCacheKey(loginName));
        }
    }
}
