package com.victor.system.service.impl;

import cn.hutool.core.util.ObjectUtil;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.victor.system.service.SysRoleService;
import com.victor.common.core.utils.StringUtils;
import com.victor.common.dao.system.SysRoleDao;
import com.victor.common.entity.system.SysRole;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 角色表 服务实现类
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
@Service
@DS("system")
public class SysRoleServiceImpl extends ServiceImpl<SysRoleDao, SysRole> implements SysRoleService {

    @Override
    public Boolean checkRole(SysRole body) {
        Long codeRepeat = getBaseMapper().selectCount(new LambdaQueryWrapper<SysRole>()
                .eq(StringUtils.isNotEmpty(body.getRoleCode()), SysRole::getRoleCode, body.getRoleCode())
                .ne(ObjectUtil.isNotEmpty(body.getId()), SysRole::getId, body.getId()));
        Long nameRepeat = getBaseMapper().selectCount(new LambdaQueryWrapper<SysRole>()
                .eq(StringUtils.isNotEmpty(body.getName()), SysRole::getName, body.getName())
                .eq(ObjectUtil.isNotEmpty(body.getSystemId()), SysRole::getSystemId, body.getSystemId())
                .ne(ObjectUtil.isNotEmpty(body.getId()), SysRole::getId, body.getId()));
        return codeRepeat > 0 || nameRepeat > 0;
    }
}
