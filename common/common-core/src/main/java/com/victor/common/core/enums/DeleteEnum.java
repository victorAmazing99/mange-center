package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 是否删除
 */
@Getter
@AllArgsConstructor
public enum DeleteEnum {
    IS_DELETE(1, "已删除"),
    NOT_DELETE(0, "未删除");

    private final Integer code;

    private final String value;
}
