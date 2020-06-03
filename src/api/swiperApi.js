import axios from '@/utils/api.request'
export default{
    upload(params){
        return axios.request({
            url:'/file/upload',
            method:'post',
            data:params
        }) 
    }
}