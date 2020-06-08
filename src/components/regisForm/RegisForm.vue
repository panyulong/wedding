<template>
  <div> 
       <van-form @submit="onSubmit">
            <van-field class="animated bounceIn"
              v-model="name"
              name="name"
              label="NAME 姓名"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field class="animated bounceIn"
              v-model="tel"
              name="tel"
              label="MOBILE 手机"
              :rules="[
              { required: true, message: '请填写手机' },
              { validator:phoneValidator, message: '请输入正确手机号'},
              ]"
            />
              <van-field class="animated bounceIn"
              v-model="bless"
              name="bless"
              label="BLESS 祝福语" />
            <div class="animated slideInUp">
              <van-button block type="info" native-type="submit">
                  SUBMISSION 确定提交
              </van-button>
            </div>
            <div class="forever ">
              HAPPY FOREVER
            </div>
       </van-form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import swiperMixin from '@/mixins/swiperMixin'
export default {
   mixins:[swiperMixin],
  data() {
    return {
       name: '',
        tel: '',
        bless:''
    };
  },
   methods:{
     ...mapActions({
       createInviteeInfo:'Swiper/createInviteeInfo'
     }),
    phoneValidator(val){
      return /^1[3456789]\d{9}$/.test(val)
    },
    onSubmit(values) {
      console.log('submit', values);
      values.tel = Number(values.tel)
      this.createInviteeInfo(values).then(res=>{
        this.$toast(res.msg)
        this.$router.push('/thank')
      })
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   @import '~@/assets/css/tplCommon.less';
 .van-form{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-bottom: 50px;
         color: @tplOneColor;
        .van-cell{
          background: transparent;
          color: @tplOneColor;
          border: 1px solid @tplOneColor;
          padding:0 10px;
          height: 60px;
          line-height: 60px;
          margin-top: 30px;
          overflow: visible;
          /deep/ .van-field__error-message{
            line-height: 0;
            margin-top: 15px;
          }
          /deep/ .van-field__label{
            font-size: 20px;
            width:170px;
          }
          &:nth-of-type(1){
            margin-top: 0;
          }
        }
        .van-button{
          background: #D0A972;
          color: @tplOneColor;
          border: 0;
          padding:0 10px;
          margin-top:30px;
          height: 60px;
          line-height: 60px;
          padding: 0;
        }
        .forever{
          text-align: center;
          margin-top: 20px;
          color: @tplOneColor;
        }
      }
</style>