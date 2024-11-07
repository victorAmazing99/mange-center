package com.victor.common.security.config;

import com.victor.common.security.interceptor.HeaderInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.annotation.Resource;

/**
 * 拦截器配置
 *
 */
@Configuration
public class WebMvcConfig  implements WebMvcConfigurer {
    @Resource
    HeaderInterceptor headerInterceptor;
    /** 不需要拦截地址 */
    public static final String[] excludeUrls = { "/code","/login", "/logout",
            "/sysUserSecurity/**","/sysUser/updateForgetPassword",
            "/refresh","/swagger-resources/**","/swagger-ui/**",
            "/druid","/druid/**","/v2/api-docs","/csrf","/error"
    };

    @Override
    public void addInterceptors(InterceptorRegistry registry)
    {
        registry.addInterceptor(getHeaderInterceptor())
                .addPathPatterns()
                .addPathPatterns("/**")
                .excludePathPatterns(excludeUrls)
                .order(-10);
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // 允许所有路径
                .allowedOrigins("*") // 允许所有来源
                .allowedMethods("*") // 允许的方法
                .allowedHeaders("*"); // 允许所有头部
    }

    /**
     * 自定义请求头拦截器
     */
    public HeaderInterceptor getHeaderInterceptor()
    {
        return headerInterceptor;
    }
}
