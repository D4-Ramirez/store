<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    let count = ref(0);

    function increase() {
      count.value++;
    }

    return {
      increase,
      count,
    };
  },
};
</script>

<template>
  <h1 class="text-center text-3xl font-bold underline text-blue-900">My Store App 🌴</h1>
  <div class="w-full">
    <button class=" bg-blue-300 rounded w-1/2 overflow-hidden" @click="increase">
      {{ count }}
    </button>
  </div>
</template>
