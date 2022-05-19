import { createStore } from "vuex";
import { createPriceRequestUrl } from "@/api";
export default createStore({
  state: {
    quantity: 1,
    curentCurrency: "EUR",
    targetCurrency: "RUB",
    currencyList: null,
    rate: null,
  },
  getters: {
    GET_AMOUNT: (state) => {
      const amount = state.quantity * state.rate;
      return amount < 1 ? amount.toPrecision(2) : amount.toFixed(2);
    },
    GET_CURRENCY_NAME: (state) => {
      return Object.keys(state.currencyList);
    },
    FIND_CURRENCY_NAME: (state, getters) => (currencyName) => {
      return getters.GET_CURRENCY_NAME.filter((nname) =>
        nname.startsWith(currencyName.replace(/\d+\s+/, "").toUpperCase())
      );
    },
  },
  mutations: {
    SET_USER_INPUTS: (state, parsedValue) => {
      state.quantity = parsedValue.quantity;
      state.curentCurrency = parsedValue.curentCurrency;
      state.targetCurrency = parsedValue.targetCurrency;
    },
    SET_CURRENCY_LIST: (state, currencyList) => {
      state.currencyList = currencyList;
    },
    SET_RATE: (state, price) => {
      state.rate = price;
    },
  },
  actions: {
    GET_USER_INPUTS({ commit, dispatch }, parsedValue) {
      commit("SET_USER_INPUTS", parsedValue);
      dispatch("FETCH_RATE");
    },
    async FETCH_CURRENCY_LIST({ commit }) {
      const response = await fetch(
        `https://openexchangerates.org/api/currencies.json`
      );
      const currencyList = await response.json();
      commit("SET_CURRENCY_LIST", currencyList);
    },
    async FETCH_RATE({ commit, state }) {
      const response = await fetch(
        createPriceRequestUrl(state.curentCurrency, state.targetCurrency)
      );
      const price = await response.json();
      commit("SET_RATE", price[state.targetCurrency]);
    },
  },
});
