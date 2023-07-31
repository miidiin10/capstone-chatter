<template>
        <form class="login" @submit.prevent="login">
    <h2>Login</h2>
    <input 
        type="email"
        placeholder="Email address"
        v-model="login_form.email" /> 
    <input 
        type="password"
        placeholder="Password"
        autocomplete="on"
        v-model="login_form.password" />
    <input 
        type="submit" 
        value="Login" />
  </form>
</template>

<script lang="ts">
import { ref } from "vue";
  // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { useStore } from 'vuex';
  import store from '../store'

  export default {
      setup () {
        const login_form = ref({});
        const store = useStore();

        const login = () => {
            store.dispatch('login', login_form.value);
        }

        return {
          login_form,
          login,
        }
      }
  }
</script>

<style>

</style>