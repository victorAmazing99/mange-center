package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum OrgCategoryEnum {
    ORG_CATEGORY_A("1", "事业单位"),
    ORG_CATEGORY_B("2", "居委会");
    private final String code;

    private final String value;

    public static OrgCategoryEnum getOrgCategoryEnum(String code){
        for (OrgCategoryEnum  itemEnum : OrgCategoryEnum.values()) {
            if (itemEnum.getCode().equals(code)){
                return itemEnum;
            }
        }
        return null;
    }
}
