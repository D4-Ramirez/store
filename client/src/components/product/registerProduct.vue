<template>
  <div class="main">
    <div class="typeWrapper">
      <div>
        <label for="type">Type</label>
      </div>
      <input id="type" v-model="type" type="text" />
    </div>
    <div class="nameWrapper">
      <div>
        <label for="name">Name</label>
      </div>
      <input id="name" v-model="name" type="text" />
    </div>
    <div class="sizeWrapper">
      <div>
        <label for="size">Size</label>
      </div>
      <input id="size" v-model="size" type="text" />
    </div>
    <button @click="registerProduct">Register product</button>
  </div>
</template>

<script>
import registerProduct from "../../graphql/registerProduct.gql";

export default {
  name: "registerProduct",
  data() {
    return {
      type: null,
      name: null,
      size: null,
    };
  },
  methods: {
    /**
     * ! This function won't save the data in the database
     * TODO Fix mutation method
     */
    async registerProduct() {
      console.log(`Type: ${this.type}, Name: ${this.name}, Size: ${this.size}`);
      await this.$apollo
        .mutate({
          mutation: registerProduct,
          variables: {
            input: {
              type: this.type,
              name: this.name,
              size: this.size,
            },
          },
        })
        .then((r) => console.log(r))
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style scoped></style>
