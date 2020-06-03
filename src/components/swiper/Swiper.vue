<template>
  <div class="swiper-box">
    <div class="music-btn" :class="{pause:musicPause}" @click="musicBtn">
      <audio ref="audio" :src="audioUrl" ></audio></div>
    <div class="next-btn" v-show="data && activeIndex!=data.length-1 && !showTemp">^</div>
    <swiper :options="swiperOption" ref="mySwiper" class="my-swiper" @slideChange="slideChange">
      <swiper-slide class="swiper-slide" v-for="(item,index) in data" :key="index">
        <div v-show="activeIndex==index">
          <!-- <div :class="['my-swiper-bg',item.bgClass]"></div> -->
          <slot :temp="item.temp" :img="item.personImg" :item="item"></slot>
        </div>
      </swiper-slide>
     <!-- 最后统一都有地址模板-->
      <slot name="lastTemp" v-if="showTemp && showUploadBtn"></slot>
      <!-- 分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 不需改变轮播，只需轮播初始化第一张图，只改变按钮展示 -->
    <div class="text-center btn-group" v-if="showTemp && !showUploadBtn">
      <van-button type="info" size="small" @click="goBack">返回</van-button>
      <van-button type="info" size="small" @click="choose">选择本模板</van-button>
    </div>
    <div class="text-center btn-group" v-if="showTemp && showUploadBtn && activeIndex!=data.length">
      <van-uploader v-model="fileList" :max-count="currentPersonImg.length" :before-read="beforeRead" :after-read="afterRead" />
      <van-button icon="photo" type="info" size="small" @click="uploadbtn" class="uploadBtn" :loading="uploadLoading"  loading-text="上传中...">上传文件</van-button>
    </div>
    <div class="text-center btn-group" v-if="showTemp && showUploadBtn && activeIndex==data.length">
      <van-button  type="info" size="small" @click="shade">分享</van-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  props: {
    data: {
      type: Array
    }
  },
  computed: {
    ...mapGetters({
      showUploadBtn: "Swiper/showUploadBtn"
    }),
    showTemp() {
      let showTemp = this.$route.query["showTemp"];
      if (showTemp) {
        this.swiperOption.direction = "horizontal";
        this.swiperOption.pagination = { el: ".swiper-pagination"}
      }
      return showTemp;
    },
    currentPersonImg(){
      return this.data[this.activeIndex] && this.data[this.activeIndex].personImg || 0
    }
  },

  data() {
    return {
      audioUrl:'https://webfs.yun.kugou.com/202005312303/0950603a1e956141656e8000f6619eb9/G215/M03/14/01/d4cBAF7Qq82AW5KEACfKS3xxbdE305.mp3',
      musicPause: true,
      activeIndex: 0,
      swiperOption: {
        direction: "vertical",
        resistanceRatio: 0,
        followFinger: false,
        allowTouchMove: true,
        //显示分页
        pagination: {}
      },
      //上传图片列表
      fileList: [],
      uploadLoading:false
    };
  },
  beforeDestroy() {
    this.setShowUploadBtn(false);
    this.$refs.mySwiper.$swiper.allowTouchMove = true;
  },
  methods: {
    ...mapMutations({
      setShowUploadBtn: "Swiper/setShowUploadBtn"
    }),
    ...mapActions({
      upload:'Swiper/upload'
    }),
    musicBtn() {
      this.musicPause = !this.musicPause;
      this.musicPause? this.$refs.audio.pause() : this.$refs.audio.play()
    },
    slideChange() {
      this.activeIndex = this.$refs.mySwiper.$swiper.activeIndex;
        // 判断当前页面是否需要上传图片,不需要则直接跳过
          if(this.showTemp && this.showUploadBtn && !this.currentPersonImg){
          this.$refs.mySwiper.$swiper.slideNext();
        }
    },
    goBack() {
      this.$router.push('infoAdd')
      // this.$router.back(-1);
    },
    choose() {
      this.setShowUploadBtn(true);
      this.$refs.mySwiper.$swiper.allowTouchMove = false;
      this.$refs.mySwiper.$swiper.slideTo(0);
    },
    // 返回布尔值
    beforeRead(file) {
      // if (file.type !== "image/png") {
      //   this.$toast("请上传 png 格式图片");
      //   return false;
      // }
      let allowFileSize = 1024;//kb
      let fileSize = (file.size/1024*100)/100
      if(fileSize > allowFileSize){
        this.$toast('文件不能大于'+allowFileSize +'KB')
         return false
      }
      return true;
    },
    afterRead(file,detail) {
      // let imgArr = this.data[this.activeIndex] && this.data[this.activeIndex].personImg;
      this.currentPersonImg[detail.index].src = file.content;
    },
    uploadbtn() {
      if (this.fileList.length !== this.currentPersonImg.length) {
        return this.$toast("请选择图片");
      }
      this.uploadLoading = true;
      let form = new FormData()
      form.append('file',this.fileList[0].file)

      console.log(this.fileList)
       this.upload({form:form}).then(res=>{
        
      }).catch(()=>{
           //this.fileList = [];
        this.uploadLoading = false;
      })




      // setTimeout(() => {
      //   this.$refs.mySwiper.$swiper.slideNext();
      //   this.fileList = [];
      //   this.uploadLoading = false;
      // }, 1000);
    },
    shade(){
      setTimeout(() => {
          this.$toast("分享成功");
          this.$router.push({ path: "/infoAdd" });
      }, 2000);
  
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '~@/assets/css/tplCommon.less';
.swiper-box {
  display: flex;
  height: calc(100vh);
  flex-direction: column;
}
.btn-group {
   display: flex;
  justify-content: space-around;
  padding:30px 0;
  position: absolute;
  bottom:0;
  background: rgba(2555,255,255,.7);
  z-index: 10;
  width:100%;
  text-align: center;
  .van-button {
    width: 200px;
  }
  .uploadBtn {
    margin-top: 10px;
  }
  /deep/ .van-uploader__upload,/deep/ .van-uploader__preview,/deep/ .van-uploader__preview-image{
    width:80px;
    height: 80px;
    margin: 0 8px 0 0;
  }
}

.my-swiper {
  width: 100%;
  height: 100%;
}
.music-btn {
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 21;
  background: #8a8383;
  width: 80px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  border-radius: 50%;
  animation: rotate-turn 1s linear infinite;
  &::before{
    content: '';
    width:100%;
    height: 100%;
    display: block;
    background: url('/img/icon-music.png') no-repeat center;
    background-size: 100% 100%;
  }
}
.next-btn {
  position: absolute;
  bottom: 5px;
  text-align: center;
  z-index: 21;
  color: @tplOneColor;
  font-size: 100px;
  height:100px;
  line-height: 100px;
  width:100px;
  left: 50%;
  transform: translatex(-50%);
  animation: next-btn 2s infinite ease-in-out;
}
.pause {
  animation-play-state: paused;
}

@keyframes rotate-turn {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes next-btn {
  0%,30%{
    opacity: 0;
    transform: translate(-50%, -10px);
  }
 70% {
    opacity: 1;
    transform: translate(-50%, -20px);
  }

  100% {
    opacity: 0;
    transform: translate(-50%, -5px);
  }
}
</style>