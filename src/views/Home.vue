<template>
  <div class="home">
    <div
      style="height: 280px; border-bottom: 1px solid #e2e6e3; background-color: #f5f5f4;"
    >
      <v-container style="height: 100%; display: flex; align-items: center;">
        <v-row
          style="padding: 80px 0 64px; display: flex; flex-wrap: wrap; justify-content: space-between;"
        >
          <v-col cols="12" sm="6">
            <h1 class="hero-title font-weight-light">All Products</h1>
            <p>A 360&deg; look at Lumin</p>
          </v-col>
          <v-col cols="12" sm="6" align-self="center">
            <div style="width: 60%;" class="ml-auto">
              <v-select
                :items="items"
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
    <div class="product-list" style="background-color: #e2e6e3;">
      <v-container>
        <v-row v-if="!hasData">
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
            <v-card
              elevation="0"
              class="mx-auto align-stretch transparent"
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
                1,000 miles of wonder. From {{ product.price }}
              </v-card-subtitle>

              <v-card-actions class="d-flex justify-center">
                <v-btn
                  tile
                  color="#4b5548"
                  dark
                  large
                  class="text-capitalize px-12"
                  elevation="0"
                  @click="addToCart(product)"
                >
                  Add to Cart
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import gql from "graphql-tag";
import { mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      hasData: false,
    };
  },
  apollo: {
    products: gql`
      query {
        products {
          id
          title
          image_url
          price(currency: USD)
        }
      }
    `,
    __type: gql`
      query {
        __type(name: "Currency") {
          name
          enumValues {
            name
          }
        }
      }
    `,
  },
  methods: {
    ...mapActions([
      "showToast",
      "showCart",
      "addProductToCart",
      "removeFromCart",
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
  mounted() {
    setTimeout(() => {
      this.hasData = true;
      console.log({ products: this.products });
      console.log({ currencies: this.__type });
    }, 1000);
  },
};
</script>
