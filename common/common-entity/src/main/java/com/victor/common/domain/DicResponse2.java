package com.victor.common.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * @author victor
 * @ClassName DicResponse.java
 * @company 智赢
 * @Description
 * @createTime 2022年12月02日 10:58:00
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@ApiModel(value="DicResponse2对象", description="字典返回实体2")
public class DicResponse2 {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "id")
    private String id;

    @ApiModelProperty(value = "数据")
    private String value;
}
