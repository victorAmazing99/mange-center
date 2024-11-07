package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 既往史疾病
 */
@Getter
@AllArgsConstructor
public enum DiseaseHistoryEnum {
    HTN("02", "高血压"),
    DM("03", "糖尿病"),
    COPD("05", "慢性阻塞性肺疾病"),
    DNT("07", "脑卒中");

    private final String code;

    private final String value;

    public static DiseaseHistoryEnum getDiseaseHistoryEnum(String code) {
        for (DiseaseHistoryEnum itemEnum : DiseaseHistoryEnum.values()) {
            if (itemEnum.code.equals(code)) {
                return itemEnum;
            }
        }
        return null;
    }
}
