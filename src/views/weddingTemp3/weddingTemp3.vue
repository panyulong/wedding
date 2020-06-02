<template>
   <div>
       <swiper :data="swiperArr">
           <template slot-scope="props">
                <component :is="props.temp"></component>
           </template>
       </swiper>
   </div>
</template>

<script>
import *  as swiperItem from './components/index'

import Swiper from '@c/swiper/Swiper'
    export default {
          components: {
              Swiper,
            ...swiperItem
        },
        computed:{

        },
       data(){
            return{
                swiperArr:[
                    { temp:'SwiperOne'},
                    { temp:'SwiperTwo'},
                    { temp:'SwiperThree'},
                 ],
            }
        },

        mounted() {         
        },
        methods:{
           
        }
    }
</script>

<style>


</style>