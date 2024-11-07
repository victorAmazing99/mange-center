import request from '@/utils/request'
//重点人群获取1
export function oldmanlist(data){
    return request({
        url: '/ehr/getSnrList',
        method: 'POST',
        data:data
    })
}