package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ServiceContentEnum {
    HEALTHEDUCATION("1", "健康教育、健康咨询；"),
    FAMILYMEDICINEPROMOTION("2", "家医宣传: 延伸处方、预约转诊、慢病管理等；"),
    FOLLOWUPMANAGEMENT("3", "随访管理：医嘱及用药记录；"),
    SERVICEPROMOTION("4", "服务宣传: 65岁以上老年人免费体检、60岁以上肺炎疫苗接种等；"),
    OTHERSERVICES("5", "其他服务");

    private final String code;

    private final String value;

    public static RiskFactorEnum getServiceContentEnum(String code){
        for (RiskFactorEnum  itemEnum : RiskFactorEnum.values()) {
            if (itemEnum.getCode().equals(code)){
                return itemEnum;
            }
        }
        return null;
    }
}
