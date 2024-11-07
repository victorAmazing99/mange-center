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
 * 用户角色表
 * </p>
 *
 * @author victor
 * @since 2022年11月28日
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("SYS_USER_ROLE")
@ApiModel(value = "SysUserRole对象", description = "用户角色表")
public class SysUserRole implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("主键")
    @TableId(value = "ID", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty("用户Id")
    @TableField("USER_ID")
    private Long userId;

    @ApiModelProperty("系统id")
    @TableField("SYSTEM_ID")
    private Long systemId;

    @ApiModelProperty("角色id")
    @TableField("ROLE_ID")
    private Long roleId;


}
