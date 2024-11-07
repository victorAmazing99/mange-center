import request from '@/utils/request'
// import { doDecryptStr } from "@/utils/jsencrypt";

// 按机构和姓名分页查询用户列表
export function findPageByIdAndName(data) {
  let query = {
    current: data.current,
    size: data.size
  }
  let params = {
    categoryCode: data.categoryCode,
    name: data.name,
    orgCode: data.orgCode
  }
  return request({
    url: '/sysUser/findPageByIdAndName',
    method: 'post',
    data: params,
    params: query
    // data: doDecryptStr(params),
    // params: doDecryptStr(query)
  })
}
// 新增用户
export function createSysUser(data) {
  return request({
    url: '/sysUser/create',
    method: 'post',
    data: data
  })
}
// 修改用户
export function updateSysUser(data) {
  return request({
    url: '/sysUser/update',
    method: 'put',
    data: data
  })
}
// 单挑查询用户
export function getSysUser(Id) {
  return request({
    url: '/sysUser/' + Id,
    method: 'get'
  })
}

// 获取所有系统的角色
export function querySystemRole(query) {
  return request({
    url: '/sysSystem/querySystemRole',
    method: 'get',
    params: query
  })
}

// 重置密码
export function updateResetPassword(data) {
  return request({
    url: '/sysUser/updateResetPassword',
    method: 'put',
    data: data
  })
}

// 批量新增用户角色
export function createAllUserRole(data) {
  return request({
    url: '/sysUserRole/createAll',
    method: 'post',
    data: data
  })
}

// 获取用户字典
export function getDictionaryUser() {
  return request({
    url: '/sysDictionary/getDictionaryUser',
    method: 'get'
  })
}

// 查询科室信息
export function findDept(data) {
  return request({
    url: '/sysDept/findList',
    method: 'post',
    data: data
  })
}

// 更改状态 停用 启动
export function changeDisableUser(data) {
  return request({
    url: '/sysUser/disableUser',
    method: 'post',
    data: data
  })
}

// 获取第三方token
export function getThirdToken(data) {
  return request({
    url: '/sysUser/getThirdToken',
    method: 'post',
    params: data
  })
}