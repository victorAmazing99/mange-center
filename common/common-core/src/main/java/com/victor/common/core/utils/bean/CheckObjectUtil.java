package com.victor.common.core.utils.bean;

import cn.hutool.core.util.ObjectUtil;

import java.lang.reflect.Field;

public class CheckObjectUtil {

    /**
     * 判断对象中属性值是否全为空
     *
     * @param object
     * @return
     */
    public static boolean checkObjAllFieldsIsNull(Object object) {
        if (null == object) {
            return true;
        }

        try {
            for (Field f : object.getClass().getDeclaredFields()) {
                f.setAccessible(true);

                if (!ObjectUtil.isEmpty(f.get(object))) {
                    return false;
                }

            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return true;
    }
}
