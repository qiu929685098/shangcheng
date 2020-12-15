<template>
  <div>
    <van-tabbar v-model="active" route :placeholder="true">
      <van-tabbar-item
        v-for="item in footerList"
        :key="item.title"
        :icon="item.icon"
        :to="item.to"
        >{{ item.title }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      footerList: [
        {
          title: "首页",
          icon: "home-o",
          to: "/home",
          dot: false
        },
        {
          title: "分类",
          icon: "search",
          to: "/classify",
          dot: false
        },
        {
          title: "购物车",
          icon: "friends-o",
          to: "/cart",
          dot: false
        },
        {
          title: "我的",
          icon: "setting-o",
          to: "/mine",
          dot: false
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.van-tabbar-item {
  font-size: 14px;
  background: #fff0f5;
}
.van-tabbar-item--active {
  color: purple;
  font-weight: 900;
}
</style>
