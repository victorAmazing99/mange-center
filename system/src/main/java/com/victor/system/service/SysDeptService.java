package com.victor.system.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.victor.common.entity.system.SysDept;

import java.util.List;

/**
 * <p>
 * 科室信息表 服务类
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
public interface SysDeptService extends IService<SysDept> {

    Boolean checkDept(List<SysDept> body);

    boolean saveAndUpdate(List<SysDept> body);

    List<SysDept> findList(SysDept body);
}
