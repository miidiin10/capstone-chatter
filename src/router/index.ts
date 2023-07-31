import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";
import AboutUs from "../views/AboutUs.vue";
import Blog from "../views/Blog.vue";
import Register from "../views/Register.vue"
// import NavBar from "../components/NavBar.vue";
import Contact from "../views/Contact.vue"
import { auth } from '../firebase'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    meta: {
      requiresAuth: true
    }
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
    meta: {
      requiresAuth: true
    }
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
    meta: {
      requiresAuth: true
    }
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

router.beforeEach((to, from, next) => {
  if (to.path === '/login-page' && auth.currentUser ) {
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requireAuth) && !auth.currentUser) {
    next('/login-page')
    return;
  }

  next();
});

export default router;
