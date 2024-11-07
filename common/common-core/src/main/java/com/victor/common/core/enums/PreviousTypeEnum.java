package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum PreviousTypeEnum {
    DISEASE("01", "既往疾病史"),
    OPERATION("02", "既往手术史"),
    DRUG("03","既往用药史");

    private final String code;

    private final String value;
}
