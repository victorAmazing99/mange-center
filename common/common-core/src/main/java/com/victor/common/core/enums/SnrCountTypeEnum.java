package com.victor.common.core.enums;

/**
 * 自定义通知信息枚举
 * @author hutu
 * @date 2018/6/26 16:27
 */
public enum SnrCountTypeEnum {


    SNRCOUNTTYPE_1(1,"60-64岁"),
    SNRCOUNTTYPE_2(2,"65-69岁"),
    SNRCOUNTTYPE_3(3,"70-74岁"),
    SNRCOUNTTYPE_4(4,"75-79岁"),
    SNRCOUNTTYPE_5(5,"80-84岁"),
    SNRCOUNTTYPE_6(6,"85-89岁"),
    SNRCOUNTTYPE_7(7,"90-94岁"),
    SNRCOUNTTYPE_8(8,"95-99岁"),
    SNRCOUNTTYPE_9(9,"100岁以上");
    public int code;
    public String desc;
    SnrCountTypeEnum(int code, String desc){
        this.code = code;
        this.desc = desc;
    }
}
