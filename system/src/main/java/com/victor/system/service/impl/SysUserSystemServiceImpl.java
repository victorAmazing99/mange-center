package com.victor.system.service.impl;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.victor.system.service.SysUserSystemService;
import com.victor.common.dao.system.SysUserSystemDao;
import com.victor.common.entity.system.SysUserSystem;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 用户系统信息表 服务实现类
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
@Service
@DS("system")
public class SysUserSystemServiceImpl extends ServiceImpl<SysUserSystemDao, SysUserSystem> implements SysUserSystemService {

}
