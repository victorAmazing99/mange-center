package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 人群分类
 */
@Getter
@AllArgsConstructor
public enum AssociationFormEnum {
    EHR("1", "个人健康档案"),
    SNR("2", "健康体检表"),
    TH("3", "三高共管随访表"),
    PW("4", "产后访视记录"),
    CHILD("5", "新生儿访视记录单");

    private final String code;

    private final String value;

    public static String getByCode(String code) {
        for (AssociationFormEnum associationFormEnum : AssociationFormEnum.values()) {
            if (associationFormEnum.code.equals(code)) {
                return associationFormEnum.value;
            }
        }
        return null;
    }
}
