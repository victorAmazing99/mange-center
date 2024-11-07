package com.victor.common.core.utils;

import com.victor.common.core.exception.AssertException;
import org.apache.commons.lang3.StringUtils;
import org.springframework.util.CollectionUtils;

import java.util.Collection;
import java.util.Objects;
import java.util.function.Supplier;

public class AssertUtil {
    private AssertUtil() {
    }

    public static void notBlank(String str) {
        if (StringUtils.isBlank(str)) {
            throw new AssertException("str empty");
        }
    }

    public static void notEmpty(Collection collection) {
        if (CollectionUtils.isEmpty(collection)) {
            throw new AssertException("collection empty");
        }
    }

    public static void notBlank(String str, Supplier<String> msgSupplier) {
        if (StringUtils.isBlank(str)) {
            throw new AssertException((String)msgSupplier.get());
        }
    }

    public static void notEmpty(Collection collection, Supplier<String> msgSupplier) {
        if (CollectionUtils.isEmpty(collection)) {
            throw new AssertException((String)msgSupplier.get());
        }
    }

    public static void notNull(Object obj) {
        if (Objects.isNull(obj)) {
            throw new AssertException("obj null");
        }
    }

    public static void notNull(Object obj, Supplier<String> msgSupplier) {
        if (Objects.isNull(obj)) {
            throw new AssertException((String)msgSupplier.get());
        }
    }

    public static void isTrue(boolean expression, Supplier<String> msgSupplier) {
        if (!expression) {
            throw new AssertException((String)msgSupplier.get());
        }
    }

    public static void equals(Object obj1, Object obj2, Supplier<String> msgSupplier) {
        isTrue(equals(obj1, obj2), msgSupplier);
    }

    public static void notBlank(String str, String msg) {
        if (StringUtils.isBlank(str)) {
            throw new AssertException(msg);
        }
    }

    public static void notEmpty(Collection collection, String msg) {
        if (CollectionUtils.isEmpty(collection)) {
            throw new AssertException(msg);
        }
    }

    public static void notNull(Object obj, String msg) {
        if (Objects.isNull(obj)) {
            throw new AssertException(msg);
        }
    }

    public static void isTrue(boolean expression, String msg) {
        if (!expression) {
            throw new AssertException(msg);
        }
    }

    public static void equals(Object obj1, Object obj2, String msg) {
        isTrue(equals(obj1, obj2), msg);
    }

    private static boolean equals(Object obj1, Object obj2) {
        if (obj1 == null) {
            return null == obj2;
        } else {
            return obj1.equals(obj2);
        }
    }
}
