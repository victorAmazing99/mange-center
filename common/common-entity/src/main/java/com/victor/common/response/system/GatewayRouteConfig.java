package com.victor.common.response.system;

import lombok.Data;

@Data
public class GatewayRouteConfig {
    private String uri;
    private String paths;

    public GatewayRouteConfig(String uri, String paths) {
        this.uri = uri;
        this.paths = paths;
    }

    // Getters and setters (or just use lombok annotations)

    @Override
    public String toString() {
        return "GatewayRouteConfig{" +
                "uri='" + uri + '\'' +
                ", paths='" + paths + '\'' +
                '}';
    }

}
