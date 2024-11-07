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
import java.util.Date;

/**
 * <p>
 * 访问日志表
 * </p>
 *
 * @author victor
 * @since 2022年11月28日
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("SYS_LOGIN_LOG")
@ApiModel(value = "SysLoginLog对象", description = "访问日志表")
public class SysLoginLog implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("主键")
    @TableId(value = "ID", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty("登录名")
    @TableField("USER_NAME")
    private String userName;

    @ApiModelProperty("描述")
    @TableField("MSG")
    private String msg;

    @ApiModelProperty("状态")
    @TableField("STATUS")
    private Integer status;

    @ApiModelProperty("IP地址")
    @TableField("IPADDR")
    private String ipaddr;

    @ApiModelProperty("访问时间")
    @TableField("ACCESS_TIME")
    private Date accessTime;


}
