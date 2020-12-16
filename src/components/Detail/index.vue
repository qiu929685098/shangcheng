<template>
  <div class="detailbox" v-if="data.title">
    <!-- 头部信息 -->
    <van-nav-bar
      :border="false"
      class="head"
      left-arrow
      @click-left="onClickLeft"
    >
      <template #title>
        <span class="title">{{ data.title }}</span>
      </template>
    </van-nav-bar>
    <!-- 轮播图 -->
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      @change="onChange"
    >
      <van-swipe-item v-for="item in data.imgArr" :key="item">
        <img :src="item" alt="" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          {{ current + 1 }}/{{ data.imgArr.length }}
        </div>
      </template>
    </van-swipe>
    <!-- 主体信息 -->
    <div class="main">
      <span>￥</span>
      <span>{{ data.currentPrice }}</span>
      <span>会员专享</span>
      <div class="box"></div>
      <div class="originalPrice">
        普通价&nbsp;&nbsp;&nbsp;&nbsp;{{ data.originalPrice }}
      </div>
      <p class="names">{{ data.productName }}</p>
      <p class="describe">{{ data.describe === "无" ? "" : data.describe }}</p>
    </div>
    <!-- 规格单元格 -->
    <van-cell value="" is-link @click="changeShowcell">
      <template #title>
        <span class="custom-title">选择</span>
        <span type="danger">更多规格</span>
      </template>
    </van-cell>
    <!-- 商品规格 -->
    <Skuu :showcell="this.showcell" />
    <!-- 商品规格 -->
    <!-- <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      /> -->
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
  data() {
    return {
      current: 0,
      showcell: false
      //     goodsId:1,
      //     sku: {
      //       // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
      //       // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
      //       tree: [
      //         {
      //           k: '颜色', // skuKeyName：规格类目名称
      //           k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
      //           v: [
      //             {
      //               id: '1', // skuValueId：规格值 id
      //               name: '红色', // skuValueName：规格值名称
      //               imgUrl: 'https://img.yzcdn.cn/2.jpg',// 规格类目图片，只有第一个规格类目可以定义图片
      //               previewImgUrl: 'https://img.yzcdn.cn/2.jpg'// 用于预览显示的规格类目图片
      //             },
      //             {
      //               id: '1',
      //               name: '蓝色',
      //               imgUrl: 'https://img.yzcdn.cn/2.jpg',
      //               previewImgUrl: 'https://img.yzcdn.cn/2p.jpg'
      //             }
      //           ],
      //           largeImageMode: true, //  是否展示大图模式
      //         }
      //       ],
      //       // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
      //       list: [
      //         {
      //           id: 2259, // skuId
      //           s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
      //           s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
      //           price: 100, // 价格（单位分）
      //           stock_num: 110 // 当前 sku 组合对应的库存
      //         }
      //       ],
      //       price: '1.00', // 默认价格（单位元）
      //       stock_num: 227, // 商品总库存
      //       collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
      //       none_sku: false, // 是否无规格商品
      //       messages: [
      //         {
      //           // 商品留言
      //           datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
      //           multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
      //           name: '留言', // 留言名称
      //           type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
      //           required: '1', // 是否必填 '1' 表示必填
      //           placeholder: '' // 可选值，占位文本
      //         }
      //       ],
      //       hide_stock: false // 是否隐藏剩余库存
      //     },
    };
  },
  components: {
    Skuu
  },
  mounted() {
    this.$store.dispatch("getData", { id: this.detailId });
    // console.log(this.picImg[0]);
  },
  computed: {
    // goods() {
    //   return {
    //     // 默认商品 sku 缩略图
    //     picture : this.data.imgArr[0]
    //   }
    // },
    data() {
      return this.$store.state.detail.detailDate;
    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    changeShowcell() {
      this.showcell = true;
      console.log(this.showcell);
    }
    // onBuyClicked(){
    //   console.log("购买成功");
    // },
    // onAddCartClicked(){
    //   console.log("加入购物车");
    // }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/mixin";
.detailbox {
  overflow: hidden;
  background: #f8f8f8;
  .head {
    width: 100%;
    position: fixed;
    top: 0;
    background: #fff;
    box-shadow: 0 0 10px #000;
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
    &:nth-of-type(1) {
      font-size: 10px;
      line-height: 10px;
      margin-top: 7px;
      float: left;
      color: orange;
    }
    &:nth-of-type(2) {
      font-size: 26px;
      line-height: 18px;
      float: left;
      color: orange;
    }
    &:nth-of-type(3) {
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-bottom: 20px;
    margin: 0;
  }
}
.van-cell__title,
.van-cell__value {
  @include row(space-between);
}
.van-cell--clickable {
  margin-bottom: 20px;
}
.van-goods-action {
  border-top: 1px solid #eee;
  background: #fff0f5;
}
.van-goods-action-icon {
  background: #fff0f5;
}
</style>
