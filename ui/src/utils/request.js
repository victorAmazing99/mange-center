import axios from 'axios'
import { ElNotification , ElMessageBox, ElMessage, ElLoading } from 'element-plus'
import { getToken } from '@/utils/auth'
import errorCode from '@/utils/errorCode'
import { tansParams, blobValidate } from '@/utils/ruoyi'
import cache from '@/plugins/cache'
import { saveAs } from 'file-saver'
import useUserStore from '@/store/modules/user'
import { urlPasseObj } from "@/utils/validate"

import { doDecryptStr } from "@/utils/jsencrypt";

let downloadLoadingInstance;
// 是否显示重新登录
export let isRelogin = { show: false };

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
 
let service
// 创建axios实例
if(process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'staging') {
  service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: import.meta.env.VITE_APP_BASE_API,
    // baseURL = '/prod-api',
    // 超时
    timeout: 20000
  })
} else {
  // 外挂配置
  service = axios.create({
    baseURL: window.server.SERVER_API,
    // baseURL: process.env.VUE_APP_BASE_API,
    // 超时
    timeout: 20000
  })
}



// request拦截器
service.interceptors.request.use(config => {
  // 是否需要设置 token
  const isToken = (config.headers || {}).isToken === false
  // 是否需要防止数据重复提交
  const isRepeatSubmit = (config.headers || {}).repeatSubmit === false
  if (getToken() && !isToken) {
    config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  // get请求映射params参数
  // if (config.method === 'get' && config.params) {
  //   let url = config.url + '?' + tansParams(config.params);
  //   url = url.slice(0, -1);
  //   // config.params = {};
  //   config.url = url;
  // }
  if (!isRepeatSubmit && (config.method === 'post' || config.method === 'put')) {
    const requestObj = {
      url: config.url,
      data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
      time: new Date().getTime()
    }
    const sessionObj = cache.session.getJSON('sessionObj')
    if (sessionObj === undefined || sessionObj === null || sessionObj === '') {
      cache.session.setJSON('sessionObj', requestObj)
    } else {
      const s_url = sessionObj.url;                // 请求地址
      const s_data = sessionObj.data;              // 请求数据
      const s_time = sessionObj.time;              // 请求时间
      const interval = 1000;                       // 间隔时间(ms)，小于此时间视为重复提交
      if (s_data === requestObj.data && requestObj.time - s_time < interval && s_url === requestObj.url) {
        const message = '数据正在处理，请勿重复提交';
        console.warn(`[${s_url}]: ` + message)
        return Promise.reject(new Error(message))
      } else {
        cache.session.setJSON('sessionObj', requestObj)
      }
    }
  }
  const isHash = config.url.includes('?')
  // 排除get提交方式，防止参数被去重
  if (isHash && config.method !== 'get') {
    const urlParam = urlPasseObj(config.url, true)
    config.params = config.params ? { ...config.params, ...urlParam } : urlParam
    config.url = config.url.split('?')[0]
  }
  if (config.data) {
    config.data = doDecryptStr(config.data)
  }
  if (config.params) {
    config.params = doDecryptStr(config.params)
  }
  return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode['default']
    if (res.headers['content-disposition']) {
      res.data.name = res.headers['content-disposition']
    }
    // 二进制数据则直接返回
    if(res.request.responseType ===  'blob' || res.request.responseType ===  'arraybuffer'){
      return res.data
    }
    // 401 未授权
    // 4031 被其他账户登录
    if (code === 403) {
      if (!isRelogin.show) {
        isRelogin.show = true;
        ElMessageBox.confirm('超过30分钟未操作,用户已退出,请重新登录', '系统提示', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(() => {
        isRelogin.show = false;
        useUserStore().logOut().then(() => {
          location.href = '/index';
        })
      }).catch(() => {
        isRelogin.show = false;
      });
    }
      return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    } else if (code === 500) {
      ElMessage({
        message: msg,
        type: 'error'
      })
      if(msg == '用户角色不存在，请联系管理员，添加角色！') {
        return Promise.resolve(res.data)
      }
      return Promise.reject(new Error(msg))
    } else if (code === 601) {
      ElMessage({
        message: msg,
        type: 'warning'
      })
      return Promise.reject(new Error(msg))
    } else if (code === 10011) {
      ElMessage({
        message: msg,
        type: 'warning'
      })
      // 返回原数据  然后可在回调中 获取res 进行处理
      return Promise.resolve(res.data)
    } else if (code === 4031) {
      if (!isRelogin.show) {
        isRelogin.show = true;
        ElMessageBox.confirm('当前账户已在其他地方登录，请重新登录', '系统提示', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(() => {
        isRelogin.show = false;
        useUserStore().logOut().then(() => {
          location.href = '/index';
        })
      }).catch(() => {
        isRelogin.show = false;
      });
    }
      return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    }else if (code === 401) {
      if (!isRelogin.show) {
        isRelogin.show = true;
        ElMessageBox.confirm('当前账户未授权，请登录', '系统提示', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(() => {
        isRelogin.show = false;
        useUserStore().logOut().then(() => {
          location.href = '/login';
        })
      }).catch(() => {
        isRelogin.show = false;
      });
    }
      return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    }else if (code !== 200) {
      ElNotification.error({
        title: msg
      })
      return Promise.resolve(res.data)
      // return Promise.reject('error')
    } else {
      return  Promise.resolve(res.data)
    }
  },
  error => {
    console.log('err' + error)
    let { message } = error;
    if (message == "Network Error") {
      message = "网络异常";
    }
    else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    }
    else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    ElMessage({
      message: message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

// 通用下载方法
export function download(url, params, filename, config) {
  downloadLoadingInstance = ElLoading.service({ text: "正在下载数据，请稍候", background: "rgba(0, 0, 0, 0.7)", })
  return service.post(url, params, {
    transformRequest: [(params) => { return tansParams(params) }],
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    responseType: 'blob',
    ...config
  }).then(async (data) => {
    const isLogin = await blobValidate(data);
    if (isLogin) {
      const blob = new Blob([data])
      saveAs(blob, filename)
    } else {
      const resText = await data.text();
      const rspObj = JSON.parse(resText);
      const errMsg = errorCode[rspObj.code] || rspObj.msg || errorCode['default']
      ElMessage.error(errMsg);
    }
    downloadLoadingInstance.close();
  }).catch((r) => {
    console.error(r)
    ElMessage.error('下载文件出现错误，请联系管理员！')
    downloadLoadingInstance.close();
  })
}


export default service
