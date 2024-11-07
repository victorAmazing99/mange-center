package com.victor.common.entity.system;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.Date;

/**
 * <p>
 * 操作日志表
 * </p>
 *
 * @author victor
 * @since 2023年01月04日
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("SYS_OPER_LOG")
@ApiModel(value = "SysOperLog对象", description = "操作日志表")
public class SysOperLogInfo implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("主键")
    @TableId(value = "ID", type = IdType.AUTO)
    private BigInteger id;

    @ApiModelProperty("操作模块")
    @TableField("TITLE")
    private String title;

    @ApiModelProperty("业务类型（0其它 1新增 2修改 3删除）")
    @TableField("BUSINESS_TYPE")
    private Integer businessType;

    @ApiModelProperty("请求方法")
    @TableField("METHOD")
    private String method;

    @ApiModelProperty("请求方式")
    @TableField("REQUEST_METHOD")
    private String requestMethod;

    @ApiModelProperty("操作类别（0其它 1后台用户 2手机端用户）")
    @TableField("OPERATOR_TYPE")
    private Integer operatorType;

    @ApiModelProperty("操作人员")
    @TableField("OPER_NAME")
    private String operName;

    @ApiModelProperty("部门名称")
    @TableField("DEPT_NAME")
    private String deptName;

    @ApiModelProperty("请求URL")
    @TableField("OPER_URL")
    private String operUrl;

    @ApiModelProperty("请求IP")
    @TableField("OPER_IP")
    private String operIp;

    @ApiModelProperty("操作地址")
    @TableField("OPER_LOATION")
    private String operLoation;

    @ApiModelProperty("请求参数")
    @TableField("OPER_PARAM")
    private String operParam;

    @ApiModelProperty("返回参数")
    @TableField("JSON_RESULT")
    private String jsonResult;

    @ApiModelProperty("操作状态(0正常1异常)")
    @TableField("STSTUS")
    private Integer ststus;

    @ApiModelProperty("错误消息")
    @TableField("ERROR_MSG")
    private String errorMsg;

    @ApiModelProperty("操作时间")
    @TableField("OPER_TIME")
    private Date operTime;


}
