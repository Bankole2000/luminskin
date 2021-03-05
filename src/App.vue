<template>
  <v-app>
    <Navbar />
    <v-main>
      <transition name="router-anim">
        <router-view></router-view>
      </transition>
    </v-main>
    <Snackbar />
  </v-app>
</template>
<script>
import Navbar from "./components/shared/NavBar";
import Snackbar from "./components/shared/Snackbar";
export default {
  components: {
    Navbar,
    Snackbar,
  },
};
</script>

<style lang="scss">
// Stylish Header Font
@import url("https://fonts.googleapis.com/css2?family=Oranienbaum&display=swap");
.hero-title {
  font-family: "Oranienbaum", serif !important;
  font-size: 3.5rem;
}

.v-btn--router {
  border-radius: 0px !important;
}

// Smooth router animation
.router-anim-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.3s;
  opacity: 0;
}

.router-anim-leave-active {
  animation: going 0.3s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
