package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 服务来源
 */
@Getter
@AllArgsConstructor
public enum ServiceSourceEnum {
    SELF(1, "本系统"),
    THIRD(2, "第三方系统");

    private final Integer code;

    private final String value;
}
