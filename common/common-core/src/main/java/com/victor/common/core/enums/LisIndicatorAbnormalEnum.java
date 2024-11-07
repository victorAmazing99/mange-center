package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;


/**
 * 档案迁移状态
 *
 */
@Getter
@AllArgsConstructor
public enum LisIndicatorAbnormalEnum {

    NORMAL(1, "正常"),
    UNRECOGNIZABLE(2, "无法识别的异常"),
    HIGH(3, "异常偏高"),
    LOW(4, "异常偏低");

    private final Integer code;

    private final String value;
}
