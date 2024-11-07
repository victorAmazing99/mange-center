package com.victor.auth.controller;

import com.victor.auth.service.CaptchaService;
import com.victor.common.core.exception.CaptchaException;
import com.victor.common.core.web.domain.AjaxResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;

@RestController
public class CaptchaController {

    @Autowired
    CaptchaService captchaService;

    @GetMapping("/code")
    public AjaxResult createCaptcha() throws IOException, CaptchaException{

        return captchaService.createCaptcha();
    }
}
