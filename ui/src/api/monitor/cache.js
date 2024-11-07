import request from '@/utils/request'

// 查询Cache列表
export function getCache() {
  return request({
    url: '/monitor/cache/',
    method: 'get'
  })
}


// 清除redis中所有的缓存
export function clearCacheAll() {
  return request({
    url: '/monitor/cache/clearCacheAll',
    method: 'delete'
  })
}

// 清除指定的缓存
export function clearCacheKey(cacheKey) {
  return request({
    url: '/monitor/cache/clearCacheKey/' + cacheKey,
    method: 'delete'
  })
}

// 清除clearCacheName
export function clearCacheName(cacheName) {
  return request({
    url: '/monitor/cache/clearCacheName/' + cacheName,
    method: 'delete'
  })
}

// //获取项目命名空间下的所有缓存信息
export function listCacheKey(cacheName) {
  return request({
    url: '/monitor/cache/getKeys/' + cacheName,
    method: 'get'
  })
}

// //获取项目的所有命名空间
export function listCacheName() {
  return request({
    url: '/monitor/cache/getNames',
    method: 'get'
  })
}

// //获取项目命名空间下的单个缓存信息
export function getCacheValue(cacheName, cacheKey) {
  return request({
    url: '/monitor/cache/getValue/' + cacheName + '/' + cacheKey,
    method: 'get'
  })
}