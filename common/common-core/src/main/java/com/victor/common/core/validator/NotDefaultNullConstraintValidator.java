package com.victor.common.core.validator;

import com.victor.common.core.annotation.NotDefaultNull;
import com.victor.common.core.constant.DefaultNullConstants;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

/**
 * 自定义空数据为null的校验规则
 * 目前仅校验日期类型，有必要可再增加
 *
 * @author yangkuang
 * @date 2023-04-27
 */
public class NotDefaultNullConstraintValidator implements ConstraintValidator<NotDefaultNull, Object> {

    @Override
    public void initialize(NotDefaultNull constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(Object o, ConstraintValidatorContext constraintValidatorContext) {
        if (null == o) {
            return false;
        }
        // 前端直接输入1900-01-01等时间会校验通过，null/""转成的1900-01-01等会校验失败
        if (o instanceof Date) {
            return o != DefaultNullConstants.DATE;
        } else if (o instanceof LocalDateTime) {
            return o != DefaultNullConstants.LOCAL_DATE_TIME;
        } else if (o instanceof LocalDate) {
            return o != DefaultNullConstants.LOCAL_DATE;
        } else if (o instanceof Integer) {
            return o != DefaultNullConstants.INTEGER;
        } else if (o instanceof Double) {
            return o != DefaultNullConstants.DOUBLE;
        } else if (o instanceof BigDecimal) {
            return o != DefaultNullConstants.BIG_DECIMAL;
        }
        return true;
    }
}
