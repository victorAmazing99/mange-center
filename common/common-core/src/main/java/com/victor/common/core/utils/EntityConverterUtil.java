package com.victor.common.core.utils;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.victor.common.core.utils.bean.BeanUtils;

import java.util.List;
import java.util.stream.Collectors;

/**
 * 实体类转工具类
 */
public class EntityConverterUtil {

    /**
     * Page转换
     * @param sourcePage
     * @param targetType
     * @param <T>
     * @param <R>
     * @return
     */
    public static <T, R> Page<R> convertPage(Page<T> sourcePage, Class<R> targetType) {
        Page<R> rPage = new Page<>();
        BeanUtils.copyProperties(sourcePage, rPage);
        rPage.setRecords(convertList(sourcePage.getRecords(), targetType));
        return rPage;
    }

    /**
     * List转换
     * @param sourceList
     * @param targetType
     * @param <T>
     * @param <R>
     * @return
     */
    public static <T, R> List<R> convertList(List<T> sourceList, Class<R> targetType) {
        return sourceList.stream().map(source -> convert(source, targetType)).collect(Collectors.toList());
    }

    /**
     * 实体类转换
     * @param source
     * @param targetType
     * @param <T>
     * @param <R>
     * @return
     */
    public static <T, R> R convert(T source, Class<R> targetType) {
        R target = null;
        try {
            target = targetType.getDeclaredConstructor().newInstance();
        } catch (Exception e) {
            throw new RuntimeException("实体类的类型转换错误");
        }
        BeanUtils.copyProperties(source, target);
        return target;
    }
}
