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
 * 角色菜单表
 * </p>
 *
 * @author victor
 * @since 2022年11月28日
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("SYS_ROLE_MENU")
@ApiModel(value = "SysRoleMenu对象", description = "角色菜单表")
public class SysRoleMenu implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("主键")
    @TableId(value = "ID", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty("所属系统")
    @TableField("SYSTEM_ID")
    private Long systemId;

    @ApiModelProperty("角色Id")
    @TableField("ROLE_ID")
    private Long roleId;

    @ApiModelProperty("菜单ID")
    @TableField("MENU_ID")
    private Long menuId;


}
