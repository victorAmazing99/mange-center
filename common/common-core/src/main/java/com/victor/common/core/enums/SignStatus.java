package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 签约状态
 */
@Getter
@AllArgsConstructor
public enum SignStatus {
    SIGN(1, "已签约"),
    RESCIND(2, "解约"),
    FINISH(3, "完成签约"),
    RENEW(4, "续约");

    private final Integer code;

    private final String value;
}
