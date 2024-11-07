package com.victor.system.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.victor.system.service.SysSystemService;
import com.victor.common.core.context.SecurityContextHolder;
import com.victor.common.core.domain.R;
import com.victor.common.entity.system.SysSystem;
import com.victor.common.entity.vo.system.SysMenuVo;
import com.victor.common.entity.vo.system.SysSystemVo;
import com.victor.common.log.annotation.Log;
import com.victor.common.log.enums.BusinessType;
import com.victor.common.request.PageRequest;
import com.victor.common.response.system.QueryRoleInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * <p>
 * 系统信息表 controller
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
@Api(tags = "REST - 系统信息表")
@RestController
@RequestMapping("/sysSystem")
public class SysSystemController {
    @Autowired
    SysSystemService service;

    @PostMapping("/create")
    @ApiOperation(value = "新增")
    @Log(title = "系统信息表-新增",businessType = BusinessType.INSERT)
    public R<?> createOne(@RequestBody SysSystem body) {
        boolean flag = service.save(body);
        return R.ok(flag, flag ? "创建成功" : "创建失败");
    }

    @DeleteMapping("/delete/{id}")
    @ApiOperation(value = "删除")
    @Log(title = "系统信息表-删除",businessType = BusinessType.DELETE)
    public R<?> delete(@PathVariable("id") Integer id) {
        boolean flag = service.removeById(id);
        return R.ok(flag, flag ? "删除成功" : "删除失败");
    }

    @PutMapping("/update")
    @ApiOperation(value = "修改")
    @Log(title = "系统信息表-修改",businessType = BusinessType.UPDATE)
    public R<?> update(@RequestBody SysSystem body) {
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
    public R<?> findList(@RequestBody SysSystem body) {

        return R.ok(service.list(new LambdaQueryWrapper<SysSystem>(body)));
    }

    @PostMapping("/findPage")
    @ApiOperation(value = "分页查询")
    public R findPage(@RequestBody SysSystem body, PageRequest pageRequest) {
        Page<SysSystem> page = new Page<>(pageRequest.getCurrent(), pageRequest.getSize());
        return R.ok(service.page(page, new LambdaQueryWrapper<SysSystem>(body).orderByDesc(SysSystem::getId)));
    }

    @GetMapping("/systemInfoByUserId")
    @ApiOperation(value = "根据用户ID获取能够使用的系统")
    public R<List<SysSystemVo>> SystemInfoByUserId(){
        Long userId = SecurityContextHolder.getUserId();
        return  R.ok(service.querySystemInfoByUserId(userId));
    }

    @GetMapping("/systemMenuInfoBySystemId")
    @ApiOperation(value = "根据系统Id获取所有菜单")
    public R<List<SysMenuVo>> SystemMenuInfoBySystemId( String systemId, HttpServletRequest request){

        Long userId = SecurityContextHolder.getUserId();
        return  R.ok(service.systemMenuInfoBySystemId(userId,Long.valueOf(systemId)));
    }


    @GetMapping("/systemMenuInfo")
    @ApiOperation(value = "获取系统菜单")
    public R<List<SysMenuVo>> systemMenuInfo(Long systemId){

        return  R.ok(service.systemMenuInfo(systemId));
    }

    @GetMapping("/querySystemRole")
    @ApiOperation(value = "获取所有系统的角色")
    public R<List<QueryRoleInfo>> querySystemRole(Long userId){
        return  R.ok(service.querySystemRole(userId));
    }


}
