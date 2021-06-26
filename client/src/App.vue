<template>
  <div id="app">
    <add-product />
  </div>
</template>

<script>
import addProduct from "./components/product/registerProduct.vue";
export default {
  name: "App",
  el: "#app",
  components: {
    addProduct,
  },
};
</script>

<style>
#app {
  font-family: "Courier New", Courier, monospace;
}
</style>
