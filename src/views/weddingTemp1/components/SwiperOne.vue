<template>
    <div class="temp-home">
        <div class="outBorder"></div>
        <div class="flower-bg animated bounceIn"></div>
        <div class="innerBorder">
            <div class="photo">
                <img :src="itemObj.personImg[0].src" alt="">
            </div>
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
@import '~@/assets/css/tplOne.less';
@import '~@/assets/css/tplCommon.less';
.temp-home{
  display: flex;
  flex-direction: column;
  width:100vw;
  height: 100vh;
  .innerBorder{
    width:calc(100vw - 40px);
    height: 50vh;
    margin:12vh 30px;
    background: url('/img/weddingTemp1/innerBorder.png') no-repeat center;
    background-size: 100% 100%;
    .photo{
      height:100%;
      width:100%;
      transform: scale3d(1,1,1) rotateY(0) rotateZ(-15deg);
      animation: zoomRotateIn 3s ease-out; 
    }
  }
 .outBorder{
    position: absolute;
    z-index: -1;
    top: 0;
    left:0;
    width:100vw;
    height: 76vh;
    background: url('/img/weddingTemp1/outBorder.png') no-repeat center;
    background-size: 100% 100%;
}
  .flower-bg{
    background: url('/img/weddingTemp1/flower-bg.png') no-repeat center;
    background-size: 100% 100%;
    position: absolute;
    width:100%;
    height: 40%;
    bottom:40px;
  }
.wedding-name{
  background: url('/img/weddingTemp1/wedNameB.png') no-repeat center rgba(255, 255, 255, .7);
  background-size: 100% 100%;
}
}
  @keyframes zoomRotateIn {
    from{
      transform: scale3d(.5,.5,.5) rotateY(0deg) rotateZ(-15deg);
    }
     50%{
      transform: scale3d(1.3,1.3,1.3) rotateY(-180deg) rotateZ(-15deg);
    }
  }
</style>
