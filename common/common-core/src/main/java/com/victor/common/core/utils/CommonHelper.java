package com.victor.common.core.utils;

import cn.hutool.core.util.ObjectUtil;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class CommonHelper {


    public static List<String> transStringToList(String values) {
        List<String> msgs = new ArrayList<>();
        if (!ObjectUtil.isEmpty(values)) {
            msgs = Arrays.asList(values.split(","));
        }
        return msgs;
    }

    public static String transListToString(List<String> list) {
        if (ObjectUtil.isEmpty(list)) {
            return "";
        }
        return list.stream().collect(Collectors.joining(","));
    }

    public static List<String> transStringToListSemicolon(String values) {
        List<String> msgs = new ArrayList<>();
        if (!ObjectUtil.isEmpty(values)) {
            msgs = Arrays.asList(values.split(";"));
        }
        return msgs;
    }

    public static String transListToStringSemicolon(List<String> list) {
        if (ObjectUtil.isEmpty(list)) {
            return "";
        }
        return list.stream().collect(Collectors.joining(";"));
    }
}
