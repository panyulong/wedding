<template>
  <div class="tpl-regis">
      <div class="polygon-box">
            <div class="polygon-box-same polygon1"></div>
            <div class="polygon-box-same polygon2"></div>
            <div class="polygon-box-same polygon3"></div>
            <div class="photo">
              <div class="item">
                <img :src="$baseUrl+itemObj.personImg[0].src" alt="">
              </div>
            </div>
      </div>
      <regis-form class="regis-form"></regis-form>
  </div>
</template>

<script>
import swiperMixin from '@/mixins/swiperMixin'
import RegisForm from '@c/regisForm/RegisForm'
export default {
  mixins:[swiperMixin],
  components:{
    RegisForm
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   @import '~@/assets/css/tplCommon.less';
   @import '~@/assets/css/tplTwo.less'; 
  .tpl-regis{
    width:100vw;
    height: 100vh;
    background: url('/img/weddingTemp2/bg.png') no-repeat center;
    background-size: 100% 100%;
    display: flex;
    flex-direction:column ;
    justify-content: space-around;
    align-items: center;
     color: @tplOneColor;
      .polygon-box{
        width:100vw;
        height: 60vh;
        margin: 5vh auto;
        animation:myZoomInDown 2s linear;
        .photo{
          width:80%;
          height:80%;
          margin: 10% auto;
          position: relative;
          transform: rotate(45deg);
          overflow: hidden;
          .item{
            position: absolute;
            width: 100%;
            height: 100%;
            content:" ";
            transform: rotate(-45deg);
            border:0;
            overflow: hidden;
            &:after{
              position: absolute;
              top: -1px;
              left: -1px;
              content:" ";
              width: 100%;
              height: 100%;
              transform: rotate(135deg);
          }

          &:before{
            position: absolute;
            left: 0;
            top: 0;
            content:" ";
            width: 100%;
            height: 100%;
            transform: rotate(135deg);

}
}
        }
    }
  }
  @keyframes myZoomInDown {
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, 600px, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.5, .5, .5) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
  }
</style>