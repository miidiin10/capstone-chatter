<!-- <template>
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
  </script> -->

  <template>
    <div class="form-wrap">
      <form class="register">
        <p class="login-register">
          Already have an account?
          <router-link class="router-link" :to="{name: 'Login'}">Login</router-link>
        </p>
        <h2>Create Your Chatter Account</h2>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="First Name" v-model="firstName">
            <User class="icon email" />
          </div>
          <div class="input">
            <input type="text" placeholder="Last Name" v-model="lastName">
            <User class="icon email" />
          </div>
          <div class="input">
            <input type="text" placeholder="User Name" v-model="userName">
            <User class="icon email" />
          </div>
          <div class="input">
            <input type="text" placeholder="Email" v-model="email">
            <Email class="icon email" />
          </div>
          <div class="input">
            <input type="password" placeholder="Password" v-model="password">
            <Password class="icon password" />
          </div>
        </div>
  
        <button class="button">Sign Up</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </template>
  
  <script lang="ts">
  import Email from '../assets/icons/envelope.svg?component'
  import Password from '../assets/icons/lock-384.svg?component'
  import User from '../assets/icons/user.svg?component'

  export default {
    name:  "Register",
    components: {
      Email,
      Password,
      User,
    },
    data() {
      return {
        firstName: null,
        lastName: null,
        userName: null,
        email: null,
        password: null,

      }
    },
  
  }
  </script>
  
  <style lang="scss" scoped>
  .register {
    h2 {
      max-width: 350px;
    }
  }
  </style>