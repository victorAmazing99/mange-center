package com.victor.common.dao.system;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.victor.common.entity.system.SysDept;
import org.apache.ibatis.annotations.Mapper;

/**
 * <p>
 * 科室信息表 Mapper 接口
 * </p>
 *
 * @author victor
 * @since 2022年11月28日
 */
@Mapper
public interface SysDeptDao extends BaseMapper<SysDept> {

}
