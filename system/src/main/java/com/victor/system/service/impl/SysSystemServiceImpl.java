package com.victor.system.service.impl;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.collection.CollectionUtil;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.CollectionUtils;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.victor.system.service.SysRoleService;
import com.victor.system.service.SysSystemService;
import com.victor.common.core.exception.ServiceException;
import com.victor.common.dao.system.*;
import com.victor.common.entity.system.*;
import com.victor.common.entity.vo.system.SysMenuVo;
import com.victor.common.entity.vo.system.SysSystemVo;
import com.victor.common.response.system.QueryRoleInfo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * <p>
 * 系统信息表 服务实现类
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
@Service
@DS("system")
public class SysSystemServiceImpl extends ServiceImpl<SysSystemDao, SysSystem> implements SysSystemService {

    @Autowired
    SysUserSystemDao userSystemDao;

    @Autowired
    SysUserRoleDao sysUserRoleDao;

    @Autowired
    SysRoleMenuDao sysRoleMenuDao;

    @Autowired
    SysRoleService sysRoleService;

    @Autowired
    SysMenuDao sysMenuDao;

    @Override
    public List<SysSystemVo> querySystemInfoByUserId(Long userId) {
        List<SysSystem> systems = baseMapper.selectList(new LambdaQueryWrapper<SysSystem>());
        List<SysUserSystem> userSystems = userSystemDao
                .selectList(new LambdaQueryWrapper<SysUserSystem>().eq(SysUserSystem::getUserId, userId));
        Map<Long, SysUserSystem> userSystemMap = userSystems.stream().collect(Collectors.toMap(SysUserSystem::getSystemId, Function.identity()));
        List<SysSystemVo> sysSystemVos = new ArrayList<SysSystemVo>();
        for (SysSystem system : systems) {
            SysSystemVo systemVo = new SysSystemVo();
            BeanUtils.copyProperties(system, systemVo);
            if (userSystemMap == null || userSystemMap.get(Long.valueOf(system.getId())) == null) {
                systemVo.setReadOnly(true);
            } else {
                systemVo.setReadOnly(false);
            }
            sysSystemVos.add(systemVo);
        }
        return sysSystemVos;
    }

    @Override
    public List<SysMenuVo> systemMenuInfoBySystemId(Long userId, Long systemId) {
        //获取用户在系统中所有角色
        List<SysUserRole> roles = sysUserRoleDao.selectList(new LambdaQueryWrapper<SysUserRole>()
                .eq(SysUserRole::getSystemId, systemId)
                .eq(SysUserRole::getUserId, userId));

        if (CollectionUtils.isEmpty(roles)) {
            throw new ServiceException("用户角色不存在，请联系管理员，添加角色！", 500);
        }

        List<Long> rolesIds = roles.stream().map(SysUserRole::getRoleId).collect(Collectors.toList());

        //根据角色获取所有菜单
        List<SysRoleMenu> roleMenus = sysRoleMenuDao.selectList(new LambdaQueryWrapper<SysRoleMenu>()
                .eq(SysRoleMenu::getSystemId, systemId)
                .in(SysRoleMenu::getRoleId, rolesIds));

        if (CollectionUtils.isEmpty(roleMenus)) {
            throw new ServiceException("用户角色中没有菜单，请联系管理员，添加菜单！", 500);
        }

        List<Long> menuIds = roleMenus.stream().map(SysRoleMenu::getMenuId).collect(Collectors.toList());

        //获取所有的一级菜单
        List<SysMenu> menu = sysMenuDao.selectList(new LambdaQueryWrapper<SysMenu>()
                .eq(SysMenu::getSystemId, systemId)
                .eq(SysMenu::getParentId, 0)
                .in(SysMenu::getId, menuIds));
        //获取所有的二级菜单
        List<SysMenu> menu2 = sysMenuDao.selectList(new LambdaQueryWrapper<SysMenu>()
                .eq(SysMenu::getSystemId, systemId)
                .ne(SysMenu::getParentId, 0)
                .in(SysMenu::getId, menuIds));

        List<SysMenuVo> menuList = new ArrayList<>();
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
            throw new ServiceException("用户菜单异常，请联系管理员！", 500);
        }

        return menuList;
    }


    @Override
    public List<SysMenuVo> systemMenuInfo(Long systemId) {
        //获取所有的一级菜单
        List<SysMenu> menu = sysMenuDao.selectList(new LambdaQueryWrapper<SysMenu>()
                .eq(SysMenu::getSystemId, systemId)
                .eq(SysMenu::getParentId, 0));
        //获取所有的二级菜单
        List<SysMenu> menu2 = sysMenuDao.selectList(new LambdaQueryWrapper<SysMenu>()
                .eq(SysMenu::getSystemId, systemId)
                .ne(SysMenu::getParentId, 0));
        List<SysMenuVo> menuList = new ArrayList<>();
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
            throw new ServiceException("菜单异常，请联系管理员！", 500);
        }
        return menuList;
    }


    @Override
    public List<QueryRoleInfo> querySystemRole(Long userId) {

        //判断账号绑定情况
        List<SysUserRole> sysUserRoles = sysUserRoleDao.selectList(new LambdaQueryWrapper<SysUserRole>()
                .eq(SysUserRole::getUserId, userId));
        //查询用户只绑定系统，没绑定角色的
        List<SysUserSystem> sysUserSystems = userSystemDao.selectList(new LambdaQueryWrapper<SysUserSystem>()
                .eq(SysUserSystem::getUserId, userId));
        List<Long> systemIds = new ArrayList<>();
        List<Long> roleIds = new ArrayList<>();
        if (CollectionUtil.isNotEmpty(sysUserRoles)) {
            systemIds = sysUserRoles.stream().map(SysUserRole::getSystemId).collect(Collectors.toList());
            roleIds = sysUserRoles.stream().map(SysUserRole::getRoleId).collect(Collectors.toList());
        }
        List<Long> systemIds2 = sysUserSystems.stream().map(SysUserSystem::getSystemId).collect(Collectors.toList());
        systemIds.addAll(systemIds2);
        //全部系统列表
        List<SysSystem> systems = baseMapper.selectList(Wrappers.emptyWrapper());

        List<QueryRoleInfo> infos = new ArrayList<QueryRoleInfo>();
        //序号 前端使用的唯一编号
        int serial = 1;
        for(SysSystem system :systems){
            QueryRoleInfo queryRoleInfo = new QueryRoleInfo();
            BeanUtil.copyProperties(system,queryRoleInfo);
            //判断该用户是否绑定系统
            queryRoleInfo.setIsChecked(systemIds.contains(Long.valueOf(system.getId())));
            queryRoleInfo.setSerial(serial++);
            List<SysRole> roles = sysRoleService.list(new LambdaQueryWrapper<SysRole>().eq(SysRole::getSystemId,system.getId()));
            for (SysRole role: roles) {
                role.setSerial(serial++);
            }
            List<Long> finalRoleIds = roleIds;
            roles.stream().filter(sysRole -> finalRoleIds.contains(sysRole.getId())).forEach(sysRole -> sysRole.setIsChecked(true));
            queryRoleInfo.setRoles(roles);
            infos.add(queryRoleInfo);
        }

        return infos;
    }
}
