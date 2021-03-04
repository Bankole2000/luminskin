<template>
  <div max-width="100vw">
      

      <v-navigation-drawer
      color="#f2f2ef"
      v-model="drawer"
      app
      right
      temporary
      
      :style="{ 'width': $vuetify.breakpoint.mdAndUp ? '32vw' : '100vw' }"
    >
      <!-- <h2>Cart Items will be here</h2> -->
    
         <v-card-title align="center">
             <v-btn icon @click="drawer = false">

             <v-icon>mdi-arrow-right-circle</v-icon>
             </v-btn>
             <v-spacer></v-spacer>
             <span class="caption text-uppercase">Your Cart</span>
             <v-spacer></v-spacer>
         </v-card-title>
         <div class="px-6">
             <v-select dense :items="items" hide-details  label="Currency" outlined style="border-radius: 0px; border-color: transparent; background-color: white;" :style="{'width': $vuetify.breakpoint.mdAndUp ? '25%': '50%'}"></v-select>
         </div>
         <div class="px-6">
           <v-row>
             <v-col cols="12">
               <v-card tile elevation="0">
                 <v-card-title>
                   <span class="headline">Product Name</span>
                   <v-spacer></v-spacer>
                   <v-btn small icon>
                     <v-icon>mdi-cancel</v-icon>
                   </v-btn>
                 </v-card-title>
                 <v-card-text style="display:flex; justify-content: space-between;">
                   <span>Price NGN1000</span>
                   <v-img max-width="100" contain src="https://cdn.vuetifyjs.com/images/cards/cooking.png"/>
                 </v-card-text>
                 <v-card-actions>
                   <v-btn outlined tile>-</v-btn>
                   <v-btn outlined tile disabled>1</v-btn>
                   <v-btn outlined tile>+</v-btn>

                 </v-card-actions>
               </v-card>
             </v-col>
           </v-row>
         </div>
     
    </v-navigation-drawer>
    <v-app-bar elevate-on-scroll app style="border-bottom: 1px solid #e2e6e3;" :class="$vuetify.breakpoint.mdAndUp ? 'px-10': 'px-0'">
        <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown"></v-app-bar-nav-icon>
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
      <v-btn v-if="$vuetify.breakpoint.mdAndUp" text to="/account" class="text-capitalize">
          Account
      </v-btn>
       <v-badge color="primary" offset-x="20" offset-y="20" content="4">
      <v-btn @click="drawer = !drawer" icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
       </v-badge>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
      items: ["Foo", "Bar", "Fizz", "Buzz"], 
    };
  },
  methods: {},
};
</script>

<style></style>
