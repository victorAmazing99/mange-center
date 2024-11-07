package com.victor.system.service.impl;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.victor.system.service.SysLoginLogService;
import com.victor.common.dao.system.SysLoginLogDao;
import com.victor.common.entity.system.SysLoginLog;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 访问日志表 服务实现类
 * </p>
 *
 * @author victor
 * @since 2022年11月24日
 */
@Service
@DS("system")
public class SysLoginLogServiceImpl extends ServiceImpl<SysLoginLogDao, SysLoginLog> implements SysLoginLogService {

}
