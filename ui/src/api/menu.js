import request from '@/utils/request'

// 获取路由
// export const getRouters = () => {
//   return request({
//     url: '/system/menu/getRouters',
//     method: 'get'
//   })
// }
export function getRouters() {
  let paramer = { systemId: '1' }
  return request({
    url: '/sysSystem/systemMenuInfoBySystemId',
    method: 'get',
    params: paramer
  })
}

// 获取角色系统菜单
export function systemMenuInfo() {
  let paramer = { systemId: '1' }
  return request({
    url: '/sysSystem/systemMenuInfo',
    method: 'get',
    params: paramer
  })
}