<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #middle>
        <div>购物街</div>
      </template>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banner="banner"></home-swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import HomeSwiper from './childrenComponents/HomeSwiper.vue';

import {getHomeData} from 'network/home.js';

export default {
  name: "Home",
  components: { 
    NavBar,
    HomeSwiper
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
      this.recommand = res.data.recommend.list;
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