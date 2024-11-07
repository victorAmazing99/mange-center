package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum SexEnum {
    MALE("1", "男"),
    FEMALE("2", "女");

    private final String code;

    private final String name;
}
