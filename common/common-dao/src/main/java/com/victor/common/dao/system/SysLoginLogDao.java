package com.victor.common.dao.system;


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.victor.common.entity.system.SysLoginLog;
import org.apache.ibatis.annotations.Mapper;

/**
 * <p>
 * 访问日志表 Mapper 接口
 * </p>
 *
 * @author victor
 * @since 2022年11月28日
 */
@Mapper
public interface SysLoginLogDao extends BaseMapper<SysLoginLog> {

}
