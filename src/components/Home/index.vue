<template>
  <div class="home">
    <Head />
    <Nav />
    <div class="content">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="余生还很长···"
        @load="onLoad"
        offset="0"
      >
        <van-card
          v-for="item in mainList"
          :key="item.productId"
          :price="item.currentPrice"
          :title="item.productName"
          :thumb="item.imgUrl"
          :origin-price="item.originalPrice"
        />
      </van-list>
    </div>
  </div>
</template>

<script>
import Head from "@/components/Home/Head";
import Nav from "@/components/Home/Nav";
//引入api
import { getMainListApi } from "@/utils/api";

export default {
  data() {
    return {
      count: 3,
      page: 1,
      mainList: [],
      loading: false,
      finished: true
    };
  },
  components: {
    Head,
    Nav
  },
  mounted() {
    this.getMainList();
  },
  methods: {
    //请求主页商品列表
    async getMainList() {
      const res = await getMainListApi({ count: this.count, page: this.page });
      this.mainList = [...this.mainList, ...res.result.list];
      this.page++;
      this.loading = false;
      if (res.result.list.length < this.count) {
        this.finished = true;
      } else {
        this.finished = false;
      }
    },
    onLoad() {
      this.getMainList();
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  overflow: hidden;
}
.content {
  padding: 0 15px;
  .van-card {
    background: #fff;
    border-bottom: 1px solid #ccc;
  }
  .van-card__price {
    color: red;
  }
  .van-card__title {
    font-weight: 900;
  }
}
</style>
