<template>
  <div>
    <!-- 头部信息 -->
    <van-nav-bar :border="false" class="head">
      <template #title>
        <span class="title">人间多喜乐</span>
      </template>
    </van-nav-bar>
    <!-- 顶部搜索框 -->
    <van-search
      v-model="value"
      placeholder="莺飞草长爱的人正在路上"
      id="iconcolor"
    />
    <div class="classifymain">
      <!-- 左侧标签 -->
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="item in List"
          :key="item.type"
          :title="item.title"
          @click="itemClick"
        />
      </van-sidebar>
      <!-- 右侧主体 -->
      <div class="classify-right">
        <p
          v-for="item in dataList"
          :key="item.productId"
          @click="goDetail(item.productId)"
          class="list-p"
        >
          {{ item.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      activeKey: 0,
      type: "1",
      List: [
        {
          title: "风微起",
          type: "1"
        },
        {
          title: "波微生",
          type: "2"
        },
        {
          title: "弦亦发",
          type: "3"
        },
        {
          title: "酒亦倾",
          type: "4"
        },
        {
          title: "入莲池",
          type: "5"
        },
        {
          title: "折桂枝",
          type: "6"
        },
        {
          title: "两相思",
          type: "7"
        },
        {
          title: "两不知",
          type: "8"
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch("getClassifyList", { type: this.type });
  },
  computed: {
    dataList() {
      return this.$store.state.Classify.dataList;
    }
  },
  methods: {
    itemClick(index) {
      this.type = index + 1;
      this.$store.dispatch("getClassifyList", { type: this.type });
    },
    goDetail(id) {
      this.$router.push("/detail/" + id);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/mixin";
.head {
  width: 100%;
  position: fixed;
  top: 0;
  background: #fff0f5;
}
.title {
  width: 100%;
  height: 100%;
  display: block;
  font-weight: 900;
  color: purple;
}
.van-search {
  margin-top: 46px;
}
.van-search__content {
  border-radius: 20px;
}
.classifymain {
  @include row(space-between);
}
.van-sidebar-item--select::before {
  height: 20px;
  background-color: purple;
}
.classify-right {
  width: 280px;
  margin-left: 30px;
  .list-p {
    height: 22px;
    line-height: 22px;
    font-size: 16px;
    color: pink;
    margin: 0;
    padding: 15px;
    border: 1px solid #ccc;
  }
}
</style>
