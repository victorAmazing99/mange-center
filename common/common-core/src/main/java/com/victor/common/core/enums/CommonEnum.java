package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 是否删除
 */
@Getter
@AllArgsConstructor
public enum CommonEnum {
    IS_DELETE(1, "是"),
    NOT_DELETE(0, "否");

    private final Integer code;

    private final String value;

    public static String getValueByCode(Integer code) {
        for (CommonEnum it : CommonEnum.values()) {
            if (it.code.equals(code)) {
                return it.value;
            }
        }
        return "";
    }
}
