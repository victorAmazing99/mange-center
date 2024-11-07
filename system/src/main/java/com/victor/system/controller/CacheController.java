package com.victor.system.controller;

import cn.hutool.core.util.StrUtil;

import com.victor.common.core.constant.CacheConstants;
import com.victor.common.core.domain.R;
import com.victor.common.core.utils.StringUtils;
import com.victor.common.entity.system.SysCache;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisCallback;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/monitor/cache")
@Api(tags = "缓存监控")
public class CacheController {

    @Autowired
    private RedisTemplate<String, String> redisTemplate;

    private final static List<SysCache> caches = new ArrayList<SysCache>();

    {
        caches.add(new SysCache(CacheConstants.LOGIN_TOKEN_KEY, "用户信息"));
        caches.add(new SysCache(CacheConstants.SYS_CONFIG_KEY, "配置信息"));
        caches.add(new SysCache(CacheConstants.SYS_DICT_KEY, "数据字典"));
        caches.add(new SysCache(CacheConstants.CAPTCHA_CODE_KEY, "验证码"));
        caches.add(new SysCache(CacheConstants.USER_LOGIN_STATUS_INFO, "账户多次登录状态记录"));
//        caches.add(new SysCache(CacheConstants.REPEAT_SUBMIT_KEY, "防重提交"));
//        caches.add(new SysCache(CacheConstants.RATE_LIMIT_KEY, "限流处理"));
        caches.add(new SysCache(CacheConstants.PWD_ERR_CNT_KEY, "密码错误次数"));
    }

    @GetMapping("/")
    @ApiOperation(value = "获取redis信息")
    public R getInfo() throws Exception {
        Properties info = (Properties) redisTemplate.execute((RedisCallback<Object>) connection -> connection.info());
        Properties commandStats = (Properties) redisTemplate.execute((RedisCallback<Object>) connection -> connection.info("commandstats"));
        Object dbSize = redisTemplate.execute((RedisCallback<Object>) connection -> connection.dbSize());

        Map<String, Object> result = new HashMap<>(3);
        result.put("info", info);
        result.put("dbSize", dbSize);

        List<Map<String, String>> pieList = new ArrayList<>();
        commandStats.stringPropertyNames().forEach(key -> {
            Map<String, String> data = new HashMap<>(2);
            String property = commandStats.getProperty(key);
            data.put("name", StringUtils.removeStart(key, "cmdstat_"));
            data.put("value", StringUtils.substringBetween(property, "calls=", ",usec"));
            pieList.add(data);
        });
        result.put("commandStats", pieList);
        return R.ok(result);
    }


    @GetMapping("/getNames")
    @ApiOperation(value = "获取项目的所有命名空间")
    public R cache() {
        return R.ok(caches);
    }

    @GetMapping("/getKeys/{cacheName}")
    @ApiOperation(value = "获取项目命名空间下的所有缓存信息")
    public R getCacheKeys(@PathVariable String cacheName) {
        Set<String> cacheKeys = redisTemplate.keys(cacheName + "*");
        return R.ok(cacheKeys);
    }

    @GetMapping("/getValue/{cacheName}/{cacheKey}")
    @ApiOperation(value = "获取项目命名空间下的单个缓存信息")
    public R getCacheValue(@PathVariable String cacheName, @PathVariable String cacheKey) {
        String cacheValue = null;
        if (cacheName != null && CacheConstants.USER_LOGIN_STATUS_INFO.contains(cacheName)) {
            cacheValue = String.join(",", redisTemplate.opsForList().range(cacheKey, 0, -1));
        }

        if (StrUtil.isBlank(cacheValue)) {
            cacheValue = redisTemplate.opsForValue().get(cacheKey);
        }
        SysCache sysCache = new SysCache(cacheName, cacheKey, cacheValue);
        return R.ok(sysCache);
    }

    @DeleteMapping("/clearCacheName/{cacheName}")
    public R clearCacheName(@PathVariable String cacheName) {
        Collection<String> cacheKeys = redisTemplate.keys(cacheName + "*");
        redisTemplate.delete(cacheKeys);
        return R.ok();
    }

    @DeleteMapping("/clearCacheKey/{cacheKey}")
    @ApiOperation(value = "清除指定的缓存")
    public R clearCacheKey(@PathVariable String cacheKey) {
        redisTemplate.delete(cacheKey);
        return R.ok();
    }

    @DeleteMapping("/clearCacheAll")
    @ApiOperation(value = "清除redis中所有的缓存")
    public R clearCacheAll() {
        Collection<String> cacheKeys = redisTemplate.keys("*");
        redisTemplate.delete(cacheKeys);
        return R.ok();
    }

}
