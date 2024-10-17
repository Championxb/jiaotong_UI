import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "LoginPage",
      component: () => import("../views/LoginPage.vue"),
    },
    {
      path: "/railTransit",
      name: "RailTransit",
      component: () => import("../views/RailTransit.vue"),
    },
    {
      path: "/railComplex",
      name: "railComplexFirstPage",
      component: () => import("../views/RailComplex_FistPage.vue"),
    },
    {
      path: "/cityRail",
      name: "CityRail",
      component: () => import("../views/CityRail.vue"),
    },
    {
      path: "/mainMath",
      name: "MainMath",
      component: () => import("../views/MainMath.vue"),
    },
    {
      path: "/linkageEffect",
      name: "LinkageEffect",
      component: () => import("../views/LinkageEffect.vue"),
    },
    {
      path: "/travel",
      name: "TravelFeature",
      component: () => import("../views/TravelFeature.vue"),
    },
    {
      path: "/analysis",
      name: "MechanismAnalysis",
      component: () => import("../views/MechanismAnalysis.vue"),
    },
    {
      path: "/updateWay/:id",
      name: "UpdateWay",
      component: () => import("../views/UpdateWay.vue"),
    },
    {
      path: "/firstPage/:id",
      name: "firstPage",
      component: () => import("../views/FirstPage.vue"),
    },
    {
      path: "/firstPage/appExample/:id",
      name: "SecondPageAppExample",
      component: () => import("../views/SecondPage_AppExample.vue"),
    },
    {
      path: "/areasData/:id",
      name: "areasData",
      component: () => import("../views/AreasData.vue"),
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
