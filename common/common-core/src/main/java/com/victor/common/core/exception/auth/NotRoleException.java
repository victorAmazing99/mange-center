package com.victor.common.core.exception.auth;

import org.apache.commons.lang3.StringUtils;

/**
 * @author victor
 * @ClassName NotRoleException.java
 * @company
 * @Description 未能通过的角色认证异常
 * @createTime 2022年11月09日 11:55:00
 */
public class NotRoleException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public NotRoleException(String role)
    {
        super(role);
    }

    public NotRoleException(String[] roles)
    {
        super(StringUtils.join(roles, ","));
    }

}
