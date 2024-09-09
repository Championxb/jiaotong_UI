<template>
  <!-- <div id="index" ref="appRef" class="index_home" :class="{ pageisScale: isScale }"> -->
  <ScaleScreen :width="1920" :height="1080" class="scale-wrap">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <!-- 头部 s -->
        <Header>
        </Header>
        <!-- 头部 e-->
        <!-- 内容  s-->
        <RouterView></RouterView>
        <!-- <scene></scene> -->
        <!-- 内容 e -->
        <!-- 底部 -->
        <Footer></Footer>
        <!-- 底部 -->
      </div>
    </div>
  </ScaleScreen>
  <!-- </div> -->
</template>
<script setup>
import ScaleScreen from '@/components/scale-screen/scale-screen.vue'
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue';
import { RouterView, useRouter } from 'vue-router'
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { Search } from '@element-plus/icons-vue'
const dateYear = ref(null)
const dateWeek = ref(null)
const dateDay = ref(null)
const timer = ref(null)
const loading = ref(true)
const router = useRouter()

const weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
onMounted(() => {
  timeFn()
  cancelLoading()
})
onBeforeUnmount(() => {
  clearInterval(timer.value)
})
const timeFn = () => {
  timer.value = setInterval(() => {
    const date = new Date()
    let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()
    let day = date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate().toString()
    dateYear.value = (date.getFullYear() + '-' + month + '-' + day)
    dateWeek.value = weekday[date.getDay()].toString()
    //获取时分秒
    let h = date.getHours() < 10 ? '0' + date.getHours().toString() : date.getHours().toString()
    let m = date.getMinutes() < 10 ? '0' + date.getMinutes().toString() : date.getMinutes().toString()
    let s = date.getSeconds() < 10 ? '0' + date.getSeconds().toString() : date.getSeconds().toString()
    dateDay.value = h + ':' + m + ':' + s
  }, 1000)
}
const cancelLoading = () => {
  let timer = setTimeout(() => {
    loading.value = false;
    clearTimeout(timer);
  }, 500);
}
</script>
<style lang="scss" scoped>
.bg {
  color: #d3d6dd;
  overflow: hidden;
  // width: 100%;
  height: 100%;
  background-color: #133D5F;
  background-image: url("../assets/center.png");
  background-repeat: no-repeat;
  background-size: 40% 45%;
  background-position: center 200px; //参数1：左右，参数2：上下
  box-sizing: border-box;

  // margin: 0 30px 0px 20px;
}
</style>