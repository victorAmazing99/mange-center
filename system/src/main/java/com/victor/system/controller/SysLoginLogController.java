package com.victor.system.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.victor.system.service.SysLoginLogService;
import com.victor.common.core.domain.R;
import com.victor.common.entity.system.SysLoginLog;
import com.victor.common.request.PageRequest;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 * 访问日志表 controller
 * </p>
 *
 * @author victor
 * @since 2022年11月24日
 */
@Api(tags = "REST - 访问日志表")
@RestController
@RequestMapping("/sysLoginLog")
public class SysLoginLogController {
    @Autowired
    SysLoginLogService service;

    @PostMapping("/create")
    @ApiOperation(value = "新增")
    public R<?> createOne(@RequestBody SysLoginLog body) {
        boolean flag = service.save(body);
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
    public R<?> update(@RequestBody SysLoginLog body) {
        boolean flag = service.updateById(body);
        return R.ok(flag, flag ? "修改成功" : "修改失败");
    }

    @GetMapping("/{id}")
    @ApiOperation(value = "单条查询")
    public R<?> getOne(@PathVariable("id") Long id) {

        return R.ok(service.getById(id));
    }

    @PostMapping("/findList")
    @ApiOperation(value = "列表查询")
    public R<?> findList(@RequestBody SysLoginLog body) {

        return R.ok(service.list(new LambdaQueryWrapper<SysLoginLog>(body)));
    }

    @PostMapping("/findPage")
    @ApiOperation(value = "分页查询")
    public R<?> findPage(@RequestBody SysLoginLog body, PageRequest pageRequest) {
        Page<SysLoginLog> page = new Page<>(pageRequest.getCurrent(), pageRequest.getSize());
        return R.ok(service.page(page, new LambdaQueryWrapper<SysLoginLog>(body).orderByDesc(SysLoginLog::getId)));
    }

}
