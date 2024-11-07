package com.victor.system.service.impl;

import cn.hutool.core.collection.CollectionUtil;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.victor.system.service.SysDeptService;
import com.victor.common.core.utils.BizAssertUtil;
import com.victor.common.core.utils.StringUtils;
import com.victor.common.dao.system.SysDeptDao;
import com.victor.common.entity.system.SysDept;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * <p>
 * 科室信息表 服务实现类
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
@Service
@DS("system")
public class SysDeptServiceImpl extends ServiceImpl<SysDeptDao, SysDept> implements SysDeptService {

    @Override
    public Boolean checkDept(List<SysDept> body) {
        BizAssertUtil.isTrue(CollectionUtil.isNotEmpty(body), "科室信息不能为空");
        body.forEach(dept -> {
            BizAssertUtil.isTrue(StringUtils.isNotEmpty(dept.getDeptCode()) && StringUtils.isNotEmpty(dept.getDeptName()), "科室信息不能为空");
        });
        //判断入参的科室编码和名称是否有重复
        Map<String, List<SysDept>> codeMap = body.stream().collect(Collectors.groupingBy(SysDept::getDeptCode));
        Map<String, List<SysDept>> nameMap = body.stream().collect(Collectors.groupingBy(SysDept::getDeptName));
        if (codeMap.size() != body.size() || nameMap.size() != body.size()) {
            return true;
        }

        //判断其他机构是否有重复科室编码
        String orgCode = body.get(0).getOrgCode();
        String orgSubCode = body.get(0).getOrgSubCode();
        List<String> deptCodeList = body.stream().map(SysDept::getDeptCode).collect(Collectors.toList());
        List<String> deptNameList = body.stream().map(SysDept::getDeptName).collect(Collectors.toList());
        List<Long> idList = body.stream().filter(dept -> dept.getId() != null).map(SysDept::getId).collect(Collectors.toList());
        Long codeRepeat = this.baseMapper.selectCount(new LambdaQueryWrapper<SysDept>()
                .in(CollectionUtil.isNotEmpty(deptCodeList), SysDept::getDeptCode, deptCodeList)
                .notIn(CollectionUtil.isNotEmpty(idList), SysDept::getId, idList));
        Long nameRepeat = this.baseMapper.selectCount(new LambdaQueryWrapper<SysDept>()
                .eq(StringUtils.isNotEmpty(orgCode), SysDept::getOrgCode, orgCode)
                .eq(StringUtils.isNotEmpty(orgSubCode), SysDept::getOrgSubCode, orgSubCode)
                .in(CollectionUtil.isNotEmpty(deptNameList), SysDept::getDeptName, deptNameList)
                .notIn(CollectionUtil.isNotEmpty(idList), SysDept::getId, idList));

        return codeRepeat > 0 || nameRepeat > 0;
    }

    @Override
    public boolean saveAndUpdate(List<SysDept> body) {
        String orgCode = body.get(0).getOrgCode();
        String orgSubCode = body.get(0).getOrgSubCode();
        if (null == orgSubCode) {
            orgSubCode = "";
        }
        this.baseMapper.delete(new LambdaQueryWrapper<SysDept>()
                .eq(SysDept::getOrgCode, orgCode)
                .eq(SysDept::getOrgSubCode, orgSubCode));
        boolean flag = false;
        for (SysDept dept : body) {
            flag = this.save(dept);
        }
        return flag;
    }

    @Override
    public List<SysDept> findList(SysDept body) {
        String orgSubCode = body.getOrgSubCode();
        if (StringUtils.isNotEmpty(orgSubCode)) {
            //子机构下科室
            return list(new LambdaQueryWrapper<SysDept>()
                    .eq(StringUtils.isNotEmpty(body.getOrgCode()), SysDept::getOrgCode, body.getOrgCode())
                    .eq(SysDept::getOrgSubCode, orgSubCode)
                    .orderByAsc(SysDept::getDeptCode));
        } else {
            //主机构下科室
            return list(new LambdaQueryWrapper<SysDept>()
                    .eq(StringUtils.isNotEmpty(body.getOrgCode()), SysDept::getOrgCode, body.getOrgCode())
                    .eq(SysDept::getOrgSubCode, "")
                    .orderByAsc(SysDept::getDeptCode));
        }
    }
}
