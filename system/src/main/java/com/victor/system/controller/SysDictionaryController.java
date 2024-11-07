package com.victor.system.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.victor.system.service.SysDictionaryService;
import com.victor.common.core.domain.R;
import com.victor.common.core.web.domain.Result;
import com.victor.common.entity.system.SysDictionary;
import com.victor.common.log.annotation.Log;
import com.victor.common.log.enums.BusinessType;
import com.victor.common.request.PageRequest;
import com.victor.common.response.system.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 * 字典表 controller
 * </p>
 *
 * @author victor
 * @since 2022年12月07日
 */
@Api(tags = "REST - 字典表")
@RestController
@RequestMapping("/sysDictionary")
public class SysDictionaryController {
    @Autowired
    SysDictionaryService service;

    @PostMapping("/create")
    @ApiOperation(value = "新增")
    @Log(title = "字典表-新增", businessType = BusinessType.INSERT)
    public R<?> createOne(@RequestBody SysDictionary body) {
        boolean flag = service.save(body);
        return R.ok(flag, flag ? "创建成功" : "创建失败");
    }

    @DeleteMapping("/delete/{id}")
    @ApiOperation(value = "删除")
    @Log(title = "字典表-删除", businessType = BusinessType.DELETE)
    public R<?> delete(@PathVariable("id") Integer id) {
        boolean flag = service.removeById(id);
        return R.ok(flag, flag ? "删除成功" : "删除失败");
    }

    @PutMapping("/update")
    @ApiOperation(value = "修改")
    @Log(title = "字典表-修改", businessType = BusinessType.UPDATE)
    public R<?> update(@RequestBody SysDictionary body) {
        boolean flag = service.updateById(body);
        return R.ok(flag, flag ? "修改成功" : "修改失败");
    }

    @GetMapping("/{id}")
    @ApiOperation(value = "单条查询")
    public R<?> getOne(@PathVariable("id") Integer id) {

        return R.ok(service.getById(id));
    }

    @GetMapping("/listByFieldName")
    @ApiOperation(value = "根据fieldName获取字典")
    public R<?> listByFieldName(@RequestParam("fieldName") String fieldName) {
        return R.ok(service.listByFieldName(fieldName));
    }

    @GetMapping("/getByFieldNameAndCode")
    @ApiOperation(value = "根据fieldName获取字典")
    public R<SysDictionary> getByFieldNameAndCode(@RequestParam("fieldName") String fieldName, @RequestParam("code") String code) {
        return R.ok(service.getByFieldNameAndCode(fieldName, code));
    }

    @PostMapping("/findList")
    @ApiOperation(value = "列表查询")
    public R<?> findList(@RequestBody SysDictionary body) {

        return R.ok(service.list(new LambdaQueryWrapper<SysDictionary>(body)));
    }

    @PostMapping("/findPage")
    @ApiOperation(value = "分页查询")
    public R findPage(@RequestBody SysDictionary body, PageRequest pageRequest) {
        Page<SysDictionary> page = new Page<>(pageRequest.getCurrent(), pageRequest.getSize());
        return R.ok(service.page(page, new LambdaQueryWrapper<SysDictionary>(body).orderByDesc(SysDictionary::getId)));
    }

    @ApiOperation("获取机构字典")
    @GetMapping("/getDictionaryOrg")
    public R<DictionaryOrg> getDictionaryOrg() {
        return R.ok(service.getDictionaryOrg());
    }

    @ApiOperation("获取用户字典")
    @GetMapping("/getDictionaryUser")
    public R<DictionaryUser> getDictionaryUser() {
        return R.ok(service.getDictionaryUser());
    }

    @ApiOperation("获取健康档案字典")
    @GetMapping("/getDictionaryEhr")
    public R<DictionaryEhr> getDictionaryEhr() {
        return R.ok(service.getDictionaryEhr());
    }

    @ApiOperation("获取评估字典")
    @GetMapping("/getDictionaryAssess")
    public R<DictionaryAssess> getDictionaryAssess() {
        return R.ok(service.getDictionaryAssess());
    }

    @ApiOperation("获取服务字典")
    @GetMapping("/getDictionaryService")
    public R<DictionaryService> getDictionaryService() {
        return R.ok(service.getDictionaryService());
    }

    @ApiOperation("清除字典缓存")
    @GetMapping("/clearCache")
    public Result clearCache(@RequestParam(required = false) String fieldName, @RequestParam(required = false) String code) {
        service.clearCache(fieldName, code);
        return Result.success();
    }


}
