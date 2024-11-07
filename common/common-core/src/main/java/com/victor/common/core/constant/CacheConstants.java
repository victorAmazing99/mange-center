package com.victor.common.core.constant;

/**
 * @author victor
 * @ClassName CacheConstants.java
 * @company
 * @Description 缓存常量信息
 * @createTime 2022年11月09日 11:18:00
 */
public class CacheConstants {
    /**
     * 缓存有效期，默认30（分钟）
     */
    public final static long EXPIRATION = 30;

    /**
     * 缓存刷新时间，默认120（分钟）
     */
    public final static long REFRESH_TIME = 120;

    /**
     * 密码最大错误次数
     */
    public final static int PASSWORD_MAX_RETRY_COUNT = 5;

    /**
     * 密码锁定时间，默认10（分钟）
     */
    public final static long PASSWORD_LOCK_TIME = 10;

    /**
     * 权限缓存前缀
     */
    public final static String LOGIN_TOKEN_KEY = "login_tokens:";

    /**
     * 验证码 redis key
     */
    public static final String CAPTCHA_CODE_KEY = "captcha_codes:";

    /**
     * 参数管理 cache key
     */
    public static final String SYS_CONFIG_KEY = "sys_config:";

    /**
     * 字典管理 cache key
     */
    public static final String SYS_DICT_KEY = "sys_dict:";

    /**
     * 登录账户密码错误次数 redis key
     */
    public static final String PWD_ERR_CNT_KEY = "pwd_err_cnt:";

    /**
     * 账户多次登录状态记录
     */
    public static final String USER_LOGIN_STATUS_INFO = "user_login_status:";

    /**
     * 忘记密码时密保校验状态
     */
    public static final String UPDATE_PAS_QUESTION_CHECK_STATUS = "update_pas_question_check_status:";
}
