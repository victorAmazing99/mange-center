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
 * 
 * </p>
 *
 * @author victor
 * @since 2023年06月14日
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("SYS_THIRD_KEY")
@ApiModel(value = "SysThirdKey对象", description = "")
public class SysThirdKey implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("主键Id")
    @TableId(value = "ID", type = IdType.AUTO)
    private Integer id;

    @ApiModelProperty("公钥")
    @TableField("PUBLIC_KEY")
    private String publicKey;

    @ApiModelProperty("私钥")
    @TableField("PRIVATE_KEY")
    private String privateKey;

    @ApiModelProperty("请求头信息")
    @TableField("HEADER_INFO")
    private String headerInfo;

    @ApiModelProperty("公司信息")
    @TableField("COMPANY")
    private String company;

    @ApiModelProperty("token")
    @TableField("TOKEN")
    private String token;

    @ApiModelProperty("用来刷新token")
    @TableField("REFRESH_TOKEN")
    private String refreshToken;


}
