import request from '@/utils/request'
// 查询角色列表
export function listRole(query) {
  return request({
    url: '/role/list',
    method: 'get',
    params: query
  })
}

// 查询角色详细
export function getRole(roleId) {
  return request({
    url: '/role/' + roleId,
    method: 'get'
  })
}

// 新增角色
export function addRole(data) {
  return request({
    url: '/role',
    method: 'post',
    data: data
  })
}

// 修改角色
export function updateRole(data) {
  return request({
    url: '/role',
    method: 'put',
    data: data
  })
}

// 角色数据权限
export function dataScope(data) {
  return request({
    url: '/role/dataScope',
    method: 'put',
    data: data
  })
}

// 角色状态修改
export function changeRoleStatus(roleId, status) {
  const data = {
    roleId,
    status
  }
  return request({
    url: '/role/changeStatus',
    method: 'put',
    data: data
  })
}

// 删除角色
export function delRole(roleId) {
  return request({
    url: '/role/' + roleId,
    method: 'delete'
  })
}

// 查询角色已授权用户列表
export function allocatedUserList(query) {
  return request({
    url: '/role/authUser/allocatedList',
    method: 'get',
    params: query
  })
}

// 查询角色未授权用户列表
export function unallocatedUserList(query) {
  return request({
    url: '/role/authUser/unallocatedList',
    method: 'get',
    params: query
  })
}

// 取消用户授权角色
export function authUserCancel(data) {
  return request({
    url: '/role/authUser/cancel',
    method: 'put',
    data: data
  })
}

// 批量取消用户授权角色
export function authUserCancelAll(data) {
  return request({
    url: '/role/authUser/cancelAll',
    method: 'put',
    params: data
  })
}

// 授权用户选择
export function authUserSelectAll(data) {
  return request({
    url: '/role/authUser/selectAll',
    method: 'put',
    params: data
  })
}

// 根据角色ID查询部门树结构
export function deptTreeSelect(roleId) {
  return request({
    url: '/role/deptTree/' + roleId,
    method: 'get'
  })
}

// 角色列表
export function sysUserFindList(data) {
  let query = {
    current: data.current,
    size: data.size
  }
  return request({
    url: '/sysRole/findPage',
    method: 'post',
    // data: doDecryptStr(data)
    data: data,
    params: query
  })
}

// 获取 菜单 详情  菜单id
export function getRoleList(data) {
  return request({
    url: '/sysRoleMenu/findList',
    method: 'post',
    data: data
  })
}

// 新建角色
export function addSysRole(data) {
  return request({
    url: '/sysRole/create',
    method: 'post',
    data: data
  })
}
// 新建角色
export function deleteSysRole(id) {
  return request({
    url: '/sysRole/delete/' + id,
    method: 'delete'
  })
}

// 获取系统列表
export function systemList(data) {
  return request({
    url: '/sysSystem/findList',
    method: 'post',
    data: data
  })
}

// 角色详情
export function getRoleDetail(roleId) {
  return request({
    url: '/sysRole/' + roleId,
    method: 'get'
  })
}

// 角色编辑
export function roleUpdate(data) {
  return request({
    url: '/sysRole/update',
    method: 'put',
    data: data
  })
}
// 权限新增
export function addJurisdiction(data) {
  return request({
    url: '/sysRoleMenu/createAll',
    method: 'post',
    data: data
  })
}
//api接口列表
export function apiListData(data) {
  let query = {
    current: data.current,
    size: data.size
  }
  return request({
    url: '/sysThirdKey/findPage',
    method: 'post',
    data: data,
    params: query
  })
}
//api新增
export function addApi(data) {
  let query = {
    company: data.company,
  }
  return request({
    url: '/sysThirdKey/create',
    method: 'post',
    data: data,
    params: query
  })
}
//api新增
export function updateApi(data) {
  return request({
    url: '/sysThirdKey/update',
    method: 'put',
    data: data,
  })
}


// api单挑查询
export function getApiDetail(id) {
  return request({
    url: '/sysThirdKey/' + id,
    method: 'get'
  })
}



// api删除
export function deleteApi(id) {
  return request({
    url: '/sysThirdKey/delete/' + id,
    method: 'delete'
  })
}
