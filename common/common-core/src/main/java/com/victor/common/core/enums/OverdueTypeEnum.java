package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.stream.Stream;

@Getter
@AllArgsConstructor
public enum OverdueTypeEnum {

    NOT_OVERDUE(0, "未逾期"),
    IS_OVERDUE(1, "已逾期"),
    TWO_WEEK(2, "2-周内随访");

    private int code;

    private String desc;


    public static OverdueTypeEnum getByCode(int code) {
        return Stream.of(OverdueTypeEnum.values()).filter(item -> item.code == code).findFirst().orElse(null);
    }

}
