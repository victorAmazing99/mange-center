package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 人群分类
 */
@Getter
@AllArgsConstructor
public enum EhrCategoryEnum {
    GENERAL("1", "一般人群"),
    CHILD("2", "0-6岁儿童"),
    SNR1("3", "60-64岁老年人"),
    SNR2("4", "65岁以上老年人"),
    PW("5", "孕产妇"),
    DIS("6", "残疾人"),
    HTN("7", "高血压患者"),
    DM("8", "糖尿病患者"),
    HPL("9", "高血脂患者"),
    CHD("10", "冠心病患者"),
    DNT("11", "脑卒中患者"),
    TB("12", "肺结核患者"),
    SMI("13", "严重精神障碍患者");

    private final String code;

    private final String value;

    public static EhrCategoryEnum getEhrCategoryEnum (String code) {
        for (EhrCategoryEnum itemEnum : EhrCategoryEnum.values()) {
            if (itemEnum.getCode().equals(code)) {
                return itemEnum;
            }
        }
        return null;
    }
}
