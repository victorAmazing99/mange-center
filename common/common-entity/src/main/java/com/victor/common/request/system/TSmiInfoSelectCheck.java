package com.victor.common.request.system;

import com.victor.common.request.PageRequest;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class TSmiInfoSelectCheck extends PageRequest {
    @ApiModelProperty("姓名")
    private String name;

    @ApiModelProperty("身份证")
    private String idcard;

    @ApiModelProperty("上次随访日期(开始时间)")
    private String startVisitTime;

    @ApiModelProperty("上次随访日期(结束时间)")
    private String lastVisitTime;

    @ApiModelProperty("登记机构")
    private  String createOrgCode;

    @ApiModelProperty("开始年龄")
    private Integer startAge;

    @ApiModelProperty("结束年龄")
    private Integer lastAge;

    @ApiModelProperty("登记时间(开始时间)")
    private String startRegisterTime;

    @ApiModelProperty("登记时间(结束时间)")
    private String lastRegisterTime;

    @ApiModelProperty("服药依从性")
    private Integer medicationComplianceCode;
    @ApiModelProperty("管理状态")
    private Integer closedStatus;





}
