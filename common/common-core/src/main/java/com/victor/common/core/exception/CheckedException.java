package com.victor.common.core.exception;

/**
 * @author victor
 * @ClassName CheckedException.java
 * @company
 * @Description 检查异常
 * @createTime 2022年11月09日 13:20:00
 */
public class CheckedException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public CheckedException(String message)
    {
        super(message);
    }

    public CheckedException(Throwable cause)
    {
        super(cause);
    }

    public CheckedException(String message, Throwable cause)
    {
        super(message, cause);
    }

    public CheckedException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace)
    {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
