package com.victor.system.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.victor.common.entity.system.SysSystem;
import com.victor.common.entity.vo.system.SysMenuVo;
import com.victor.common.entity.vo.system.SysSystemVo;
import com.victor.common.response.system.QueryRoleInfo;

import java.util.List;

/**
 * <p>
 * 系统信息表 服务类
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
public interface SysSystemService extends IService<SysSystem> {

    List<SysSystemVo> querySystemInfoByUserId(Long userId);

    List<SysMenuVo> systemMenuInfoBySystemId(Long userId, Long systemId);

    List<SysMenuVo> systemMenuInfo(Long systemId);


    List<QueryRoleInfo> querySystemRole(Long userId);
}
