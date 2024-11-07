package com.victor.common.core.exception.auth;

/**
 * @author victor
 * @ClassName NotLoginException.java
 * @company
 * @Description 未能通过的登录认证异常
 * @createTime 2022年11月09日 11:54:00
 */
public class NotLoginException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public NotLoginException(String message)
    {
        super(message);
    }
}
