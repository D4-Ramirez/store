<template>
  <div>
    <div v-for="p in products" v-bind:key="p">
      Product name: {{ p.name }}, Size: {{ p.size }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Products",
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => (this.products = response.data));
  },
  methods: {
    addProduct() {
      
    }
  },
};
</script>

<style scoped></style>
