package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum AssessEnum {
    NOT_ASSESS(0, "未评估"),
    IS_ASSESS(1, "已评估"),
    GENERATING(2,"生成中");

    private final Integer code;

    private final String value;
}
