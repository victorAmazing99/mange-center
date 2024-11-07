package com.victor.common.core.serializer;

import com.victor.common.core.constant.DefaultNullConstants;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.IOException;
import java.math.BigDecimal;

/**
 * -1 -> null
 * @author wss
 * @date 2023/4/24
 */
public class BigDecimalDefaultToNullJsonSerializer extends JsonSerializer<BigDecimal> {

    @Override
    public void serialize(BigDecimal val, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        if (DefaultNullConstants.BIG_DECIMAL.compareTo(val) == 0){
            jsonGenerator.writeNull();
        }else {
            jsonGenerator.writeNumber(val);
        }
    }
}
