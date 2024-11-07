package com.victor.common.response.system;

import com.victor.common.entity.system.SysDictionary;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

/**
 * 服务字典
 */
@Data
public class DictionaryService {

    @ApiModelProperty("服务形式字典")
    private List<SysDictionary> serviceMode;

    @ApiModelProperty("服务内容字典")
    private List<SysDictionary> serviceContent;
}
