package com.victor.common.core.utils;

import com.google.common.base.Joiner;
import com.google.common.cache.CacheLoader;
import jodd.exception.ExceptionUtil;
import org.redisson.api.GeoUnit;
import org.redisson.api.RGeo;
import org.redisson.api.RedissonClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.Serializable;
import java.text.MessageFormat;
import java.util.UUID;
import java.util.concurrent.Callable;
import java.util.concurrent.TimeUnit;

public class CacheClient {
    private static final Logger log = LoggerFactory.getLogger(CacheClient.class);
    private RedissonClient redissonClient;

    public CacheClient(RedissonClient redissonClient) {
        BizAssertUtil.notNull(redissonClient, "redissonClient null");
        this.redissonClient = redissonClient;
    }

    public void setForever(String nameSpace, String key, Serializable value) {
        BizAssertUtil.notBlank(nameSpace, "缓存nameSpace empty");
        BizAssertUtil.notBlank(key, "缓存key empty");
        try {
            this.redissonClient.getBucket(this.buildCacheKey(nameSpace, key)).set(value);
        } catch (Exception e) {
            String msg = MessageFormat.format("set error {0}", this.buildCacheKey(nameSpace, key));
            log.error(msg, e);
        }
    }

    public RedissonClient getRedissonClient() {
        return this.redissonClient;
    }

    public void set(String nameSpace, String key, Serializable value, int timeToLive) {
        BizAssertUtil.notBlank(nameSpace, "缓存nameSpace empty");
        BizAssertUtil.notBlank(key, "缓存key empty");
        BizAssertUtil.isTrue(timeToLive >= 1, "过期时间必须>=1秒");

        try {
            this.redissonClient.getBucket(this.buildCacheKey(nameSpace, key)).set(value, (long) timeToLive, TimeUnit.SECONDS);
        } catch (Exception e) {
            String msg = MessageFormat.format("set error {0}", this.buildCacheKey(nameSpace, key));
            log.error(msg, e);
        }

    }

    public <T> T get(String nameSpace, String key) {
        BizAssertUtil.notBlank(nameSpace, "缓存nameSpace empty");
        BizAssertUtil.notBlank(key, "缓存key empty");

        try {
            return (T) this.redissonClient.getBucket(this.buildCacheKey(nameSpace, key)).get();
        } catch (Exception e) {
            String msg = MessageFormat.format("get error {0}", this.buildCacheKey(nameSpace, key));
            log.error(msg, e);
            return null;
        }
    }

    public void remove(String nameSpace, String key) {
        BizAssertUtil.notBlank(nameSpace, "缓存nameSpace empty");
        BizAssertUtil.notBlank(key, "缓存key empty");

        try {
            this.redissonClient.getBucket(this.buildCacheKey(nameSpace, key)).delete();
        } catch (Exception e) {
            String msg = MessageFormat.format("remove error {0}", this.buildCacheKey(nameSpace, key));
            log.error(msg, e);
        }

    }

    /**
     * @param nameSpace
     * @param key
     * @param callable
     * @param timeToLive 单位秒
     * @param <T>
     * @return
     */
    public <T extends Serializable> T get(String nameSpace, String key, Callable<T> callable, int timeToLive) {
        BizAssertUtil.notBlank(nameSpace, "缓存nameSpace empty");
        BizAssertUtil.notBlank(key, "缓存key empty");

        BizAssertUtil.notNull(callable, "callable null");
        BizAssertUtil.isTrue(timeToLive >= 1, "过期时间必须>=1秒");
        Serializable result =  this.innerGet(nameSpace, key, callable, timeToLive);
        return (T) result;
    }

    private String buildCacheKey(String nameSpace, String key) {
        return Joiner.on(":").join(nameSpace, key);
    }

    private <T extends Serializable> T innerGet(String nameSpace, String key, Callable<T> callable, int timeToLive) {
        Serializable value = (Serializable) this.get(nameSpace, key);
        if (value == null) {
            value = this.fetchSource(nameSpace, key, callable);
            this.set(nameSpace, key, value, timeToLive);
        }
        return (T) value;
    }

    private <T extends Serializable> T fetchSource(String nameSpace, String key, Callable<T> callable) {
        try {
            return callable.call();
        } catch (Throwable e) {
            Throwable rootCause = ExceptionUtil.getRootCause(e);
            if (CacheLoader.InvalidCacheLoadException.class.isInstance(rootCause)) {
                return null;
            } else {
                throw new RuntimeException("FETCH_SOURCE_ERROR:" + this.buildCacheKey(nameSpace, key), rootCause);
            }
        }
    }

    /**
     * 获取距离
     * @param longitude1
     * @param latitude1
     * @param longitude2
     * @param latitude2
     * @return
     */
    public Double geoDistance(Double longitude1, Double latitude1, Double longitude2, Double latitude2) {
        RGeo<String> geo = this.redissonClient.getGeo("DISTANCE");
        String key = UUID.randomUUID().toString();
        String key1 = key + ":1";
        String key2 = key + ":2";
        try {
            geo.add(longitude1, latitude1, key1);
            geo.add(longitude2, latitude2, key2);
            return geo.dist(key1, key2, GeoUnit.KILOMETERS);
        } finally {
            geo.remove(key1);
            geo.remove(key2);
        }
    }
}
