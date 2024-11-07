package com.victor.common.entity.vo.system;

import com.victor.common.entity.system.SysMenu;
import lombok.Data;

import java.util.List;

@Data
public class SysMenuVo extends SysMenu {


    private List<SysMenu> children;
}
