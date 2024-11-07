package com.victor.common.core.utils;

import cn.hutool.core.date.DatePattern;
import cn.hutool.core.date.DateUtil;

import com.google.common.base.Joiner;
import com.google.common.base.Stopwatch;
import com.victor.common.core.exception.AssertException;
import com.victor.common.core.exception.BizAssertException;
import com.victor.common.core.exception.GlobalException;
import org.redisson.api.RLock;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.Date;
import java.util.Map;
import java.util.concurrent.Callable;
import java.util.concurrent.TimeUnit;

@Component
public class LockClient {
    private static final Logger log = LoggerFactory.getLogger(LockClient.class);
    private CacheClient lockCacheClient;

    public LockClient(CacheClient lockCacheClient) {
        this.lockCacheClient = lockCacheClient;
    }

    private <T extends Serializable> T get(String nameSpace, String key, Callable<T> callable, int leaseTime) {
        return this.get(nameSpace, key, callable, leaseTime, true);
    }

    private <T extends Serializable> T get(String nameSpace, String key, Callable<T> callable, int leaseTime, boolean forceReload) {
        return this.get(nameSpace, key, callable, 1, leaseTime, forceReload);
    }

    private <T extends Serializable> T get(String nameSpace, String key, Callable<T> callable, int waitTime, int leaseTime, boolean forceReload) {
        AssertUtil.notBlank(nameSpace, () -> {
            return "nameSpace empty";
        });
        AssertUtil.notBlank(key, () -> {
            return "key empty";
        });
        AssertUtil.notNull(callable, () -> {
            return "callable null";
        });
        AssertUtil.isTrue(leaseTime >= 1, () -> {
            return "leaseTime must >=1";
        });
        Stopwatch stopwatch = Stopwatch.createStarted();
        String lockKey = Joiner.on(":").join(nameSpace, key, new Object[]{"theLockKey"});

        try {
            if (!forceReload) {
                T value = (T) this.lockCacheClient.get(nameSpace, key);
                if (value != null) {
                    return value;
                }
            }

            RLock lock = this.lockCacheClient.getRedissonClient().getLock(lockKey);
            log.info("开始获取分布式锁 {}", lockKey);
            if (lock.tryLock((long) waitTime, (long) leaseTime, TimeUnit.SECONDS)) {
                log.info("获取分布式锁成功 {}", new Object[]{lockKey});
                T value = (T) callable.call();
                this.lockCacheClient.set(nameSpace, key, value, 36000);
                this.lockCacheClient.getRedissonClient().getMap("leader").put(lockKey, DateUtil.format(new Date(), DatePattern.NORM_DATETIME_PATTERN));
                return value;
            } else {
                log.info("获取分布式锁失败 {}", new Object[]{lockKey});
                T value = this.lockCacheClient.get(nameSpace, key, callable, 36000);
                return value;
            }
        } catch (Exception var15) {
            String errorMsg = "LockClient.get error nameSpace " + nameSpace + " key " + key;
            log.error(errorMsg, var15);
            throw new RuntimeException("SYSTEM_ERROR", var15);
        } finally {
            stopwatch.stop();
            log.info("{} 耗时 {}", lockKey, stopwatch.elapsed(TimeUnit.MILLISECONDS));
        }
    }

    public <R> R tryLock(String nameSpace, String key, Callable<R> callable, int leaseTime) {
        return tryLock(nameSpace, key, callable, leaseTime, 0);
    }

    public <R> R tryLock(String nameSpace, String key, Callable<R> callable, int leaseTime, int waitTime) {
        try {
            AssertUtil.notBlank(nameSpace, () -> {
                return "nameSpace empty";
            });
            AssertUtil.notBlank(key, () -> {
                return "key empty";
            });
            AssertUtil.notNull(callable, () -> {
                return "callable null";
            });
            AssertUtil.isTrue(leaseTime >= -1, () -> {
                return "leaseTime>=-1";
            });
            String lockKey = Joiner.on(":").join(nameSpace, key, new Object[]{"tryLockKey"});
            RLock lock = this.lockCacheClient.getRedissonClient().getLock(lockKey);
            if (lock.tryLock((long) waitTime, (long) leaseTime, TimeUnit.SECONDS)) {
                try {
                    log.info("获取分布式锁成功 lockKey={}", new Object[]{lockKey});
                    return callable.call();
                } finally {
                    try {
                        if (lock.isHeldByCurrentThread()) {
                            lock.unlock();
                            log.info("释放分布式锁 lockKey={}", new Object[]{lockKey});
                        } else {
                            log.error("释放分布式锁 当前线程不持有锁 lockKey={}", new Object[]{lockKey});
                        }
                    } catch (Exception var16) {
                        log.error("释放分布式锁失败 lockKey={} {}", new Object[]{lockKey, var16});
                    }
                }
            } else {
                log.warn("获取分布式锁失败 lockKey={}", new Object[]{lockKey});
                throw new GlobalException("系统繁忙请稍后重试");
            }
        } catch (AssertException | BizAssertException e) {
            throw e;
        } catch (Throwable var18) {
            throw new RuntimeException(var18);
        }
    }

    public Map<String, String> getAllLeader() {
        return this.lockCacheClient.getRedissonClient().getMap("leader");
    }

    public void clearAllLeader() {
        this.lockCacheClient.getRedissonClient().getMap("leader").clear();
    }

    public CacheClient getLockCacheClient() {
        return this.lockCacheClient;
    }
}