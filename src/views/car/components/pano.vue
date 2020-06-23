<template>
 <div class="pano">
   <div id="container"></div>
 </div>
</template>
<script>
/* eslint-disable */
import * as THREE from "three";
export default {
 name: "pano",
 data() {
   return {
     camera: null,
     scene: null,
     renderer: null,
     mesh: null,
     onMouseDownMouseX : 0,
     onMouseDownMouseY : 0,
     lon : 180,
     onMouseDownLon : 0,
     lat : 0,
     onMouseDownLat : 0,
     phi : 0,
     theta : 0,
     isUserInteracting:false
   };
 },
 props: {
   imgurl:{
     type:String,
     default:''
   }
 },
 mounted() {
   this.init();
   this.animate();
   this.addEvent();
   
 },
 methods: {
   addEvent(){
     this.$el.addEventListener('touchstart', this.start, false)
     this.$el.addEventListener('touchmove', this.move, false)
     this.$el.addEventListener('touchend', this.end, false)
     this.$el.addEventListener('mousedown', this.start, false)
     this.$el.addEventListener('mousemove', this.move, false)
     this.$el.addEventListener('mouseup', this.end, false)
   },
   init: function() {
     let container = document.getElementById("container");
     let opt={
       fov:90,
       width:container.clientWidth,
       height:container.clientHeight,
     }
     //创建相机
     this.camera = new THREE.PerspectiveCamera(
       opt.fov, opt.width / opt.height, 1, 10000
     );
     this.camera.target = new THREE.Vector3(0, 0, 0); //指定看向哪个点
     //创建几何体
     let geometry = new THREE.SphereBufferGeometry(60, 60, 60);
     geometry.scale(-1, 1, 1); // 贴图朝里
     // 加载贴图
     let texture = new THREE.TextureLoader().load(
       // ""
       this.imgurl
     );
     //创建                   
     let material = new THREE.MeshBasicMaterial({
       map: texture
     });

     this.mesh = new THREE.Mesh(geometry, material);
     
     this.scene = new THREE.Scene();
     this.scene.add(this.mesh);
     this.renderer = new THREE.WebGLRenderer({ antialias: true });
     this.renderer.setSize(opt.width, opt.height);
     container.appendChild(this.renderer.domElement);
   },
   start(event){
     this.isUserInteracting = true;
     var clientX = event.clientX || event.touches[0].clientX; //获取点击开始时的屏幕位置
     var clientY = event.clientY || event.touches[0].clientY;
     this.onMouseDownMouseX = clientX;
     this.onMouseDownMouseY = clientY;
     this.onMouseDownLon = this.lon; //经度
     this.onMouseDownLat = this.lat; //纬度
   },
   move(event){ //算出经度纬度移动的距离
     if(this.isUserInteracting ){
     var clientX = event.clientX || event.touches[0].clientX;
     var clientY = event.clientY || event.touches[0].clientY;
     this.lon = (this.onMouseDownMouseX - clientX  ) * 0.2 + this.onMouseDownLon;
     this.lat = ( clientY - this.onMouseDownMouseY ) * 0.2 + this.onMouseDownLat;
     }
   },
   end(event){
     this.isUserInteracting = false;
   },
   animate: function() {
     requestAnimationFrame(this.animate);
     this.lon += 0.1
     this.lat = Math.max(-85, Math.min(85, this.lat));
     this.phi = THREE.Math.degToRad(90 - this.lat);
     this.theta = THREE.Math.degToRad(this.lon);

     this.camera.target.x =  Math.sin(this.phi) * Math.cos(this.theta);
     this.camera.target.y =  Math.cos(this.phi);
     this.camera.target.z =  Math.sin(this.phi) * Math.sin(this.theta);
     this.camera.lookAt(this.camera.target);
    
     this.renderer.render(this.scene, this.camera);
   }
 }
};
</script>
<style scoped>
#container {
 width: 100vw;
 height: 100vh;
}
</style>
