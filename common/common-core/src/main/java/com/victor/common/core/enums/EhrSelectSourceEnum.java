package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 档案终结
 */
@Getter
@AllArgsConstructor
public enum EhrSelectSourceEnum {
    SNR("snr", "老年人管理"),
    SIGN("sign", "家庭医生签约管理");

    private final String code;

    private final String value;
}
