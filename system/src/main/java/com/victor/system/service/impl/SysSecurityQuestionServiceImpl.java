package com.victor.system.service.impl;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.victor.system.service.SysSecurityQuestionService;
import com.victor.common.dao.system.SysSecurityQuestionDao;
import com.victor.common.entity.system.SysSecurityQuestion;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 密保问题表 服务实现类
 * </p>
 *
 * @author victor
 * @since 2022年11月23日
 */
@Service
@DS("system")
public class SysSecurityQuestionServiceImpl extends ServiceImpl<SysSecurityQuestionDao, SysSecurityQuestion> implements SysSecurityQuestionService {
}
