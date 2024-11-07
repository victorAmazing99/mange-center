import request from '@/utils/request'

// 查询机构列表
export function getOrgList(data) {
    return request({
      url: '/sysAgency/getOrgPage',
      method: 'post',
      data: data
    })
  }
// 新增父级机构
export function createOrg(data) {
    return request({
      url: '/sysAgency/create',
      method: 'post',
      data: data
    })
  }

  // 修改父级机构
export function updateOrg(data) {
    return request({
      url: '/sysAgency/update',
      method: 'put',
      data: data
    })
  }
  //获取机构类别
  export function getOrgCategory() {
    return request({
      url: '/sysAgency/getOrgCategory ',
      method: 'get',
    })
  }