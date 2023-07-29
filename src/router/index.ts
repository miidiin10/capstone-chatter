import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";
import AboutUs from "../views/AboutUs.vue";
import Blog from "../views/Blog.vue";
import Register from "../views/Register.vue"
// import NavBar from "../components/NavBar.vue";
import Contact from "../views/Contact.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  // {
  //   path: "/home",
  //   name: "Home",
  //   component: HomeView,
  // },
  {
    path: "/login-page",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
