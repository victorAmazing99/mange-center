package com.victor.common.core.exception;

import com.victor.common.core.enums.ErrorMsgEnum;
import com.google.common.base.Preconditions;
import com.google.common.base.Strings;
import lombok.Getter;

import java.util.HashMap;
import java.util.Map;

public class BizAssertException extends RuntimeException {

    @Getter
    private final int code;

    @Getter
    private final Map<String, Object> extraInfoMap = new HashMap<>();

    public BizAssertException(String message) {
        super(message);
        this.code = ErrorMsgEnum.BIZ_ASSERT_EXCEPTION.code;
    }

    public BizAssertException(Integer code, String message) {
        super(message);
        this.code = code != null ? code : ErrorMsgEnum.BIZ_ASSERT_EXCEPTION.code;
    }

    public BizAssertException putExtra(String key, Object value) {
        Preconditions.checkArgument(!Strings.isNullOrEmpty(key));
        Preconditions.checkNotNull(value);
        this.extraInfoMap.put(key, value);
        return this;
    }

    public BizAssertException putAllExtra(Map<String, Object> extraInfoMap) {
        if (extraInfoMap != null && !extraInfoMap.isEmpty()) {
            this.extraInfoMap.putAll(extraInfoMap);
        }
        return this;
    }
}
