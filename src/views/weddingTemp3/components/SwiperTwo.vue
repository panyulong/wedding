<template>
    <div class="tpl-mes">
        <div class="xingxing2">
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
    overflow: hidden;
    .xingxing2{
      width: 100vw;
      height: 90vh;
      margin: 5vh auto;
      padding: 5vh 5vw;
      background: url('/img/weddingTemp3/xingxing2.png') no-repeat center;
      background-size: 100% 100%;
      overflow: hidden;
    }
    &-flex{
      width:100%;
      height:100%;
      background: url('/img/weddingTemp3/door.png') no-repeat center;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      padding: 20% 10%;
      color: @tplOneColor;
      font-size: 20px;
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
