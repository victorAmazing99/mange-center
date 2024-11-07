package com.victor.common.security.service;

import cn.hutool.json.JSONUtil;
import com.alibaba.fastjson2.JSONObject;
import com.victor.common.core.constant.CacheConstants;
import com.victor.common.core.constant.Constants;
import com.victor.common.core.constant.SecurityConstants;
import com.victor.common.core.utils.JwtUtils;
import com.victor.common.core.utils.ServletUtils;
import com.victor.common.core.utils.StringUtils;
import com.victor.common.core.utils.uuid.IdUtils;
import com.victor.common.entity.system.SysUser;
import com.victor.common.redis.service.RedisService;
import com.victor.common.response.system.LoginUser;
import com.victor.common.security.utils.SecurityUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

/**
 * token验证处理
 *
 * @author victor
 */
@Component
@Slf4j
public class TokenService {
    @Autowired
    private RedisService redisService;

    protected static final long MILLIS_SECOND = 1000;

    protected static final long MILLIS_MINUTE = 60 * MILLIS_SECOND;

    private  static long expireTime = CacheConstants.EXPIRATION;

    private final static String ACCESS_TOKEN = CacheConstants.LOGIN_TOKEN_KEY;

    private final static Long MILLIS_MINUTE_TEN = CacheConstants.REFRESH_TIME * MILLIS_MINUTE;

    /**
     * 创建令牌
     */
    public Map<String, Object> createToken(SysUser user) {
        String token = IdUtils.fastUUID();
        LoginUser loginUser = new LoginUser();
        BeanUtils.copyProperties(user,loginUser);
        loginUser.setToken(token);
        refreshToken(loginUser);
        changeLoginStatus(loginUser);

        expireTime = Long.valueOf(user.getLoginExpiredDuration());

        // Jwt存储信息
        Map<String, Object> claimsMap = new HashMap<String, Object>();
        claimsMap.put(SecurityConstants.USER_KEY, token);
        claimsMap.put(SecurityConstants.DETAILS_USER_ID, user.getId());
        claimsMap.put(SecurityConstants.DETAILS_USERNAME, user.getName());
        claimsMap.put(SecurityConstants.HOSPITAL_ID, user.getOrgCode());
        claimsMap.put(SecurityConstants.AFFILIATED_ID, user.getOrgSubCode());
        claimsMap.put(SecurityConstants.HOSPITAL_NAME, user.getOrgName());
        claimsMap.put(SecurityConstants.AFFILIATED_NAME, user.getOrgSubName());
        claimsMap.put(SecurityConstants.CATEGORY_CODE, user.getCategoryCode());
        claimsMap.put(SecurityConstants.THIRD_NO, user.getThirdNo());
        // 接口返回信息
        Map<String, Object> rspMap = new HashMap<String, Object>();
        rspMap.put("access_token", JwtUtils.createToken(claimsMap));
        rspMap.put("expires_in", expireTime);
        return rspMap;
    }

    /**
     * 获取用户身份信息
     *
     * @return 用户信息
     */
    public LoginUser getLoginUser() {
        return getLoginUser(ServletUtils.getRequest());
    }

    /**
     * 获取用户身份信息
     *
     * @return 用户信息
     */
    public LoginUser getLoginUser(HttpServletRequest request) {
        // 获取请求携带的令牌
        String token = SecurityUtils.getToken(request);
        return getLoginUser(token);
    }

    /**
     * 获取用户身份信息
     *
     * @return 用户信息
     */
    public LoginUser getLoginUser(String token) {

        try {
            if (StringUtils.isNotEmpty(token)) {
                String userKey = JwtUtils.getUserKey(token);
                Object  userInfo = redisService.getCacheObject(getTokenKey(userKey));
                LoginUser user =null;
                if(userInfo instanceof JSONObject){
                     user = JSONUtil.toBean(userInfo.toString(),LoginUser.class);
                }else{
                     user = (LoginUser) userInfo;
                }
                return user;
            }
        } catch (Exception e) {
             log.error("",e);
        }
        return null;
    }

    /**
     * 设置用户身份信息
     */
    public void setLoginUser(LoginUser loginUser) {
        if (StringUtils.isNotNull(loginUser) && StringUtils.isNotEmpty(loginUser.getToken())) {
            refreshToken(loginUser);
        }
    }

    /**
     * 删除用户缓存信息
     */
    public void delLoginUser(String token) {
        if (StringUtils.isNotEmpty(token)) {
            String userkey = JwtUtils.getUserKey(token);
            redisService.deleteObject(getTokenKey(userkey));
        }
    }

    /**
     * 验证令牌有效期，相差不足120分钟，自动刷新缓存
     *
     * @param loginUser
     */
    public void verifyToken(LoginUser loginUser) {
        long expireTime = loginUser.getExpireTime();
        long currentTime = System.currentTimeMillis();
        if (expireTime - currentTime <= MILLIS_MINUTE_TEN) {
            refreshToken(loginUser);
        }
    }

    /**
     * 刷新令牌有效期
     *
     * @param loginUser 登录信息
     */
    public void refreshToken(LoginUser loginUser) {
        loginUser.setLoginTime(System.currentTimeMillis());
        loginUser.setExpireTime(loginUser.getLoginTime() + expireTime * MILLIS_MINUTE);

        // 根据uuid将loginUser缓存
        String userKey = getTokenKey(loginUser.getToken());
        redisService.setCacheObject(userKey, loginUser, expireTime, TimeUnit.MINUTES);
        redisService.expire(CacheConstants.USER_LOGIN_STATUS_INFO + loginUser.getUserName(), expireTime, TimeUnit.MINUTES);
    }

    private String getTokenKey(String token) {
        return ACCESS_TOKEN + token;
    }

    public void changeLoginStatus(LoginUser loginUser) {
        // 将其他人的登录状态置为异常
        List<JSONObject> objects = redisService.getCacheList(CacheConstants.USER_LOGIN_STATUS_INFO + loginUser.getUserName());
        objects.forEach(o->o.put("status", Constants.LOGIN_FAIL_STATUS));
        JSONObject current = new JSONObject();
        current.put("status",Constants.LOGIN_SUCCESS_STATUS);
        current.put("userkey", loginUser.getToken());
        objects.add(current);
        redisService.deleteObject(CacheConstants.USER_LOGIN_STATUS_INFO + loginUser.getUserName());
        redisService.setCacheList(CacheConstants.USER_LOGIN_STATUS_INFO + loginUser.getUserName(), objects);
        redisService.expire(CacheConstants.USER_LOGIN_STATUS_INFO + loginUser.getUserName(), expireTime, TimeUnit.MINUTES);
    }
}