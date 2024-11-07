package com.victor.common.entity.system;

import com.alibaba.excel.annotation.format.DateTimeFormat;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.io.Serializable;

import java.util.Date;

/**
 * <p>
 * 用户信息表
 * </p>
 *
 * @author victor
 * @since 2022年11月28日
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("SYS_USER")
@ApiModel(value = "SysUser对象", description = "用户信息表")
public class SysUser implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("主键")
    @TableId(value = "ID", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty("用户名")
    @TableField("USER_NAME")
    private String userName;

    @ApiModelProperty("密码")
    @TableField("PASSWORD")
    private String password;

    @ApiModelProperty("姓名")
    @TableField("NAME")
    private String name;

    @ApiModelProperty("性别代码")
    @TableField("SEX")
    private String sex;

    @ApiModelProperty("性别")
    @TableField("SEX_NAME")
    private String sexName;

    @ApiModelProperty("电话")
    @TableField("PHONE")
    private String phone;

    @ApiModelProperty("头像")
    @TableField("IMAGE")
    private String image;

    @ApiModelProperty("部门")
    @TableField("DEPT_ID")
    private Long deptId;

    @ApiModelProperty("部门名称")
    @TableField("DEPT_NAME")
    private String deptName;

    @ApiModelProperty("所属机构编码")
    @TableField("ORG_CODE")
    private String orgCode;

    @ApiModelProperty("所属机构名称")
    @TableField("ORG_NAME")
    private String orgName;

    @ApiModelProperty("附属机构编码")
    @TableField("ORG_SUB_CODE")
    private String orgSubCode;

    @ApiModelProperty("附属机构名称")
    @TableField("ORG_SUB_NAME")
    private String orgSubName;

    @ApiModelProperty("是否停用")
    @TableField("ENABLED")
    private Integer enabled;

    @ApiModelProperty("是否删除")
    @TableField("IS_DELETE")
    private Integer isDelete;

    @ApiModelProperty("加盐key")
    @TableField("SALT")
    private String salt;

    @ApiModelProperty("修改日期")
    @TableField("PAS_UPDATE_DATE")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @DateTimeFormat(value = "yyyy-MM-dd HH:mm:ss")
    private Date pasUpdateDate;

    @ApiModelProperty("密码有效天数")
    @TableField("PASSWORD_EXPIRED_DAYS")
    private Integer passwordExpiredDays;

    @ApiModelProperty("登录有效时长(分钟)")
    @TableField("LOGIN_EXPIRED_DURATION")
    private Integer loginExpiredDuration;

    @ApiModelProperty("密码输入次数限制")
    @TableField("PASSWORD_ERROR_COUNT")
    private Integer passwordErrorCount;

    @ApiModelProperty("登录锁定时长(分钟)")
    @TableField("LOGIN_LOCK_DURATION")
    private Integer loginLockDuration;

    @ApiModelProperty("人员类别编码")
    @TableField("CATEGORY_CODE")
    private String categoryCode;

    @ApiModelProperty("人员类别")
    @TableField("CATEGORY_NAME")
    private String categoryName;

    @ApiModelProperty("职称编码")
    @TableField("PROFESSION_CODE")
    private String professionCode;

    @ApiModelProperty("职称")
    @TableField("PROFESSION_NAME")
    private String professionName;

    @ApiModelProperty("职务编码")
    @TableField("DUTY_CODE")
    private String dutyCode;

    @ApiModelProperty("职务")
    @TableField("DUTY_NAME")
    private String dutyName;

    @ApiModelProperty("身份证号")
    @TableField("IDCARD")
    private String idcard;

    @ApiModelProperty("签名图片")
    @TableField("SIGN_PIC")
    private String signPic;

    @ApiModelProperty("二维码图片")
    @TableField("QR_CODE_PIC")
    private String qrCodePic;

    @ApiModelProperty("第三方工号")
    @TableField("THIRD_NO")
    private String thirdNo;
}
