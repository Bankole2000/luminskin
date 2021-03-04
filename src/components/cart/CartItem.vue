<template>
  <v-card class="cart-item" tile elevation="0">
    <v-card-title style="display: flex; align-items: center;">
      <span class="headline">{{ item.title }}</span>
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
          <span class="text-h6 font-weight-light">NGN {{ item.price }}</span>

          <span class="text-h6 font-weight-light">
            X {{ item.qty }} <br />
            - <strong color="primary">{{ item.cost }}</strong></span
          >
        </div>
        <div>
          <v-btn outlined icon tile @click="$emit('removeOne', item)">-</v-btn>
          <span class="text-h6 font-weight-black mx-2">{{ item.qty }}</span>
          <v-btn outlined icon @click="$emit('addOne', item)" tile>+</v-btn>
        </div>
      </div>
      <v-img max-width="120" max-height="120" contain :src="item.image_url" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style></style>
