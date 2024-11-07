package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 药品类别（1-普通用药，2-调整用药）
 */
@Getter
@AllArgsConstructor
public enum  MedicineCategoryEnum {
    ORDINARY_MEDICINE("1", "普通用药"),
    ADJUST_MEDICINE("2", "调整用药");

    private final String code;

    private final String value;
}
