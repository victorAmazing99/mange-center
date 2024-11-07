package com.victor.common.dao.system;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.victor.common.entity.system.SysOperLogInfo;
import org.apache.ibatis.annotations.Mapper;

/**
 * <p>
 * 操作日志表 Mapper 接口
 * </p>
 *
 * @author victor
 * @since 2023年01月04日
 */
@Mapper
public interface SysOperLogDao extends BaseMapper<SysOperLogInfo> {

}
