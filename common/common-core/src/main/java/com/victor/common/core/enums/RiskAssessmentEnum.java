package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum RiskAssessmentEnum {

    /**
     * 未评估
     * Unregistered
     */
    UNREGISTERED("0", "无法自动评估，请手动评估"),
    /**
     * 1-低危
     */
    LOW_RISK ("1", "低危"),
    /**
     * 2-中危
     */
    MEDIUM_RISK("2", "中危"),
    /**
     * 3-高危
     */
    HIGH_RISK("3", "高危"),
    /**
     * 4-很高危
     */
    VERY_HIGH_RISK("4", "很高危");

    private String code;
    private String name;

}
