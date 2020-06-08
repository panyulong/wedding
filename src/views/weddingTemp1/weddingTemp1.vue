<template>
  <div>
    <swiper :data="swiperArr">
      <template slot-scope="props">
        <div :class="['swiper-box-bg',props.item.bgClass]"></div>
        <component :is="props.item.temp" :itemObj="props.item" :wedMes="wedMes"></component>
      </template>
      <template slot="lastTemp">
        <swiper-slide>
          <component :is="'SwiperInfoAdd'"></component>
        </swiper-slide>
      </template>
    </swiper>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import * as swiperItem from "./components/index";

import Swiper from "@c/swiper/Swiper";

 let swiperArr = [
      { temp: "SwiperOne" },
      { temp: "SwiperTwo" },
      { temp: "SwiperThree" }
    ];
    let wedMes = {
    manName: "张志明",
    womenName: "余春娇",
    place:'结婚地点'
}
export default {
  components: {
    Swiper,
    ...swiperItem
  },
  computed: {
    ...mapGetters({})
  },
  data() {
    return {
      swiperArr: [],
      wedMes:{}
    };
  },

  mounted() {
    const showTemp = this.$route.query.showTemp;
    const userId = this.$route.query.userId;
    //选择模板时，展示默认数据
    if (showTemp) {
        this.initTemp()
    } else {
    //   不是选择模板状态，且url没有userId不做展示  
      if (userId) {
          this.getUserByIdFn(userId)
      }
    }
  },
  methods: {
    ...mapActions({
      getUserById: "Swiper/getUserById"
    }),
    //模板选择时数据
    initTemp(){
         let photoArr = [{
          photoArr: [{ fileUrl: "/img/weddingTemp1/swiper-1-1.jpg" }],
        },
        { photoArr: [] },
        { photoArr: [{ fileUrl: "/img/weddingTemp1/swiper-1-2.jpg" }] }
      ];
      swiperArr.forEach((item, index) => {
        item.photoArr = photoArr[index].photoArr;
      });
      this.swiperArr = swiperArr;
      this.wedMes = wedMes
    },
    getUserByIdFn(userId){
       this.getUserById({ userId: userId }).then(res => {
          let obj = {};
          let data = res.data;
          for (const item of data) {
            item.fileUrl = `${config.url}/${item.fileUrl}`;
            if (!obj[item.current]) {
              obj[item.current] = [];
            }
            obj[item.current].push(item);
          }
          for (let i = 0; i < swiperArr.length; i++) {
            if (obj[i]) {
              swiperArr[i].photoArr = obj[i];
            }
          }
         this.swiperArr = swiperArr;
         this.wedMes = wedMes
        });
    }
  }
};
</script>

<style lang="less" scoped>
</style>