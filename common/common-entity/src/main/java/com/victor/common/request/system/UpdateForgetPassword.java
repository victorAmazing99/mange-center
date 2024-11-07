package com.victor.common.request.system;

import lombok.Data;

@Data
public class UpdateForgetPassword {

    private Long userId;

    private String password;
}
