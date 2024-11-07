package com.victor.common.core.exception;

import com.victor.common.core.enums.ErrorMsgEnum;

/**
 * @author victor
 * @ClassName GlobalException.java
 * @company
 * @Description 全局异常
 * @createTime 2022年11月09日 13:21:00
 */
public class GlobalException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    /**
     * 错误提示
     */
    private String message;

    private int code;

    /**
     * 错误明细，内部调试错误
     *
     * 和 {@linkCommonResult #getDetailMessage()} 一致的设计
     */
    private String detailMessage;

    /**
     * 空构造方法，避免反序列化问题
     */
    public GlobalException()
    {
    }

    public GlobalException(ErrorMsgEnum eme) {
        super(eme.desc);
        this.code = eme.code;
    }

    public GlobalException(String message)
    {
        this.message = message;
    }

    public String getDetailMessage()
    {
        return detailMessage;
    }

    public GlobalException setDetailMessage(String detailMessage)
    {
        this.detailMessage = detailMessage;
        return this;
    }

    @Override
    public String getMessage()
    {
        return message;
    }

    public GlobalException setMessage(String message)
    {
        this.message = message;
        return this;
    }
}
