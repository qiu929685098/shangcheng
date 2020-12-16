import Vue from "vue";
import Vuex from "vuex";

import Classify from "./Classify";
import detail from "./Detail";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Classify,
    detail
  }
});
