package com.victor.common.core.serializer;

import cn.hutool.core.date.DatePattern;
import cn.hutool.core.date.DateTime;
import cn.hutool.core.date.DateUtil;
import com.victor.common.core.constant.DefaultNullConstants;
import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonMappingException;

import java.io.IOException;
import java.time.LocalDateTime;

/**
 * null -> 1900-01-01 00:00:00
 * @author yangkuang
 * @date 2023-04-28
 */
public class LocalDateTimeNullToDefaultJsonDeserializer extends JsonDeserializer<LocalDateTime> {

    @Override
    public LocalDateTime deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JacksonException {
        String text = p.getText().trim();
        if (text.trim().length() == 0) {
            return DefaultNullConstants.LOCAL_DATE_TIME;
        }
        DateTime dateTime = DateUtil.parse(text);
        String formatDateTime = DateUtil.formatDateTime(dateTime);
        return LocalDateTime.parse(formatDateTime, DatePattern.NORM_DATETIME_FORMATTER);
    }

    @Override
    public LocalDateTime getNullValue(DeserializationContext ctxt) throws JsonMappingException {
        return DefaultNullConstants.LOCAL_DATE_TIME;
    }

}
