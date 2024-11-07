package com.victor.common.request.system;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class UserAble {
    @ApiModelProperty("主键")
    private Long id;
    @ApiModelProperty("是否停用（0-启用，1-停用）")
    private Integer enable;
}
