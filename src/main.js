import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入弹性盒
import "amfe-flexible";
//引入UI
import {
  Icon,
  Tabbar,
  TabbarItem,
  NavBar,
  Swipe,
  SwipeItem,
  Search,
  Grid,
  GridItem,
  Card,
  List,
  Sidebar,
  SidebarItem,
  Cell,
  GoodsAction,
  GoodsActionButton,
  GoodsActionIcon,
  Sku
} from "vant";
//使用UI
Vue.use(Icon); //字体icon
Vue.use(Tabbar); //底部导航
Vue.use(TabbarItem);
Vue.use(NavBar); //顶部信息
Vue.use(Swipe); //轮播图
Vue.use(SwipeItem);
Vue.use(Search); //顶部搜索框
Vue.use(Grid); //布局
Vue.use(GridItem);
Vue.use(Card); //商品列表
Vue.use(List); //商品列表容器
Vue.use(Sidebar); //分类页导航
Vue.use(SidebarItem);
Vue.use(Cell); //详情页单元格
Vue.use(GoodsAction); //商品购买
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Sku); //商品规格

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
