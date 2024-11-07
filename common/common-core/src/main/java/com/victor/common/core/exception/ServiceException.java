package com.victor.common.core.exception;

/**
 * @author victor
 * @ClassName ServiceException.java
 * @company
 * @Description 业务异常
 * @createTime 2022年11月09日 13:24:00
 */
public class ServiceException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    /**
     * 错误码
     */
    private Integer code =500;

    /**
     * 错误提示
     */
    private String message;

    /**
     * 错误明细，内部调试错误
     *
     * 和 {@linkCommonResult#getDetailMessage()} 一致的设计
     */
    private String detailMessage;

    /**
     * 空构造方法，避免反序列化问题
     */
    public ServiceException()
    {
    }

    public ServiceException(String message)
    {
        this.message = message;
    }

    public ServiceException(String message, Integer code)
    {
        this.message = message;
        this.code = code;
    }

    public String getDetailMessage()
    {
        return detailMessage;
    }

    @Override
    public String getMessage()
    {
        return message;
    }

    public Integer getCode()
    {
        return code;
    }

    public ServiceException setMessage(String message)
    {
        this.message = message;
        return this;
    }

    public ServiceException setDetailMessage(String detailMessage)
    {
        this.detailMessage = detailMessage;
        return this;
    }
}
