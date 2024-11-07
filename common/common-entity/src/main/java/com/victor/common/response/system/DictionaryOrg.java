package com.victor.common.response.system;

import com.victor.common.entity.system.SysDictionary;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

/**
 * 机构字典响应体
 */
@Data
public class DictionaryOrg {

    @ApiModelProperty("机构级别字典")
    private List<SysDictionary> orgLevelDic;
}
