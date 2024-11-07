package com.victor.system.controller;


import cn.hutool.core.bean.BeanUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.victor.common.domain.SysOperLog;
import com.victor.system.service.SysOperLogService;
import com.victor.common.core.domain.R;
import com.victor.common.entity.system.SysOperLogInfo;
import com.victor.common.request.PageRequest;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 * 操作日志表 controller
 * </p>
 *
 * @author victor
 * @since 2023年01月04日
 */
@Api(tags = "REST - 操作日志表")
@RestController
@RequestMapping("/sysOperLog")
public class SysOperLogController {
    @Autowired
    SysOperLogService service;

    @PostMapping("/create")
    @ApiOperation(value = "新增")
    public R<?> createOne(@RequestBody SysOperLog body) {
        SysOperLogInfo log = new SysOperLogInfo();
        BeanUtil.copyProperties(body,log);
        boolean flag = service.save(log);
        return R.ok(flag, flag ? "创建成功" : "创建失败");
    }

    @DeleteMapping("/delete/{id}")
    @ApiOperation(value = "删除")
    public R<?> delete(@PathVariable("id") Long id) {
        boolean flag = service.removeById(id);
        return R.ok(flag, flag ? "删除成功" : "删除失败");
    }

    @PutMapping("/update")
    @ApiOperation(value = "修改")
    public R<?> update(@RequestBody SysOperLog body) {
        SysOperLogInfo log = new SysOperLogInfo();
        BeanUtil.copyProperties(body,log);
        boolean flag = service.updateById(log);
        return R.ok(flag, flag ? "修改成功" : "修改失败");
    }

    @GetMapping("/{id}")
    @ApiOperation(value = "单条查询")
    public R<?> getOne(@PathVariable("id") Long id) {

        return R.ok(service.getById(id));
    }

    @PostMapping("/findList")
    @ApiOperation(value = "列表查询")
    public R<?> findList(@RequestBody SysOperLogInfo body) {

        return R.ok(service.list(new LambdaQueryWrapper<SysOperLogInfo>(body)));
    }

    @PostMapping("/findPage")
    @ApiOperation(value = "分页查询")
    public R findPage(@RequestBody SysOperLogInfo body, PageRequest pageRequest) {
        Page<SysOperLogInfo> page = new Page<>(pageRequest.getCurrent(), pageRequest.getSize());
        return R.ok(service.page(page, new LambdaQueryWrapper<SysOperLogInfo>(body).orderByDesc(SysOperLogInfo::getId)));
    }

}
