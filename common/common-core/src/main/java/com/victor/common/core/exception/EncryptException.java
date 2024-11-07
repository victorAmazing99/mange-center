package com.victor.common.core.exception;

/**
 * @author victor
 * @ClassName CheckedException.java
 * @company
 * @Description 检查异常
 * @createTime 2022年11月09日 13:20:00
 */
public class EncryptException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public EncryptException(String message)
    {
        super(message);
    }

    public EncryptException(Throwable cause)
    {
        super(cause);
    }

    public EncryptException(String message, Throwable cause)
    {
        super(message, cause);
    }

    public EncryptException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace)
    {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
