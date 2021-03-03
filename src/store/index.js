import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: {
      isOpen: false, 
    }, 
    toast: {
      
    }
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    cart(state){
      return state.cart
    }
  },
  modules: {
  }
})
