package com.victor.common.dao.system;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.victor.common.entity.system.SysUserSecurity;
import org.apache.ibatis.annotations.Mapper;

/**
 * <p>
 * 用户密保问题信息 Mapper 接口
 * </p>
 *
 * @author victor
 * @since 2022年11月28日
 */
@Mapper
public interface SysUserSecurityDao extends BaseMapper<SysUserSecurity> {

}
