<template>
    <div class="temp-home">
      <div class="top-part">
        <div class="con-xingxing"></div>
         <div class="con-photo">
          <div class="con-photo-line con-photo-line-1"></div>
          <div class="con-photo-line con-photo-line-2">
            <div class="crown"></div>
             <img  :src="itemObj.personImg[0].src" alt="">
          </div>
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
@import '~@/assets/css/tplThree.less';
@import '~@/assets/css/tplCommon.less';
.temp-home{
  display: flex;
  flex-direction: column;
  width:100vw;
  height:100vh;
   background: url('/img/weddingTemp2/bg.png') no-repeat center;
   background-size: 100% 100%;
    display: flex;
    flex-direction:column ;
    justify-content: space-around;
    align-items: center;
  .top-part{
    width:100vw;
    height: 60vh;
    margin: 5vh;
    position: relative;
  }
}

</style>
