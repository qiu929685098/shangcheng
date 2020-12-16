import { getDetailDataApi } from "@/utils/api";
const detail = {
  state: {
    detailDate: []
  },
  mutations: {
    getDetailDate(state, payload) {
      state.detailDate = payload;
    }
  },
  actions: {
    async getData({ commit }, payload) {
      const res = await getDetailDataApi({ productId: payload.id });
      commit("getDetailDate", res.result);
    }
  }
};

export default detail;
