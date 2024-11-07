package com.victor.common.request.system;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class UpdatePassword {

    private String userName;
    @NotBlank(message = "原始密码不能为空")
    private String password;
    @NotBlank(message = "新密码不能为空")
    private String newPassword;
}
