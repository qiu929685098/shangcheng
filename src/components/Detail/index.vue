<template>
  <div class="detailbox" v-if="data.title">
    <!-- 头部信息 -->
    <van-nav-bar :border="false" class="head" left-arrow @click-left="onClickLeft">
      <template #title>
        <span class="title">{{ data.title }}</span>
      </template>
    </van-nav-bar>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white"  @change="onChange">
      <van-swipe-item v-for="item in data.imgArr" :key="item">
        <img :src="item" alt="">
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          {{ current + 1 }}/{{data.imgArr.length}}
        </div>
      </template>
    </van-swipe>
    <!-- 主体信息 -->
    <div class="main">
      <span>￥</span>
      <span>{{ data.currentPrice }}</span>
      <span>会员专享</span>
      <div class="box"></div>
      <div class="originalPrice">普通价&nbsp;&nbsp;&nbsp;&nbsp;{{ data.originalPrice }}</div>
      <p class="names">{{ data.productName }}</p>
      <p class="describe">{{ data.describe === "无" ?"":data.describe }}</p>
    </div>
    <!-- 规格单元格 -->
    <van-cell value="" is-link @click="show=true">
      <template #title>
        <span class="custom-title">选择</span>
        <span type="danger">更多规格</span>
      </template>
    </van-cell>
    <!-- 商品规格 -->
    <Skuu :show=this.show />
    <!-- 加入购物车 -->
    <van-goods-action>
      <van-goods-action-icon icon="service-o" text="客服" />
      <van-goods-action-icon icon="shopping-cart-o" text="购物车" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    
  </div>
</template>

<script>
import Skuu from "@/components/Detail/Sku";
export default {
  props: ["detailId"],
  data(){
    return{
      current: 0,
      show: false
    }
  },
  components: {
    Skuu
  },
  mounted(){
    this.$store.dispatch("getData", { id: this.detailId })
  },
  computed: {
    data() {
     return this.$store.state.detail.detailDate;
    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    onClickLeft(){
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/mixin";
.detailbox {
  overflow: hidden;
  background: #F8F8F8;
  .head {
    width: 100%;
    position: fixed;
    top: 0;
    background: #fff;
    box-shadow: 0 0 10px  #000;
  }
  .van-swipe {
    margin-top: 46px;
  }
  .title {
    width: 100%;
    height: 100%;
    display: block;
    font-weight: 900;
    color: goldenrod;
  }
  .my-swipe .van-swipe-item {
    width: 100%;
    height: 260px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
}
.custom-indicator {
  width: 30px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 20px;
}
.main {
  margin-bottom: 20px;
  padding: 15px 20px 0;
  background: #fff;
  span {
    &:nth-of-type(1){
      font-size: 10px;
      line-height: 10px;
      margin-top: 7px;
      float: left;
      color: orange;
    }
    &:nth-of-type(2){
      font-size: 26px;
      line-height: 18px;
      float: left;
      color: orange;
    }
    &:nth-of-type(3){
      text-align: center;
      display: block;
      width: 60px;
      height: 18px;
      line-height: 18px;
      font-size: 8px;
      border-radius: 18px;
      background: orange;
      margin-left: 18px;
      float: left;
    }
  }
  .box {
    clear: both;
  }
  .originalPrice {
    margin-top: 10px;
    font-size: 14px;
  }
  .names {
    font-size: 16px;
    color: #333;
    font-weight: 900;
  }
  .describe {
    width: 280px;
    font-size: 14px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    padding-bottom: 20px;
    margin: 0;
  }
}
.van-cell__title, .van-cell__value {
  @include row(space-between)
}
.van-cell--clickable {
  margin-bottom: 20px;
}
</style>
