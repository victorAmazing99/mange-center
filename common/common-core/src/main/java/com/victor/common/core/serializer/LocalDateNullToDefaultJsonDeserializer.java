package com.victor.common.core.serializer;

import cn.hutool.core.date.DateTime;
import cn.hutool.core.date.DateUtil;
import cn.hutool.core.date.LocalDateTimeUtil;
import com.victor.common.core.constant.DefaultNullConstants;
import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonMappingException;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * @author yangkuang
 * @date 2023-04-28
 */
public class LocalDateNullToDefaultJsonDeserializer extends JsonDeserializer<LocalDate> {

    @Override
    public LocalDate deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JacksonException {
        String text = p.getText().trim();
        if (text.trim().length() == 0) {
            return DefaultNullConstants.LOCAL_DATE;
        }
        DateTime dateTime = DateUtil.parse(text);
        LocalDateTime localDateTime = LocalDateTimeUtil.of(dateTime);
        return localDateTime == null ? null :localDateTime.toLocalDate();
    }

    @Override
    public LocalDate getNullValue(DeserializationContext ctxt) throws JsonMappingException {
        return DefaultNullConstants.LOCAL_DATE;
    }

}
