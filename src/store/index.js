import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: {
      show: false,
      items: [],
      itemIds: {},
    },
    toast: {
      sclass: "",
      message: "",
      show: false,
      timeout: -1,
      icons: {
        success: "mdi-check",
        warning: "mdi-alert",
        error: "mdi-window-close",
        info: "mdi-information",
      },
      icon: "",
    },
  },
  mutations: {
    showToast(state, payload) {
      for (const key in payload) {
        state.toast[key] = payload[key];
      }
      state.toast.icon = state.toast.icons[payload.sclass];
      state.toast.show = true;
    },
    showCart({ cart }, payload) {
      cart.show = payload;
    },
    addProductToCart({ cart }, product) {
      cart.itemIds[product.id] = product;
      cart.items.push({ ...product, qty: 1, cost: product.price });
      console.log({ cart: cart, product });
    },
    removeProductFromCart({ cart }, product) {
      if (cart.itemIds[product.id]) {
        delete cart.itemIds[product.id];
      }
      const indexInCart = cart.items.map((item) => item.id).indexOf(product.id);
      cart.items.splice(indexInCart, 1);
    },
    increaseProductInCart({ cart }, product) {
      cart.items.forEach((item) => {
        if (product.id == item.id) {
          item.qty += 1;
          item.cost = item.price * item.qty;
          console.log({ item });
          return;
        }
      });
    },
    decreaseProductInCart({ cart }, product) {
      cart.items.forEach((item) => {
        if (product.id == item.id) {
          if (item.qty > 1) {
            item.qty -= 1;
            item.cost = item.price * item.qty;
            console.log({ item });
            return;
          } else {
            if (cart.itemIds[product.id]) {
              delete cart.itemIds[product.id];
            }
            const indexInCart = cart.items
              .map((item) => item.id)
              .indexOf(product.id);
            cart.items.splice(indexInCart, 1);
          }
        }
      });
    },
  },
  actions: {
    showToast({ commit }, { sclass, message, timeout = 2000 }) {
      return new Promise((resolve) => {
        commit("showToast", { sclass, message, timeout });
        resolve(true);
      });
    },
    showCart({ commit }, payload) {
      commit("showCart", payload);
    },
    addProductToCart({ commit, state }, payload) {
      return new Promise((resolve) => {
        const { item: product } = payload;
        if (state.cart.itemIds[product.id]) {
          commit("increaseProductInCart", product);
          resolve({
            success: true,
            message: "Increased In Cart (+1)",
            isNew: false,
          });
        } else {
          commit("addProductToCart", product);
          resolve({ success: true, message: "Added to Cart", isNew: true });
        }
      });
    },
    removeProductFromCart({ commit, state }, payload) {
      return new Promise((resolve) => {
        const { item: product } = payload;
        commit("removeProductFromCart", product);
        if (state.cart.itemIds[product.id]) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    },
    increaseProductInCart({ commit }, payload) {
      const { item: product } = payload;
      commit("increaseProductInCart", product);
    },
    decreaseProductInCart({ commit }, payload) {
      const { item: product } = payload;
      commit("decreaseProductInCart", product);
    },
  },
  getters: {
    toast(state) {
      return state.toast;
    },
    cart(state) {
      return state.cart;
    },
    cartTotal(state) {
      return state.cart.items.reduce((acc, item) => {
        return (acc += item.cost);
      }, 0);
    },
  },
  modules: {},
});
