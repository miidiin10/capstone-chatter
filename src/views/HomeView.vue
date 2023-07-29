<template>
  <h1>Home</h1>
</template>

<script lang="ts">
import NavBar from '../components/NavBar.vue';
import { defineComponent } from 'vue';
// import { useRoute } from 'vue-router';

export default defineComponent({
  name: "home",
    components: {
      NavBar,
    },
})
</script>

<style>

</style>