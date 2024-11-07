package com.victor.common.core.exception.user;


/**
 * @author victor
 * @ClassName CaptchaExpireException.java
 * @company
 * @Description 验证码失效异常类
 * @createTime 2022年11月09日 13:14:00
 */
public class CaptchaExpireException extends UserException {
    private static final long serialVersionUID = 1L;

    public CaptchaExpireException()
    {
        super("user.jcaptcha.expire", null);
    }
}
