package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;


/**
 * 人员类别
 *
 */
@Getter
@AllArgsConstructor
public enum UserCategoryEnum {

    FAMILY_DOC("1", "家庭医生"),
    NURSE("2", "护士"),
    PUBLIC_DOC("3", "社区系统管理员"),
    COUNTRY_DOC("4", "中心主任"),
    FAMILY_ASSISTANT("5", "家医助手"),
    HEALTH_MANAGER("6", "健康管理师"),
    OTHER("9", "其他人员");

    private final String code;

    private final String value;

    public static UserCategoryEnum getUserCategoryEnum (String code) {
        for (UserCategoryEnum itemEnum : UserCategoryEnum.values()) {
            if (itemEnum.getCode().equals(code)) {
                return itemEnum;
            }
        }
        return null;
    }
}
