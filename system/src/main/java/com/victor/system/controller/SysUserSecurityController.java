package com.victor.system.controller;


import cn.hutool.core.util.ObjectUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.victor.system.service.SysUserSecurityService;
import com.victor.common.core.context.SecurityContextHolder;
import com.victor.common.core.domain.R;
import com.victor.common.entity.system.SysUserSecurity;
import com.victor.common.log.annotation.Log;
import com.victor.common.log.enums.BusinessType;
import com.victor.common.request.PageRequest;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 * 用户密保问题信息 controller
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
@Api(tags = "REST - 用户密保问题信息")
@RestController
@RequestMapping("/sysUserSecurity")
public class SysUserSecurityController {
    @Autowired
    SysUserSecurityService service;

    @PostMapping("/create")
    @ApiOperation(value = "新增")
    @Log(title = "用户密保问题信息-新增",businessType = BusinessType.INSERT)
    public R<?> createOne(@RequestBody SysUserSecurity body) {
        if (ObjectUtil.isEmpty(body.getUserId()) || body.getUserId().equals(0)) {
            body.setUserId(SecurityContextHolder.getUserId());
        }
        boolean flag = service.create(body);
        return R.ok(flag, flag ? "创建成功" : "创建失败");
    }

    @DeleteMapping("/delete/{id}")
    @ApiOperation(value = "删除")
    @Log(title = "用户密保问题信息-删除",businessType = BusinessType.DELETE)
    public R<?> delete(@PathVariable("id") Long id) {
        boolean flag = service.removeById(id);
        return R.ok(flag, flag ? "删除成功" : "删除失败");
    }

    @PutMapping("/update")
    @ApiOperation(value = "修改")
    @Log(title = "用户密保问题信息-修改",businessType = BusinessType.UPDATE)
    public R<?> update(@RequestBody SysUserSecurity body) {
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
    public R<?> findList(@RequestBody SysUserSecurity body) {

        return R.ok(service.list(new LambdaQueryWrapper<SysUserSecurity>(body)));
    }

    @PostMapping("/findPage")
    @ApiOperation(value = "分页查询")
    public R findPage(@RequestBody SysUserSecurity body, PageRequest pageRequest) {
        Page<SysUserSecurity> page = new Page<>(pageRequest.getCurrent(), pageRequest.getSize());
        return R.ok(service.page(page, new LambdaQueryWrapper<SysUserSecurity>(body).orderByDesc(SysUserSecurity::getId)));
    }

    @GetMapping("/getQuestion")
    @ApiOperation(value = "获取该用户的密保问题")
    public R<SysUserSecurity> getQuestionByUserName(@RequestParam("userName") String userName) {
        return R.ok(service.getQuestionByUserName(userName));
    }

    @PostMapping("/check")
    @ApiOperation(value = "校验密保问题")
    public R check(@RequestBody SysUserSecurity body) {
        boolean flag = service.check(body);
        if (flag) {
            return R.ok("密保问题校验通过");
        } else {
            return R.fail("密保问题校验不通过");
        }

    }
}
