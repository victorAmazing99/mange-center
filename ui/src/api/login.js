import request from '@/utils/request'

// 登录方法
export function login(username, password, code, uuid) {
  return request({
    url: '/login',
    headers: {
      isToken: false
    },
    method: 'post',
    data: { username, password, code, uuid }
  })
}

// 注册方法
export function register(data) {
  return request({
    url: '/register',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 刷新方法
export function refreshToken() {
  return request({
    url: '/refresh',
    method: 'post'
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/system/user/getInfo',
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request({
    url: '/logout',
    method: 'delete'
  })
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: '/code',
    method: 'get',
    headers: {
      'content-type': 'application/json'
    },
    timeout: 20000
  })
}

// 获取用户信息
export function userList() {
  return request({
    url: '/sysUser/selectUserInfo',
    method: 'get',
    headers: {
      'content-type': 'application/json'
    },
    params: {}
  })
}

// 根据用户ID获取能够使用的系统
export function systemInfoByUser() {
  return request({
    url: '/sysSystem/systemInfoByUserId',
    method: 'get',
    headers: {
      'content-type': 'application/json'
    },
    data: {}
  })
}

// 初次登录修改密码
// export function updateStartPassword(data, token) {
//   console.log('33', );
//   return request({
//     url: '/system/sysUser/updateStartPassword',
//     method: 'put',
//     data: data,
//     headers: {
//       Authorization: token
//     },
//   })
// }

// 获取所有密保问题
export function findAll(token) {
  return request({
    url: '/sysSecurityQuestion/findAll',
    method: 'get',
    headers: {
      Authorization: token
    },
    data: {}
  })
}

// 保存用户密保问题
export function saveUserProblem(data, token) {
  return request({
    url: '/sysUserSecurity/create',
    method: 'post',
    data: data,
    headers: {
      Authorization: token
    }
  })
}

// 根据用户名获取密保问题
export function getQuestion(query) {
  return request({
    url: '/sysUserSecurity/getQuestion',
    method: 'get',
    headers: {
      'content-type': 'application/json'
    },
    params: query
  })
}

// 校验密保问题
export function check(data) {
  return request({
    url: '/sysUserSecurity/check',
    method: 'post',
    data: data, 
  })
}

// 修改忘记密码
export function updatePassword(data, token) {
  return request({
    url: '/sysUser/updateForgetPassword',
    method: 'put',
    data: data,
    // headers: {
    //   Authorization: token
    // },
  })
}

// 修改个人中心密码修改
export function updatePsd(data, token) {
  return request({
    url: '/sysUser/updatePassword',
    method: 'put',
    data: data,
    headers: {
      Authorization: token
    },
  })
}

// 初次登录修改并保存密保问题
export function updateStartPassword(data, token) {
  return request({
    url: '/sysUser/updateStartPassword',
    method: 'put',
    data: data,
    headers: {
      Authorization: token
    },
  })
}

//  修改过期密码
export function updateExpiredPassword(data, token) {
  return request({
    url: '/sysUser/updateExpiredPassword',
    method: 'put',
    data: data,
    headers: {
      Authorization: token
    },
  })
}

// 第三方免密登录
export function thirdLogin(data) {
  return request({
    url: '/auth/thirdLogin',
    method: 'post',
    data: data,
  })
}