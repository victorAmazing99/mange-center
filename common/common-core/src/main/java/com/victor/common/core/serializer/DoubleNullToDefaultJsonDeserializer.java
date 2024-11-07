package com.victor.common.core.serializer;

import com.victor.common.core.constant.DefaultNullConstants;
import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonMappingException;

import java.io.IOException;

/**
 * null -> -1
 * @author yangkuang
 * @date 2023-04-28
 */
public class DoubleNullToDefaultJsonDeserializer extends JsonDeserializer<Double> {

    @Override
    public Double deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JacksonException {
        String text = p.getText().trim();
        return text.length() == 0 ? null : Double.valueOf(text);
    }

    @Override
    public Double getNullValue(DeserializationContext ctxt) throws JsonMappingException {
        return DefaultNullConstants.DOUBLE;
    }

}
