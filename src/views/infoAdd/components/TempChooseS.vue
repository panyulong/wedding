<template>
<div>
    <div class="flex-box animated fadeIn">
      <div class="temp" v-for="(item,index) in imgList" :key="index" @click="look(index)">
          <img :src="item.src" alt="">
          <div class="look">
            <span>预览</span></div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      // 首页模版列表
      imgList:[
        {src:'/img/weddingTemp1/1.jpg'},
        {src:'/img/weddingTemp2/1.jpg'},
        {src:'/img/weddingTemp3/1.jpg'},
      ],
    };
  },
  methods:{
    look(index){
      this.$router.push({path:`weddingTemp${index+1}`,query:{showTemp:true}})
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">
  .flex-box{
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    padding: 0 15px;
    // padding: 10px;

    .temp{
        // width:calc(50vw - 20px);
        // height: calc(50vh- 20px);
        // margin: 10px;
        height:calc(50vh - 30px);
        width: 342px;
        margin:20px 9px 0;
        position: relative;
        border-radius: 3px;
        box-sizing: border-box;
        overflow: hidden;
    }
    .look{
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0,0,0,0.2);
      color: #fff;
    }
  
  }
 
</style>