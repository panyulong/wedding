<template>
   <div>
    <swiper :data="swiperArr">
        <template slot-scope="props">
            <component :is="props.item.temp" :itemObj="props.item"></component>
        </template>
        <template slot="lastTemp">
            <swiper-slide>
                <component :is="'SwiperInfoAdd'"></component>
            </swiper-slide>
        </template>
    </swiper>
     
   </div>
</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
import *  as swiperItem from './components/index'
import aa from '@/assets/img/weddingTemp1/swiper-1-1.jpg'
import bb from '@/assets/img/weddingTemp1/swiper-1-2.jpg'

import Swiper from '@c/swiper/Swiper'
    export default {
          components: {
              Swiper,
            ...swiperItem
        },
        computed:{
            ...mapGetters({
      
            })
        },
       data(){
            return{
            swiperArr:[
                { temp:'SwiperOne',personImg:[{src:aa}],manName:'张志明',womenName:'余春娇'},
                { temp:'SwiperTwo'},
                { temp:'SwiperThree',personImg:[{src:bb}]},
               ],
            }
        },

        mounted() {         
        },
        methods:{
        }
    }
</script>

<style lang="less" scoped>
</style>