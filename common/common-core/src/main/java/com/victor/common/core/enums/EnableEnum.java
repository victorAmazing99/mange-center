package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 是否启用
 */
@Getter
@AllArgsConstructor
public enum EnableEnum {
    ENABLE(1, "启用"),
    DISABLE(0, "禁用");

    private final Integer code;

    private final String value;
}
