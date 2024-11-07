package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum AssessReportEnum {
    IS_COMPLETE(1, "已完成"),
    NOT_COMPLETE(0, "未完成");

    private final Integer code;

    private final String value;
}
