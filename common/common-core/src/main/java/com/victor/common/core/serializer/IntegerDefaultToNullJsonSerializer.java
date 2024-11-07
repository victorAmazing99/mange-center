package com.victor.common.core.serializer;

import com.victor.common.core.constant.DefaultNullConstants;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.IOException;
import java.util.Objects;

/**
 * -1 -> null
 * @author wss
 * @date 2023/4/24
 */
public class IntegerDefaultToNullJsonSerializer extends JsonSerializer<Integer> {

    @Override
    public void serialize(Integer val, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        if (Objects.equals(val, DefaultNullConstants.INTEGER)){
            jsonGenerator.writeNull();
        }else {
            jsonGenerator.writeNumber(val);
        }
    }
}