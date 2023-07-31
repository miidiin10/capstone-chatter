<template>
  <div class="wrapper">
    <div class="app">
      <NavBar />
      <div>
        <button @click="$store.dispatch('logout')">Logout</button>
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";
// import NavBar from "./views/NavBar.vue";
// import LoginPage from "./views/LoginPage.vue";
import NavBar from "./components/NavBar.vue";
import { useStore } from 'vuex'

export default defineComponent({
  name: "App",
  components: { NavBar,  },
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  /* text-transform: uppercase; */
  color: black;
}

.link-light {
  color: #fff;
} 

</style>