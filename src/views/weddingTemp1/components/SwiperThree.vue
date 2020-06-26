<template>
  <div class="tpl-to-wed">
     <div class="t-o-outBorder"></div>
      <div class="rotate-box"></div>
         <div class="t-o-innerBorder">
            <div class="tpl-two-flex">
                <div class="photo">
                    <img :src="$baseUrl+itemObj.photoArr && itemObj.photoArr[0].fileUrl" alt="">
                </div>
                  <regis-form class="regis-form"></regis-form>
            </div>
        </div>
      
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
    return {
    };
  },
  methods:{
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   @import '~@/assets/css/tplOne.less'; 
   @import '~@/assets/css/tplCommon.less';
  .tpl-to-wed{
    width:100vh;
    height:100vh;
     .rotate-box{
      background:#F5E9D2;
      transform: rotate(15deg);
    }
    .tpl-two-flex{
      width:80%;
      height: 100%;
      margin: 10px auto;
      display: flex;
      flex-direction:column ;
      justify-content: space-around;
      align-items: center;
       color: @tplOneColor;
      .photo{
        margin: 40px 0 ;
        height: 300px;
        animation:myZoomInDown 2s linear;
        img{
         border-radius: 50%;
        }
      }
    }
  }
  @keyframes myZoomInDown {
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, -600px, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.5, .5, .5) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
  }
</style>