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
 * 机构信息表
 * </p>
 *
 * @author victor
 * @since 2022年11月28日
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("SYS_AGENCY")
@ApiModel(value = "SysAgency对象", description = "机构信息表")
public class SysAgency implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("主键")
    @TableId(value = "ID", type = IdType.AUTO)
    private Integer id;

    @ApiModelProperty("机构号")
    @TableField("ORG_CODE")
    private String orgCode;

    @ApiModelProperty("机构名称")
    @TableField("ORG_NAME")
    private String orgName;

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

    @ApiModelProperty("简称")
    @TableField("ABBREVIATION")
    private String abbreviation;

    @ApiModelProperty("机构类别代码")
    @TableField("ORG_CATEGORY_CODE")
    private String orgCategoryCode;

    @ApiModelProperty("机构类别")
    @TableField("ORG_CATEGORY_NAME")
    private String orgCategoryName;

    @ApiModelProperty("机构图片")
    @TableField(value = "ORG_PIC")
    private String orgPic;

    @ApiModelProperty("二维码图片")
    @TableField("QR_CODE_PIC")
    private String qrCodePic;

    @ApiModelProperty("公众号名称")
    @TableField("OFFICIAL_NAME")
    private String officialName;

    @ApiModelProperty("停用（0-启用，1-停用）")
    @TableField("CLOSE_STATUS")
    private String closeStatus;

    @ApiModelProperty("规则系统类型（1-本系统，2-第三方）")
    @TableField("RULE_SYSTEM_TYPE")
    private Integer ruleSystemType;

}
