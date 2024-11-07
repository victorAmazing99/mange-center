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
 * 角色表
 * </p>
 *
 * @author victor
 * @since 2022年11月28日
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("SYS_ROLE")
@ApiModel(value = "SysRole对象", description = "角色表")
public class SysRole implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("主键")
    @TableId(value = "ID", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty("角色编码")
    @TableField("ROLE_CODE")
    private String roleCode;

    @ApiModelProperty("角色名")
    @TableField("NAME")
    private String name;

    @ApiModelProperty("所属系统")
    @TableField("SYSTEM_ID")
    private Long systemId;

    @ApiModelProperty("系统名称")
    @TableField("SYSTEM_NAME")
    private String systemName;

    @ApiModelProperty("描述")
    @TableField("DESCRIPTION")
    private String description;

    @ApiModelProperty("是否选中")
    @TableField(exist = false)
    private Boolean isChecked = false;

    @ApiModelProperty("序号")
    @TableField(exist = false)
    private Integer serial;

}
