package com.victor.system.service.impl;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.victor.system.service.SysSubAgencyService;
import com.victor.common.core.utils.StringUtils;
import com.victor.common.dao.system.SysAgencyDao;
import com.victor.common.dao.system.SysSubAgencyDao;
import com.victor.common.entity.system.SysAgency;
import com.victor.common.entity.system.SysSubAgency;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 子机构信息表 服务实现类
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
@Service
@DS("system")
public class SysSubAgencyServiceImpl extends ServiceImpl<SysSubAgencyDao, SysSubAgency> implements SysSubAgencyService {

    @Autowired
    private SysAgencyDao SysAgencyDao;

    @Override
    public Boolean checkHospital(SysSubAgency body) {
        Long integer = this.baseMapper.selectCount(new LambdaQueryWrapper<SysSubAgency>()
                .ne(SysSubAgency::getId,body.getId())
                .and(wrapper ->wrapper.eq(StringUtils.isNotEmpty(body.getOrgSubCode()), SysSubAgency::getOrgSubCode, body.getOrgSubCode())
                        .or()
                        .eq(StringUtils.isNotEmpty(body.getOrgSubName()), SysSubAgency::getOrgSubName, body.getOrgSubName())));
        //查询子机构编码与父机构编码不可重复
        Long integerSub = SysAgencyDao.selectCount(new LambdaQueryWrapper<SysAgency>()

                .or(wrapper -> wrapper.eq(StringUtils.isNotEmpty(body.getOrgSubCode()), SysAgency::getOrgCode, body.getOrgSubCode())
                .eq(StringUtils.isNotEmpty(body.getOrgSubName()), SysAgency::getOrgName, body.getOrgSubName())));
        return integer > 0 || integerSub > 0;
    }
}
