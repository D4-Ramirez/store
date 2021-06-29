<template>
  <div class="app">
    <getAllProducts />
    <registerProduct />
  </div>
</template>

<script>
import registerProduct from "./components/product/registerProduct.vue";
import getAllProducts from "./components/product/getAllProducts.vue";

export default {
  name: "App",
  components: {
    registerProduct,
    getAllProducts,
  },
};
</script>

<style>
.app {
  font-family: "Courier New", Courier, monospace;
}
</style>
