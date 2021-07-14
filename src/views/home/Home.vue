<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #middle>
        <div>购物街</div>
      </template>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banner="banner"></home-swiper>
    <!-- 推荐栏 -->
    <home-recommand :recommend="recommend"></home-recommand>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import HomeSwiper from './childrenComponents/HomeSwiper.vue';
import HomeRecommand from "./childrenComponents/HomeRecommand.vue"

import {getHomeData} from 'network/home.js';

export default {
  name: "Home",
  components: { 
    NavBar,
    HomeSwiper,
    HomeRecommand
  },
  data() {
    return {
      banner: [],
      recommend: []
    }
  },
  created() {
    getHomeData().then(res=>{
      console.log("homeData--->",res);
      //console.log(this);
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  },
}
</script>

<style>
.home-nav {
  background-color: pink;
  color: white;
  font-size: 20px;
}
</style>