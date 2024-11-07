package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 大屏人群分类
 */
@Getter
@AllArgsConstructor
public enum ScreenCategoryEnum {
    SNR("4", "老年人"),
    STUDENT("2", "学生（7-17岁）"),
    CHILD("1", "0-6岁儿童"),
    POPULATION("3", "普通人群");



    private final String code;

    private final String value;
}
