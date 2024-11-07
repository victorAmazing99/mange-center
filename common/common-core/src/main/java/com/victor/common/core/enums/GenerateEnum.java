package com.victor.common.core.enums;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum GenerateEnum {
    IS_GENERATE(1, "已生成"),
    NOT_GENERATE(0, "未生成");

    private final Integer code;

    private final String value;
}
