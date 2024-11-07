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

/**
 * <p>
 * 子机构信息表
 * </p>
 *
 * @author victor
 * @since 2022年11月28日
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("SYS_SUB_AGENCY")
@ApiModel(value = "SysSubAgency对象", description = "子机构信息表")
public class SysSubAgency implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("主键")
    @TableId(value = "ID", type = IdType.AUTO)
    private Integer id;

    @ApiModelProperty("父机构号")
    @TableField("ORG_CODE")
    private String orgCode;

    @ApiModelProperty("子机构号")
    @TableField("ORG_SUB_CODE")
    private String orgSubCode;

    @ApiModelProperty("子机构名称")
    @TableField("ORG_SUB_NAME")
    private String orgSubName;

    @ApiModelProperty("登记号")
    @TableField("REGISTER_NUM")
    private String registerNum;

    @ApiModelProperty("等级编码")
    @TableField("LEVEL_CODE")
    private String levelCode;

    @ApiModelProperty("等级")
    @TableField("LEVEL_NAME")
    private String levelName;

    @ApiModelProperty("负责人")
    @TableField("PRINCIPAL")
    private String principal;

    @ApiModelProperty("详细地址")
    @TableField("ADDRESS")
    private String address;

    @ApiModelProperty("电话")
    @TableField("PHONE")
    private String phone;

    @ApiModelProperty("类型(0-父级 1-子级)")
    @TableField("TYPE")
    private Integer type;

    @ApiModelProperty("介绍")
    @TableField("INTRODUCE")
    private String introduce;
}
