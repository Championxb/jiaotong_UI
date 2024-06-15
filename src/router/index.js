import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/index",
    },
    {
      path: "/firstPage/:id",
      name: "firstPage",
      component: () => import("../views/FirstPage.vue"),
    },
    {
      path: "/railComplex",
      name: "railComplexFirstPage",
      component: () => import("../views/RailComplex_FistPage.vue"),
    },
    {
      path: "/firstPage/appExample/:id",
      name: "SecondPageAppExample",
      component: () => import("../views/SecondPage_AppExample.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      children: [
        {
          path: "/index",
          name: "index",
          component: () => import("../views/indexs/index.vue"),
        },
      ],
    },
  ],
});

export default router;
