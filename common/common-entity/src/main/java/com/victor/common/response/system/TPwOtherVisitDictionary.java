package com.victor.common.response.system;

import com.victor.common.entity.system.SysDictionary;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

@Data
public class TPwOtherVisitDictionary {

    @ApiModelProperty(value = "本次服务类型")
    private  List<SysDictionary> serviceCategory;

    @ApiModelProperty(value = "随访方式")
    private List<SysDictionary> visitMode;

    @ApiModelProperty(value = "胎位")
    private List<SysDictionary> fetalPosition;

    @ApiModelProperty(value = "尿蛋白、尿糖、尿酮体、尿潜血")
    private List<SysDictionary> uroprotein;

    @ApiModelProperty(value = "免费血清学产前筛查")
    private List<SysDictionary> freeSerologicalScreening;

    @ApiModelProperty(value = "保健指导2")
    private List<SysDictionary> guidance2;

    @ApiModelProperty(value = "保健指导3")
    private List<SysDictionary> guidance3;

    @ApiModelProperty(value = "保健指导4-5")
    private List<SysDictionary> guidance4;

    @ApiModelProperty(value = "转诊结果")
    private List<SysDictionary> referralResult;




}
