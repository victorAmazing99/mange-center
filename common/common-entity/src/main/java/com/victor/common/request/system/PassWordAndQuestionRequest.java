package com.victor.common.request.system;

import com.victor.common.entity.system.SysUserSecurity;
import lombok.Data;

@Data
public class PassWordAndQuestionRequest {
    private UpdateStartPassword updateStartPassword;
    private SysUserSecurity question;
}
