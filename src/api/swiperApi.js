import axios from '@/utils/api.request'
export default{
    upload(params){
        return axios.request({
            url:'/file/upload',
            method:'post',
            data:params
        }) 
    },
    getUserById(query){
        return axios.request({
            url:'/file/queryFile',
            method:'get',
            params:query
        })
    },
    createInviteeInfo(query){
        return axios.request({
            url:'/inviteeInfo/createInviteeInfo',
            method:'post',
            data:query
        })
    }
}