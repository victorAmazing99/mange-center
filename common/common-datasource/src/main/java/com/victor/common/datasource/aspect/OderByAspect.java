package com.victor.common.datasource.aspect;


import com.baomidou.mybatisplus.core.conditions.ISqlSegment;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.enums.SqlKeyword;
import com.baomidou.mybatisplus.core.metadata.TableFieldInfo;
import com.baomidou.mybatisplus.core.metadata.TableInfo;
import com.baomidou.mybatisplus.core.metadata.TableInfoHelper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.github.yulichang.wrapper.MPJLambdaWrapper;
import com.github.yulichang.wrapper.segments.Select;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

/**
 * @author victor
 * @date 2023-05-15
 */
@Aspect
@Component
public class OderByAspect {



    @Pointcut("(execution(public * com.github.yulichang.base.mapper.MPJJoinMapper.selectJoinPage(..)))" +
            "|| (execution(public * com.baomidou.mybatisplus.extension.service.IService.page(..)))")
    public void dicTypeConvert() {
    }



    @Before("dicTypeConvert()")
    public void doBefore1(JoinPoint joinPoint) throws Throwable {
        try {


            List<Object> objects = Arrays.asList(joinPoint.getArgs());

            for (Object object : objects) {
                if (object instanceof Page) {
                    Page page = (Page) object;
                    if (page.getOrders() != null && page.getOrders().size() > 0) {
                        break;
                    }
                }
                //处理多表查询
                if (object instanceof MPJLambdaWrapper) {
                    MPJLambdaWrapper wrapper = (MPJLambdaWrapper) object;
                    if (wrapper.getExpression() == null || wrapper.getExpression().getOrderBy() == null || wrapper.getExpression().getOrderBy().size() == 0) {
                        Select select = (Select) wrapper.getSelectColumns().get(0);
                        String column = select.getTableAlias() + "." + select.getColumn();
                        wrapper.getExpression().add(SqlKeyword.ORDER_BY, columnToSqlSegment(column), SqlKeyword.DESC);
                    } else {
                        break;
                    }
                }

                //处理单表查询
                if (object instanceof Wrapper) {
                    Wrapper wrapper = (Wrapper) object;
                    if (wrapper.getExpression() == null || wrapper.getExpression().getOrderBy() == null || wrapper.getExpression().getOrderBy().size() == 0) {

                        TableInfo tableInfo = TableInfoHelper.getTableInfo(wrapper.getEntity().getClass());
                        TableFieldInfo fieldInfo = tableInfo.getFieldList().get(0);
                        wrapper.getExpression().add(SqlKeyword.ORDER_BY, columnToSqlSegment(fieldInfo.getColumn()), SqlKeyword.DESC);
                    } else {
                        break;
                    }
                }
            }
        } catch (Exception e) {
        }
    }

    protected final <X> ISqlSegment columnToSqlSegment(String column) {
        return () -> {
            return column;
        };
    }




}
