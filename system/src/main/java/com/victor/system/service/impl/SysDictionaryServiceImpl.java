package com.victor.system.service.impl;

import cn.hutool.core.util.ObjectUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.json.JSONUtil;
import com.alibaba.fastjson2.JSONObject;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.victor.system.service.SysDictionaryService;
import com.victor.common.core.constant.DictionaryConstant;
import com.victor.common.core.constant.RedisNameSpace;
import com.victor.common.core.utils.CacheClient;
import com.victor.common.dao.system.SysDictionaryDao;
import com.victor.common.entity.system.SysDictionary;
import com.victor.common.response.system.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 字典表 服务实现类
 * </p>
 *
 * @author victor
 * @since 2022年12月07日
 */
@Service
@DS("system")
public class SysDictionaryServiceImpl extends ServiceImpl<SysDictionaryDao, SysDictionary> implements SysDictionaryService {

    @Autowired
    private CacheClient cacheClient;

    @Override
    public DictionaryOrg getDictionaryOrg() {
        DictionaryOrg dictionaryOrg = new DictionaryOrg();
        dictionaryOrg.setOrgLevelDic(listByFieldName(DictionaryConstant.LEVEL_CODE));
        return dictionaryOrg;
    }

    @Override
    public DictionaryUser getDictionaryUser() {
        DictionaryUser dictionaryUser = new DictionaryUser();
        dictionaryUser.setCategoryDic(listByFieldName(DictionaryConstant.CATEGORY_CODE));
        dictionaryUser.setProfessionDic(listByFieldName(DictionaryConstant.PROFESSION_CODE));
        dictionaryUser.setDutyDic(listByFieldName(DictionaryConstant.DUTY_CODE));
        dictionaryUser.setSexDic(listByFieldName(DictionaryConstant.SEX_CODE));
        dictionaryUser.setTeamRoleDic(listByFieldName(DictionaryConstant.TEAM_ROLE_CODE));
        return dictionaryUser;
    }

    @Override
    public DictionaryEhr getDictionaryEhr() {
        DictionaryEhr dictionaryEhr = new DictionaryEhr();
        dictionaryEhr.setSexDic(listByFieldName(DictionaryConstant.SEX_CODE));
        dictionaryEhr.setNationDic(listByFieldName(DictionaryConstant.NATION_CODE));
        dictionaryEhr.setMarriageDic(listByFieldName(DictionaryConstant.MARRIAGE_CODE));
        dictionaryEhr.setOccupationDic(listByFieldName(DictionaryConstant.OCCUPATION_CODE));
        dictionaryEhr.setPaymentDic(listByFieldName(DictionaryConstant.PAYMENT_METHOD_CODE));
        dictionaryEhr.setBloodTypeDic(listByFieldName(DictionaryConstant.BLOOD_TYPE_CODE));
        dictionaryEhr.setRhBloodTypeDic(listByFieldName(DictionaryConstant.RH_BLOOD_TYPE_CODE));
        dictionaryEhr.setAllergyDic(listByFieldName(DictionaryConstant.ALLERGY_CODE));
        dictionaryEhr.setExposureDic(listByFieldName(DictionaryConstant.EXPOSURE_CODE));
        dictionaryEhr.setDiseaseDic(listByFieldName(DictionaryConstant.DISEASE_CODE));
        dictionaryEhr.setRelationDic(listByFieldName(DictionaryConstant.RELATION_CODE));
        dictionaryEhr.setDisabilityDic(listByFieldName(DictionaryConstant.DISABILITY_CODE));
        dictionaryEhr.setResidenceDic(listByFieldName(DictionaryConstant.RESIDENCE_CODE));
        dictionaryEhr.setDegreeDic(listByFieldName(DictionaryConstant.DEGREE_CODE));
        dictionaryEhr.setLivingDic(listByFieldName(DictionaryConstant.LIVING_CONDITION_CODE));
        dictionaryEhr.setExhaustDic(listByFieldName(DictionaryConstant.EXHAUST_CODE));
        dictionaryEhr.setFuelDic(listByFieldName(DictionaryConstant.FUEL_CODE));
        dictionaryEhr.setToiletDic(listByFieldName(DictionaryConstant.TOILET_CODE));
        dictionaryEhr.setWaterDic(listByFieldName(DictionaryConstant.WATER_CODE));
        dictionaryEhr.setLivestockDic(listByFieldName(DictionaryConstant.LIVESTOCK_CODE));
        dictionaryEhr.setCategoryDic(listByFieldName(DictionaryConstant.EHR_CATEGORY_CODE));
        dictionaryEhr.setFinalStatusDic(listByFieldName(DictionaryConstant.FINAL_STATUS));
        dictionaryEhr.setUpdateModeDic(listByFieldName(DictionaryConstant.UPDATE_MODE_CODE));
        return dictionaryEhr;
    }

