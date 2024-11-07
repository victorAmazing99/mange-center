package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.stream.Stream;

/**
 * 脑卒中登记-结案原因枚举
 * @author yangkuang
 * @date 2023-04-17
 */
@Getter
@AllArgsConstructor
public enum CloseReasonEnum {

    FINISH("1", "完成服务"),

    LOST("2", "失访"),

    OUT("3", "迁出"),

    OTHER("4", "其他");

    private final String code;

    private final String name;

    public static String getNameByCode(String code) {
        return Stream.of(values()).filter(e -> e.getCode().equals(code)).findFirst().map(CloseReasonEnum::getName).orElse("");
    }

    /**
     * 结案状态映射结案原因
     * @param code
     * @return
     */
    public static CloseReasonEnum mappingByCode(Integer code) {
        if (code.equals(EhrFinalEnum.REMOVAL.getCode())) {
            return OUT;
        } else if (code.equals(EhrFinalEnum.DEATH.getCode())) {
            return FINISH;
        } else if (code.equals(EhrFinalEnum.LOST.getCode())) {
            return LOST;
        }
        return null;
    }

}
