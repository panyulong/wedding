<template>
    <div>
        <div>
          <!-- <div class="text-frame text-frame-1"></div> -->
          <!-- <div class="text-frame text-frame-2"></div> -->
         
        

          <div class="photo-box box-center">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590400783847&di=473a19a00438bd86c51b047aa0ecce54&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F0ff41bd5ad6eddc467f7213038dbb6fd536633ec.jpg" alt="">
          
          
            <div class="name animated bounceInLeft">
              <p class="name-p">  pan </p>
              <p class="name-p"> Welcome </p>
          </div>
          
          </div>


        </div>
      
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .text-frame {
    z-index: 2;
    width: 84%;
    height: 84%;
    position: absolute;
    top:0;
    left: 0;
    right:0;
    bottom: 0;
    margin: auto;
    background-color: rgba(255, 255, 255, .4);
    border: 1px solid #fff;
    border-radius: 12px;
    overflow: hidden;
  }
  .text-frame-1{
      animation:rotateIn .6s ease .5s 
  }
  .text-frame-2{
      animation:
      rotateIn .6s ease 1.1s forwards,
      pulse 1s ease 1.7s infinite;
  }
  .name{
    position: absolute;
    bottom:70px;
    color: #fff;
    font-size: 30px;
     width:100%;
  }
  .name-p{
    width:100%;
    text-align: center;
  }
  .photo-box{
    border: 1px solid sandybrown;
    width:300px;
    height: 400px;
    border-radius:50%/50%;
    overflow: hidden;
    animation: zoomRotateIn 4s ease-out;
  }
  @keyframes zoomRotateIn {
    0%{
      transform: rotateY(0deg) scale(0);
    }
     50%{
      transform: rotateY(-180deg) scale(1.6);
    }
    100%{
      transform: rotateY(0) scale(1);
    }
  }
</style>
