package com.victor.common.core.exception.user;

/**
 * @author victor
 * @ClassName UserPasswordNotMatchException.java
 * @company
 * @Description 用户密码不正确或不符合规范异常类
 * @createTime 2022年11月09日 13:18:00
 */
public class UserPasswordNotMatchException extends UserException{
    private static final long serialVersionUID = 1L;

    public UserPasswordNotMatchException()
    {
        super("user.password.not.match", null);
    }
}
