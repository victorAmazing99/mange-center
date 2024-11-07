package com.victor.system.service.impl;

import cn.hutool.core.bean.BeanUtil;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.CollectionUtils;
import com.victor.system.service.SysMenuService;
import com.victor.common.core.exception.ServiceException;
import com.victor.common.dao.system.SysMenuDao;
import com.victor.common.entity.system.SysMenu;
import com.victor.common.entity.vo.system.SysMenuVo;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 * 菜单表 服务实现类
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
@Service
@DS("system")
public class SysMenuServiceImpl extends ServiceImpl<SysMenuDao, SysMenu> implements SysMenuService {

    @Autowired
    SysMenuDao sysMenuDao;

    @Override
    public List<SysMenuVo> querySystemMenuBySystemId(String systemId) {

        //获取所有的一级菜单
        List<SysMenu> menu = sysMenuDao.selectList(new LambdaQueryWrapper<SysMenu>()
                .eq(SysMenu::getSystemId, systemId)
                .eq(SysMenu::getParentId, 0));
        //获取所有的二级菜单
        List<SysMenu> menu2 = sysMenuDao.selectList(new LambdaQueryWrapper<SysMenu>()
                .eq(SysMenu::getSystemId, systemId)
                .ne(SysMenu::getParentId, 0));

        List<SysMenuVo> menuList = new ArrayList<SysMenuVo>();
        for (SysMenu m : menu) {
            SysMenuVo menuVo = new SysMenuVo();
            List<SysMenu> list = new ArrayList<>();
            BeanUtil.copyProperties(m, menuVo);
            for (SysMenu m2 : menu2) {
                if (m2.getParentId() == m.getId()) {
                    list.add(m2);
                }
            }
            menuVo.setChildren(list);
            menuList.add(menuVo);
        }

        if (CollectionUtils.isEmpty(menuList)) {
            throw new ServiceException("获取菜单，请联系管理员！", 500);
        }

        return menuList;
    }
}
