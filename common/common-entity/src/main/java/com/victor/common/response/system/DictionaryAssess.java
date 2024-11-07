package com.victor.common.response.system;

import com.victor.common.entity.system.SysDictionary;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

/**
 * 评估字典
 */
@Data
public class DictionaryAssess {

    @ApiModelProperty("已患疾病字典")
    private List<SysDictionary> assessDisease;

    @ApiModelProperty("签约人群分类字典")
    private List<SysDictionary> qyyhCategory;

    @ApiModelProperty("既往史疾病字典")
    private List<SysDictionary> previousDisease;

    @ApiModelProperty("中医药体质字典")
    private List<SysDictionary> tcmConstitution;

    @ApiModelProperty("饮食习惯字典")
    private List<SysDictionary> eatingHabits;

    @ApiModelProperty("摄盐情况字典")
    private List<SysDictionary> saltIntake;

    @ApiModelProperty("运动频率字典")
    private List<SysDictionary> exerciseFrequency;

    @ApiModelProperty("吸烟状况字典")
    private List<SysDictionary> smokingStatus;

    @ApiModelProperty("饮酒频率字典")
    private List<SysDictionary> drinkingFrequency;

    @ApiModelProperty("评估报告结果字典")
    private List<SysDictionary> assessReportResult;
}
