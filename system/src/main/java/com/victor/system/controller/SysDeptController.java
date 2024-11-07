package com.victor.system.controller;


import cn.hutool.core.collection.CollectionUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.victor.system.service.SysDeptService;
import com.victor.common.core.domain.R;
import com.victor.common.entity.system.SysDept;
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
 * 科室信息表 controller
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
@Api(tags = "REST - 科室信息表")
@RestController
@RequestMapping("/sysDept")
public class SysDeptController {
    @Autowired
    SysDeptService service;

    @PostMapping("/create")
    @ApiOperation(value = "新增")
    @Log(title = "科室信息表-批量新增",businessType = BusinessType.INSERT)
    public R<?> createList(@RequestBody List<SysDept> body) {
        if (CollectionUtil.isEmpty(body)) {
            return R.fail("科室不能为空");
        }
        Boolean isRepeat = service.checkDept(body);
        if (!isRepeat) {
            boolean flag = service.saveAndUpdate(body);
            return R.ok(flag, flag ? "创建成功" : "创建失败");
        }
        return R.fail("科室代码/名称不允许重复");
    }

    @DeleteMapping("/delete/{id}")
    @ApiOperation(value = "删除")
    @Log(title = "科室信息表-删除",businessType = BusinessType.DELETE)
    public R<?> delete(@PathVariable("id") Long id) {
        boolean flag = service.removeById(id);
        return R.ok(flag, flag ? "删除成功" : "删除失败");
    }

    @PutMapping("/update")
    @ApiOperation(value = "修改")
    @Log(title = "科室信息表-批量修改",businessType = BusinessType.UPDATE)
    public R<?> update(@RequestBody List<SysDept> body) {
        Boolean isRepeat = service.checkDept(body);
        if (!isRepeat) {
            boolean flag = service.updateBatchById(body);
            return R.ok(flag, flag ? "修改成功" : "修改失败");
        }
        return R.fail("科室代码/名称不允许重复");
    }

    @GetMapping("/{id}")
    @ApiOperation(value = "单条查询")
    public R<?> getOne(@PathVariable("id") Long id) {

        return R.ok(service.getById(id));
    }

    @PostMapping("/findList")
    @ApiOperation(value = "列表查询")
    public R<?> findList(@RequestBody SysDept body) {

        return R.ok(service.findList(body));
    }

    @PostMapping("/findPage")
    @ApiOperation(value = "分页查询")
    public R findPage(@RequestBody SysDept body, PageRequest pageRequest) {
        Page<SysDept> page = new Page<>(pageRequest.getCurrent(), pageRequest.getSize());
        return R.ok(service.page(page, new LambdaQueryWrapper<SysDept>(body)));
    }

}
