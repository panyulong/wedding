<template>
   <div>
      <showCar360degrees :speed = 20  :imgs = imgs></showCar360degrees>
      <!-- <pano  imgurl = 'https://p9-dcd.byteimg.com/img/mosaic-legacy/bef400005f4eca28e99e~tplv-resize:4000:0.image'></pano> -->
   </div>
</template>

<script>
import showCar360degrees  from './components/showCar360degrees'
import pano  from './components/pano'
   export default{
      components:{
         showCar360degrees,
         pano
      },
      data(){
         return{
imgs:[
             "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef30000e03696639164~tplv-resize:640:0.png",
             "https://p3-dcd.byteimg.com/img/mosaic-legacy/bef30000e0358a61e148~tplv-resize:640:0.png",
             "https://p6-dcd.byteimg.com/img/mosaic-legacy/bef10000e2c28d75f043~tplv-resize:640:0.png",
             "https://p6-dcd.byteimg.com/img/mosaic-legacy/bef10000e2c10123ffe2~tplv-resize:640:0.png",
             "https://p3-dcd.byteimg.com/img/mosaic-legacy/bef4000065de9346a35d~tplv-resize:640:0.png",
             "https://p9-dcd.byteimg.com/img/mosaic-legacy/bef20000e5258c0eed4e~tplv-resize:640:0.png",
             "https://p1-dcd.byteimg.com/img/mosaic-legacy/beef0000e308f1415db3~tplv-resize:640:0.png",
             "https://p3-dcd.byteimg.com/img/mosaic-legacy/bef10000e2c510c0b6c0~tplv-resize:640:0.png",
             "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef20000e52661db22a3~tplv-resize:640:0.png",
             "https://p6-dcd.byteimg.com/img/mosaic-legacy/bef4000065ea77e140ae~tplv-resize:640:0.png",
             "https://p3-dcd.byteimg.com/img/mosaic-legacy/bef10000e2c6437dd4d3~tplv-resize:640:0.png",
             "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef4000065e9893b1aec~tplv-resize:640:0.png",
             "https://p6-dcd.byteimg.com/img/mosaic-legacy/bef4000065e6ff33e833~tplv-resize:640:0.png",
             "https://p3-dcd.byteimg.com/img/mosaic-legacy/bef4000065e81a11bb83~tplv-resize:640:0.png",
             "https://p1-dcd.byteimg.com/img/mosaic-legacy/9b1300016b2ee29ca41e~tplv-resize:640:0.png",
             "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef4000065e7cbeb7f66~tplv-resize:640:0.png",
             "https://p6-dcd.byteimg.com/img/mosaic-legacy/bef4000065e5ccb3bda9~tplv-resize:640:0.png",
             "https://p3-dcd.byteimg.com/img/mosaic-legacy/bef10000e2c460481ef9~tplv-resize:640:0.png",
             "https://p3-dcd.byteimg.com/img/mosaic-legacy/bef4000065e46f39caa7~tplv-resize:640:0.png",
             "https://p6-dcd.byteimg.com/img/mosaic-legacy/bef30000e038c8917999~tplv-resize:640:0.png",
             "https://p6-dcd.byteimg.com/img/mosaic-legacy/bef4000065e321519d3a~tplv-resize:640:0.png",
             "https://p6-dcd.byteimg.com/img/mosaic-legacy/bef4000065e234fc8580~tplv-resize:640:0.png",
             "https://p1-dcd.byteimg.com/img/mosaic-legacy/beef0000e307938c2601~tplv-resize:640:0.png",
             "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef00000e2f05c5b3d90~tplv-resize:640:0.png",
             "https://p6-dcd.byteimg.com/img/mosaic-legacy/bef10000e2c313c5c2b8~tplv-resize:640:0.png",
             "https://p3-dcd.byteimg.com/img/mosaic-legacy/9b1300016b2d7cb46459~tplv-resize:640:0.png",
             "https://p6-dcd.byteimg.com/img/mosaic-legacy/9b1300016b2b3c80acdf~tplv-resize:640:0.png",
             "https://p9-dcd.byteimg.com/img/mosaic-legacy/bef20000e5248ce4558b~tplv-resize:640:0.png",
             "https://p3-dcd.byteimg.com/img/mosaic-legacy/bef4000065e129d49497~tplv-resize:640:0.png",
             "https://p6-dcd.byteimg.com/img/mosaic-legacy/bef4000065e060e466a2~tplv-resize:640:0.png",
             "https://p1-dcd.byteimg.com/img/mosaic-legacy/9b1300016b2cf2fcd008~tplv-resize:640:0.png",
             "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef4000065df1aabda54~tplv-resize:640:0.png",
             "https://p1-dcd.byteimg.com/img/mosaic-legacy/bef20000e5222d9c040b~tplv-resize:640:0.png",
             "https://p3-dcd.byteimg.com/img/mosaic-legacy/bef20000e523c6b69e37~tplv-resize:640:0.png",
             "https://p3-dcd.byteimg.com/img/mosaic-legacy/bef30000e037e7ee5961~tplv-resize:640:0.png",
             "https://p6-dcd.byteimg.com/img/mosaic-legacy/beef0000e30646247719~tplv-resize:640:0.png"
           ],
           carpart: ['component-1', 'component-2'],
         }
      },
      mounted(){

      },
      methods:{
      carChange(e){
            console.log(e);
            },
         
      }


   }
</script>

<style lang="less" scoped>

</style>