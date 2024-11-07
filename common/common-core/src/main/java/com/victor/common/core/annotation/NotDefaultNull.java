package com.victor.common.core.annotation;

import com.victor.common.core.validator.NotDefaultNullConstraintValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * 校验自定义空数据为null
 * CustomNotNullConstraintValidator-校验规则文件
 *
 * @author yangkuang
 * @date 2023-04-27
 */
@Target({ElementType.METHOD,ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = {NotDefaultNullConstraintValidator.class})
public @interface NotDefaultNull {

    String message() default "{javax.validation.constraints.NotNull.message}";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

}
