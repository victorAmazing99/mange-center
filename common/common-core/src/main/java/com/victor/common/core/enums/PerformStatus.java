package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 履约状态
 */
@Getter
@AllArgsConstructor
public enum PerformStatus {
    NOT(1, "未履约"),
    PART(2, "部分履约"),
    FINISH(3, "完成履约");

    private final Integer code;

    private final String value;
}
