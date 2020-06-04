<template>
    <div class="temp-home">
      <div class="top-part">
        <div class="polygon-box">
            <div class="polygon-box-same polygon1"></div>
            <div class="polygon-box-same polygon2"></div>
            <div class="polygon-box-same polygon3"></div>
        </div>
        <div class="photo">
           <img  :src="itemObj.personImg[0].src" alt="">
        </div>

        <div class="flower animated slideInLeft"></div>
    
      </div>
       
        <div class="wedding-name">
          <p class="animated slideInLeft">
            <span>{{itemObj.manName}}</span>
            <span>&</span>
            <span>{{itemObj.womenName}}</span>
          </p>
        <p class="animated slideInRight">
          <em>W</em>EDDING&nbsp;<em>I</em>NVITATION
        </p>
        </div>
    </div>
</template>

<script>
import swiperMixin from '@/mixins/swiperMixin'
export default {
  mixins:[swiperMixin],
  data () {
    return {
    }
  },
  mounted(){
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '~@/assets/css/tplTwo.less';
@import '~@/assets/css/tplCommon.less';
.temp-home{
  display: flex;
  flex-direction: column;
  width:100vw;
  height:100vh;
   background: url('/img/weddingTemp2/bg.png') no-repeat center;
   background-size: 100% 100%;
  .top-part{
    width:100vw;
    height: 66vh;
    margin:5vh 0;
    position: relative;
  .polygon-box{
    width:100%;
    height:100%;
    animation:rotate360 10s linear .2s infinite;
  }
    .photo{
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      width:80%;
      height:84%;
      animation: zoomRotateIn 3s linear; 
      img{
         -webkit-clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
         clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
      }
    }
      .flower{
        background: url('/img/weddingTemp2/flower.png') no-repeat center;
        background-size: 100% 100%;
        position: absolute;
        bottom:-20px;
        left: 40px;
        width:320px;
        height: 320px;
    }
  }
}
  @keyframes zoomRotateIn {
    0%{
      transform:translate(-50%,-50%) scale3d(.5,.5,.5) rotateY(0deg);
    }
     50%{
      transform: translate(-50%,-50%) scale3d(1.3,1.3,1.3) rotateY(-180deg);
    }
  }
</style>
