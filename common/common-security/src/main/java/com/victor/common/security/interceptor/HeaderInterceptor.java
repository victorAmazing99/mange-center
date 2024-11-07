package com.victor.common.security.interceptor;

import cn.hutool.core.util.StrUtil;
import com.alibaba.fastjson2.JSONObject;
import com.victor.common.core.constant.*;
import com.victor.common.core.context.SecurityContextHolder;
import com.victor.common.core.utils.JwtUtils;
import com.victor.common.core.utils.StringUtils;
import com.victor.common.redis.service.RedisService;
import com.victor.common.response.system.LoginUser;
import com.victor.common.security.auth.AuthUtil;

import com.victor.common.security.utils.SecurityUtils;
import groovy.util.logging.Slf4j;
import io.jsonwebtoken.Claims;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.AsyncHandlerInterceptor;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 自定义请求头拦截器，将Header数据封装到线程变量中方便获取
 * 注意：此拦截器会同时验证当前用户有效期自动刷新有效期
 *
 **/
@Slf4j
@Component
public class HeaderInterceptor implements AsyncHandlerInterceptor {
    @Resource
    RedisService redisService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws IOException {


        // 如果是OPTIONS请求，直接返回允许跨域
        if ("OPTIONS".equals(request.getMethod())) {
            response.setHeader("Access-Control-Allow-Origin", "*");
            response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            response.setHeader("Access-Control-Allow-Headers", "*");
            return false;
        }

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        String token = SecurityUtils.getToken();
        if (StringUtils.isEmpty(token))
        {
            response.getWriter().write(errorResponse("令牌不能为空",HttpStatus.UNAUTHORIZED));
            return false;
        }
        Claims claims = JwtUtils.parseToken(token);
        if (claims == null)
        {
            response.getWriter().write(errorResponse("令牌已过期或验证不正确",HttpStatus.UNAUTHORIZED));
            return false;
        }
        String userkey = JwtUtils.getUserKey(claims);
        String username = JwtUtils.getUserName(claims);
        boolean isNormalLogin = checkLoginStatus(CacheConstants.USER_LOGIN_STATUS_INFO + username, userkey);
        if (isNormalLogin) {
            response.getWriter().write(errorResponse("账号从其他地方登录,请重新登录",HttpStatus.REMOTE_LOGIN));
            return false;
        }

        boolean islogin = redisService.hasKey(getTokenKey(userkey));
        if (!islogin)
        {
            response.getWriter().write(errorResponse("登录状态已过期",HttpStatus.FORBIDDEN));
            return false;
        }

        String userid = JwtUtils.getUserId(claims);

        if (StringUtils.isEmpty(userid) || StringUtils.isEmpty(username))
        {
            response.getWriter().write(errorResponse("令牌验证失败",HttpStatus.UNAUTHORIZED));
            return false;
        }




            if (!(handler instanceof HandlerMethod)) {
                return true;
            }


            if (SecurityContextHolder.getUserId() == 0 && StrUtil.isNotBlank(token)) {
                SecurityContextHolder.setUserId(JwtUtils.getUserId(token));
                SecurityContextHolder.setUserName(JwtUtils.getUserName(token));
                SecurityContextHolder.setUserKey(JwtUtils.getUserKey(token));
                SecurityContextHolder.setHospitalId(JwtUtils.getUserHospitalId(token));
                SecurityContextHolder.setAffiliatedId(JwtUtils.getUserAffiliatedId(token));
                SecurityContextHolder.setHospitalName(JwtUtils.getUserHospitalName(token));
                SecurityContextHolder.setAffiliatedName(JwtUtils.getUserAffiliatedName(token));
                SecurityContextHolder.setCategoryCode(JwtUtils.getUserCategoryCode(token));
                SecurityContextHolder.setThirdNo(JwtUtils.getUserThirdNo(token));
            }

            if (StringUtils.isNotEmpty(token)) {
                LoginUser loginUser = AuthUtil.getLoginUser(token);
                if (StringUtils.isNotNull(loginUser)) {
                    AuthUtil.verifyLoginUserExpire(loginUser);
                    SecurityContextHolder.set(SecurityConstants.LOGIN_USER, loginUser);
                }
            }
            return true;

    }

    public String errorResponse(String message,Integer code){
        Map<String,Object> map = new HashMap<String,Object>();
        map.put("code",code);
        map.put("message",message);
        return JSONObject.toJSONString(map);
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
            throws Exception
    {
        SecurityContextHolder.remove();
    }


    /**
     * 获取缓存key
     */
    private String getTokenKey(String token)
    {
        return CacheConstants.LOGIN_TOKEN_KEY + token;
    }

    private boolean checkLoginStatus (String key, String userkey) {
        List<JSONObject> statusList = redisService.getCacheList(key);
        return statusList.stream().anyMatch(loginStatus -> userkey.equals(String.valueOf(loginStatus.get("userkey")))
                && loginStatus.get("status").equals(Constants.LOGIN_FAIL_STATUS));

    }

    /**
     * 获取请求token
     */
    private String getToken(HttpServletRequest request)
    {
        String token = request.getHeader(TokenConstants.AUTHENTICATION);
        // 如果前端设置了令牌前缀，则裁剪掉前缀
        if (StringUtils.isNotEmpty(token) && token.startsWith(TokenConstants.PREFIX))
        {
            token = token.replaceFirst(TokenConstants.PREFIX, StringUtils.EMPTY);
        }
        return token;
    }
}
