package com.victor.common.request.thirdParty;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

/**
 * 第三方请求数据(医丞)
 */
@Data
public class HealthServiceRequest {
    @ApiModelProperty("居民唯一ID")
    private String personId;

    @ApiModelProperty("服务数据")
    private List<HealthServiceInfo> serviceInfo;




}
