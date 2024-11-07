package com.victor.common.core.enums;

public enum BookBuildingEnum {
    unLocalBookBuild(1, "非本机构建册"),
    localBookBuild(2, "本机构建册");

    public int code;
    public String name;

    BookBuildingEnum(int code, String name) {
        this.code = code;
        this.name = name;
    }
}
