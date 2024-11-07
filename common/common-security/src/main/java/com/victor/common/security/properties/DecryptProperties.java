package com.victor.common.security.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * sm2解密配置
 * 
 */
@Configuration
@ConfigurationProperties(prefix = "encrypt.sm2")
@Data
public class DecryptProperties {

    private String thirdListStr;
    private String thirdPrivateKey;
    private String whiteListStr;
    private String publicKey;
    private String privateKey;
    private boolean enabled;
}
