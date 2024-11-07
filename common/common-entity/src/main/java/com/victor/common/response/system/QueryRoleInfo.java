package com.victor.common.response.system;

import com.victor.common.entity.system.SysRole;
import com.victor.common.entity.system.SysSystem;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

@Data
public class QueryRoleInfo extends SysSystem {

    @ApiModelProperty("是否选中")
    private Boolean isChecked = false;

    @ApiModelProperty("序号")
    private Integer serial;

    private List<SysRole> roles;
}
