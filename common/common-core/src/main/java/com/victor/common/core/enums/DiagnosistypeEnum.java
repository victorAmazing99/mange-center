package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 诊断类型
 */
@Getter
@AllArgsConstructor
public enum  DiagnosistypeEnum {
    WESTERNMEDICINE(1, "西医"),
    CHAINDOCTOR(2, "中医");

    private final Integer code;

    private final String value;
}
