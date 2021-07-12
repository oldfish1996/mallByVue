import Vue from 'vue';
import VueRouter from 'vue-router';
//1.安装路由插件
Vue.use(VueRouter);
//2.创建路由对象
const Home = ()=>import('views/home/Home.vue');
const Category = ()=>import('views/category/Category.vue');
const Cart = ()=>import('views/cart/Cart.vue');
const Profile = ()=>import('views/profile/Profile.vue');
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
];
const router = new VueRouter({
  routes
})
//3.导出路由对象
export default router;