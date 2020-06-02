import {swiperApi} from '@/api/swiperApi'
const state = {
    showUploadBtn:false
}
const getters = {
    showUploadBtn:state=>state.showUploadBtn,
}
const mutations = {
    setShowUploadBtn(state,data){
        state.showUploadBtn = data
    },
}

const actions = {
    add({commit},params){
        return new Promise((resolve,reject)=>{
            swiperApi.search(params).then(res=>{
                commit('setMyfav',1)
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    }
}
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}