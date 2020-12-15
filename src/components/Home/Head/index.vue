<template>
  <div>
    <!-- 头部信息 -->
    <van-nav-bar :border="false" class="head">
      <template #title>
        <span class="title">啾啾の无忧铺</span>
      </template>
    </van-nav-bar>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="@/assets/images/swiper01.jpg" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/images/swiper02.jpg" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/images/swiper03.jpg" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/images/swiper04.jpg" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/images/swiper05.jpg" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 顶部搜索框 -->
    <van-search v-model="value" placeholder="请输入搜索关键词" id="iconcolor" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      value: ""
    };
  },
  mounted() {
    this.getSwiper();
  },
  methods: {
    getSwiper() {
      axios
        .get("http://www.pudge.wang:3180/home/banner", {
          params: {
            ID: 12345
          }
        })
        .then(res => {
          this.swiperList = res.data.result.list;
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.head {
  width: 100%;
  position: fixed;
  top: 0;
  background: #fff0f5;
}
.my-swipe {
  margin-top: 46px;
}
.title {
  width: 100%;
  height: 100%;
  display: block;
  font-weight: 900;
  color: purple;
}
.my-swipe .van-swipe-item {
  height: 260px;
  img {
    width: 100%;
    height: 100%;
  }
}
.van-search__content {
  width: 280px;
  border-radius: 25px;
  position: fixed;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.6;
}
</style>
