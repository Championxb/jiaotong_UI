<template>
  <div id="app">
    <RouterView />
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
const options = {
  width: 1920,
  height: 1080,
  fullScreen: true,
  autoScale: true,
  selfAdaption: true,
  delay: 500,
};
const selector = '#app';
const autoScale = (selector, options) => {
  const el = document.querySelector(selector);
  console.log(el);
  const { width, height, fullScreen, autoScale, selfAdaption, delay } = options;

  el.style.transformOrigin = 'top left';
  el.style.transition = 'transform 0.5s';
  const init = () => {
    const scaleX = innerWidth / width;
    const scaleY = innerHeight / height;
    const scale = Math.min(scaleX, scaleY);
    const left = (innerWidth - width * scale) / 2;
    const top = (innerHeight - height * scale) / 2;
    el.style.transform = `translate(${left}px, ${top}px) scale(${scale}) `;
  }
  init();
  addEventListener('resize', debounce(init, delay));
}

const debounce = (fn, delay) => {
  let timer = null;
  return function (...args) {
    timer = setTimeout(
      () => {
        typeof fn === "function" && fn.apply(null, args);
        clearTimeout(timer);
      },
      delay > 0 ? delay : 100
    );
  };
}
onMounted(() => {
  // autoScale(selector, options);
})
</script>
<style lang="scss" scoped>
#app {
  // width: 1920px;
  // height: 1080px;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  // overflow: hidden; 
}
</style>
