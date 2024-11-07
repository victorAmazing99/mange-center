package com.victor.system.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.victor.common.entity.system.SysUserSecurity;

/**
 * <p>
 * 用户密保问题信息 服务类
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
public interface SysUserSecurityService extends IService<SysUserSecurity> {
    /**
     * 根据用户名获取密保问题
     * @param userName
     * @return
     */
    SysUserSecurity getQuestionByUserName(String userName);

    /**
     * 校验密保问题
     */
    boolean check(SysUserSecurity sysUserSecurity);

    /**
     * 保存密保问题
     */
    boolean create(SysUserSecurity sysUserSecurity);
}
