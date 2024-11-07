package com.victor.common.request;

import com.baomidou.mybatisplus.annotation.TableField;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;

@Data
public class PageRequest implements Serializable {

    @ApiModelProperty(value = "当前页", example = "1")
    @TableField(exist = false)
    private int current = 1;

    @ApiModelProperty(value = "分页数目", example = "10")
    @TableField(exist = false)
    private int size = 10;

}
