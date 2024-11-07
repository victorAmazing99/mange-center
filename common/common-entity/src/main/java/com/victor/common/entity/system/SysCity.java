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
 * 城市字典表
 * </p>
 *
 * @author victor
 * @since 2022年12月19日
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("SYS_CITY")
@ApiModel(value = "SysCity对象", description = "城市字典表")
public class SysCity implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("主键")
    @TableId(value = "ID", type = IdType.AUTO)
    private Integer id;

    @ApiModelProperty("省编码")
    @TableField("PROVINCE_CODE")
    private String provinceCode;

    @ApiModelProperty("省")
    @TableField("PROVINCE_NAME")
    private String provinceName;

    @ApiModelProperty("市编码")
    @TableField("CITY_CODE")
    private String cityCode;

    @ApiModelProperty("市")
    @TableField("CITY_NAME")
    private String cityName;

    @ApiModelProperty("区编码")
    @TableField("DISTRICT_CODE")
    private String districtCode;

    @ApiModelProperty("区")
    @TableField("DISTRICT_NAME")
    private String districtName;

    @ApiModelProperty("乡镇编码")
    @TableField("TOWN_CODE")
    private String townCode;

    @ApiModelProperty("乡镇")
    @TableField("TOWN_NAME")
    private String townName;

    @ApiModelProperty("居委编码")
    @TableField("VILLAGE_CODE")
    private String villageCode;

    @ApiModelProperty("居委")
    @TableField("VILLAGE_NAME")
    private String villageName;


}
