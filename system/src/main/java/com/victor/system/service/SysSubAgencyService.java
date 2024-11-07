package com.victor.system.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.victor.common.entity.system.SysSubAgency;

/**
 * <p>
 * 子机构信息表 服务类
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
public interface SysSubAgencyService extends IService<SysSubAgency> {

    Boolean checkHospital(SysSubAgency body);
}
