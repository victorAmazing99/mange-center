package com.victor.common.datasource.aspect;


import cn.hutool.core.util.ObjectUtil;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import java.lang.reflect.Field;

/**
 * @author victor
 * @date 2023-08-03
 */
@Aspect
@Component
public class InsertAspect {



    @Pointcut("(execution(public * com.baomidou.mybatisplus.core.mapper.BaseMapper.insert(..)))")
    public void dicTypeConvert() {
    }



    @Before("dicTypeConvert()")
    public void doBefore(JoinPoint joinPoint){
        try {
            Object[] args = joinPoint.getArgs();
            for (Object arg: args) {
                Field[] fields = arg.getClass().getDeclaredFields();
                for (Field field: fields) {
                    field.setAccessible(true);
                    TableId tableId = field.getAnnotation(TableId.class);
                    if (ObjectUtil.isNotEmpty(tableId) && tableId.type() == IdType.AUTO) {
                        field.set(arg, null);
                        break;
                    }
                }
            }
        } catch (Exception e) {
            System.out.println("InsertAspect" + e);
        }
    }

}
