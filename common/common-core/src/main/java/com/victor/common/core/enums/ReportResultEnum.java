package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 评估结果
 */
@Getter
@AllArgsConstructor
public enum ReportResultEnum {
    HEALTH("1", "健康人群"),
    FACTOR("2", "疾病风险人群"),
    DISEASE("3", "患病人群");

    private final String code;

    private final String value;
}
