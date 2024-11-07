package com.victor.common.security.filter;

import cn.hutool.core.util.StrUtil;
import cn.hutool.json.JSONUtil;
import com.alibaba.fastjson2.JSONObject;
import com.victor.common.core.constant.CacheConstants;
import com.victor.common.core.exception.CaptchaException;
import com.victor.common.core.utils.EncryptUtils;
import com.victor.common.core.utils.StringUtils;
import com.victor.common.redis.service.RedisService;
import com.victor.common.security.properties.DecryptProperties;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.*;

@Component
@WebFilter(urlPatterns = {"/*"}, filterName = "DataFilter")
@Slf4j
@Order(-100)
public class DecryptFilter implements Filter {
    @Resource
    private DecryptProperties decryptProperties;

    @Resource
    RedisService redisService;

    public static final String[] excludeUrls =
            {"/logout", "sysUserSecurity/getQuestion",
                    "/refresh", "/swagger-resources/**", "/swagger-ui/**",
                    "/druid", "/druid/**", "/v2/api-docs", "/csrf", "/error"
            };

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) request;

        String url = req.getRequestURI();

        if (StringUtils.matches(url, Arrays.asList(excludeUrls))) {
            chain.doFilter(request, response);
            return;
        }

        String body = getReader(req).toString();
        String decryptBody = "";

        try {
            if (StrUtil.isNotBlank(body)) {
                decryptBody = EncryptUtils.decrypt2Data(body, decryptProperties.getPrivateKey());
                //decryptBody = body;
            }

            Map<String, String[]> paramMap = null;
            String query = req.getQueryString();
            String s = "";
            if (StrUtil.isNotEmpty(query)) {
                if (StringUtils.startsWithIgnoreCase(query, "0=")) {
                    query = query.replaceFirst("0=", StringUtils.EMPTY);
                }
                String value = EncryptUtils.decrypt2Data(query, decryptProperties.getPrivateKey());
                paramMap = JSONUtil.parse(value).toBean(Map.class);
            }


            if (StringUtils.matches(url, Arrays.asList(new String[]{"/login"})) && !"OPTIONS".equals(req.getMethod())) {

                Map<String, String> obj = (Map<String, String>) JSONUtil.parse(decryptBody);
                try {
                    checkCaptcha(obj.get("code"), obj.get("uuid"));
                } catch (Exception e) {

                    if (e instanceof CaptchaException) {
                        response.getWriter().write(errorResponse(e.getMessage(), 500));
                        return;
                    } else {
                        response.getWriter().write(errorResponse("验证异常", 500));
                        return;
                    }
                }

            }

            HttpServletRequestWrapper requestWrapper = new DecryptRequestWrapper(req, decryptBody, paramMap);
            chain.doFilter(requestWrapper, response);
        } catch (Exception e) {
            response.getWriter().write(errorResponse("非法参数", 500));
            return;
        }
    }

    public String errorResponse(String message, Integer code) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("code", code);
        map.put("message", message);
        return JSONObject.toJSONString(map);
    }

    private StringBuilder getReader(HttpServletRequest req) {
        StringBuilder body = new StringBuilder("");
        BufferedReader br = null;
        try {
            br = req.getReader();
            String str;
            while ((str = br.readLine()) != null) {
                body.append(str);
            }
            br.close();
        } catch (Exception e) {

        }
        return body;
    }

    public void checkCaptcha(String code, String uuid) throws CaptchaException {
        if (StringUtils.isEmpty(code)) {
            throw new CaptchaException("验证码不能为空");
        }
        if (StringUtils.isEmpty(uuid)) {
            throw new CaptchaException("验证码已失效");
        }
        String verifyKey = CacheConstants.CAPTCHA_CODE_KEY + uuid;
        String captcha = redisService.getCacheObject(verifyKey);
        redisService.deleteObject(verifyKey);

        if (!code.equalsIgnoreCase(captcha)) {

            throw new CaptchaException("验证码错误");
        }
    }
}
