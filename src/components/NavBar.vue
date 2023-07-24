<template>
    <div>
      <header>
        <nav class="container">
          <div class="brand">
            <router-link class="header" :to="{ name: 'Home' }"
              >Chatter
            </router-link>
          </div>
          <div class="nav-links">
            <ul>
              <router-link class="link" to="#">Home</router-link>
              <router-link class="link" to="#">Blogs</router-link>
              <router-link class="link" to="#">Create Post</router-link>
              <router-link class="link" to="#">Login/Register</router-link>
            </ul>
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
  
  header {
    background-color: #fff;
    padding: 0 25px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index: 99;
  
    .link {
      font-weight: 500;
      padding: 0 8px;
      transition: 0.3s color case;
  
      &:hover {
        color: #1eb8b8;
      }
    }
  
    nav {
      display: flex;
      padding: 25px 0;
  
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
        flex: 1;
        align-items: center;
        justify-content: flex-end;
  
        ul {
          margin-right: 32px;
  
          .link {
            margin-right: 32px;
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
  