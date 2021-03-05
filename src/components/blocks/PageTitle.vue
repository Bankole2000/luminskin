<template>
  <div
    style="height: 280px; border-bottom: 1px solid #e2e6e3; background-color: #f5f5f4;"
  >
    <v-container style="height: 100%; display: flex; align-items: center;">
      <v-row
        style="padding: 80px 0 64px; display: flex; flex-wrap: wrap; justify-content: space-between;"
      >
        <v-col cols="12" sm="6">
          <h1
            class="hero-title font-weight-light"
            :style="{
              'text-align': $vuetify.breakpoint.mdAndDown ? 'center' : 'left',
            }"
          >
            {{ title }}
          </h1>
          <p
            :style="{
              'text-align': $vuetify.breakpoint.mdAndDown ? 'center' : 'left',
            }"
            v-html="subtitle"
          ></p>
        </v-col>
        <v-col cols="12" sm="6" v-if="$route.path == '/'" align-self="center">
          <div
            style="width: 60%;"
            :class="$vuetify.breakpoint.mdAndDown ? 'mx-auto' : 'ml-auto'"
          >
            <v-select
              disabled
              :items="['fizz', 'buzz']"
              hide-details
              label="Filter Products"
              outlined
              style="border-radius: 0px; background-color: white;"
            ></v-select>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["title", "subtitle"],
};
</script>

<style></style>
