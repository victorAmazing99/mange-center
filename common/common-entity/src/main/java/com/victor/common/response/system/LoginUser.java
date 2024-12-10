package com.victor.common.response.system;

import com.victor.common.entity.system.SysUser;
import lombok.Data;

import java.util.Set;

@Data
public class LoginUser extends SysUser {

    private String token;

    private Long loginTime;

    private Long expireTime;

    private Set<String> roles;

    private Set<String> permissions;
}
