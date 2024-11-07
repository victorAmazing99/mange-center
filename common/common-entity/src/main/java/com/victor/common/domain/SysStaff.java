package com.victor.common.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;

/**
 * <p>
 * 员工信息表
 * </p>
 *
 * @author zy
 * @since 2022-11-24
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@ApiModel(value="SysStaff对象", description="员工信息表")
public class SysStaff implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "主键")
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "员工编码")
    private String staffCode;

    @ApiModelProperty(value = "员工姓名")
    private String staffName;

    @ApiModelProperty(value = "省code(省市县字典表pcc_code)")
    private String provinceCode;

    @ApiModelProperty(value = "市code(省市县字典表pcc_code)")
    private String cityCode;

    @ApiModelProperty(value = "性别代码(0 女 1 男 )")
    private String sexCode;

    @ApiModelProperty(value = "联系方式")
    private String staffPhone;

    @ApiModelProperty(value = "邮箱")
    private String staffEmail;

    @ApiModelProperty(value = "职称代码(sys_dictionary字典表dic_code)")
    private String positionCode;

    @ApiModelProperty(value = "是否在职(0 不在职 1 在职)")
    private String isOnJob;

    @ApiModelProperty(value = "入职日期")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date startToJobDatetime;

    @ApiModelProperty(value = "离职日期")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date quitJobDatetime;

    @ApiModelProperty(value = "部门主管编码")
    private String departmentHeadCode;

    @ApiModelProperty(value = "部门主管名称")
    private String departmentHeadName;

    @ApiModelProperty(value = "启用状态(0 不启用 1 启用)")
    private String status;

    @ApiModelProperty(value = "备注")
    private String remark;

    @ApiModelProperty(value = "更新时间(最后更新时间)")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updateTime;

    @ApiModelProperty(value = "创建时间")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createTime;

    @ApiModelProperty(value = "创建者id")
    private Long createById;

    @ApiModelProperty(value = "更新者id")
    private Long updateById;

    @ApiModelProperty(value = "删除标志（0 删除 1 不删除）")
    private String delFlag;


}
