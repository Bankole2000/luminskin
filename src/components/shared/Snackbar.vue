<template>
  <v-snackbar
    v-model="toast.show"
    :top="$vuetify.breakpoint.smAndDown"
    :bottom="!$vuetify.breakpoint.smAndDown"
    :right="!$vuetify.breakpoint.smAndDown"
    :timeout="toast.timeout"
  >
    <!-- :color="!$vuetify.theme.dark ? '#171717' : '#f5f5f5'" -->
    <p
      v-html="toast.message"
      class="mb-0"
      :style="{ color: $vuetify.theme.dark ? '#121212' : '#f5f5f5' }"
    ></p>
    <!-- {{ toast.message }} -->

    <template v-slot:action="{ attrs }">
      <v-btn
        text
        :class="!$vuetify.theme.dark ? 'morph-dark' : 'morph'"
        v-bind="attrs"
        :color="toast.sclass"
      >
        <!-- @click="toast.show = false" -->
        <v-icon left>{{ toast.icon }}</v-icon> &nbsp; Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["toast"]),
  },
  methods: {},
};
</script>

<style></style>
