package com.victor.common.response.system;

import com.victor.common.entity.system.SysDictionary;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

/**
 * 用户字典
 */
@Data
public class DictionaryUser {

    @ApiModelProperty("人员类别字典")
    private List<SysDictionary> categoryDic;

    @ApiModelProperty("职称字典")
    private List<SysDictionary> professionDic;

    @ApiModelProperty("职务字典")
    private List<SysDictionary> dutyDic;

    @ApiModelProperty("性别字典")
    private List<SysDictionary> sexDic;

    @ApiModelProperty("团队角色字典")
    private List<SysDictionary> teamRoleDic;

}
