package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * @author victor
 * @ClassName UserStatus.java
 * @company
 * @Description 逾期
 * @createTime 2022年11月09日 11:53:00
 */
@Getter
@AllArgsConstructor
public enum TimeOutStatus {
    TIMEOUT_1("1", "已逾期"), TIMEOUT_2("2", "2周内随访"), TIMEOUT_3("3", "未逾期"),;

    private final String code;
    private final String value;
}
