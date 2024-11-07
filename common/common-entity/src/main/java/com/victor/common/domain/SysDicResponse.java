package com.victor.common.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * @author victor
 * @ClassName StuffDicResponse.java
 * @company 智赢
 * @Description
 * @createTime 2022年11月30日 14:50:00
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@ApiModel(value="DicResponse对象", description="字典key返回实体")
public class SysDicResponse implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "编号")
    private String key;

    @ApiModelProperty(value = "数据")
    private String value;

}
