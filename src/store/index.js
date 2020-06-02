import Vue from 'vue'
import Vuex from 'vuex'
import Swiper from './modules/swiper'
import User from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        Swiper,
        User
    },
})
export default store