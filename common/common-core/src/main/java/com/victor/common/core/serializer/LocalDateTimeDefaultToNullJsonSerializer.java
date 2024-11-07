package com.victor.common.core.serializer;

import cn.hutool.core.date.DatePattern;
import com.victor.common.core.constant.DefaultNullConstants;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Objects;

/**
 * 默认返回格式：yyyy-MM-dd HH:mm:ss
 * 1900-01-01 00:00:00 -> null
 * @author yangkuang
 * @date 2023-04-28
 */
public class LocalDateTimeDefaultToNullJsonSerializer extends JsonSerializer<LocalDateTime> {

    @Override
    public void serialize(LocalDateTime value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        if (Objects.equals(value, DefaultNullConstants.LOCAL_DATE_TIME)) {
            gen.writeNull();
        } else {
            gen.writeString(DatePattern.NORM_DATETIME_FORMATTER.format(value));
        }
    }
}
