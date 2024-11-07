import request from '@/utils/request'
//健康评估分页查询
export function findPage(data){
  return request({
      url: '/qyyh/findPage',
      method: 'POST',
      data:data
  })
}
//健康评估 获取基本信息
export function getBasicInfo(idCard){
  return request({
      url: '/qyyh/getBasicInfo/'+idCard,
      method: 'GET',
  })
}
//健康评估 获取医疗信息
export function getMedicalInfo(data){
  return request({
      url: '/qyyh/getMedicalInfo',
    method: 'POST',
      data
  })
}
//健康评估 评估日期列表查询
export function findList(idCard){
  return request({
      url: '/tAssessInfo/findList/'+idCard,
      method: 'GET',
  })
}
// export function findList(idCard){
//   return request({
//       url: '/server/tHealthAssess/findList/'+idCard,
//       method: 'GET',
//   })
// }
//健康评估 评估日期列表新增
export function create(idCard){
  return request({
      url: '/qyyh/addAssess/'+idCard,
      // url: '/server/tHealthAssess/create/'+idCard,
      method: 'GET',
  })
}
//健康评估 评估日期列表删除
export function deleteDate(id){
  return request({
      url: '/tAssessInfo/delete/'+id,
      method: 'DELETE',
  })
}
// export function deleteDate(id){
//   return request({
//       url: '/server/tHealthAssess/delete/'+id,
//       method: 'DELETE',
//   })
// }
//健康评估 可编辑部分 单条查询
export function tAssessReport(assessId){
  return request({
      url: '/tAssessReport/'+assessId,
      method: 'GET',
  })
}
//健康评估 获取评估字典
export function getDictionaryAssess(){
  return request({
      url: '/sysDictionary/getDictionaryAssess',
      method: 'GET',
  })
}
//健康评估 获取签约可查询家庭医生
export function getSignFamilyDoc(){
  return request({
      url: '/qyyh/getSignFamilyDoc',
      method: 'GET',
  })
}
//健康评估 已患慢病、已患疾病干预
export function updateDisease(data){
  return request({
      url: '/tAssessDisease/updateDisease',
    method: 'POST',
      data
  })
}
//健康评估 高危疾病
export function updateFactor(data){
  return request({
      url: '/tAssessFactor/updateFactor',
    method: 'POST',
      data
  })
}
//健康评估 高危疾病干预
export function addOrUpdateReport(data){
  return request({
      url: '/tAssessReport/addOrUpdateReport',
    method: 'POST',
      data
  })
}
//健康评估 新增评估
// export function createTAssessReport(idCard){
//   return request({
//       url: '/server/tHealthAssess/create/'+idCard,
//       method: 'GET',
//   })
// }
//健康评估 发布报告
export function updateReportStatus(id){
  return request({
      url: '/tAssessInfo/updateReportStatus/'+id,
      method: 'GET',
  })
}
// export function updateReportStatus(id){
//   return request({
//       url: '/server/tHealthAssess/updateReportStatus/'+id,
//       method: 'GET',
//   })
// }
// 健康评估 获取完整报告数据
export function getReport(assessId){
  return request({
      url: '/qyyh/getReport/'+assessId,
      method: 'GET',
  })
}
// 健康服务

//健康服务分页查询
export function findServicePage(data){
  return request({
      url: '/qyyh/findServicePage',
      method: 'POST',
      data:data
  })
}
//健康服务新增
export function serviceCreate(data){
  return request({
      url: '/tHealthService/create',
      method: 'POST',
      data:data
  })
}
//健康服务修改
export function serviceUpdate(data){
  return request({
      url: '/tHealthService/update',
      method: 'put',
      data:data
  })
}
//健康服务删除
export function serviceDelete(id){
  return request({
      url: '/tHealthService/delete/'+id,
      method: 'DELETE',
  })
}
//健康服务服务记录列表查询
export function findServiceList(idCard){
  return request({
      url: '/tHealthService/findServiceList/'+idCard,
      method: 'get',
  })
}
//健康服务服务记录 单条查询
export function findServiceId(id){
  return request({
      url: '/tHealthService/'+id,
      method: 'get',
  })
}
//健康服务服务记录字典
export function getDictionaryService(){
  return request({
      url: '/sysDictionary/getDictionaryService',
      method: 'get',
  })
}
//演示
export function updateReportStatus2(id){
  return request({
      url: '/tAssessInfo/updateReportStatus/'+id,
      method: 'get',
  })
}
//获取家医助手
export function getAssistantList(){
  return request({
      url: '/sysUser/getAssistantList',
      method: 'get',
  })
}
//获取健康管理师
export function getHealthManagerList(){
  return request({
      url: '/sysUser/getHealthManagerList',
      method: 'get',
  })
}
//修改签约信息
export function updateSignInfo(data){
  return request({
      url: '/qyyh/updateSignInfo',
    method: 'POST',
      data
  })
}
//获取评估数据
export function getAssessModel(id){
  return request({
      url: '/tAssessInfo/getAssessModel/'+id,
      method: 'get',
  })
}
//评估身体指标-修改
export function updateBodyIndex(data){
  return request({
      url: '/tAssessInfo/updateBodyIndex',
      method: 'POST',
      data
  })
}
//评估健康状况-修改
export function updateHealthStatus(data){
  return request({
      url: '/tAssessInfo/updateHealthStatus',
      method: 'POST',
      data
  })
}
//评估生活方式-修改
export function updateLifeStyle(data){
  return request({
      url: '/tAssessInfo/updateLifeStyle',
      method: 'POST',
      data
  })
}
//重新评估
export function rerunExecuteRule(assessId){
  return request({
      url: '/tAssessInfo/rerunExecuteRule/'+assessId,
      method: 'get',
  })
}
//评估结果报告结果-修改
export function addOrUpdateReportResult(data){
  return request({
      url: '/tAssessReport/addOrUpdateReportResult',
      method: 'POST',
      data
  })
}
