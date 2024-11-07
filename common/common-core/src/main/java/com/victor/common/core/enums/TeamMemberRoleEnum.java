package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 团队角色枚举
 */
@Getter
@AllArgsConstructor
public enum TeamMemberRoleEnum {

    FAMILY_DOC("1", "家庭医生");


    private final String code;

    private final String name;
}