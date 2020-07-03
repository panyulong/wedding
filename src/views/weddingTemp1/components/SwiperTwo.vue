<template>
    <div class="tpl-mes">
        <div class="t-o-outBorder"></div>
         <div class="rotate-box"></div>  
        <div class="t-o-innerBorder tpl-mes-flex">
            <div class="animated slideInLeft">
              <p>沉浸在幸福中的我们</p>
              <p>诚邀您来参加我们的婚礼</p>
            </div>
            <div  class="animated slideInRight">
              <p>INVITES TOU TO</p>
              <p>诚邀阁下莅临</p>
            </div>
            <div  class="animated slideInLeft">
              <p>APRIL 24 WEDNESDAY</p>
              <p>4月24日 星期三</p>
            </div>
             <div  class="animated slideInRight">
              <p>NO.1704.CULTURE ART NEW STREET</p>
              <p>北京市朝阳区银泰中心</p>
            </div>
            <div class="crown"></div>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   @import '~@/assets/css/tplOne.less'; 
   @import '~@/assets/css/tplCommon.less';
  .tpl-mes{
    width:100vw;
    height:100vh;
    background: #D7BB93;
    &-flex{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      padding: 50px;
      color: @tplOneColor;
      font-size: 26px;
      p{
        margin-top: 10px;
      }
    }
    .rotate-box{
      background:#E3D2BE ;
      transform: rotate(-15deg);
    }
    .crown{
      width: 70%;
      height: 45px;
      .bgImage('crown.png')
    }
  }
 
</style>
