package com.victor.system.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.victor.system.service.SysRoleService;
import com.victor.common.core.domain.R;
import com.victor.common.entity.system.SysRole;
import com.victor.common.log.annotation.Log;
import com.victor.common.log.enums.BusinessType;
import com.victor.common.request.PageRequest;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 * 角色表 controller
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
@Api(tags = "REST - 角色表")
@RestController
@RequestMapping("/sysRole")
public class SysRoleController {
    @Autowired
    SysRoleService service;

    @PostMapping("/create")
    @ApiOperation(value = "新增")
    @Log(title = "角色表-新增",businessType = BusinessType.INSERT)
    public R<?> createOne(@RequestBody SysRole body) {
        Boolean isRepeat = service.checkRole(body);
        if (!isRepeat) {
            boolean flag = service.save(body);
            return R.ok(flag, flag ? "创建成功" : "创建失败");
        }
        return R.fail("角色代码/名称不允许重复");
    }

    @DeleteMapping("/delete/{id}")
    @ApiOperation(value = "删除")
    @Log(title = "角色表-删除",businessType = BusinessType.DELETE)
    public R<?> delete(@PathVariable("id") Long id) {
        boolean flag = service.removeById(id);
        return R.ok(flag, flag ? "删除成功" : "删除失败");
    }

    @PutMapping("/update")
    @ApiOperation(value = "修改")
    @Log(title = "角色表-修改",businessType = BusinessType.UPDATE)
    public R<?> update(@RequestBody SysRole body) {
        Boolean isRepeat = service.checkRole(body);
        if (!isRepeat) {
            boolean flag = service.updateById(body);
            return R.ok(flag, flag ? "修改成功" : "修改失败");
        }
        return R.fail("角色代码/名称不允许重复");
    }

    @GetMapping("/{id}")
    @ApiOperation(value = "单条查询")
    public R<?> getOne(@PathVariable("id") Long id) {

        return R.ok(service.getById(id));
    }

    @PostMapping("/findList")
    @ApiOperation(value = "列表查询")
    public R<?> findList(@RequestBody SysRole body) {

        return R.ok(service.list(new LambdaQueryWrapper<SysRole>(body)));
    }

    @PostMapping("/findPage")
    @ApiOperation(value = "分页查询")
    public R findPage(@RequestBody SysRole body, PageRequest pageRequest) {
        Page<SysRole> page = new Page<>(pageRequest.getCurrent(), pageRequest.getSize());
        return R.ok(service.page(page, new LambdaQueryWrapper<SysRole>(body).orderByDesc(SysRole::getId)));
    }

}
