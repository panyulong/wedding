<template>
  <div class="showCar360degrees">
    <div class="image-container" >
      <div class="cpt-wg-360" @touchmove = touchmove @touchstart = touchstart  :style="{ filter: filterblur  }">
        <div class="wg-item"  v-for="(item,index) in imgs" :key="item" >
          <img 
            v-if="index == 0"
            style="opacity: 1;"
            class="wg-img"
            :src=item
          />
          <img 
            v-else
            style="opacity: 0;"
            class="wg-img"
            :src=item
          />
        </div>
      </div>
      <span v-show = percentageflag  class="loading-tip">{{percentage}}%</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "showCar360degrees",
  data() {
    return {
      eventtouches:{},
      percentage:0,
      percentageflag:true,
      filterblur: 'blur(2px)'
    };
  },
  props: {
    //图片数组
    imgs: Array,
    //速度调节
    speed:{
      type: Number,
      default: 20
    },
  },
  mounted(){
    this.calculatepercentage()
  },
  methods: {
    calculatepercentage(){
      let imgele = document.getElementsByClassName('wg-img')
      if(imgele.length>0){
        let num = 100 / imgele.length
        num = Math.ceil(num)
        for(let i = 0;i<imgele.length;i++){
              imgele[i].onload = ()=>{
                    this.percentage += num
                    if(this.percentage >= 100){
                      this.percentage = 100
                      setTimeout(() => {
                        this.percentageflag = false
                        this.filterblur = 'blur(0px)'
                      }, 100);
                    }
              }
            }
      }
    },
    touchstart(e){
      this.eventtouches = e;
    },
    touchmove(e){
          if((e.timeStamp - this.eventtouches.timeStamp)>this.speed){
            if((e.touches[0].clientX - this.eventtouches.touches[0].clientX)>0 ){
                  this.right()
            }else  {
                  this.left()
            }
              this.eventtouches = e;
          }
    },
    left(){
      let domlist = Array.from( document.getElementsByClassName('wg-img'));
      for(let i= 0; i < domlist.length; i++){
        if(domlist[i].style.opacity == '1'){
          domlist[i].setAttribute('style', 'opacity: 0;');
          let j =  i == 0 ? domlist.length-1: i-1 
          domlist[j].setAttribute('style', 'opacity: 1;');
          return
        }
      }
    },
    right(){
      let domlist = Array.from( document.getElementsByClassName('wg-img'));
      for(let i= 0; i < domlist.length; i++){
        if(domlist[i].style.opacity == '1'){
          domlist[i].setAttribute('style', 'opacity: 0;');
          let j =  i == domlist.length-1 ? 0: i+1 
          domlist[j].setAttribute('style', 'opacity: 1;');
          return
        }
      }
    }
  },
  
};
</script>
<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 160px;
  background-image: linear-gradient(0deg, hsla(0, 0%, 100%, 0), #ccc);
}
.cpt-wg-360 {
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 160px;
  overflow: hidden;
}
.cpt-wg-360 .wg-item {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  padding: 0 9.6%;
  box-sizing: border-box;
  margin-top: -15px;
}
.cpt-wg-360 .wg-img {
    width: 100%;
}
.image-container .loading-tip {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #ffe100;
    background: rgba(0,0,0,.5);
    color: #fff;
    font-size: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    align-items: center;
    justify-content: center;
}
img {
    border-style: none;
}
</style>