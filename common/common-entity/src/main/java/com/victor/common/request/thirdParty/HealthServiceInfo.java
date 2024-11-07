package com.victor.common.request.thirdParty;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
@Data
public class HealthServiceInfo {
    @ApiModelProperty("服务方式代码（1-门诊，2-电话，3-微信，4-视频，5-云服务，6-上门随访，7-AI随访，8-短信，9-其他）")
    private String serviceType;

    @ApiModelProperty("服务内容描述")
    private String serviceContentDesc;

    @ApiModelProperty("服务内容")
    private String serviceContent;

    @ApiModelProperty("服务日期")
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date serviceDate;

    @ApiModelProperty("0:满意;1:基本满意;2:不满意")
    private Integer serviceSatisfiedLevel;

    @ApiModelProperty("服务标识")
    private String serviceID;
}
