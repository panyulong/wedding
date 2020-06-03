import axios from '@/utils/api.request'
export default{
    search(query){
        return({
            url:'',
            method:'get',
            data:query
        })
    },
    upload(params){
        return axios.request({
            url:'/file/upload',
            method:'post',
            params:params
        }) 
    }

}