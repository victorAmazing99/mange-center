package com.victor.system.service.impl;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.victor.system.service.SysOperLogService;
import com.victor.common.dao.system.SysOperLogDao;
import com.victor.common.entity.system.SysOperLogInfo;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 操作日志表 服务实现类
 * </p>
 *
 * @author victor
 * @since 2023年01月04日
 */
@Service
@DS("system")
public class SysOperLogServiceImpl extends ServiceImpl<SysOperLogDao, SysOperLogInfo> implements SysOperLogService {

}
