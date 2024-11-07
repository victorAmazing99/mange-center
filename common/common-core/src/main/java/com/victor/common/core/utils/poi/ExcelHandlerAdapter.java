package com.victor.common.core.utils.poi;

/**
 * @author victor
 * @ClassName ExcelHandlerAdapter.java
 * @company
 * @Description Excel数据格式处理适配器
 * @createTime 2022年11月09日 10:48:00
 */
public interface ExcelHandlerAdapter {
    /**
     * 格式化
     *
     * @param value 单元格数据值
     * @param args excel注解args参数组
     *
     * @return 处理后的值
     */
    Object format(Object value, String[] args);
}
