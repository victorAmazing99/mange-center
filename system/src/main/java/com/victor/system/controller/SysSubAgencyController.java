package com.victor.system.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.victor.system.service.SysSubAgencyService;
import com.victor.common.core.domain.R;
import com.victor.common.core.utils.StringUtils;
import com.victor.common.entity.system.SysSubAgency;
import com.victor.common.log.annotation.Log;
import com.victor.common.log.enums.BusinessType;
import com.victor.common.request.PageRequest;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 * 子机构信息表 controller
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
@Api(tags = "REST - 子机构信息表")
@RestController
@RequestMapping("/sysSubAgency")
public class SysSubAgencyController {
    @Autowired
    SysSubAgencyService service;

    @PostMapping("/create")
    @ApiOperation(value = "新增")
    @Log(title = "子机构信息表-新增",businessType = BusinessType.INSERT)
    public R<?> createOne(@RequestBody SysSubAgency body) {
        Boolean isRepeat = service.checkHospital(body);
        if (!isRepeat) {
            boolean flag = service.save(body);
            return R.ok(flag, flag ? "创建成功" : "创建失败");
        }
        return R.fail("机构代码/名称不允许重复");
    }

    @DeleteMapping("/delete/{id}")
    @ApiOperation(value = "删除")
    @Log(title = "子机构信息表-删除",businessType = BusinessType.DELETE)
    public R<?> delete(@PathVariable("id") Long id) {
        boolean flag = service.removeById(id);
        return R.ok(flag, flag ? "删除成功" : "删除失败");
    }

    @PutMapping("/update")
    @ApiOperation(value = "修改")
    @Log(title = "子机构信息表-修改",businessType = BusinessType.UPDATE)
    public R<?> update(@RequestBody SysSubAgency body) {
        if (StringUtils.isNotEmpty(body.getOrgSubCode())) {
            Boolean isRepeat = service.checkHospital(body);
            if (!isRepeat) {
                boolean flag = service.updateById(body);
                return R.ok(flag, flag ? "修改成功" : "修改失败");
            } else {
                return R.fail("机构代码/名称不允许重复");
            }
        }
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
    public R<?> findList(@RequestBody SysSubAgency body) {

        return R.ok(service.list(new LambdaQueryWrapper<SysSubAgency>(body)));
    }

    @PostMapping("/findPage")
    @ApiOperation(value = "分页查询")
    public R findPage(@RequestBody SysSubAgency body, PageRequest pageRequest) {
        Page<SysSubAgency> page = new Page<>(pageRequest.getCurrent(), pageRequest.getSize());
        return R.ok(service.page(page, new LambdaQueryWrapper<SysSubAgency>(body).orderByDesc(SysSubAgency::getId)));
    }

}
