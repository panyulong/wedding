<template>
 <div class="house">
   <div ref="container"></div>
 </div>
</template>
<script>
/* eslint-disable */
import * as THREE from "three";
export default {
 data() {
   return {
    
   };
 },
 props: {
 
 },
 mounted() {
   console.log(THREE)
   this.init()
 },
 methods: {
    init(){
      window.onload = ()=>{
    init(); 
    animate();
};

function init() {
  let camera,scene,renderer; // 定义相机、场景和渲染器
  let controls; // 定义控制器
    // 相机初始化
    camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,10000); 
    camera.position.z = 3000;

    // 场景初始化
    scene = new THREE.Scene();
    
    // 场景中的元素在此处添加，代码在下一个片段
    // ....

    // 渲染器初始化，这里使用的是 CSS3DRenderer 渲染
    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);

    // 控制器初始化
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.addEventListener('change',render);

    window.addEventListener('resize',onWindowResize,false);

    render();
}

    function onWindowResize(){
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth,window.innerHeight);
        render();
    }

    function animate(){
        requestAnimationFrame(animate);
        controls.update();
    }

    function render(){
        renderer.render(scene,camera);
    }
// 这里我将元素的 css 属性放到 json 当中，方便遍历创建
const objectData = [
    // 卡片
    {
        verticalBg:{
            url:'./assets/bg_0.jpg',
            width: 1203,
            height: 589,
        },
        ground:{
            url:'./assets/bg_1.jpg',
            width:1203,
            height: 589,
            rotation:-Math.PI/180*70,
        },
        thingsRotation:Math.PI/180*70,
        things:[
            {
                url:'./assets/card1_thing_0.png',
                width:403,
                height: 284,
                x:-80,
                y:-445,
            },
    
        ]
    }
];
// 最外层元素
const container = document.createElement('div'); // 使用 js 动态创建 DomElement
container.className = 'container';
const objectContainer = new THREE.CSS3DObject(container); // 使用 CSS3DObject 将 DomElement 转换为 3d 元素
scene.add(objectContainer); // 将转换好的 3d 元素添加到场景

objectData.forEach((cardItem,cardIndex)=>{
    // 卡片
    const cardContainer = document.createElement('div');
    cardContainer.style.width = 1448+'px';
    cardContainer.style.height = 750+'px';
    const objectCardContainer = new THREE.CSS3DObject(cardContainer);
    objectContainer.add(objectCardContainer); // 通过 object3D 的 add 方法实现嵌套

    //竖直背景
    const card_bg_vertical = document.createElement('div');
    card_bg_vertical.style.width = cardItem.verticalBg.width+'px';
    card_bg_vertical.style.height = cardItem.verticalBg.height+'px';
    card_bg_vertical.style.background = 'url('+cardItem.verticalBg.url+') no-repeat';
    const objectCardBgVertical = new THREE.CSS3DObject(card_bg_vertical);
    objectCardBgVertical.position.y = -80; // 通过 object3D 的 position 属性改变元素位置
    objectCardContainer.add(objectCardBgVertical);

    // 地面
    const card_groud = document.createElement('div');
    card_groud.style.width = cardItem.ground.width+'px';
    card_groud.style.height = cardItem.ground.height+'px';
    card_groud.style.transformOrigin = 'center top'; // 通过 css 中的 transform-origin 来改变旋转中心
    card_groud.style.background = 'url('+cardItem.ground.url+') no-repeat';
    const objectCardGround = new THREE.CSS3DObject(card_groud);
    objectCardGround.position.y = 80;
    objectCardGround.rotation.x = cardItem.ground.rotation; // 通过 object3D 的 rotation 属性来旋转元素
    objectCardContainer.add(objectCardGround);

    // 元素
    cardItem.things.forEach((item,index)=>{
        const thing = document.createElement('div');
        thing.style.width = item.width+'px';
        thing.style.height = item.height+'px';
        thing.style.background = 'url('+ item.url +') no-repeat';
        const objectThing = new THREE.CSS3DObject(thing);
        objectThing.rotation.x = cardItem.thingsRotation;
        objectThing.position.y = -(index+1)*68;
        objectThing.position.x = item.x;
        objectThing.position.z = -item.y-300;
        objectCardGround.add(objectThing);
    });
});







    }
 }
};
</script>
<style scoped>
    .house{
      height:100vh;
      width:100vw;
    }
</style>
