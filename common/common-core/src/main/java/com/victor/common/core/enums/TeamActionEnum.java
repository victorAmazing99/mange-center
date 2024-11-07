package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 团队操作日志
 */
@Getter
@AllArgsConstructor
public enum TeamActionEnum {
    ADD_MEMBER( "添加成员"),
    REMOVE_MEMBER("移出成员"),
    LEADER("设为团队长");

    private final String value;
}
