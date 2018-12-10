import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "gc"
  },
  getters:{
    addName: state => {
      return state.name + "8888"
    },
    getNameLength: (state, getters) => {
      return getters.addName.length
    }
  },
  mutations: {
    addName: (state, n) => {
      state.name += n.value
    }
  },
  actions: {}
});
