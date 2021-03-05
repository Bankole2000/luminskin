<template>
  <div max-width="100vw">
    <v-navigation-drawer color="#f2f2ef" v-model="navDrawer" app left temporary>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img
              src="https://bankole2000.github.io/webpieces/img/nightprofile.jpg.658435b5.webp"
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>LuminSkin Clone</v-list-item-title>
            <v-list-item-subtitle
              >By
              <a href="https://bankole2000.github.io/webpieces" target="_blank">
                @CodingInNeon</a
              ></v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider></v-divider>
      <v-list>
        <v-list-item :to="link.path" v-for="link in links" :key="link.title">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer
      color="#f2f2ef"
      v-model="cart.show"
      app
      right
      temporary
      :style="{ width: $vuetify.breakpoint.mdAndUp ? '36vw' : '100vw' }"
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
        @click="navDrawer = true"
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
        <v-btn
          text
          :to="link.path"
          v-for="(link, i) in links.filter((link) => link.path !== '/account')"
          :key="i"
          class="text-capitalize mr-4"
        >
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.title }}
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        v-if="$vuetify.breakpoint.mdAndUp"
        text
        to="/account"
        class="text-capitalize"
      >
        <v-icon left>mdi-account</v-icon>
        Account
      </v-btn>
      <v-badge
        color="#4b5548"
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
      navDrawer: false,
      group: null,
      links: [
        { title: "Shop", icon: "mdi-store", path: "/" },
        { title: "Learn", icon: "mdi-laptop", path: "/about" },
        { title: "Account", icon: "mdi-account", path: "/account" },
      ],
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
