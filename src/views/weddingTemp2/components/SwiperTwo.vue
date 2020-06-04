<template>
    <div class="tpl-mes">
         <div class="flower animated slideInRight"></div>
        <div class="polygon-box">
            <div class="polygon-box-same polygon1"></div>
            <div class="polygon-box-same polygon2"></div>
            <div class="polygon-box-same polygon3"></div>
         <div class="tpl-mes-flex">
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
   @import '~@/assets/css/tplTwo.less'; 
   @import '~@/assets/css/tplCommon.less';
  .tpl-mes{
    width:100vw;
    height:100vh;
    background: #D7BB93;
    .flower{
        position: absolute;
        z-index: 21;
        top: 70px;
        right:0;
        width:500px;
        height: 400px;
        background: url('/img/weddingTemp2/flower2.png') no-repeat center;
        background-size: 100% 100%;
      }
    .polygon-box{
      position: absolute;
      width:calc(100vw);
      height: 80vh;
      margin:10vh 0;
   }
    &-flex{
      width: 80%;
      height:70%;
      margin:20% auto 10%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      padding: 50px;
      color: @tplOneColor;
      font-size: 26px;
      background:url('/img/weddingTemp2/bg.png') no-repeat center;
      background-size: 100% 100%;
      box-shadow: -5px 5px 10px #666;
      p{
        margin-top: 10px;
      }
    }
    .crown{
      width: 70%;
      height: 45px;
      background: url('/img/crown.png') no-repeat center;
      background-size:100% 100% ;
    }
 
   }
</style>
