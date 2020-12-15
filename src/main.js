import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入弹性盒
import "amfe-flexible";
//引入UI
import {
  Tabbar,
  TabbarItem,
  NavBar,
  Swipe,
  SwipeItem,
  Search,
  Grid,
  GridItem,
  Card,
  List
} from "vant";
//使用UI
Vue.use(Tabbar); //底部导航
Vue.use(TabbarItem);
Vue.use(NavBar); //顶部信息
Vue.use(Swipe); //轮播图
Vue.use(SwipeItem);
Vue.use(Search); //顶部搜索框
Vue.use(Grid); //布局
Vue.use(GridItem);
Vue.use(Card);//商品列表
Vue.use(List);//商品列表容器

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
