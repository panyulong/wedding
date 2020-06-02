import axios from '@/utils/api.request'
export default{
    getAuth(query){
        return axios.request({
            url:'/auth',
            method:'get',
            params:query
        })
    },
    getUserInfo(query){
        return axios.request({
            url:'/getUserInfo',
            method:'get',
            params:query
        })
    },
    getAccessToken(query){
        return axios.request({
            url:'/getAccessToken',
            method:'get',
            params:query
        })
    },
}