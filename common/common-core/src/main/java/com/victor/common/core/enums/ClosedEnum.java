package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 是否结案
 */
@Getter
@AllArgsConstructor
public enum ClosedEnum {
    IS_CLOSED(1, "已结案"),
    NOT_CLOSED(0, "未结案");

    private final Integer code;

    private final String value;
}
