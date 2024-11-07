package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 隶属风险因素枚举
 */
@Getter
@AllArgsConstructor
public enum RiskFactorEnum {
    HIGHRISKOFHYPERTENSION("highRiskOfHypertension", "高血压高风险"),
    HIGHRISKOFDIABETES("highRiskOfDiabetes", "糖尿病高风险"),
    HIGHRISKOFSTROKE("highRiskOfStroke", "脑卒中高风险"),
    HIGHRISKOFCHRONICKIDNEYDISEASE("highRiskOfChronicKidneyDisease", "慢性肾病高风险"),
    HIGHRISKOFPULMONARYDISEASE("highRiskOfPulmonaryDisease", "慢性阻塞性肺疾病高风险"),
    HIGHRISKOFLUNGCANCER("highRiskOfLungCancer", "肺癌高风险"),
    HIGHRISKOFRECTALCANCER("highRiskOfRectalCancer", "结直肠癌高风险"),
    HIGHRISKOFBREASTCANCER("highRiskOfBreastCancer", "乳腺癌高风险"),
    HIGHRISKOFLIVERCANCER("highRiskOfLiverCancer", "肝癌高风险"),
    HIGHRISKOFGASTRICCANCER("highRiskOfGastricCancer", "胃癌高风险"),
    HIGHRISKOFCERVICALCANCER("highRiskOfCervicalCancer", "宫颈癌高风险");


    private final String code;

    private final String value;

    public static RiskFactorEnum getRiskFactorEnum(String code){
        for (RiskFactorEnum  itemEnum : RiskFactorEnum.values()) {
            if (itemEnum.getCode().equals(code)){
                return itemEnum;
            }
        }
        return null;
    }
}
