package com.victor.common.response.system;

import com.baomidou.mybatisplus.annotation.TableField;
import com.victor.common.entity.system.SysSubAgency;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

/**
 * 机构响应体
 */
@Data
public class OrgInfo {

    @ApiModelProperty("主键")
    private Integer id;

    @ApiModelProperty("机构号")
    private String orgCode;

    @ApiModelProperty("机构名称")
    private String orgName;

    @ApiModelProperty("机构名称")
    private String name;

    @ApiModelProperty("登记号")
    private String registerNum;

    @ApiModelProperty("等级编码")
    private String levelCode;

    @ApiModelProperty("等级")
    private String levelName;

    @ApiModelProperty("负责人")
    private String principal;

    @ApiModelProperty("详细地址")
    private String address;

    @ApiModelProperty("电话")
    private String phone;

    @ApiModelProperty("类型(0-父级 1-子级)")
    private Integer type;

    @ApiModelProperty("介绍")
    private String introduce;

    @ApiModelProperty("简称")
    private String abbreviation;

    @ApiModelProperty("机构类别代码")
    private String orgCategoryCode;

    @ApiModelProperty("机构类别")
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
    private String closeStatus;

    @ApiModelProperty("子机构列表")
    List<SysSubAgency> subList;
}
