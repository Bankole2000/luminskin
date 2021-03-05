import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import VueApollo from "vue-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-boost";
import router from "./router";

Vue.use(VueApollo);

// const httpLink = new HttpLink({
//   uri: "https://pangaea-interviews.now.sh/api/graphql",
// });

// const link = httpLink;

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  // link,
  uri: "https://pangaea-interviews.now.sh/api/graphql",
  cache: new InMemoryCache(),
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  apolloProvider,
  router,
  render: (h) => h(App),
}).$mount("#app");
