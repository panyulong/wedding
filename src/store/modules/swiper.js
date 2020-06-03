import swiperApi from '@/api/swiperApi'
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
    upload({commit}){
        return new Promise((resolve,reject)=>{
            console.log(124)
            swiperApi.upload().then(res=>{
               console.log(res)
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    
}
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}