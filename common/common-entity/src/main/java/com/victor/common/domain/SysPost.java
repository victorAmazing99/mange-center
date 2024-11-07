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
 * 岗位信息表
 * </p>
 *
 * @author zy
 * @since 2022-11-24
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@ApiModel(value="SysPost对象", description="岗位信息表")
public class SysPost implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "主键")
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "岗位编码")
    private String postCode;

    @ApiModelProperty(value = "岗位名称")
    private String postName;

    @ApiModelProperty(value = "岗位类型(字典表code)")
    private Integer postTypeCode;

    @ApiModelProperty(value = "启用状态(0 不启用 1 启用)")
    private String status;

    @ApiModelProperty(value = "备注")
    private String remark;

    @ApiModelProperty(value = "更新时间(最后更新时间,岗位管理使用)")
    private LocalDateTime updateTime;

    @ApiModelProperty(value = "创建时间")
    private LocalDateTime createTime;

    @ApiModelProperty(value = "创建者id")
    private Long createById;

    @ApiModelProperty(value = "更新者id")
    private Long updateById;

    @ApiModelProperty(value = "删除标志（0 删除 1 不删除）")
    private String delFlag;

    @ApiModelProperty(value = "sys_dep表主键")
    private Long depId;

    @ApiModelProperty(value = "部门与岗位关系ID(业务使用,按规则生成)")
    private String deptPostId;


}
