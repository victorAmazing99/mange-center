package com.victor.system.service.impl;

import cn.hutool.core.collection.CollectionUtil;
import cn.hutool.core.util.ObjectUtil;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.victor.common.core.context.SecurityContextHolder;
import com.victor.common.request.PageRequest;
import com.victor.system.service.SysAgencyService;
import com.victor.system.service.SysSubAgencyService;
import com.victor.common.core.utils.StringUtils;
import com.victor.common.core.utils.bean.BeanUtils;
import com.victor.common.dao.system.SysAgencyDao;
import com.victor.common.entity.system.SysAgency;
import com.victor.common.entity.system.SysSubAgency;
import com.victor.common.response.system.OrgInfo;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * <p>
 * 机构信息表 服务实现类
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
@Service
@DS("system")
public class SysAgencyServiceImpl extends ServiceImpl<SysAgencyDao, SysAgency> implements SysAgencyService {

    @Autowired
    private SysSubAgencyService SysSubAgencyService;

    /**
     * 判断机构编码是否重复
     *
     * @param body
     * @return
     */
    @Override
    public Boolean checkHospital(SysAgency body) {
        Long integer = this.baseMapper.selectCount(new LambdaQueryWrapper<SysAgency>()
                .ne(body.getId() != null && body.getId() > 0, SysAgency::getId, body.getId())
                .and(wrapper -> wrapper.eq(StringUtils.isNotEmpty(body.getOrgCode()), SysAgency::getOrgCode, body.getOrgCode())
                        .or()
                        .eq(StringUtils.isNotEmpty(body.getOrgName()), SysAgency::getOrgName, body.getOrgName())));
        Long integerSub = SysSubAgencyService.getBaseMapper().selectCount(new LambdaQueryWrapper<SysSubAgency>()
                .or(wrapper -> wrapper.eq(StringUtils.isNotEmpty(body.getOrgCode()), SysSubAgency::getOrgSubCode, body.getOrgCode())
                        .eq(StringUtils.isNotEmpty(body.getOrgName()), SysSubAgency::getOrgSubName, body.getOrgName())));
        return integer > 0 || integerSub > 0;
    }

    /**
     * 机构列表查询
     *
     * @return
     */
    @Override
    public List<OrgInfo> getOrgList() {


        List<SysAgency> SysAgencys = this.baseMapper.selectList(new LambdaQueryWrapper<SysAgency>()
                .orderByAsc(SysAgency::getOrgCode));


        List<SysSubAgency> SysSubAgencys = SysSubAgencyService.getBaseMapper().selectList(new LambdaQueryWrapper<SysSubAgency>()
                .orderByAsc(SysSubAgency::getOrgSubCode));
        if (CollectionUtil.isEmpty(SysSubAgencys)) {
            SysSubAgencys = new ArrayList<>();
        }
        List<OrgInfo> orgInfos = new ArrayList<>();
        if (CollectionUtil.isNotEmpty(SysAgencys)) {
            Map<String, List<SysSubAgency>> subHospitalMap = SysSubAgencys.stream().collect(Collectors.groupingBy(SysSubAgency::getOrgCode));
            for (SysAgency hospital : SysAgencys) {
                OrgInfo orgInfo = new OrgInfo();
                BeanUtils.copyProperties(hospital, orgInfo);
                orgInfo.setName(hospital.getOrgName());
                orgInfo.setSubList(subHospitalMap.get(hospital.getOrgCode()));
                orgInfos.add(orgInfo);
            }
        }
        return orgInfos;

    }

    /**
     * 更新机构以及子机构
     *
     * @param body
     * @return
     */
    @Override
    public boolean updateByIdAndSub(SysAgency body) {
        String orgCode = body.getOrgCode();
        if (StringUtils.isNotEmpty(orgCode)) {
            SysAgency hospital = this.baseMapper.selectById(body.getId());
            String oldOrgCode = hospital.getOrgCode();
            List<SysSubAgency> SysSubAgencys = SysSubAgencyService.getBaseMapper().selectList(new LambdaQueryWrapper<SysSubAgency>()
                    .eq(SysSubAgency::getOrgCode, oldOrgCode));
            SysSubAgencys.forEach(sub -> sub.setOrgCode(orgCode));
            SysSubAgencyService.updateBatchById(SysSubAgencys);
        }
        if(Objects.isNull(body.getOrgPic())){
            body.setOrgPic("");
        }
        if(Objects.isNull(body.getQrCodePic())){
            body.setQrCodePic("");
        }
        return this.updateById(body);
    }

    @Override
    public Page<OrgInfo> getOrgPage(PageRequest pageRequest) {

        List<SysSubAgency> SysSubAgencys = SysSubAgencyService.getBaseMapper().selectList(new LambdaQueryWrapper<SysSubAgency>()
                .orderByAsc(SysSubAgency::getOrgSubCode));

        Page<OrgInfo> page = new Page<OrgInfo>(pageRequest.getCurrent(), pageRequest.getSize());
        Page<SysAgency> SysAgencyPage = new Page<SysAgency>(pageRequest.getCurrent(), pageRequest.getSize());
        SysAgencyPage = page(SysAgencyPage, new LambdaQueryWrapper<SysAgency>().orderByAsc(SysAgency::getOrgCode));
        BeanUtils.copyProperties(SysAgencyPage, page);
        List<SysAgency> hospitals = SysAgencyPage.getRecords();
        List<OrgInfo> orgInfos = new ArrayList<>();
        for (SysAgency hospital : hospitals) {
            OrgInfo orgInfo = new OrgInfo();
            BeanUtils.copyProperties(hospital, orgInfo);
            orgInfos.add(orgInfo);
        }
        page.setRecords(orgInfos);

        for (OrgInfo orgInfo : page.getRecords()) {

            Map<String, List<SysSubAgency>> subHospitalMap = SysSubAgencys.stream().collect(Collectors.groupingBy(SysSubAgency::getOrgCode));

            orgInfo.setName(orgInfo.getOrgName());
            orgInfo.setSubList(subHospitalMap.get(orgInfo.getOrgCode()));

        }

        return page;
    }

    @Override
    public Integer getRuleSystemType() {
        String hospitalId = SecurityContextHolder.getHospitalId();
        SysAgency hospital = getOne(new LambdaQueryWrapper<SysAgency>()
                .eq(SysAgency::getOrgCode, hospitalId));
        return ObjectUtil.isNotEmpty(hospital) ? hospital.getRuleSystemType() : 1;
    }
}
