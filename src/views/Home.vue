<template>
  <div class="home">
    <PageTitle title="All Products" subtitle="A 360&deg; look at Lumin" />
    <ProductList />
  </div>
</template>

<script>
import PageTitle from "../components/blocks/PageTitle";
import ProductList from "../components/products/ProductList";

export default {
  name: "Home",
  components: {
    PageTitle,
    ProductList,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
