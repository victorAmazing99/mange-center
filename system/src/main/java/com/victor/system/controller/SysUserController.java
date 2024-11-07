package com.victor.system.controller;


import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.victor.common.core.constant.CacheConstants;
import com.victor.common.core.context.SecurityContextHolder;
import com.victor.common.core.domain.R;
import com.victor.common.core.enums.UserCategoryEnum;
import com.victor.common.core.exception.ServiceException;
import com.victor.common.core.utils.EntityConverterUtil;
import com.victor.common.entity.system.SysUser;
import com.victor.common.log.annotation.Log;
import com.victor.common.log.enums.BusinessType;
import com.victor.common.redis.service.RedisService;
import com.victor.common.request.PageRequest;
import com.victor.common.request.system.*;
import com.victor.common.response.system.SysUserResp;
import com.victor.system.service.SysUserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>
 * 用户信息表 controller
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
@Api(tags = "REST - 用户信息表")
@RestController
@RequestMapping("/sysUser")
@Slf4j
public class SysUserController {
    @Autowired
    SysUserService service;

    @Autowired
    RedisService redisService;

    @PostMapping("/create")
    @ApiOperation(value = "新增")
    @Log(title = "用户信息-新增", businessType = BusinessType.INSERT)
    public R<?> createOne(@RequestBody SysUser body) {
        boolean flag = service.createUser(body);
        return R.ok(flag, flag ? "创建成功" : "创建失败");
    }

    @GetMapping("/getUser/{username}")
    @ApiOperation(value = "根据用户名获取用户信息")
    public R<?> getUserInfo(@PathVariable("username") String username) {
        SysUser sysUser = service.getOne(new LambdaQueryWrapper<SysUser>().eq(SysUser::getUserName, username));

        return R.ok(sysUser);
    }

    @DeleteMapping("/delete/{id}")
    @ApiOperation(value = "删除")
    @Log(title = "用户信息-删除", businessType = BusinessType.DELETE)
    public R<?> delete(@PathVariable("id") Long id) {
        boolean flag = service.removeById(id);
        return R.ok(flag, flag ? "删除成功" : "删除失败");
    }

    @PutMapping("/update")
    @ApiOperation(value = "修改,不可以更改密码！")
    @Log(title = "用户信息-修改", businessType = BusinessType.UPDATE)
    public R<?> update(@RequestBody SysUser body) {
        boolean flag = service.updateUserById(body);
        return R.ok(flag, flag ? "修改成功" : "修改失败");
    }

    @PutMapping("/updateStartPassword")
    @ApiOperation(value = "初次登陆，修改密码并保存密保问题！")
    @Log(title = "用户信息-初次登陆，修改密码并保存密保问题", businessType = BusinessType.UPDATE)
    public R<?> updateStartPassword(@RequestBody PassWordAndQuestionRequest passWordAndQuestionRequest) {
        Boolean flag = service.updateStartPasswordById(passWordAndQuestionRequest);
        return R.ok(flag, flag ? "修改成功" : "修改失败");
    }

    @PutMapping("/updatePassword")
    @ApiOperation(value = "修改密码！")
    @Log(title = "用户信息-修改密码", businessType = BusinessType.UPDATE)
    public R<?> updatePassword(@RequestBody UpdatePassword password) {
        Boolean flag = service.updatePasswordById(password.getPassword(), password.getNewPassword());
        return R.ok(flag, flag ? "修改成功" : "修改失败");
    }

    @PutMapping("/updateForgetPassword")
    @ApiOperation(value = "忘记密码修改密码！")
    @Log(title = "用户信息-忘记密码修改密码", businessType = BusinessType.UPDATE)
    public R<?> updateForgetPassword(@RequestBody UpdateStartPassword password) {
        Boolean flag = service.updateForgetPasswordByUserName(password.getUserName(), password.getPassword());
        return R.ok(flag, flag ? "修改成功" : "修改失败");
    }

    @PutMapping("/updateResetPassword")
    @ApiOperation(value = "重置密码")
    @Log(title = "用户信息-重置密码", businessType = BusinessType.UPDATE)
    public R<?> updateResetPassword(@RequestBody UpdateResetPassword password) {
        Boolean flag = service.updateResetPasswordById(password.getUserId());
        return R.ok(flag, flag ? "修改成功" : "修改失败");
    }


