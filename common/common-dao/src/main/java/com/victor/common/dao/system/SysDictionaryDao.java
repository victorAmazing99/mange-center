package com.victor.common.dao.system;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.victor.common.entity.system.SysDictionary;
import org.apache.ibatis.annotations.Mapper;

/**
 * <p>
 * 字典表 Mapper 接口
 * </p>
 *
 * @author victor
 * @since 2022年12月07日
 */
@Mapper
public interface SysDictionaryDao extends BaseMapper<SysDictionary> {

}
