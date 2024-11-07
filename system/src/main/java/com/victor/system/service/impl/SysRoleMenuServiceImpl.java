package com.victor.system.service.impl;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.victor.system.service.SysRoleMenuService;
import com.victor.common.dao.system.SysRoleMenuDao;
import com.victor.common.entity.system.SysRoleMenu;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 角色菜单表 服务实现类
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
@Service
@DS("system")
public class SysRoleMenuServiceImpl extends ServiceImpl<SysRoleMenuDao, SysRoleMenu> implements SysRoleMenuService {

}
