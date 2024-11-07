package com.victor.common.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * <p>
 * 辖区信息表
 * </p>
 *
 * @author zy
 * @since 2022-11-30
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@ApiModel(value="BusJurisdiction对象", description="辖区信息表")
public class BusJurisdiction implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "主键")
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "辖区编码")
    private String jurisdictionCode;

    @ApiModelProperty(value = "辖区级别编码(字典表code)")
    private String levelCode;

    @ApiModelProperty(value = "上级辖区code")
    private String parentCode;

    @ApiModelProperty(value = "销售岗位员工编码")
    private String staffCode;

    @ApiModelProperty(value = "销售岗位员工姓名")
    private String staffName;

    @ApiModelProperty(value = "启用状态(0 不启用 1 启用)")
    private String status;

    @ApiModelProperty(value = "备注")
    private String remark;

    @ApiModelProperty(value = "创建时间")
    private LocalDateTime createTime;

    @ApiModelProperty(value = "更新时间(最后更新时间)")
    private LocalDateTime updateTime;

    @ApiModelProperty(value = "创建者id")
    private Long createById;

    @ApiModelProperty(value = "更新者id")
    private Long updateById;

    @ApiModelProperty(value = "删除标志（0 删除 1 不删除）")
    private String delFlag;

    @ApiModelProperty(value = "辖区名称")
    private String jurisdictionName;

    @ApiModelProperty(value = "上级销售岗位code")
    private String parentSellCode;

}
