<template>
  <v-card class="cart-item" tile elevation="0">
    <v-card-title style="display: flex; align-items: center;">
      <span class="headline" v-if="$vuetify.breakpoint.mdAndUp">{{
        item.title
      }}</span>
      <span class="subtitle-2" v-else>{{ item.title }}</span>
      <v-spacer></v-spacer>
      <!-- @click="removeFromCart($event)" -->

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            large
            v-on="on"
            v-bind="attrs"
            @click="$emit('remove', item)"
            small
            icon
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
        <span>Remove From Cart</span>
      </v-tooltip>
    </v-card-title>
    <v-card-text style="display:flex; justify-content: space-between;">
      <div
        style="display: flex; flex-direction: column; justify-content: space-between"
      >
        <div>
          <span class="text-h6 font-weight-light"
            >{{ selectedCurrency }} {{ formatAsMoney(item.price) }}</span
          >

          <span class="text-h6 font-weight-light">
            X {{ item.qty }} <br />
            -
            <strong color="primary"
              >{{ selectedCurrency }} {{ formatAsMoney(item.cost) }}</strong
            ></span
          >
        </div>
        <div>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-on="on"
                v-bind="attrs"
                outlined
                icon
                tile
                @click="$emit('removeOne', item)"
                >-</v-btn
              >
            </template>
            <span>Remove One</span>
          </v-tooltip>
          <span class="text-h6 font-weight-black mx-2">{{ item.qty }}</span>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-on="on"
                v-bind="attrs"
                outlined
                icon
                @click="$emit('addOne', item)"
                tile
                >+</v-btn
              >
            </template>
            <span>Add One</span>
          </v-tooltip>
        </div>
      </div>
      <v-img max-width="120" max-height="120" contain :src="item.image_url" />
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["item"],
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
