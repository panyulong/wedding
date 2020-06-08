import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/home/home'
import weddingTemp1 from '@/views/weddingTemp1/weddingTemp1'
import weddingTemp2 from '@/views/weddingTemp2/weddingTemp2'
import weddingTemp3 from '@/views/weddingTemp3/weddingTemp3'
import infoAdd from '@/views/infoAdd/infoAdd'
import thank from '@/views/thank/thank'

import noFound from '@/views/error-page/404'
 
Vue.use(Router)

export default new Router({
    mode:'history',
    // base:process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/home/infoAdd'
        },
        {
            path:'/home',
            name:'home',
            component:home,
            children:[
                {
                    path: '/home/infoAdd',
                    name:'信息添加',
                    component: infoAdd,
                },
                {
                    path: '/home/weddingTemp1',
                    name:'邀请函-1',
                    component: weddingTemp1,
                },
                {
                    path: '/home/weddingTemp2',
                    name:'邀请函-2',
                    component: weddingTemp2,
                },
                {
                    path: '/home/weddingTemp3',
                    name:'邀请函-3',
                    component: weddingTemp3,
                },
            ]
        },
        {
            path:'/thank',
            name:'感谢页',
            component:thank
        },
        { 
            path: '*', 
            name:'找不到页面',
            component: noFound 
        }
    ],
})