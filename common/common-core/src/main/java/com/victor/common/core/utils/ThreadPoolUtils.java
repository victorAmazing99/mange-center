package com.victor.common.core.utils;

import cn.hutool.core.thread.ThreadFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.*;
import java.util.concurrent.ThreadPoolExecutor.CallerRunsPolicy;

@Configuration
public class ThreadPoolUtils {


    public int corePoolSize = 5;
    public int maxPoolSize = 20;
    public int keepAliveSeconds = 5;
    public int queueCapacity = 40;

    @Bean(name = "executorService")
    public ExecutorService getThreadPool() {
        ThreadFactory namedThreadFactory = new ThreadFactoryBuilder().setNamePrefix("chc-thread-pool-%d").build();
        ThreadPoolExecutor pool = new ThreadPoolExecutor(corePoolSize, maxPoolSize, keepAliveSeconds,
                TimeUnit.SECONDS, new LinkedBlockingQueue<>(queueCapacity), namedThreadFactory,
                new CallerRunsPolicy());
        return pool;
    }
}
