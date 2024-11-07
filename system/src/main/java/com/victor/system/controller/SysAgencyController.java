package com.victor.system.controller;


import cn.hutool.core.collection.CollectionUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.victor.common.core.enums.OrgCategoryEnum;
import com.victor.common.entity.system.SysDictionary;
import com.victor.system.service.SysDictionaryService;
import com.victor.system.service.SysAgencyService;
import com.victor.common.core.domain.R;
import com.victor.common.core.utils.StringUtils;
import com.victor.common.entity.system.SysAgency;
import com.victor.common.log.annotation.Log;
import com.victor.common.log.enums.BusinessType;
import com.victor.common.request.PageRequest;
import com.victor.common.response.system.OrgInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>
 * 机构信息表 controller
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
@Api(tags = "REST - 机构信息表")
@RestController
@RequestMapping("/sysAgency")
public class SysAgencyController {
    @Autowired
    SysAgencyService service;

    @Autowired
    SysDictionaryService sysDictionaryService;

    @PostMapping("/create")
    @ApiOperation(value = "新增")
    @Log(title = "机构信息表-新增",businessType = BusinessType.INSERT)
    public R<?> createOne(@RequestBody SysAgency body) {
        Boolean isRepeat = service.checkHospital(body);
        if (!isRepeat) {
            boolean flag = service.save(body);
            return R.ok(flag, flag ? "创建成功" : "创建失败");
        }
        return R.fail("机构代码/名称不允许重复");
    }

    @DeleteMapping("/delete/{id}")
    @ApiOperation(value = "删除")
    @Log(title = "机构信息表-删除",businessType = BusinessType.DELETE)
    public R<?> delete(@PathVariable("id") Long id) {
        boolean flag = service.removeById(id);
        return R.ok(flag, flag ? "删除成功" : "删除失败");
    }

    @PutMapping("/update")
    @ApiOperation(value = "修改")
    @Log(title = "机构信息表-修改",businessType = BusinessType.UPDATE)
    public R<?> update(@RequestBody SysAgency body) {
        if (StringUtils.isNotEmpty(body.getOrgCode())) {
            Boolean isRepeat = service.checkHospital(body);
            if (!isRepeat) {
                boolean flag = service.updateByIdAndSub(body);
                return R.ok(flag, flag ? "修改成功" : "修改失败");
            } else {
                return R.fail("机构代码/名称不允许重复");
            }
        }
        boolean flag = service.updateById(body);
        return R.ok(flag, flag ? "修改成功" : "修改失败");
    }

    @GetMapping("/getRuleSystemType")
    @ApiOperation(value = "获取机构规则系统")
    public R<Integer> getRuleSystemType() {
        return R.ok(service.getRuleSystemType());
    }

    @GetMapping("/{id}")
    @ApiOperation(value = "单条查询")
    public R<?> getOne(@PathVariable("id") Long id) {
        return R.ok(service.getById(id));
    }

    @GetMapping("/findList")
    @ApiOperation(value = "列表查询")
    public R<List<SysAgency>> findList() {

        return R.ok(service.list());
    }

    @PostMapping("/findPage")
    @ApiOperation(value = "分页查询")
    public R findPage(@RequestBody SysAgency body, PageRequest pageRequest) {
        Page<SysAgency> page = new Page<>(pageRequest.getCurrent(), pageRequest.getSize());
        return R.ok(service.page(page, new LambdaQueryWrapper<SysAgency>(body).orderByDesc(SysAgency::getId)));
    }

    @PostMapping("/getOrgList")
    @ApiOperation(value = "机构列表查询")
    public R<List<OrgInfo>> getOrgList() {
        List<OrgInfo> orgList = service.getOrgList();
        return R.ok(orgList);
    }


    @PostMapping("/getOrgPage")
    @ApiOperation(value = "机构列表查询")
    public R<Page<OrgInfo>> getOrgPage(@RequestBody  PageRequest pageRequest) {
        return R.ok(service.getOrgPage(pageRequest));
    }



    @GetMapping("/getOrgNameByOrgCode")
    @ApiOperation(value = "根据机构ID获取机构名称")
    public R<String> getOrgList(String orgCode) {
       SysAgency orgList = service.getOne(new LambdaQueryWrapper<SysAgency>()
               .eq(SysAgency::getOrgCode,orgCode));
        return R.ok(orgList.getOrgName());
    }

    @GetMapping("/getOrgCodeCloseStatus")
    @ApiOperation(value = "根据机构ID获取机构名称")
    public R<String> getOrgCodeCloseStatus(String orgCode) {
        SysAgency orgList = service.getOne(new LambdaQueryWrapper<SysAgency>()
                .eq(SysAgency::getOrgCode,orgCode));
        return R.ok(orgList.getCloseStatus());
    }
    @GetMapping("/getOrgCategory")
    @ApiOperation(value = "根据字典表CODE获取机构类别")
    public R<List<SysDictionary>> getOrgCategory() {
        List<SysAgency> hospitalList = service.list(new LambdaQueryWrapper<SysAgency>()
        .eq(SysAgency::getOrgCategoryName, OrgCategoryEnum.ORG_CATEGORY_B.getValue()));
        List<SysDictionary> dictionaryList = sysDictionaryService.listByFieldName("ORG_CATEGORY_CODE");
        dictionaryList.forEach(s->{
                if(CollectionUtil.isNotEmpty(hospitalList) && OrgCategoryEnum.ORG_CATEGORY_B.getValue().equals(s.getValue())){
                    s.setOrgCategoryIdentfy(false);
                }else{
                    s.setOrgCategoryIdentfy(true);
                }
            });

        return R.ok(dictionaryList);
    }

}
