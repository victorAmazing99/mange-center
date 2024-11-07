package com.victor.common.core.utils;

import com.victor.common.core.exception.BizAssertException;
import org.apache.commons.lang3.StringUtils;

import java.util.Objects;
import java.util.logging.Logger;

import static java.util.logging.Level.WARNING;

public class BizAssertUtil {
    private BizAssertUtil() {
    }

    public static void notBlank(String str, String msg) {
        if (StringUtils.isBlank(str)) {
            throw new BizAssertException(msg);
        }
    }

    public static void notNull(Object obj, String msg) {
        if (Objects.isNull(obj)) {
            throw new BizAssertException(msg);
        }
    }

    public static void isTrue(boolean expression, String msg) {
        if (!expression) {
            throw new BizAssertException(msg);
        }
    }

    public static void notBlank(String str, String msg, Integer code) {
        if (StringUtils.isBlank(str)) {
            throw new BizAssertException(code, msg);
        }
    }

    public static void notNull(Object obj, String msg, Integer code) {
        if (Objects.isNull(obj)) {
            throw new BizAssertException(code, msg);
        }
    }

    public static void isTrue(boolean expression, String msg, Integer code) {
        if (!expression) {
            throw new BizAssertException(code, msg);
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

    /**
     * copy from com.google.common.base.Preconditions.checkArgument
     * @param expression
     * @param errorMessageTemplate
     * @param errorMessageArgs
     */
    public static void checkArgument(boolean expression, String errorMessageTemplate, Object... errorMessageArgs) {
        if (!expression) {
            throw new BizAssertException(lenientFormat(errorMessageTemplate, errorMessageArgs));
        }
    }


    private static String lenientFormat(String template, Object... args) {
        template = String.valueOf(template); // null -> "null"

        if (args == null) {
            args = new Object[] {"(Object[])null"};
        } else {
            for (int i = 0; i < args.length; i++) {
                args[i] = lenientToString(args[i]);
            }
        }

        // start substituting the arguments into the '%s' placeholders
        StringBuilder builder = new StringBuilder(template.length() + 16 * args.length);
        int templateStart = 0;
        int i = 0;
        while (i < args.length) {
            int placeholderStart = template.indexOf("%s", templateStart);
            if (placeholderStart == -1) {
                break;
            }
            builder.append(template, templateStart, placeholderStart);
            builder.append(args[i++]);
            templateStart = placeholderStart + 2;
        }
        builder.append(template, templateStart, template.length());

        // if we run out of placeholders, append the extra args in square braces
        if (i < args.length) {
            builder.append(" [");
            builder.append(args[i++]);
            while (i < args.length) {
                builder.append(", ");
                builder.append(args[i++]);
            }
            builder.append(']');
        }

        return builder.toString();
    }

    private static String lenientToString(@org.checkerframework.checker.nullness.qual.Nullable Object o) {
        try {
            return String.valueOf(o);
        } catch (Exception e) {
            // Default toString() behavior - see Object.toString()
            String objectToString =
                    o.getClass().getName() + '@' + Integer.toHexString(System.identityHashCode(o));
            // Logger is created inline with fixed name to avoid forcing Proguard to create another class.
            Logger.getLogger("com.google.common.base.Strings")
                    .log(WARNING, "Exception during lenientFormat for " + objectToString, e);
            return "<" + objectToString + " threw " + e.getClass().getName() + ">";
        }
    }
}
