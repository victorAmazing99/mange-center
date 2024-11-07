package com.victor.server;

import com.alibaba.druid.spring.boot.autoconfigure.DruidDataSourceAutoConfigure;
import com.victor.common.security.annotation.EnableCustomConfig;
import com.victor.common.swagger.annotation.EnableCustomSwagger2;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

/**
 * 系统模块
 * 
 * @author victor
 */
@EnableCustomConfig
@EnableCustomSwagger2
@ComponentScan(basePackages = {"com.victor"})
@MapperScan(basePackages = {"com.victor.job.mapper","com.victor.common.dao"})
@SpringBootApplication(exclude = {
        DataSourceAutoConfiguration.class,
        DruidDataSourceAutoConfigure.class})
public class ServerApplication
{
    public static void main(String[] args)
    {
        SpringApplication.run(ServerApplication.class, args);
    }
}
