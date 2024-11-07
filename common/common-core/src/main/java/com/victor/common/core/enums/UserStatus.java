package com.victor.common.core.enums;

/**
 * @author victor
 * @ClassName UserStatus.java
 * @company
 * @Description 用户状态
 * @createTime 2022年11月09日 11:53:00
 */
public enum UserStatus {
    OK(0, "正常"), DISABLE(1, "停用");

    private final Integer code;
    private final String info;

    UserStatus(Integer code, String info)
    {
        this.code = code;
        this.info = info;
    }

    public Integer getCode()
    {
        return code;
    }

    public String getInfo()
    {
        return info;
    }
}
