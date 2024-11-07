package com.victor.common.core.exception;

/**
 * @author victor
 * @ClassName CaptchaException.java
 * @company
 * @Description 验证码错误异常类
 * @createTime 2022年11月09日 13:19:00
 */
public class CaptchaException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public CaptchaException(String msg)
    {
        super(msg);
    }
}
