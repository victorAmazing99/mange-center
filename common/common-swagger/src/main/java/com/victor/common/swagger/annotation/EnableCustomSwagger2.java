package com.victor.common.swagger.annotation;

import com.victor.common.swagger.config.SwaggerAutoConfiguration;
import org.springframework.context.annotation.Import;

import java.lang.annotation.*;

/**
 * @author victor
 * @ClassName EnableCustomSwagger2.java
 * @company
 * @Description
 * @createTime 2022年11月09日 14:25:00
 */
@Target({ ElementType.TYPE })
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@Import({ SwaggerAutoConfiguration.class })
public @interface EnableCustomSwagger2 {
}
