<template>
  <div id="main">
    <p v-if="likes > 0">There are {{ likes }} likes 👍🏽</p>
    <p v-else>
      There are no likes 😭
    </p>
    <button v-on:click="addLike()">
      Like 👍🏽
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
    };
  },
  methods: {
    addLike() {
      this.likes++;
      console.log("Thanks");
    },
  },
};
</script>

<style scoped></style>
