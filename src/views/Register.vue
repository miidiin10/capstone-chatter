<template>
  <form class="register" @submit.prevent="register">
    <h2>Create an Account</h2>
    <input 
        type="email"
        placeholder="Email address"
        v-model="register_form.email" /> 
    <input 
        type="password"
        placeholder="Password"
        autocomplete="on"
        v-model="register_form.password" />
    <input 
        type="submit" 
        value="Register" />
  </form>

</template>
<script lang="ts">
  import { ref } from "vue";
  // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { useStore } from 'vuex';
  import store from '../store'

  export default {
      setup () {
        const register_form = ref({});
        const store = useStore();

        const register = () => {
            store.dispatch('register', register_form.value);
        }

        return {
          register_form,
          register,
        }
      }
  }
  </script>