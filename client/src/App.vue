<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  el: "#app",
  components: {
    Home,
  },
};
</script>

<style>
#app {
  font-family: "Courier New", Courier, monospace;
}
</style>
