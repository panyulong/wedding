<template>
   <div>
       <!-- 第一次进入 -->
       <div v-if="isFirst">
         <temp-choose-s></temp-choose-s>  
       </div>
       <div v-else class="notFirst">
            <h2>宾客信息</h2>    
            <van-list v-model="loading">
                <ul class="ul-box">
                    <li>姓名</li>
                    <li>参加人数</li>
                    <li>电话</li>
                </ul>
                <ul  class="ul-box" v-for='(item, index) in list' :key="index"> 
                    <li>{{item.name}}</li>
                    <li>{{item.num}}</li>
                    <li>{{item.tel}}</li>
                </ul>
             </van-list>
       </div>
   </div>
</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
import TempChooseS from './components/TempChooseS'
    export default {
          components: {
            TempChooseS
        },
        computed:{
            ...mapGetters({
                myfav:'Swiper/myfav'
            })
        },
       data(){
            return{
                isFirst:true,
                loading:false, // 是否处在加载状态
                list:[
                    {name:'pan1',num:132,tel:155634511313},
                    {name:'pan2',num:142,tel:155611313},
                    {name:'pan3',num:1252,tel:155345611313},
                ]
            }
        },
        created(){
        },
        mounted() {  
   
        },
        methods:{
        
            
        }
    }
</script>

<style lang="less" scoped>
.notFirst{
    overflow: hidden;
        h2{
            text-align: center;
            margin-top: 10px;
        }
        .ul-box{
        display: flex;
        border-bottom: 1px solid #ccc;
        padding: 10px;
        li{
            flex: 1;
        }
    }
}


</style>