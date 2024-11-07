package com.victor.common.response.system;

import com.victor.common.entity.system.SysDictionary;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

@Data
public class TPwFirstVisitDictionary {

    @ApiModelProperty(value = "既往史")
    private List<SysDictionary> diseaseHistory;

    @ApiModelProperty(value = "个人史")
    private List<SysDictionary> personalHistory;

    @ApiModelProperty(value = "家庭史")
    private List<SysDictionary> familyHistory;

    @ApiModelProperty(value = "尿蛋白、尿糖、尿酮体、尿潜血")
    private List<SysDictionary> uroprotein;

    @ApiModelProperty(value = "血型")
    private List<SysDictionary> bloodType;

    @ApiModelProperty(value = "rh血型")
    private List<SysDictionary> rhBloodType;

    @ApiModelProperty(value = "阴道分泌物")
    private List<SysDictionary> vaginalDischarge;

    @ApiModelProperty(value = "阴道清洁度")
    private List<SysDictionary> vaginalCleanliness;

    @ApiModelProperty(value = "乙型肝炎病毒表面抗原")
    private List<SysDictionary> hbsag;

    @ApiModelProperty(value = "乙型肝炎病毒e抗原")
    private List<SysDictionary> hbveag;

    @ApiModelProperty(value = "乙型肝炎病毒表面抗体")
    private List<SysDictionary> hbsab;

    @ApiModelProperty(value = "乙型肝炎病毒e抗体")
    private List<SysDictionary> hbseab;

    @ApiModelProperty(value = "乙型肝炎病毒核心抗体")
    private List<SysDictionary> hbcab;

    @ApiModelProperty(value = "梅毒血清学试验")
    private List<SysDictionary> serologicalSyphili;

    @ApiModelProperty(value = "HIV抗体检测")
    private List<SysDictionary> hivAntibody;

    @ApiModelProperty(value = "总体评估")
    private List<SysDictionary> evaluation;

    @ApiModelProperty(value = "保健指导")
    private List<SysDictionary> guidance;

    @ApiModelProperty(value = "建册情况")
    private List<SysDictionary> register;

    @ApiModelProperty(value = "转诊结果")
    private List<SysDictionary> referralResult;
}