    @PutMapping("/updateExpiredPassword")
    @ApiOperation(value = "修改过期密码！")
    @Log(title = "用户信息-修改过期密码", businessType = BusinessType.UPDATE)
    public R<?> updateExpiredPassword(@RequestBody UpdateStartPassword password) {
        Boolean flag = service.updateExpiredPasswordById(
                SecurityContextHolder.getUserId()
                , password.getPassword());
        return R.ok(flag, flag ? "修改成功" : "修改失败");
    }


    @PutMapping("/updateForGetPassword")
    @ApiOperation(value = "忘记过期密码！")
    @Log(title = "用户信息-忘记过期密码修改密码", businessType = BusinessType.UPDATE)
    public R<?> updateForGetPassword(@RequestBody UpdateForgetPassword password) {

        Boolean flag1 = Boolean.valueOf(redisService.getCacheObject(CacheConstants.UPDATE_PAS_QUESTION_CHECK_STATUS + password.getUserId()));
        Boolean flag = false;
        if (flag1) {
            flag = service.updateExpiredPasswordById(
                    password.getUserId()
                    , password.getPassword());
        } else {
            throw new ServiceException("密保验证失效，请重新提交!", 500);
        }

        return R.ok(flag, flag ? "修改成功" : "修改失败");
    }

    @PostMapping("/disableUser")
    @ApiOperation(value = "停用启用账号")
    @Log(title = "用户信息-停用启用账号", businessType = BusinessType.UPDATE)
    public R<?> disableUser(@RequestBody UserAble userAble) {
        Boolean flag = service.disableUser(userAble);
        return R.ok(flag, flag ? "修改成功" : "修改失败");
    }


    @GetMapping("/selectUserInfo")
    @ApiOperation(value = "根据token 获取用户信息")
    public R<?> selectUserInfoByToken() throws Exception {
        Long id = SecurityContextHolder.getUserId();
        SysUser sysUser = service.getById(id);
        return R.ok(EntityConverterUtil.convert(sysUser, SysUserResp.class));
    }


    @GetMapping("/{id}")
    @ApiOperation(value = "单条查询")
    public R<?> getOne(@PathVariable("id") Long id) throws Exception {
        SysUser sysUser = service.getById(id);
        return R.ok(EntityConverterUtil.convert(sysUser, SysUserResp.class));
    }

    @PostMapping("/findList")
    @ApiOperation(value = "列表查询")
    public R<?> findList(@RequestBody SysUser body) throws Exception {

        List<SysUser> sysUsers = service.list(new LambdaQueryWrapper<SysUser>(body));
        return R.ok(EntityConverterUtil.convertList(sysUsers, SysUserResp.class));
    }

    @PostMapping("/findPage")
    @ApiOperation(value = "分页查询")
    public R<Page<SysUserResp>> findPage(@RequestBody SysUser body, PageRequest pageRequest) throws Exception {
        Page<SysUser> page = new Page<>(pageRequest.getCurrent(), pageRequest.getSize());
        service.page(page, new LambdaQueryWrapper<SysUser>(body).orderByDesc(SysUser::getId));
        return R.ok(EntityConverterUtil.convertPage(page, SysUserResp.class));
    }


    @PostMapping("/findPageByIdAndName")
    @ApiOperation(value = "按机构和姓名分页查询")
    public R<Page<SysUserResp>> findPageByIdAndName(@RequestBody SysUserPage body, PageRequest pageRequest) {
        Page<SysUser> page = new Page<>(pageRequest.getCurrent(), pageRequest.getSize());
        service.page(page, new LambdaQueryWrapper<SysUser>()
                .eq(StrUtil.isNotBlank(body.getCategoryCode()), SysUser::getCategoryCode, body.getCategoryCode())
                .like(StrUtil.isNotBlank(body.getName()), SysUser::getName, body.getName())
                .and(StrUtil.isNotBlank(body.getOrgCode()), a -> a.eq(StrUtil.isNotBlank(body.getOrgCode()), SysUser::getOrgCode, body.getOrgCode())
                        .or()
                        .eq(StrUtil.isNotBlank(body.getOrgCode()), SysUser::getOrgSubCode, body.getOrgCode()))
                .orderByDesc(SysUser::getId));
        return R.ok(EntityConverterUtil.convertPage(page, SysUserResp.class));

    }


    @GetMapping("/getFamilyDoc")
    @ApiOperation(value = "获取家庭医生")
    public R<List<SysUserResp>> getFamilyDoc() {
        return R.ok(service.getFamilyDoc());
    }

    @GetMapping("/getUserByOrg")
    @ApiOperation(value = "根据机构获取医生")
    public R<List<SysUserResp>> getUserByOrg() {
        return R.ok(service.getUserByOrg(SecurityContextHolder.getHospitalId()));
    }

}
