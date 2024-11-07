package com.victor.common.core.enums;

/**
 * @author: zds
 * @date: 2023/4/23
 * @description:
 */
public enum MonthAgeEnum {

    ONE_MONTH( "01", "满月"),
    THREE_MONTH( "03", "3月龄"),
    SIX_MONTH( "06", "6月龄"),
    EIGHT_MONTH( "08", "8月龄"),
    TWELVE_MONTH( "12", "12月龄"),
    EIGHTEEN_MONTH( "18", "18月龄"),
    TWO_yEAR( "24", "24月龄"),
    THIRTY_MONTH( "30", "30月龄"),
    THREE_YEAR( "36", "3岁"),
    FOUR_YEAR( "48", "4岁"),
    FIVE_YEAR( "60", "5岁"),
    SIX_YEAR( "72", "6岁");

    private String code;
    private String name;

    MonthAgeEnum(String code, String name) {
        this.code = code;
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }

    public static String getNameByCode(String code) {
        for (MonthAgeEnum doctorAdviceEnum : MonthAgeEnum.values()) {
            if (doctorAdviceEnum.code.equals(code)) {
                return doctorAdviceEnum.name;
            }
        }
        return null;
    }
}
