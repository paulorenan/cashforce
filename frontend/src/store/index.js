import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders: [],
  },
  mutations: {
    getOrders(state, order) {
      state.orders = order
    }
  },
  actions: {
    getOrders({ commit }) {
      axios.get('http://localhost:3001/orders').then(res => {
        commit('getOrders', res.data)
      });
    }
  },
})
