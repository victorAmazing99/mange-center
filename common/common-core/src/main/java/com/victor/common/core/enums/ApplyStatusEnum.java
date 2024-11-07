package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;


/**
 * 档案迁移状态
 *
 */
@Getter
@AllArgsConstructor
public enum ApplyStatusEnum {

    APPLYING(1, "申请中"),
    APPROVED(2, "已批准"),
    REJECTED(3, "已拒绝");

    private final Integer code;

    private final String value;
}
