package com.victor.system.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.victor.common.entity.system.SysDictionary;
import com.victor.common.response.system.*;

import java.util.List;

/**
 * <p>
 * 字典表 服务类
 * </p>
 *
 * @author victor
 * @since 2022年12月07日
 */
public interface SysDictionaryService extends IService<SysDictionary> {

    DictionaryOrg getDictionaryOrg();

    DictionaryUser getDictionaryUser();

    DictionaryEhr getDictionaryEhr();

    DictionaryAssess getDictionaryAssess();

    DictionaryService getDictionaryService();

    /**
     * 通过fieldName查询字典
     *
     * @param fieldName
     */
    List<SysDictionary> listByFieldName(String fieldName);

    SysDictionary getByFieldNameAndCode(String fieldName, String code);

    void clearCache(String fieldName, String code);
}
