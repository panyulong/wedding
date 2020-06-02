<template>
  <div>
    <div class="photo-box img1">
      <img
        src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3416064740,985215811&fm=26&gp=0.jpg"
        alt
      />
    </div>
    <div class="photo-box img2">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590403720857&di=cf332bc74e56c1fb6fec7155e2b33b73&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2Fb812c8fcc3cec3fd5554b0fdd688d43f869427cb.jpg"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.photo-box {
  border: 1px solid sandybrown;
  width: 200px;
  height: 300px;
  border-radius: 50%/50%;
  overflow: hidden;
  position: absolute;
  /* animation:myZoomInDown 3s linear; */
}
.img1 {
  left: 10px;
  top: 50%;
  margin-top: -230px;
  animation: img1 3s ease-in-out;
}
.img2 {
  right: 10px;
  bottom: 10%;
    animation: img2 3s ease-in-out ;
}

 @keyframes img1 {
      from{
        transform: translate3d(100%, 100%, 0) rotate(3turn) scale(.5)
        }
    
 }
 @keyframes img2 {
      from{
        transform: translate3d(-100%, -100%, 0) rotate(3turn) scale(.5)
        }
     
 }

</style>