package com.victor.common.core.exception;

/**
 * @author victor
 * @ClassName UtilException.java
 * @company
 * @Description 工具类异常
 * @createTime 2022年11月09日 13:25:00
 */
public class UtilException extends RuntimeException{
    private static final long serialVersionUID = 8247610319171014183L;

    public UtilException(Throwable e)
    {
        super(e.getMessage(), e);
    }

    public UtilException(String message)
    {
        super(message);
    }

    public UtilException(String message, Throwable throwable)
    {
        super(message, throwable);
    }
}
