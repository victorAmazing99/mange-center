package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 档案终结
 */
@Getter
@AllArgsConstructor
public enum EhrFinalEnum {
    NORMAL(0, "正常"),
    REMOVAL(1, "搬迁"),
    DEATH(2, "死亡"),
    LOST(3, "失访");

    private final Integer code;

    private final String value;
}
