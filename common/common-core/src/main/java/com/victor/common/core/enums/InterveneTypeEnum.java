package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum InterveneTypeEnum {
    INTERVENE_0(0, "已患疾病干预"),
    INTERVENE_1(1, "风险因素管理"),
    INTERVENE_2(2, "To医生建议"),
    INTERVENE_3(3,"生活方式干预"),
    INTERVENE_4(4,"饮食调养"),
    INTERVENE_5(5,"自我管理"),
    INTERVENE_6(6,"中医体质辨识");

    private final Integer code;

    private final String value;

    public static InterveneTypeEnum getInterveneTypeEnum (Integer code) {
        for (InterveneTypeEnum itemEnum : InterveneTypeEnum.values()) {
            if (itemEnum.getCode().equals(code)) {
                return itemEnum;
            }
        }
        return null;
    }
}
