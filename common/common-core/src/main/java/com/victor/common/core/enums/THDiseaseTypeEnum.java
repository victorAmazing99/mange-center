package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.apache.commons.lang3.StringUtils;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Getter
@AllArgsConstructor
public enum THDiseaseTypeEnum {

    ONE("1", "高血压"),
    TWO("2", "糖尿病"),
    THREE("3", "高血脂"),
    FOUR("4", "脑卒中"),
    FIVE("5", "冠心病");

    private String code;

    private String desc;


    public static THDiseaseTypeEnum getByCode(String code) {
        return Stream.of(THDiseaseTypeEnum.values()).filter(item -> item.code.equals(code)).findFirst().orElse(null);
    }

    public static String getByCodes(String codes) {
        if (StringUtils.isBlank(codes)) {
            return StringUtils.EMPTY;
        }
        if (codes.length() == 1) {
            return getByCode(codes).getDesc();
        }
        List<String> stringList = Stream.of(StringUtils.split(codes, ",")).collect(Collectors.toList());
        StringBuilder sb = new StringBuilder();
        for (String code : stringList) {
            THDiseaseTypeEnum typeEnum = getByCode(code);
            sb.append(typeEnum.getDesc()).append("/");
        }
        return sb.substring(0, sb.length() - 1);
    }

}
