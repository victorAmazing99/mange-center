package com.victor.auth.controller;

import cn.hutool.core.date.DatePattern;
import cn.hutool.core.date.DateUtil;
import cn.hutool.core.util.ObjectUtil;
import com.alibaba.fastjson2.JSONObject;
import com.victor.auth.form.LoginBody;
import com.victor.auth.service.SysLoginService;
import com.victor.auth.service.SysRecordLogService;
import com.victor.common.core.constant.CacheConstants;
import com.victor.common.core.constant.Constants;
import com.victor.common.core.domain.R;
import com.victor.common.core.enums.ErrorMsgEnum;
import com.victor.common.core.utils.JwtUtils;
import com.victor.common.core.utils.StringUtils;
import com.victor.common.entity.system.SysUser;
import com.victor.common.redis.service.RedisService;
import com.victor.common.response.system.LoginUser;
import com.victor.common.security.auth.AuthUtil;
import com.victor.common.security.service.TokenService;
import com.victor.common.security.utils.SecurityUtils;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

/**
 * token 控制
 *
 * @author victor
 */
@RestController
@Api(tags = "登录模块")
public class TokenController {
    @Autowired
    private TokenService tokenService;

    @Autowired
    private SysLoginService sysLoginService;

    @Autowired
    private SysRecordLogService recordLogService;

    @Autowired
    private RedisService redisService;

    @PostMapping("login")
    @ApiOperation("登录")
    public R<?> login(@RequestBody LoginBody form) {
        // 用户登录
        SysUser userInfo = sysLoginService.login(form.getUsername(), form.getPassword());
        // 是否首次登录
        if (ObjectUtil.isEmpty(userInfo.getPasUpdateDate()) || DateUtil.format(userInfo.getPasUpdateDate(), DatePattern.NORM_DATE_PATTERN).contains("1900-01-01")) {
            return R.ok(tokenService.createToken(userInfo), ErrorMsgEnum.PASSWORD_INIT.code, ErrorMsgEnum.PASSWORD_INIT.desc);
        }

        if (DateUtil.betweenDay(new Date(), userInfo.getPasUpdateDate(), true) > userInfo.getPasswordExpiredDays()) {

            recordLogService.recordLogininfor(userInfo.getUserName(), Constants.LOGIN_FAIL, "密码过期");
            return R.ok(tokenService.createToken(userInfo), ErrorMsgEnum.PASSWORD_OVERDUE.code, ErrorMsgEnum.PASSWORD_OVERDUE.desc);
        }
        // 获取登录token
        return R.ok(tokenService.createToken(userInfo));
    }

    @DeleteMapping("logout")
    @ApiOperation("登出")
    public R<?> logout(HttpServletRequest request) {
        String token = SecurityUtils.getToken(request);
        if (StringUtils.isNotEmpty(token)) {
            String username = JwtUtils.getUserName(token);
            // 删除用户缓存记录
            AuthUtil.logoutByToken(token);
            // 记录用户退出日志
            sysLoginService.logout(username);
        }
        return R.ok();
    }

    @PostMapping("refresh")
    @ApiOperation("刷新")
    public R<?> refresh(HttpServletRequest request) {
        LoginUser loginUser = tokenService.getLoginUser(request);
        if (StringUtils.isNotNull(loginUser)) {
            // 刷新令牌有效期
            tokenService.refreshToken(loginUser);
            return R.ok();
        }
        return R.ok();
    }


    @PostMapping("logined")
    @ApiOperation("确认用户是否已经登录")
    public R<?> logined(String userName) {

        boolean isNormalLogin = checkLoginStatus(CacheConstants.USER_LOGIN_STATUS_INFO + userName);
        return R.ok(isNormalLogin);

    }

    private boolean checkLoginStatus (String key) {
        List<JSONObject> statusList = redisService.getCacheList(key);
        return statusList.stream().anyMatch(loginStatus ->  loginStatus.get("status").equals(Constants.LOGIN_SUCCESS_STATUS));
    }


//    @PostMapping("register")
//    public R<?> register(@RequestBody RegisterBody registerBody) {
//        // 用户注册
//        sysLoginService.register(registerBody.getUsername(), registerBody.getPassword());
//        return R.ok();
//    }
}
