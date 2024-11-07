package com.victor.common.core.enums;

public enum HbvEnum {

    HbsagCode(1,"乙型肝炎病毒表面抗原"),
    HbveagCode(2,"乙型肝炎病毒e抗原"),
    HbsabCode(3,"乙型肝炎病毒表面抗体"),
    HbseabCode(4,"乙型肝炎病毒e抗体"),
    HbcabCode(5,"乙型肝炎病毒核心抗体");

    public Integer code;

    public String name;

    HbvEnum(Integer code,String name){
        this.code = code;
        this.name = name;
    }
}
