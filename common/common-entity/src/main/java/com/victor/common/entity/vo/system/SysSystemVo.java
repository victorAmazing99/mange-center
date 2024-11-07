package com.victor.common.entity.vo.system;

import com.victor.common.entity.system.SysSystem;
import lombok.Data;

import java.util.List;

@Data
public class SysSystemVo extends SysSystem {

    private Boolean readOnly;

    private List<String> menuNames;

}
