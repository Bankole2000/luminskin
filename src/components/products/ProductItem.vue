<template>
  <v-card
    elevation="0"
    class="product-item mx-auto align-stretch transparent"
    max-width="344"
    style="text-align: center;"
  >
    <v-img
      :src="product.image_url"
      class="mx-auto"
      width="200px"
      height="200px"
      contain
    ></v-img>

    <v-card-title style="justify-content: center; font-size: 1.1rem;">
      {{ product.title }}
    </v-card-title>

    <v-card-subtitle>
      From {{ selectedCurrency }} {{ formatAsMoney(product.price) }}
    </v-card-subtitle>

    <v-card-actions class="d-flex justify-center">
      <v-btn
        tile
        color="#4b5548"
        dark
        large
        class="text-capitalize px-12"
        elevation="0"
        @click="$emit('add', product)"
      >
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["product"],
  computed: {
    ...mapGetters(["selectedCurrency"]),
  },

  methods: {
    formatAsMoney(number) {
      return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
  },
};
</script>

<style></style>
