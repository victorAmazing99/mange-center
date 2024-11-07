package com.victor.common.core.context;

import com.alibaba.ttl.TransmittableThreadLocal;
import com.victor.common.core.text.Convert;
import com.victor.common.core.utils.StringUtils;
import com.victor.common.core.constant.SecurityConstants;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author victor
 * @ClassName SecurityContextHolder.java
 * @company
 * @Description
 * 获取当前线程变量中的 用户id、用户名称、Token等信息
 * 注意： 必须在网关通过请求头的方法传入，同时在HeaderInterceptor拦截器设置值。 否则这里无法获取
 * @createTime 2022年11月09日 11:27:00
 */
public class SecurityContextHolder {
    private static final TransmittableThreadLocal<Map<String, Object>> THREAD_LOCAL = new TransmittableThreadLocal<>();

    public static void set(String key, Object value)
    {
        Map<String, Object> map = getLocalMap();
        map.put(key, value == null ? StringUtils.EMPTY : value);
    }

    public static String get(String key)
    {
        Map<String, Object> map = getLocalMap();
        return Convert.toStr(map.getOrDefault(key, StringUtils.EMPTY));
    }

    public static <T> T get(String key, Class<T> clazz)
    {
        Map<String, Object> map = getLocalMap();
        return StringUtils.cast(map.getOrDefault(key, null));
    }

    public static Map<String, Object> getLocalMap()
    {
        Map<String, Object> map = THREAD_LOCAL.get();
        if (map == null)
        {
            map = new ConcurrentHashMap<String, Object>();
            THREAD_LOCAL.set(map);
        }
        return map;
    }

    public static void setLocalMap(Map<String, Object> threadLocalMap)
    {
        THREAD_LOCAL.set(threadLocalMap);
    }

    public static Long getUserId()
    {
        return Convert.toLong(get(SecurityConstants.DETAILS_USER_ID), 0L);
    }

    public static void setUserId(String account)
    {
        set(SecurityConstants.DETAILS_USER_ID, account);
    }

    public static String getUserName()
    {
        return get(SecurityConstants.DETAILS_USERNAME);
    }

    public static void setUserName(String username)
    {
        set(SecurityConstants.DETAILS_USERNAME, username);
    }

    public static String getUserKey()
    {
        return get(SecurityConstants.USER_KEY);
    }

    public static void setUserKey(String userKey)
    {
        set(SecurityConstants.USER_KEY, userKey);
    }

    public static String getPermission()
    {
        return get(SecurityConstants.ROLE_PERMISSION);
    }

    public static void setPermission(String permissions)
    {
        set(SecurityConstants.ROLE_PERMISSION, permissions);
    }

    public static String getHospitalId()
    {
        return get(SecurityConstants.HOSPITAL_ID);
    }


    public static void setHospitalId(String hospitalId)
    {
        set(SecurityConstants.HOSPITAL_ID, hospitalId);
    }

    public static String getHospitalName()
    {
        return get(SecurityConstants.HOSPITAL_NAME);
    }


    public static void setHospitalName(String hospitalName)
    {
        set(SecurityConstants.HOSPITAL_NAME, hospitalName);
    }

    public static String getAffiliatedId()
    {
        return get(SecurityConstants.AFFILIATED_ID);
    }

    public static void setAffiliatedId(String affiliatedId)
    {
        set(SecurityConstants.AFFILIATED_ID, affiliatedId);
    }

    public static String getAffiliatedName()
    {
        return get(SecurityConstants.AFFILIATED_NAME);
    }

    public static void setAffiliatedName(String affiliatedName)
    {
        set(SecurityConstants.AFFILIATED_NAME, affiliatedName);
    }

    public static String getCategoryCode()
    {
        return get(SecurityConstants.CATEGORY_CODE);
    }

    public static void setCategoryCode(String categoryCode)
    {
        set(SecurityConstants.CATEGORY_CODE, categoryCode);
    }

    public static String getCompanyInfo()
    {
        return get(SecurityConstants.COMPANY_INFO);
    }

    public static void setCompanyInfo(String companyInfo)
    {
        set(SecurityConstants.COMPANY_INFO, companyInfo);
    }

    public static String getThirdNo()
    {
        return get(SecurityConstants.THIRD_NO);
    }

    public static void setThirdNo(String thirdNo)
    {
        set(SecurityConstants.THIRD_NO, thirdNo);
    }

    public static void remove()
    {
        THREAD_LOCAL.remove();
    }
}
