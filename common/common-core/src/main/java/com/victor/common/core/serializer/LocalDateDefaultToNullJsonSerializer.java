package com.victor.common.core.serializer;

import cn.hutool.core.date.DatePattern;
import com.victor.common.core.constant.DefaultNullConstants;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Objects;

/**
 * 默认返回格式：yyyy-MM-dd
 * @author yangkuang
 * @date 2023-04-28
 */
public class LocalDateDefaultToNullJsonSerializer extends JsonSerializer<LocalDate> {

    @Override
    public void serialize(LocalDate value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        if (Objects.equals(value, DefaultNullConstants.LOCAL_DATE)) {
            gen.writeNull();
        } else {
            gen.writeString(DatePattern.NORM_DATE_FORMATTER.format(value));
        }
    }

}
