import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";
import AboutUs from "../views/AboutUs.vue";
import Blogs from "../views/Blogs.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
// import NavBar from "../components/NavBar.vue";
import Contact from "../views/Contact.vue";
import { auth } from '../firebase';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    meta: {
      title: "Home",
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
    meta: {
      title: "Login",
      
    }
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: "ForgotPassword",
      
    }
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
    meta: {
      title: "About Us",
      
    }
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
    meta: {
      title: "Blogs",
      
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register",
      
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: "Contact",
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
  document.title = `${to.meta.title} | Chatter`;
  
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
