package com.victor.common.request.system;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class SysUserPage {

    @ApiModelProperty("机构号")
    private String orgCode;
    @ApiModelProperty("姓名")
    private String name;
    @ApiModelProperty("人员类别")
    private String categoryCode;
}
