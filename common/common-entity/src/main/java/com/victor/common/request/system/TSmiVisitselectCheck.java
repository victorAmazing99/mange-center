package com.victor.common.request.system;

import com.victor.common.request.PageRequest;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class TSmiVisitselectCheck extends PageRequest {
    @ApiModelProperty("姓名")
    private String name;

    @ApiModelProperty("身份证")
    private String idcard;

    @ApiModelProperty("登记时间(开始时间)")
    private String startRegisterTime;

    @ApiModelProperty("登记时间(结束时间)")
    private String lastRegisterTime;

    @ApiModelProperty("本次随访日期(开始时间)")
    private String startVisitTime;

    @ApiModelProperty("本次随访日期(结束时间)")
    private String lastVisitTime;

    @ApiModelProperty("逾期-1-已逾期 2-2周内随访 3、未逾期")
    private String isTimeOut;
}
