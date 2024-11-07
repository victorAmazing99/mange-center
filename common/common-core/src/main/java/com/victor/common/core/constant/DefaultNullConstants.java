package com.victor.common.core.constant;

import cn.hutool.core.date.DateUtil;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

/**
 * 数据库中默认空值对应常量类
 *
 * @author yangkuang
 * @date 2023-04-27
 */
public class DefaultNullConstants {

    /**
     * Date：1900-01-01 00:00:00
     */
    public static final Date DATE = DateUtil.parse("1900-01-01 00:00:00");

    /**
     *  LocalDateTime：1900-01-01
     */
    public static final LocalDateTime LOCAL_DATE_TIME = LocalDateTime.of(1900, 1,1,0,0,0);

    /**
     *  LocalDate：1900-01-01
     */
    public static final LocalDate LOCAL_DATE = LocalDate.of(1900, 1,1);

    /**
     * Integer：-1
     */
    public static final Integer INTEGER = -1;

    /**
     * Double：-1
     */
    public static final Double DOUBLE = (double) -1;

    /**
     * BigDecimal：-1
     */
    public static final BigDecimal BIG_DECIMAL = BigDecimal.valueOf(-1);

}
