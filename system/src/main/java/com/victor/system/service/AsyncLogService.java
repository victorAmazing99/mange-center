package com.victor.system.service;

import com.victor.common.domain.SysOperLog;
import com.victor.system.controller.SysOperLogController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

/**
 * 异步调用日志服务
 * 
 */
@Service
public class AsyncLogService {

    @Autowired
    SysOperLogController sysOperLogController;

    /**
     * 保存系统日志记录
     */
    @Async
    public void saveSysLog(SysOperLog sysOperLog)
    {
         sysOperLogController.createOne(sysOperLog);
    }
}
