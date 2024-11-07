package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum AssociationTypeEnum {
    HISTORY_OF_DISEASE("01", "既往疾病史"),
    HISTORY_OF_OPERATION("02", "既往手术史"),
    HISTORY_OF_DRUG("03","既往用药史");

    private final String code;

    private final String value;
}
