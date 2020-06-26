<template>
  <div>
    <div class="left-ct">
      <div class="photo-box img1">
        <img :src="$baseUrl+imgData[0].src"/>
      </div>
   </div>
   <div class="right-ct">
    <div class="photo-box img2 animated zoomInLeft">
      <img :src="$baseUrl+imgData[1].src"/>  
   </div>
   <div class="photo-box img3 animated zoomInRight">
        <img :src="$baseUrl+imgData[2].src"/>
    </div>
</div>
  </div>
</template>

<script>
import swiperMixin from '@/mixins/swiperMixin'
export default {
   mixins:[swiperMixin],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.photo-box {
  border: 1px solid sandybrown;
  border-radius: 50%/50%;
  overflow: hidden;
}
.left-ct{
  position: absolute;
   width:50%;
   top: 40%;
}
.right-ct{
  position: absolute;
  top: 50%;
  right:10px;
  width:50%;
  margin-top: -200px;
}
.img1{
   width:90%;
    height: 300px;
    animation:img1 2s linear;
}
.img2,.img3{
  width: 90%;
  height: 200px;
  animation-duration: 2s;
}
.img2{
  animation-delay:1s;

}
.img3{
  margin-top: -40px;
  animation-delay: 1.2s;
}
 @keyframes img1 {
    from{
        opacity: .6;
       transform:rotate3d(1, 0, 0, 90deg);
    }
    20%,80%{
      transform: rotate3d(1, 0, 0, 40deg);
    }

    60%{
      transform: rotate3d(01, 0, 0, -40deg);
    }
    to {
       opacity: 1;
      transform: rotate3d(1, 0, 0, 0deg);
    }
 }

</style>