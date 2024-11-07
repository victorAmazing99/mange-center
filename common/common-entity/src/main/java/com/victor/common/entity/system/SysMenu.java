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
 * 菜单表
 * </p>
 *
 * @author victor
 * @since 2022年11月28日
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("SYS_MENU")
@ApiModel(value = "SysMenu对象", description = "菜单表")
public class SysMenu implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("主键")
    @TableId(value = "ID", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty("所属系统Id")
    @TableField("SYSTEM_ID")
    private Long systemId;

    @ApiModelProperty("菜单名称")
    @TableField("NAME")
    private String name;

    @ApiModelProperty("父级Id")
    @TableField("PARENT_ID")
    private Long parentId;

    @ApiModelProperty("路径")
    @TableField("URL")
    private String url;

    @ApiModelProperty("组件")
    @TableField("COMPONENT")
    private String component;

    @ApiModelProperty("图标")
    @TableField("ICON")
    private String icon;

    @ApiModelProperty("隐藏（0-否，1-是）")
    @TableField("HIDDEN")
    private Boolean hidden;

    @ApiModelProperty("附加（0-否，1-是）")
    @TableField("AFFIX")
    private Boolean affix;

    @ApiModelProperty("abi的id")
    @TableField("ABI_ID")
    private Integer abiId;

    @ApiModelProperty("是否大屏（0-否，1-是）")
    @TableField("IS_SCREEN")
    private Integer isScreen;

}
