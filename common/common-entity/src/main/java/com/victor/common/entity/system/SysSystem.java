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
 * 系统信息表
 * </p>
 *
 * @author victor
 * @since 2022年11月28日
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("SYS_SYSTEM")
@ApiModel(value = "SysSystem对象", description = "系统信息表")
public class SysSystem implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("主键")
    @TableId(value = "ID", type = IdType.AUTO)
    private Integer id;

    @ApiModelProperty("系统名称")
    @TableField("NAME")
    private String name;

    @ApiModelProperty("ICON图标")
    @TableField("IMAGE")
    private String image;


    @ApiModelProperty("ICON图标")
    @TableField("READ_ONLY_IMAGE")
    private String readOnlyImage;

    @ApiModelProperty("请求路径")
    @TableField("PATH")
    private String path;


}
