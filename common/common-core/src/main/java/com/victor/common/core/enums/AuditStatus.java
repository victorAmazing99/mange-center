package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 签约状态
 */
@Getter
@AllArgsConstructor
public enum AuditStatus {
    IN_REVIEW(1, "审核中"),
    AGREE(2, "已同意"),
    REFUSE(3, "已拒绝");

    private final Integer code;

    private final String value;
}
