<template>
  <nav>
    <!-- 抬头1 -->
    <van-grid :border="false" :clickable="true">
      <van-grid-item icon="photo-o" text="文字" v-for="item in 4" :key="item">
        <template #icon>
          <img src="@/assets/images/navicon.png" alt="" class="navimg" />
        </template>
      </van-grid-item>
    </van-grid>
    <!-- 抬头2 -->
    <section>
      <article v-for="item in navList" :key="item.title">
        <div class="title">{{ item.title }}</div>
      </article>
    </section>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          title: "出行有落叶",
          url: ""
        },
        {
          title: "归宿有星辰",
          url: ""
        },
        {
          title: "早安是你",
          url: ""
        },
        {
          title: "晚安也是你",
          url: ""
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang="scss" scoped>
.navimg {
  width: 40px;
  height: 40px;
  transform: scale(1.2);
}
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
article {
  width: 172px;
  height: 100px;
  margin-bottom: 20px;
  position: relative;
  &:nth-of-type(1) {
    background: #fff6e3;
  }
  &:nth-of-type(2) {
    background: #fcffef;
  }
  &:nth-of-type(3) {
    background: #f5f4ff;
  }
  &:nth-of-type(4) {
    background: #fdf8f6;
  }
  .title {
    font-size: 16px;
    font-family: "隶书";
    height: 16px;
    line-height: 16px;
    position: absolute;
    top: 14px;
    left: 14px;
  }
}
</style>
