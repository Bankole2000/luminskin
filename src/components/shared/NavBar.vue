<template>
  <div max-width="100vw">
    <v-navigation-drawer
      color="#f2f2ef"
      v-model="cart.show"
      app
      right
      temporary
      :style="{ width: $vuetify.breakpoint.mdAndUp ? '32vw' : '100vw' }"
    >
      <CartList />
    </v-navigation-drawer>

    <v-app-bar
      elevate-on-scroll
      app
      style="border-bottom: 1px solid #e2e6e3;"
      :class="$vuetify.breakpoint.mdAndUp ? 'px-10' : 'px-0'"
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
      ></v-app-bar-nav-icon>
      <v-img
        alt="Lumin Skin Logo"
        class="shrink mr-16"
        contain
        :src="require('@/assets/logo.png')"
        transition="scroll-y-transition"
        height="55"
        width="155"
      />
      <div v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn text to="/" class="text-capitalize mr-4">
          Shop
        </v-btn>
        <v-btn text to="/about" class="text-capitalize">
          Learn
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        v-if="$vuetify.breakpoint.mdAndUp"
        text
        to="/account"
        class="text-capitalize"
      >
        Account
      </v-btn>
      <v-badge
        color="primary"
        offset-x="20"
        offset-y="20"
        :value="cart.items.length"
        :content="cart.items.length"
      >
        <v-btn class="ml-4" @click="showCart(true)" icon>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-badge>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartList from "../cart/CartList";
export default {
  components: {
    CartList,
  },
  data() {
    return {
      drawer: false,
      group: null,
      items: ["Foo", "Bar", "Fizz", "Buzz"],
    };
  },
  computed: {
    ...mapGetters(["cart"]),
  },
  methods: {
    ...mapActions(["showCart"]),
    removeFromCart(e) {
      console.log({ e });
    },
  },
};
</script>

<style></style>
