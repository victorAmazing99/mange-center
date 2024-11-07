package com.victor.common.core.exception.user;

import com.victor.common.core.exception.base.BaseException;

/**
 * @author victor
 * @ClassName UserException.java
 * @company
 * @Description 用户信息异常类
 * @createTime 2022年11月09日 13:15:00
 */
public class UserException extends BaseException {
    private static final long serialVersionUID = 1L;

    public UserException(String code, Object[] args)
    {
        super("user", code, args, null);
    }
}
