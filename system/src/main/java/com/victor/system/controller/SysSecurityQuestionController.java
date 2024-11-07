package com.victor.system.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.victor.system.service.SysSecurityQuestionService;
import com.victor.common.core.domain.R;
import com.victor.common.entity.system.SysSecurityQuestion;
import com.victor.common.log.annotation.Log;
import com.victor.common.log.enums.BusinessType;
import com.victor.common.request.PageRequest;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>
 * 密保问题表 controller
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
@Api(tags = "REST - 密保问题表")
@RestController
@RequestMapping("/sysSecurityQuestion")
public class SysSecurityQuestionController {
    @Autowired
    SysSecurityQuestionService service;

    @PostMapping("/create")
    @ApiOperation(value = "新增")
    @Log(title = "密保问题表-新增",businessType = BusinessType.INSERT)
    public R create(@RequestBody List<SysSecurityQuestion> body) {
        return R.ok();
    }

    @DeleteMapping("/delete/{id}")
    @ApiOperation(value = "删除")
    @Log(title = "密保问题表-删除",businessType = BusinessType.DELETE)
    public R<?> delete(@PathVariable("id") Integer id) {
        boolean flag = service.removeById(id);
        return R.ok(flag, flag ? "删除成功" : "删除失败");
    }

    @PutMapping("/update")
    @ApiOperation(value = "修改")
    @Log(title = "密保问题表-修改",businessType = BusinessType.UPDATE)
    public R<?> update(@RequestBody SysSecurityQuestion body) {
        boolean flag = service.updateById(body);
        return R.ok(flag, flag ? "修改成功" : "修改失败");
    }

    @GetMapping("/{id}")
    @ApiOperation(value = "单条查询")
    public R<?> getOne(@PathVariable("id") Integer id) {

        return R.ok(service.getById(id));
    }

    @PostMapping("/findList")
    @ApiOperation(value = "列表查询")
    public R<?> findList(@RequestBody SysSecurityQuestion body) {
        return R.ok(service.list(new LambdaQueryWrapper<SysSecurityQuestion>(body)));
    }

    @PostMapping("/findPage")
    @ApiOperation(value = "分页查询")
    public R findPage(@RequestBody SysSecurityQuestion body, PageRequest pageRequest) {
        Page<SysSecurityQuestion> page = new Page<>(pageRequest.getCurrent(), pageRequest.getSize());
        return R.ok(service.page(page, new LambdaQueryWrapper<SysSecurityQuestion>(body).orderByDesc(SysSecurityQuestion::getId)));
    }
    @GetMapping("/findAll")
    @ApiOperation(value = "查询所有密保问题")
    public R<List<SysSecurityQuestion>> findAll() {
        return R.ok(service.list());
    }
}
