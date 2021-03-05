<template>
  <div class="product-list" style="background-color: #e2e6e3;">
    <v-container>
      <v-row v-if="$apollo.queries.products.loading">
        <v-col v-for="n in 6" cols="12" md="4" sm="6" :key="n">
          <v-sheet class="px-3 pt-3 pb-3">
            <v-skeleton-loader
              class="mx-auto"
              max-width="300"
              type="card"
              tile
            ></v-skeleton-loader>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row v-else class="d-flex align-stretch">
        <v-col
          v-for="(product, i) in products"
          :key="i"
          class="d-flex align-stretch"
          :class="$vuetify.breakpoint.mdAndUp ? 'py-12 px-8' : 'py-6 px-0'"
          cols="12"
          md="4"
          sm="6"
        >
          <ProductCard :product="product" @add="addToCart($event)" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import gql from "graphql-tag";

import { mapActions, mapGetters } from "vuex";
import ProductCard from "./ProductItem";
export default {
  name: "ProductList",
  components: {
    ProductCard,
  },
  data() {
    return {
      currency: "USD",
    };
  },
  apollo: {
    products: {
      query: gql`
        query($currency: Currency!) {
          products {
            id
            title
            image_url
            price(currency: $currency)
          }
        }
      `,
      variables() {
        return {
          currency: this.selectedCurrency,
        };
      },
    },
  },
  watch: {
    products: function(newValue) {
      this.updateProductsInCart(newValue);
    },
  },
  computed: {
    ...mapGetters(["selectedCurrency"]),
  },
  methods: {
    ...mapActions([
      "showToast",
      "showCart",
      "addProductToCart",
      "removeFromCart",
      "updateProductsInCart",
    ]),
    addToCart(item) {
      this.addProductToCart({ item }).then((data) => {
        const { success, message } = data;
        this.showToast({ sclass: `${success ? "success" : "error"}`, message });
        if (success) {
          this.showCart(true);
        }
      });
    },
  },
};
</script>

<style></style>
