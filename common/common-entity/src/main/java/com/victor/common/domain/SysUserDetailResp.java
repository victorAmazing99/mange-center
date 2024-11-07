package com.victor.common.domain;


import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;

/**
 * @author victorl
 * @date 2023/3/1
 */
@Data
public class SysUserDetailResp implements Serializable {
    private static final long serialVersionUID = -5837649269941235059L;

    @ApiModelProperty(value = "用户ID")
    private Long id;

    @ApiModelProperty(value = "用户编码")
    private String userCode;

    @ApiModelProperty(value = "用户名称")
    private String userName;

    @ApiModelProperty(value = "用户密码")
    private String password;

    @ApiModelProperty(value = "员工选择")
    private String staffInfo;

    @ApiModelProperty(value = "员工编码")
    private String staffCode;

    @ApiModelProperty(value = "员工姓名")
    private String staffName;

    @ApiModelProperty(value = "手机号码")
    private String staffPhone;

    @ApiModelProperty(value = "邮箱")
    private String staffEmail;

    @ApiModelProperty(value = "启用状态(0 停用 1 启用)")
    private String status;

    @ApiModelProperty(value = "备注信息")
    private String remark;

    @ApiModelProperty(value = "crm前端系统（0 不开启 1 开启）")
    private String crmFromtSystem;

    @ApiModelProperty(value = "crm后台系统（0 不开启 1 开启）")
    private String crmServeSystem;

    @ApiModelProperty(value = "选择crm前端系统id数组")
    private Long[] crmFromtSystemIds;

    @ApiModelProperty(value = "选择crm后端系统id数组")
    private Long[] crmServeSystemIds;

    @ApiModelProperty(value = "岗位编码")
    private String postCode;
}
