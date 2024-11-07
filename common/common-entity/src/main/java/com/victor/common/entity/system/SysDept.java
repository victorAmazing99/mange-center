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
 * 科室信息表
 * </p>
 *
 * @author victor
 * @since 2022年11月28日
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("SYS_DEPT")
@ApiModel(value = "SysDept对象", description = "科室信息表")
public class SysDept implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("部门Id")
    @TableId(value = "ID", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty("科室编码")
    @TableField("DEPT_CODE")
    private String deptCode;

    @ApiModelProperty("科室名称")
    @TableField("DEPT_NAME")
    private String deptName;

    @ApiModelProperty("所属机构编码")
    @TableField("ORG_CODE")
    private String orgCode;

    @ApiModelProperty("附属机构编码")
    @TableField("ORG_SUB_CODE")
    private String orgSubCode;


}