    @Override
    public DictionaryAssess getDictionaryAssess() {
        DictionaryAssess dictionaryAssess = new DictionaryAssess();
        dictionaryAssess.setAssessDisease(listByFieldName(DictionaryConstant.ASSESS_DISEASE));
        dictionaryAssess.setQyyhCategory(listByFieldName(DictionaryConstant.QYYH_CATEGORY_CODE));
        dictionaryAssess.setPreviousDisease(listByFieldName(DictionaryConstant.ASSESS_PREVIOUS_DISEASE));
        dictionaryAssess.setEatingHabits(listByFieldName(DictionaryConstant.EATING_HABITS_CODE));
        dictionaryAssess.setSaltIntake(listByFieldName(DictionaryConstant.SALT_INTAKE_CODE));
        dictionaryAssess.setExerciseFrequency(listByFieldName(DictionaryConstant.EXERCISE_FREQUENCY_CODE));
        dictionaryAssess.setSmokingStatus(listByFieldName(DictionaryConstant.SMOKING_STATUS_CODE));
        dictionaryAssess.setDrinkingFrequency(listByFieldName(DictionaryConstant.DRINKING_FREQUENCY_CODE));
        dictionaryAssess.setTcmConstitution(listByFieldName(DictionaryConstant.TCM_CONSTITUTION));
        dictionaryAssess.setAssessReportResult(listByFieldName(DictionaryConstant.ASSESS_REPORT_RESULT));
        return dictionaryAssess;
    }

    @Override
    public DictionaryService getDictionaryService() {
        DictionaryService dictionaryService = new DictionaryService();
        dictionaryService.setServiceMode(listByFieldName(DictionaryConstant.SERVICE_MODE));
        dictionaryService.setServiceContent(listByFieldName(DictionaryConstant.SERVICE_CONTENT));
        return dictionaryService;
    }


    @Override
    public List<SysDictionary> listByFieldName(String fieldName) {
        String json = cacheClient.get(RedisNameSpace.DICTIONARY, fieldName,
                () -> JSONObject.toJSONString(this.dictionaryByFieldName(fieldName)), 60 * 60);
        if (ObjectUtil.isEmpty(json)) {
            return null;
        } else {
            return JSONUtil.toList(json, SysDictionary.class);
        }
    }

    @Override
    public SysDictionary getByFieldNameAndCode(String fieldName, String code) {
        return cacheClient.get(RedisNameSpace.DICTIONARY, fieldName + ":" + code, () -> {
            return selectByFieldNameAndCode(fieldName, code);
        }, 60 * 60 * 24);
    }

    @Override
    public void clearCache(String fieldName, String code) {
        if (!ObjectUtil.isEmpty(fieldName)) {
            cacheClient.remove(RedisNameSpace.DICTIONARY, fieldName);
        }
        if (!ObjectUtil.isEmpty(fieldName) && !ObjectUtil.isEmpty(code)) {
            cacheClient.remove(RedisNameSpace.DICTIONARY, fieldName + ":" + code);
        }
    }

    /**
     * 通过字段名查询字典
     *
     * @param fieldName
     * @return
     */
    private List<SysDictionary> dictionaryByFieldName(String fieldName) {
        LambdaQueryWrapper<SysDictionary> wrapper = new LambdaQueryWrapper<SysDictionary>()
                .eq(SysDictionary::getFieldName, fieldName);
        return getBaseMapper().selectList(wrapper);
    }

    private SysDictionary selectByFieldNameAndCode(String fieldName, String code) {
        LambdaQueryWrapper<SysDictionary> wrapper = new LambdaQueryWrapper<SysDictionary>()
                .eq(SysDictionary::getFieldName, fieldName)
                .eq(SysDictionary::getCode, code);
        return getBaseMapper().selectOne(wrapper);
    }

    private List<SysDictionary> getDictionaryByFieldName(String fieldName) {
        String json = cacheClient.get(RedisNameSpace.DICTIONARY, fieldName);
        if (StrUtil.isBlank(json)) {
            //添加排他锁防穿透
            synchronized (this) {
                json = cacheClient.get(RedisNameSpace.DICTIONARY, fieldName);
                if (StrUtil.isBlank(json)) {
                    List<SysDictionary> list = dictionaryByFieldName(fieldName);
                    cacheClient.set(RedisNameSpace.DICTIONARY, fieldName, JSONUtil.parse(list).toString(), 60 * 60 * 24);
                    return list;
                } else {
                    return JSONUtil.toList(json, SysDictionary.class);
                }
            }
        } else {
            return JSONUtil.toList(json, SysDictionary.class);
        }
    }


}
