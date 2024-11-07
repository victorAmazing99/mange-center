package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ServiceEnum {
    OUTPATIENT("1", "门诊"),
    PHONE("2", "电话"),
    WECHAT("3", "微信"),
    VIDEO("4", "视屏"),
    CLOUDSERVICES("5", "云服务"),
    VISITINGFOLLOWUP("6", "上门随访"),
    AIFOLLOWUP("7", "AI随访"),
    MESSAGE("8", "短信"),
    OTHER("9", "其他");

    private final String code;

    private final String value;

    public static ServiceEnum getServiceEnum(String code){
        for (ServiceEnum  itemEnum : ServiceEnum.values()) {
            if (itemEnum.getCode().equals(code)){
                return itemEnum;
            }
        }
        return null;
    }
}
