package com.victor.system.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.victor.common.entity.system.SysRole;

/**
 * <p>
 * 角色表 服务类
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
public interface SysRoleService extends IService<SysRole> {

    Boolean checkRole(SysRole body);
}
