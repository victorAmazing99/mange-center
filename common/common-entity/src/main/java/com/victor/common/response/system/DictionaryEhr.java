package com.victor.common.response.system;

import com.victor.common.entity.system.SysDictionary;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

/**
 * 健康档案字典
 */
@Data
public class DictionaryEhr {

    @ApiModelProperty("性别字典")
    private List<SysDictionary> sexDic;

    @ApiModelProperty("民族字典")
    private List<SysDictionary> nationDic;

    @ApiModelProperty("婚姻状况字典")
    private List<SysDictionary> marriageDic;

    @ApiModelProperty("职业字典")
    private List<SysDictionary> occupationDic;

    @ApiModelProperty("医疗费用支付方式字典")
    private List<SysDictionary> paymentDic;

    @ApiModelProperty("血型字典")
    private List<SysDictionary> bloodTypeDic;

    @ApiModelProperty("Rh血型字典")
    private List<SysDictionary> rhBloodTypeDic;

    @ApiModelProperty("药物过敏字典")
    private List<SysDictionary> allergyDic;

    @ApiModelProperty("环境危险因素字典")
    private List<SysDictionary> exposureDic;

    @ApiModelProperty("疾病字典")
    private List<SysDictionary> diseaseDic;

    @ApiModelProperty("家庭关系字典")
    private List<SysDictionary> relationDic;

    @ApiModelProperty("残疾情况字典")
    private List<SysDictionary> disabilityDic;

    @ApiModelProperty("常住类型字典")
    private List<SysDictionary> residenceDic;

    @ApiModelProperty("文化程度字典")
    private List<SysDictionary> degreeDic;

    @ApiModelProperty("居住情况字典")
    private List<SysDictionary> livingDic;

    @ApiModelProperty("厨房排风设施字典")
    private List<SysDictionary> exhaustDic;

    @ApiModelProperty("燃料类型字典")
    private List<SysDictionary> fuelDic;

    @ApiModelProperty("厕所类别字典")
    private List<SysDictionary> toiletDic;

    @ApiModelProperty("饮水字典")
    private List<SysDictionary> waterDic;

    @ApiModelProperty("禽畜栏字典")
    private List<SysDictionary> livestockDic;

    @ApiModelProperty("人群分类字典")
    private List<SysDictionary> categoryDic;

    @ApiModelProperty("档案状态字典")
    private List<SysDictionary> finalStatusDic;

    @ApiModelProperty("更新方式字典")
    private List<SysDictionary> updateModeDic;
}
