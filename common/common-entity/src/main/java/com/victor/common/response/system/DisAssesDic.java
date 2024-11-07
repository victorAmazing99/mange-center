package com.victor.common.response.system;

import com.victor.common.entity.system.SysDictionary;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

@Data
public class DisAssesDic {
    @ApiModelProperty("康复满意程度")
    private List<SysDictionary> satisfactionDegreeDic;
    @ApiModelProperty("服务效果")
    private List<SysDictionary> serviceEffectDic;
}
