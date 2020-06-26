<template>
  <div class="tpl-regis">
      <div class="top-part">
        <div class="con-xingxing"></div>
         <div class="con-photo">
          <div class="con-photo-line con-photo-line-1"></div>
          <div class="con-photo-line con-photo-line-2">
             <img  :src="$baseUrl+itemObj.personImg[0].src" alt="">
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
   @import '~@/assets/css/tplThree.less'; 
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
    .top-part{
      width:100vw;
      height: 60vh;
      margin: 5vh;
      position: relative;
    }
  }
</style>