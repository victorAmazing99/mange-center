package com.victor.common.redis.configure;

import com.victor.common.core.utils.CacheClient;
import org.apache.commons.lang3.StringUtils;
import org.redisson.Redisson;
import org.redisson.api.RedissonClient;
import org.redisson.config.Config;
import org.redisson.config.SingleServerConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.redis.RedisProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RedissonConfig {

    @Autowired
    private RedisProperties prop;
    @Bean
    public RedissonClient redissonClient() {
        String address = "redis://%s:%d";
        Config config = new Config();
        SingleServerConfig singleServerConfig = config.useSingleServer();
        singleServerConfig.setAddress(String.format(address, prop.getHost(), prop.getPort()));
        //singleServerConfig.setPingConnectionInterval(1000);
        if (StringUtils.isNotBlank(prop.getPassword())) {
            singleServerConfig.setPassword(prop.getPassword());
        }
        //config.setCodec(StringCodec.INSTANCE);
        return Redisson.create(config);
    }
    @Bean
    public CacheClient cacheClient() {
        return new CacheClient(redissonClient());
    }
}