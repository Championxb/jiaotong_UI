// import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";

// import vue3SeamlessScroll from "vue3-seamless-scroll";
// import dataV from "@jiaminghi/data-view";
import DataVVue3 from "@kjgl77/datav-vue3";
// import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/assets/css/public.scss";
import "@/assets/css/index.scss";
import ItemWrap from "./components/item-wrap/item-wrap.vue";
// import * as echarts from "echarts"; // 选择局部导入
import echarts from "./utils/echarts";
const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);
// echart使用
app.config.globalProperties.$echarts = echarts; // vue3的挂载方式（一个用于注册能够被应用内所有组件实例访问到的全局属性的对象。）
app.provide("$echarts", echarts); // vue3采用provide, inject方式使用

// app.use(dataV);
app.use(DataVVue3);
// app.use(ElementPlus);
// app.use(vue3SeamlessScroll);
app.component("ItemWrap", ItemWrap);
// app.use(createPinia());
app.use(pinia);
app.use(router);
app.mount("#app");
