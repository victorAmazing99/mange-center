package com.victor.system.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.victor.common.entity.system.SysMenu;
import com.victor.common.entity.vo.system.SysMenuVo;

import java.util.List;

/**
 * <p>
 * 菜单表 服务类
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
public interface SysMenuService extends IService<SysMenu> {

    List<SysMenuVo> querySystemMenuBySystemId(String systemId);
}
