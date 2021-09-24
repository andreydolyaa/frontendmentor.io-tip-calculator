import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bill: null,
    tip: null,
    people: null,
    reset: false,
  },
  mutations: {
    people: (state, people) => (state.people = people),
    bill: (state, bill) => (state.bill = bill),
    tip: (state, tip) => (state.tip = tip),
    reset: (state) => {
      state.reset = !state.reset;
      state.bill = null;
      state.tip = null;
      state.people = null;
    },
  },
  actions: {
    bill: ({ commit }, bill) => commit("bill", parseInt(bill)),
    tip: ({ commit }, tip) => commit("tip", parseInt(tip)),
    people: ({ commit }, people) => commit("people", parseInt(people)),
    reset: ({ commit }) => commit("reset"),
  },
  getters: {
    bill: ({ bill }) => bill,
    tip: ({ tip }, { bill, error }) => (!error ? (bill / 100) * tip : 0),
    total: ({ bill, tip, people }, getters) =>
      bill && tip && people && !getters.error
        ? getters.tip / getters.people
        : 0,
    people: ({ people }) => people,
    error: ({ people }) => people === 0,
  },
});
