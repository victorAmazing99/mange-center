package com.victor.job.controller;

import com.victor.job.domain.SysJobLog;
import com.victor.job.service.ISysJobLogService;
import com.victor.common.core.utils.poi.ExcelUtil;
import com.victor.common.core.web.controller.BaseController;
import com.victor.common.core.web.domain.AjaxResult;
import com.victor.common.core.web.page.TableDataInfo;
import com.victor.common.log.annotation.Log;
import com.victor.common.log.enums.BusinessType;
import com.victor.common.security.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * 调度日志操作处理
 * 
 * @author victor
 */
@RestController
@RequestMapping("/job/log")
public class SysJobLogController extends BaseController {
    @Autowired
    private ISysJobLogService jobLogService;

    /**
     * 查询定时任务调度日志列表
     */
    @RequiresPermissions("monitor:job:list")
    @GetMapping("/list")
    public TableDataInfo list(SysJobLog sysJobLog)
    {
        startPage();
        List<SysJobLog> list = jobLogService.selectJobLogList(sysJobLog);
        return getDataTable(list);
    }

    /**
     * 导出定时任务调度日志列表
     */
    @RequiresPermissions("monitor:job:export")
    @Log(title = "任务调度日志", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    public void export(HttpServletResponse response, SysJobLog sysJobLog)
    {
        List<SysJobLog> list = jobLogService.selectJobLogList(sysJobLog);
        ExcelUtil<SysJobLog> util = new ExcelUtil<SysJobLog>(SysJobLog.class);
        util.exportExcel(response, list, "调度日志");
    }

    /**
     * 根据调度编号获取详细信息
     */
    @RequiresPermissions("monitor:job:query")
    @GetMapping(value = "/{jobLogId}")
    public AjaxResult getInfo(@PathVariable Long jobLogId)
    {
        return success(jobLogService.selectJobLogById(jobLogId));
    }

    /**
     * 删除定时任务调度日志
     */
    @RequiresPermissions("monitor:job:remove")
    @Log(title = "定时任务调度日志", businessType = BusinessType.DELETE)
    @DeleteMapping("/{jobLogIds}")
    public AjaxResult remove(@PathVariable Long[] jobLogIds)
    {
        return toAjax(jobLogService.deleteJobLogByIds(jobLogIds));
    }

    /**
     * 清空定时任务调度日志
     */
    @RequiresPermissions("monitor:job:remove")
    @Log(title = "调度日志", businessType = BusinessType.CLEAN)
    @DeleteMapping("/clean")
    public AjaxResult clean()
    {
        jobLogService.cleanJobLog();
        return success();
    }
}
