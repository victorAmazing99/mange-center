package com.victor.common.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * @author wss
 * @date 2023/3/1
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@ApiModel(value="SysStaff对象响应实体", description="员工信息表")
public class SysStaffResp {

    @ApiModelProperty(value = "员工id")
    private Long staffId;

    @ApiModelProperty(value = "员工编码")
    private String staffCode;

    @ApiModelProperty(value = "员工姓名")
    private String staffName;

    @ApiModelProperty(value = "角色")
    private String roleName;
}
