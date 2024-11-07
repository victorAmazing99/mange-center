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
 * 用户密保问题信息
 * </p>
 *
 * @author victor
 * @since 2022年11月28日
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("SYS_USER_SECURITY")
@ApiModel(value = "SysUserSecurity对象", description = "用户密保问题信息")
public class SysUserSecurity implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "ID", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty("问题1ID")
    @TableField("QUESTION_ID1")
    private Integer questionId1;
    @ApiModelProperty("问题1描述")
    @TableField(exist = false)
    private String questionDetail1;

    @ApiModelProperty("答案1")
    @TableField("ANSWER1")
    private String answer1;

    @ApiModelProperty("问题2ID")
    @TableField("QUESTION_ID2")
    private Integer questionId2;

    @ApiModelProperty("问题2描述")
    @TableField(exist = false)
    private String questionDetail2;

    @ApiModelProperty("答案2")
    @TableField("ANSWER2")
    private String answer2;

    @ApiModelProperty("问题3ID")
    @TableField("QUESTION_ID3")
    private Integer questionId3;
    @ApiModelProperty("问题3描述")
    @TableField(exist = false)
    private String questionDetail3;
    @ApiModelProperty("答案3")
    @TableField("ANSWER3")
    private String answer3;
    @ApiModelProperty("用户ID")
    @TableField("USER_ID")
    private Long userId;
    @ApiModelProperty("用户ID")
    @TableField(exist = false)
    private String userName;
}
