<template>
  <div class="top">
      <div class="text">
          <h3 class="welcome">Welcome to Chatter: A Haven for Text-Based Content</h3>
          <p>Unleash the Power of Words, Connect with Like-minded Readers and Writers</p>
          <button class="get-started">Get started</button>
      </div>
  </div>
  
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
.top {
  display: flex;
  width: auto;
  height: 765px;
  flex-shrink: 0;
  background: url("../assets/images/chatter6.jpg"), lightgray 50% / cover no-repeat;
  background-size: 1420px 765px;
}

.text {
  color: white;
  width: 100%;
  height: 764px;
  line-height: 30px;
  padding: 216px 228px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.55);
}

h3 {
  font-size: 35px;
  /* gap: 26px; */
}

.get-started {
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  /* gap: 8px; */
  border-radius: 8px;
  color: white;
  background: #543EE0;
}

</style>