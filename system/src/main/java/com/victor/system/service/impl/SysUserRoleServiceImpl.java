package com.victor.system.service.impl;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.ObjectUtils;
import com.victor.system.service.SysUserRoleService;
import com.victor.system.service.SysUserSystemService;
import com.victor.common.dao.system.SysUserRoleDao;
import com.victor.common.entity.system.SysUserRole;
import com.victor.common.entity.system.SysUserSystem;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * <p>
 * 用户角色表 服务实现类
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
@Service
@DS("system")
public class SysUserRoleServiceImpl extends ServiceImpl<SysUserRoleDao, SysUserRole> implements SysUserRoleService {

    @Autowired
    private SysUserSystemService sysUserSystemService;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean createAll(List<SysUserRole> body) {
        //用户与角色绑定
        List<SysUserRole> userRoles = body.stream().filter(userRole -> ObjectUtils.isNotNull(userRole.getRoleId()) && userRole.getRoleId() != 0).collect(Collectors.toList());
        //用户与系统绑定
        List<SysUserRole> userSystems = body.stream().filter(userRole -> ObjectUtils.isNull(userRole.getRoleId()) || userRole.getRoleId() == 0).collect(Collectors.toList());
        List<Long> userIds = userRoles.stream().map(SysUserRole::getUserId).collect(Collectors.toList());
        this.remove(new LambdaQueryWrapper<SysUserRole>().in(SysUserRole::getUserId, userIds));
        boolean bUserRole=false;
        for(SysUserRole  userRole: userRoles){
         bUserRole = this.save(userRole);
        }

        List<Long> systemUserIds = userSystems.stream().map(SysUserRole::getUserId).collect(Collectors.toList());
        sysUserSystemService.remove(new LambdaQueryWrapper<SysUserSystem>().in(SysUserSystem::getUserId, systemUserIds));
        List<SysUserSystem> sysUserSystems = new ArrayList<>();
        userSystems.forEach(userRole -> {
            SysUserSystem sysUserSystem = new SysUserSystem();
            sysUserSystem.setUserId(userRole.getUserId());
            sysUserSystem.setSystemId(userRole.getSystemId());
            sysUserSystems.add(sysUserSystem);
        });
        boolean bUserSystem =false;
        for(SysUserSystem sysUserSystem :sysUserSystems) {
            bUserSystem = sysUserSystemService.save(sysUserSystem);
        }
        return bUserRole && bUserSystem;
    }
}
