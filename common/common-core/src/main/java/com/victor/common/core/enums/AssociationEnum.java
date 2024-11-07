package com.victor.common.core.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum AssociationEnum {
    PAY_METHOD("pay_method", ""),
    HISTORY_OF_DRUG_ALLERGY("history_of_drug_allergy", ""),
    HISTORY_OF_EXPOSURE("history_of_exposure", ""),
    HISTORY_OF_DISEASE("history_of_disease", ""),
    HISTORY_OF_OPERATION("history_of_operation", ""),
    HISTORY_OF_TRAUMA("history_of_trauma", ""),
    HISTORY_OF_BLOOD("history_of_blood", ""),
    FAMILY_HISTORY_OF_FATHER("family_history_of_father", "父"),
    FAMILY_HISTORY_OF_MOTHER("family_history_of_mother", "母"),
    FAMILY_HISTORY_OF_SIBLINGS("family_history_of_siblings", "兄弟姐妹"),
    FAMILY_HISTORY_OF_CHILDREN("family_history_of_children", "儿"),
    FAMILY_HISTORY_OF_DAUGHTER("family_history_of_daughter", "女"),
    DISABLITY_TYPE("disablity_type", ""),
    HEREDITY_HISTORY("heredity_history", "");

    private final String code;

    private final String value;
}