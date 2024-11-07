package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 人群分类
 */
@Getter
@AllArgsConstructor
public enum EhrPayMethodEnum {
    PAYMENT_METHOD_1("01", "城镇职工基本医疗保险"),
    PAYMENT_METHOD_2("02", "城镇居民基本医疗保险"),
    PAYMENT_METHOD_3("03", "新型农村合作医疗"),
    PAYMENT_METHOD_4("04", "贫因救助"),
    PAYMENT_METHOD_5("05", "商业医疗保险"),
    PAYMENT_METHOD_6("06", "全公费"),
    PAYMENT_METHOD_7("07", "全自费"),
    PAYMENT_METHOD_8("90", "城乡居民医疗保险"),
    PAYMENT_METHOD_9("99", "其他");

    private final String code;

    private final String value;

    public static EhrPayMethodEnum getEhrPayMethodEnum (String code) {
        for (EhrPayMethodEnum itemEnum : EhrPayMethodEnum.values()) {
            if (itemEnum.getCode().equals(code)) {
                return itemEnum;
            }
        }
        return null;
    }
}
