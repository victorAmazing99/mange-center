package com.victor.system.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.victor.common.entity.system.SysUser;
import com.victor.common.request.system.PassWordAndQuestionRequest;
import com.victor.common.request.system.UserAble;
import com.victor.common.response.system.SysUserResp;

import java.util.List;

/**
 * <p>
 * 用户信息表 服务类
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
public interface SysUserService extends IService<SysUser> {

    /**
     * 创建用户
     * @param user
     * @return
     */
    Boolean createUser(SysUser user);

    /**
     * 修改用户信息，密码会被清除不更新
     * @param user
     * @return
     */
    Boolean updateUserById(SysUser user);

    /**
     * 修改密码
     * @param password
     * @return
     */
    Boolean updatePasswordById(String password,String newPassword);

    Boolean disableUser(UserAble userAble);

    /**
     * 根据username查询用户信息
     * @param name
     * @return
     */
    SysUser getByUserName(String name);

    SysUser getByUserNameAll(String name);

    Boolean updateStartPasswordById(PassWordAndQuestionRequest passWordAndQuestionRequest);

    Boolean updateExpiredPasswordById(Long userId, String password);

    Boolean updateForgetPasswordByUserName(String userName, String password);

    Boolean updateResetPasswordById(String userId);

    List<SysUserResp> getFamilyDoc();

    List<SysUserResp> getUserByOrg(String orgCode);

    List<SysUserResp> getMedicalAssistanceInfo(List<Integer> body);

    List<SysUserResp> getUserByCategory(String code);
}
