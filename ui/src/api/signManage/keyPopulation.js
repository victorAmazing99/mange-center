import request from '@/utils/request'
//重点人群获取1
export function getkeyList(data){
    return request({
        url: '/covid/pageCovidInfo',
        method: 'POST',
        data:data
    })
}



//重点人群助手获取列表1
export function assistantList(userId){
    return request({
        url: '/tAssistant/getDocByAssistant/'+userId,
        method: 'GET',
    })
}