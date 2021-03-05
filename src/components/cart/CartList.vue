<template>
  <div>
    <div
      class="cart-list"
      style="position: sticky; top: 0; z-index: 1000; background-color: #f5f5f4;"
    >
      <v-card-title align="center">
        <v-btn icon @click="showCart(false)">
          <v-icon>mdi-arrow-right-circle</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <span class="caption text-uppercase">Your Cart</span>
        <v-spacer></v-spacer>
      </v-card-title>
      <div class="px-6">
        <v-select
          dense
          v-model="currency"
          @change="changeCurrency($event)"
          :items="currencies"
          hide-details
          label="Currency"
          outlined
          style="border-radius: 0px; border-color: transparent; background-color: white;"
          :style="{ width: $vuetify.breakpoint.mdAndUp ? '40%' : '50%' }"
        ></v-select>
        <v-divider class="mt-6"></v-divider>
      </div>
    </div>
    <div class="pa-6">
      <v-row>
        <v-slide-y-transition style="width: 100%" group>
          <v-col cols="12" v-for="(item, i) in itemsInCart" :key="i">
            <CartItem
              :item="item"
              @remove="removeFromCart($event)"
              @addOne="increase($event)"
              @removeOne="decrease($event)"
            />
          </v-col>
        </v-slide-y-transition>
      </v-row>
      <v-divider class="mt-6"></v-divider>
      <v-card-title style="display: flex; justify-content: space-between">
        <span class="headline">SubTotal</span>
        <span class="font-weight-black"
          >{{ selectedCurrency }} {{ formatAsMoney(cartTotal) }}</span
        >
      </v-card-title>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

import CartItem from "./CartItem";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      currency: "USD",
    };
  },
  components: {
    CartItem,
  },
  apollo: {
    currencies: {
      query: gql`
        query {
          currencies: currency
        }
      `,
    },
  },
  computed: {
    ...mapGetters(["cart", "cartTotal", "selectedCurrency"]),
    itemsInCart() {
      return this.cart.items.slice().reverse();
    },
  },
  methods: {
    ...mapActions([
      "showCart",
      "showToast",
      "removeProductFromCart",
      "increaseProductInCart",
      "decreaseProductInCart",
      "setSelectedCurrency",
    ]),
    removeFromCart(item) {
      this.removeProductFromCart({ item });
    },
    increase(item) {
      this.increaseProductInCart({ item });
    },
    decrease(item) {
      this.decreaseProductInCart({ item });
    },
    changeCurrency(e) {
      this.setSelectedCurrency(e);
    },
    formatAsMoney(number) {
      return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
  },
};
</script>

<style>
.cart-list {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #f5f5f4;
}
</style>
