<template>
  <div>
    <div>
      <p>Type</p>
      <input type="text" name="type" v-model="product.type" />
    </div>
    <div>
      <p>Name</p>
      <input type="text" name="name" v-model="product.name" />
    </div>
    <div>
      <p>Size</p>
      <input type="number" name="size" v-model="product.size" />
    </div>
    <button v-on:submit="addProduct()">Add</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "addProduct",
  data() {
    return {
      product: {
        type: null,
        name: null,
        size: null,
      },
    };
  },
  methods: {
    addProduct() {
      axios
        .post("http://192.168.79.35:3000/products", this.product)
        .then((result) => console.log(result.data));
    },
  },
};
</script>

<style scoped></style>
