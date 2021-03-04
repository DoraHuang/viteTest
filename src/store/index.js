import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      count: 5,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
  },
});
