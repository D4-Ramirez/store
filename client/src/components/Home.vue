<template>
  <div id="home">
    <div v-for="user in users" v-bind:key="user">
      Name: {{ user.name }}; Last Name: {{ user.last_name }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [
        { name: "David", last_name: "Ramírez" },
        { name: "Carolina", last_name: "Molina" },
        { name: "Luis", last_name: "Rosales" },
      ],
    };
  },
  mounted() {
    
  }
};
</script>

<style scoped></style>
