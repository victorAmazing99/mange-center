package com.victor.common.core.exception;

/**
 * @author victor
 * @ClassName InnerAuthException.java
 * @company
 * @Description 内部认证异常
 * @createTime 2022年11月09日 13:23:00
 */
public class InnerAuthException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public InnerAuthException(String message)
    {
        super(message);
    }
}
