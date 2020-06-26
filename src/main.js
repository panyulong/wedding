import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permits.js' 

import vueSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(vueSwiper)

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import axios from 'axios';
Vue.prototype.$axios = axios;
Vue.prototype.$baseUrl = process.env.BASE_URL
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
