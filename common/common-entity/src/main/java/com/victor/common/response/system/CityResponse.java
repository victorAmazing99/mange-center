package com.victor.common.response.system;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 城市字典响应体
 */

@Data
@ApiModel("城市字典响应体")
public class CityResponse {

    @ApiModelProperty("城市编码")
    private String code;

    @ApiModelProperty("城市名称")
    private String name;
}
