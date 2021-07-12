<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/home">
        <template #item-icon>
          <img src="~assets/images/tabbar/home.svg" alt="">
        </template>
        <template #item-icon-active>
          <img src="~assets/images/tabbar/home-active.svg" alt="">
        </template>
        <template #item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template #item-icon>
          <img src="~assets/images/tabbar/category.svg" alt="">
        </template>
        <template #item-icon-active>
          <img src="~assets/images/tabbar/category-active.svg" alt="">
        </template>
        <template #item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="cart">
        <template #item-icon>
          <img src="~assets/images/tabbar/cart.svg" alt="">
        </template>
        <template #item-icon-active>
          <img src="~assets/images/tabbar/cart-active.svg" alt="">
        </template>
        <template #item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template #item-icon>
          <img src="~assets/images/tabbar/profile.svg" alt="">
        </template>
        <template #item-icon-active>
          <img src="~assets/images/tabbar/profile-active.svg" alt="">
        </template>
        <template #item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import url("~@/assets/css/base.css");
</style>