package com.victor.system.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.victor.common.entity.system.SysAgency;
import com.victor.common.request.PageRequest;
import com.victor.common.response.system.OrgInfo;

import java.util.List;

/**
 * <p>
 * 机构信息表 服务类
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
public interface SysAgencyService extends IService<SysAgency> {

    Boolean checkHospital(SysAgency body);

    List<OrgInfo> getOrgList();

    boolean updateByIdAndSub(SysAgency body);

    Page<OrgInfo> getOrgPage(PageRequest pageRequest);

    Integer getRuleSystemType();
}
