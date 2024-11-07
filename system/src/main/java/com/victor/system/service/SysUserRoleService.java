package com.victor.system.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.victor.common.entity.system.SysUserRole;

import java.util.List;

/**
 * <p>
 * 用户角色表 服务类
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
public interface SysUserRoleService extends IService<SysUserRole> {

    boolean createAll(List<SysUserRole> body);
}
