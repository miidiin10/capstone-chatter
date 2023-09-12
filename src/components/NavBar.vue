<template>
    <div>
      <header>
        <nav class="container">
          <div class="brand">
            <router-link class="header" to="/"
              >Chatter
            </router-link>
          </div>
          <div class="nav-links">
            <ul>
              <router-link class="link" to="/">Home</router-link>
              <router-link class="link" to="/">About us</router-link>
              <router-link class="link" to="contact">Contact</router-link>
              <router-link class="link" to="blogs">Blogs</router-link>
            </ul>
          </div>
          <div>
            <router-link to="login-page"><button>Login</button></router-link>
            <router-link to="register"><button>Sign up</button></router-link>
          </div>
        </nav>
        <Icon icon="gg:menu-round" class="menu-icon" />       

      </header>
    </div>
  </template>
  <script lang="ts">
  import { defineComponent } from "vue";
  import { Icon } from "@iconify/vue";
  
  export default defineComponent({
    name: "nav-bar",
    components: {
      Icon,
    },
    data() {
      return {
        mobile: null,
        mobileNav: null,
        windowWidth: null,
      };
    },
    methods: {
      checkScreen() {
       
      },
    },
  });
  </script>
  <style lang="scss" scoped>

@media only screen and (max-width: 450px)  {
  ul {
          margin-right: 9px;
            
          .link {
            margin-right: 3px;
            padding: 0;
          }
      
}
}
  
  header {
    background-color: #fff;
    padding: 0 25px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index: 99;
  
    .link {
      // display: inline;
      font-weight: 500;
      font-size: 14px;
      padding: 0 4px;
      transition: 0.3s color case;

  
      &:hover {
        color: #1eb8b8;
      }
    }
  
    nav {
      display: flex;
      padding: 15px 0;
  
      .brand {
        display: flex;
        align-items: center;
  
        .header { 
          font-weight: 600;
          font-size: 24px;
          color: #000;
          text-decoration: none;
        }
      }
  
      .nav-links {
        position: relative;
        display: flex;
        // flex-wrap: nowrap;
        flex: 1;
        align-items: center;
        justify-content: center;
  
        ul {
          margin-right: 22px;
 
          .link {
            margin-right: 15px;
          }
  
          .link:last-child {
            margin-right: 0;
          }
        }
      }
    }


    .menu-icon {
      visibility: hidden;
      cursor: pointer;
      position: absolute;
      top: 32px;
      right: 25px;
      height: 25px;
      width: auto;
    }
  
    .mobile-nav {
      padding: 20px;
      width: 70%;
      max-width: 250px;
      display: flex;
      flex-direction: column;
      position: fixed;
      height: 100%;
      background-color: #303030;
      opacity: 0.8;
      top: 0;
      right: 0;
  
      .link {
        padding: 15px 0;
        color: white;
      }
    }
  }
  </style>
  