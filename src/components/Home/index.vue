<template>
  <div class="home">
    <Head />
    <Nav />
    <Main :mainList="mainList" />
  </div>
</template>

<script>
import Head from "@/components/Home/Head";
import Nav from "@/components/Home/Nav";
import Main from "@/components/Home/Main";
//引入api
import { getMainListApi } from "@/utils/api";

export default {
  data() {
    return {
      mainList: []
    }
  },
  components: {
    Head,
    Nav,
    Main
  },
  mounted() {
    this.getMainList();
  },
  methods: {
    //请求主页商品列表
    async getMainList() {
      const res = await getMainListApi({cont: 10, page: 1})
      this.mainList = res.result.list;
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  overflow: hidden;
}
</style>
