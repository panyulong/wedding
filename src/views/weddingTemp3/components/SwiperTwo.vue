<template>
    <div>
       <div class="photo-box box-center animated zoomInDown">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590402934285&di=69bf00e5b7a9f645f175c924673f5e8d&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20115%2F521%2Fw1056h1065%2F20181211%2Feb2b-hqackaa2812377.jpg" alt="">
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

  .photo-box{
    border: 1px solid sandybrown;
    width:300px;
    height: 400px;
    border-radius:50%/50%;
    overflow: hidden;
    animation:myZoomInDown 3s linear;
  }
  @keyframes myZoomInDown {
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

</style>
