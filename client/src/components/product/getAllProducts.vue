<template>
  <div>
    <ApolloQuery :query="require('../../graphql/getAllProducts.gql')">
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="data" class="result apollo">
          <div
            v-for="product in data.products"
            :key="product.id"
            class="productWrapper"
          >
            <div id="name">{{ product.name }}</div>
            <div id="type">{{ product.type }}</div>
            <div id="size">{{ product.size }}</div>
          </div>
        </div>
        <div v-else-if="loading" class="loading apollo">Loading...</div>
        <div v-else-if="error" class="error apollo">An error occurred</div>
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "getAllProducts",
    };
  },
};
</script>

<style scoped></style>
