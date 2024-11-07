package com.victor.server.controller;

import com.victor.common.core.domain.R;
import com.victor.server.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

    @Autowired
    TestService service;
    @GetMapping("/seata")
    public R<?> TestSeata(){

        service.testSeata();
        return R.ok();
    }

}
