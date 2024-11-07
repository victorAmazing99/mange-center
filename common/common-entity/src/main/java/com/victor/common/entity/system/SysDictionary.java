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
 * 字典表
 * </p>
 *
 * @author victor
 * @since 2022年12月07日
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("SYS_DICTIONARY")
@ApiModel(value = "SysDictionary对象", description = "字典表")
public class SysDictionary implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("主键")
    @TableId(value = "ID", type = IdType.AUTO)
    private Integer id;

    @ApiModelProperty("字段名")
    @TableField("FIELD_NAME")
    private String fieldName;

    @ApiModelProperty("字典国标码")
    @TableField("SYSTEM_TYPE")
    private String systemType;

    @ApiModelProperty("编码")
    @TableField("CODE")
    private String code;

    @ApiModelProperty("值")
    @TableField("VALUE")
    private String value;

    @ApiModelProperty("注释")
    @TableField("REMARK")
    private String remark;

    @ApiModelProperty("机构类别标识")
    @TableField(exist = false)
    private boolean orgCategoryIdentfy;


}
