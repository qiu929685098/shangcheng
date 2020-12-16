//请求分类页数据
import { getClassifyListApi } from "@/utils/api";
const Classify = {
  state: {
    dataList: []
  },
  getters: {},
  mutations: {
    changeDataList(stata, payload) {
      stata.dataList = payload;
    }
  },
  actions: {
    async getClassifyList({ commit }, payload) {
      const res = await getClassifyListApi({ type: payload.type });
      // this.dataList = res.result;
      commit("changeDataList", res.result);
    }
  }
};

export default Classify;
