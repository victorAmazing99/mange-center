package com.victor.common.core.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;


@Component
@Data
@ConfigurationProperties(prefix = "abi")
public class AbiProperties {

    private String thirdTokenUrl;

    private String thirdSignUrl;

    private String thirdName;

    private String thirdPassword;

    private String userName;

    private String password;

    private String userTokenUrl;

    private String userSignUrl;
}



