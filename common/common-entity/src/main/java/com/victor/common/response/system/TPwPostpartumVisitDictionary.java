package com.victor.common.response.system;

import com.victor.common.entity.system.SysDictionary;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

@Data
public class TPwPostpartumVisitDictionary {

    @ApiModelProperty(value = "本次服务类型")
    private  List<SysDictionary> serviceCategory;

    @ApiModelProperty(value = "产后指导")
    private List<SysDictionary> guidance5;

    @ApiModelProperty(value = "转诊结果")
    private List<SysDictionary> referralResult;




}
