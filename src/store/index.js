import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import zyjk from "./modules/zyjk.js";
import xqdl from "./modules/xqdl.js";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    zyjk, xqdl
  },
  getters
});

export default store;
