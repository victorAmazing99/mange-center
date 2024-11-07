package com.victor.common.core.enums;

/**
 * 自定义异常信息枚举
 *
 * @author hutu
 * @date 2018/6/26 16:27
 */
public enum ErrorMsgEnum {
    THREAD_POOL_OVERFLOW(10007, "线程池资源不足"),
    TOKEN_IS_EXPIRE(10006, "账号认证失效，请重新登录"),
    NOT_FOUNT_TOKEN(10005, "not found token"),
    NULL_POINTER_EXCEPTION(10004, "空指针异常"),
    TOKEN_IS_INVALID(10003, "token is invalid"),
    PASSWORD_ERROR(10002, "密码错误"),
    PASSWORD_OVERDUE(10012, "密码过期"),
    PASSWORD_UNSAFE(10013, "初始密码不安全，请勿使用"),
    USERNAME_NOT_EXIST(10001, "用户名不存在"),
    USER_UNABLE(10009, "该账户未启用"),
    USER_ORG_UNABLE(10010, "该账户机构未启用"),
    USER_ORG_ERROR(10014, "该账户机构错误，请重新配置"),
    USER_OSS(10008, "该账号在另一地点登录."),
    PASSWORD_INIT(10011, "初始密码需修改"),
    //-------------------
    INTERNAL_SERVER_ERROR(500, "后台系统错误"),
    SERVER_BUSY(402, "系统繁忙"),
    // 数据操作错误定义
    ASSERT_EXCEPTION(100, "参数异常"),
    BIZ_ASSERT_EXCEPTION(101, "业务异常"),
    UNAUTHORIZED(401, "未授权");
    public int code;
    public String desc;

    ErrorMsgEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }
}
