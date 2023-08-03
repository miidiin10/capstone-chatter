<template>
  <!-- <div>
    <div class="top">
        <div class="text">
            <h3 class="welcome">Welcome to Chatter: A Haven for Text-Based Content</h3>
            <p>Unleash the Power of Words, Connect with Like-minded Readers and Writers</p>
            <button class="landing-page-btn">Get started</button>
        </div>
    </div>
    <div class="frame-container">
        <div class="frame1">
                <div class="frame11">
                  <h2>About Chatter</h2>
                  <p>Chatter is a multi-functional platform where authors and readers can have access to their own content. It aims to be a traditional bookworm’s heaven and a blog to get access to more text based content. Our vision is to foster an inclusive and vibrant community where diversity is celebrated. We encourage open-mindedness and respect for all individuals, regardless of their backgrounds or beliefs. By promoting dialogue and understanding, we strive </p>
                </div>
                <div class="frame1-img">
                  
                </div>
        </div>
    </div>
    <div class="frame-why">

    </div> -->
    <div>
      <LandingPage />
    </div>
</template>

<script lang="ts">
import NavBar from '../components/NavBar.vue';
import { defineComponent } from 'vue';
import LandingPage from '../components/LandingPage.vue';
// import { useRoute } from 'vue-router';

export default defineComponent({
  name: "home",
    components: {
      NavBar,
      LandingPage,
    },
})
</script>

<style lang="scss" scoped>
// .top {
//   display: flex;
//   width: 100%;
//   height: 765px;
//   flex-shrink: 0;
//   background: url("../assets/images/chatter6.jpg"), lightgray 50% / cover no-repeat;
//   background-size: 100% 765px;
// }

// .text {
//   color: white;
//   width: 100%;
//   height: 764px;
//   line-height: 30px;
//   padding: 216px 228px;
//   justify-content: center;
//   align-items: center;
//   flex-shrink: 0;
//   background: rgba(0, 0, 0, 0.55);
// }

// h3 {
//   font-size: 35px;
//   /* gap: 26px; */
// }

// .landing-page-btn {
//   padding: 8px 16px;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   border-radius: 8px;
//   color: white;
//   background: #543EE0;
// }

// .frame-container {
//   display: flex;
//   padding: 60px;

//     .frame1 {
//       display: flex; 
//       justify-content: center;
//       width: 100%;
//       height: 404px;
//       align-items: flex-start;
//       gap: 84px;

//       .frame11 {
//         // display: flex;
//         align-items: center;
//         // gap: 24px;
//         justify-content: center;
//         display: flex;
//         flex-direction: column;
//         align-items: flex-start;
//         gap: 34px;
//         // clear: both;
//         // margin-right: 150px;

//             h2 {
//               color: var(--black-700, #111);
//               /* Desktop/headline/48-72 */
//               font-family: DM Sans;
//               font-size: 60px;
//               font-style: normal;
//               font-weight: 700;
//               line-height: 72px; /* 150% */
//           }

//           p {
//             color: var(--black-700, #111);
//             /* Desktop/Body/18-27 */
//             font-family: DM Sans;
//             font-size: 27px;
//             font-style: normal;
//             font-weight: 500;
//             line-height: 37px; /* 150% */
//           }
//       }

//       .frame1-img {
//         justify-content: center;
//         width: 500px;
//         height: 404px;
//         flex-shrink: 0;
//         border-radius: 8px;
//         background: url("../assets/images/chatter3.jpg"), lightgray 50% / cover no-repeat;
//       }
// }
// }

// .frame-why {
//   border: 1px solid red;
//   margin: 150px;
//   height: 555px;
//   max-width: 100%;
// }

</style>