// import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";
import * as echarts from "echarts";
// import vue3SeamlessScroll from "vue3-seamless-scroll";
import dataV from "@jiaminghi/data-view";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/assets/css/public.scss";
import "@/assets/css/index.scss";
import ItemWrap from "./components/item-wrap/item-wrap.vue";
const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);
// 全局挂载 echarts
app.config.globalProperties.$echarts = echarts;

app.use(dataV);
app.use(ElementPlus);
// app.use(vue3SeamlessScroll);
app.component("ItemWrap", ItemWrap);
// app.use(createPinia());
app.use(pinia);
app.use(router);
app.mount("#app");
