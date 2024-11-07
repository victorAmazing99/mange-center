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
public class DoubleDefaultToNullJsonSerializer extends JsonSerializer<Double> {

    @Override
    public void serialize(Double val, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        if (Objects.equals(val, DefaultNullConstants.DOUBLE)){
            jsonGenerator.writeNull();
        }else {
            jsonGenerator.writeNumber(val);
        }
    }
}
