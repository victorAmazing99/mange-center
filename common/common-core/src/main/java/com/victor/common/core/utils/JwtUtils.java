package com.victor.common.core.utils;

import com.victor.common.core.text.Convert;
import com.victor.common.core.constant.SecurityConstants;
import com.victor.common.core.constant.TokenConstants;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Map;

/**
 * @author victor
 * @ClassName JwtUtils.java
 * @company
 * @Description Jwt工具类
 * @createTime 2022年11月09日 11:14:00
 */
public class JwtUtils {
    public static String secret = TokenConstants.SECRET;

    /**
     * 从数据声明生成令牌
     *
     * @param claims 数据声明
     * @return 令牌
     */
    public static String createToken(Map<String, Object> claims)
    {
        String token = Jwts.builder().setClaims(claims).signWith(SignatureAlgorithm.HS512, secret).compact();
        return token;
    }

    /**
     * 从令牌中获取数据声明
     *
     * @param token 令牌
     * @return 数据声明
     */
    public static Claims parseToken(String token)
    {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
    }

    /**
     * 根据令牌获取用户标识
     *
     * @param token 令牌
     * @return 用户ID
     */
    public static String getUserKey(String token)
    {
        Claims claims = parseToken(token);
        return getValue(claims, SecurityConstants.USER_KEY);
    }

    /**
     * 根据令牌获取用户标识
     *
     * @param claims 身份信息
     * @return 用户ID
     */
    public static String getUserKey(Claims claims)
    {
        return getValue(claims, SecurityConstants.USER_KEY);
    }

    /**
     * 根据令牌获取用户ID
     *
     * @param token 令牌
     * @return 用户ID
     */
    public static String getUserId(String token)
    {
        Claims claims = parseToken(token);
        return getValue(claims, SecurityConstants.DETAILS_USER_ID);
    }

    /**
     * 获取用户机构
     * @param token
     * @return
     */
    public static String getUserHospitalId(String token)
    {
        Claims claims = parseToken(token);
        return getValue(claims, SecurityConstants.HOSPITAL_ID);
    }

    /**
     * 根据身份信息获取机构
     *
     * @param claims 身份信息
     * @return 用户名
     */
    public static String getUserHospitalId(Claims claims)
    {
        return getValue(claims, SecurityConstants.HOSPITAL_ID);
    }

    /**
     * 根据身份信息获取机构名称
     *
     * @param token
     * @return 用户名
     */
    public static String getUserHospitalName(String token)
    {
        Claims claims = parseToken(token);
        return getValue(claims, SecurityConstants.HOSPITAL_NAME);
    }

    /**
     * 根据身份信息获取机构名称
     *
     * @param claims 身份信息
     * @return 用户名
     */
    public static String getUserHospitalName(Claims claims)
    {
        return getValue(claims, SecurityConstants.HOSPITAL_NAME);
    }

    /**
     * 获取用户子机构
     * @param token
     * @return
     */
    public static String getUserAffiliatedId(String token)
    {
        Claims claims = parseToken(token);
        return getValue(claims, SecurityConstants.AFFILIATED_ID);
    }

    /**
     * 根据身份信息获取子机构
     *
     * @param claims 身份信息
     * @return 用户名
     */
    public static String getUserAffiliatedId(Claims claims)
    {
        return getValue(claims, SecurityConstants.AFFILIATED_ID);
    }

    /**
     * 获取用户子机构名称
     * @param token
     * @return
     */
    public static String getUserAffiliatedName(String token)
    {
        Claims claims = parseToken(token);
        return getValue(claims, SecurityConstants.AFFILIATED_NAME);
    }

    /**
     * 根据身份信息获取子机构名称
     *
     * @param claims 身份信息
     * @return 用户名
     */
    public static String getUserAffiliatedName(Claims claims)
    {
        return getValue(claims, SecurityConstants.AFFILIATED_NAME);
    }

    /**
     * 根据身份信息获取人员类别
     *
     * @param claims 身份信息
     * @return 用户名
     */
    public static String getUserCategoryCode(Claims claims)
    {
        return getValue(claims, SecurityConstants.CATEGORY_CODE);
    }

    /**
     * 获取用户人员类别
     * @param token
     * @return
     */
    public static String getUserCategoryCode(String token)
    {
        Claims claims = parseToken(token);
        return getValue(claims, SecurityConstants.CATEGORY_CODE);
    }

    /**
     * 根据身份信息获取第三方工号
     *
     * @param claims 身份信息
     * @return 用户名
     */
    public static String getUserThirdNo(Claims claims)
    {
        return getValue(claims, SecurityConstants.THIRD_NO);
    }

    /**
     * 获取用户第三方工号
     * @param token
     * @return
     */
    public static String getUserThirdNo(String token)
    {
        Claims claims = parseToken(token);
        return getValue(claims, SecurityConstants.THIRD_NO);
    }

    /**
     * 根据身份信息获取用户ID
     *
     * @param claims 身份信息
     * @return 用户ID
     */
    public static String getUserId(Claims claims)
    {
        return getValue(claims, SecurityConstants.DETAILS_USER_ID);
    }

    /**
     * 根据令牌获取用户名
     *
     * @param token 令牌
     * @return 用户名
     */
    public static String getUserName(String token)
    {
        Claims claims = parseToken(token);
        return getValue(claims, SecurityConstants.DETAILS_USERNAME);
    }

    /**
     * 根据身份信息获取用户名
     *
     * @param claims 身份信息
     * @return 用户名
     */
    public static String getUserName(Claims claims)
    {
        return getValue(claims, SecurityConstants.DETAILS_USERNAME);
    }

    /**
     * 根据身份信息获取键值
     *
     * @param claims 身份信息
     * @param key 键
     * @return 值
     */
    public static String getValue(Claims claims, String key)
    {
        return Convert.toStr(claims.get(key), "");
    }
}