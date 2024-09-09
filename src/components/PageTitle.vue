<template>
  <div class="titleBox">
    <header class="header" :style="{ backgroundColor: headerColor }">
      <div class="header-content">
        <img src="../assets/school-logo.png" alt="School Logo" class="school-logo" />
        <div class="header-titles">
          <div class="main-title">交通综合体效能优化与智能规划设计平台</div>
          <span>Traffic Complex Efficiency Optimization and Intelligent Planning and Design Platform</span>
        </div>
        <div class="header-right">
          <div class="time-info">
            <span class="time">{{ currentTime }}</span>
            <span class="date">{{ formattedDate() }}</span>
          </div>
          <div class="user-info">
            <span>系统开发：崔叙、沈中伟、吴晓、</span> <br/>
            <span>袁红、于洋、杨林川等</span>
          </div>
        </div>
      </div>
    </header>
    <DivisionLine></DivisionLine>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
// 定义 props 接收父组件传递的颜色
const props = defineProps({
  headerColor: {
    type: String,
    default: '#133453' // 默认颜色
  }
})
console.log(props)
const currentDate = ref(new Date())

const formattedDate = () => {
  const year = currentDate.value.getFullYear()
  const month = String(currentDate.value.getMonth() + 1).padStart(2, '0')
  const day = String(currentDate.value.getDate()).padStart(2, '0')
  return `${year}年${month}月${day}日`
}

const currentTime = ref(new Date().toLocaleTimeString())

const updateClock = () => {
  currentTime.value = new Date().toLocaleTimeString()
}

let timer = null

onMounted(() => {
  timer = setInterval(updateClock, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.titleBox {
  height: 12vh;
}
.header {
  background-color: #133453;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  height: 11.5vh;
}

.header-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main-title {
  margin-top: 5px;
  margin-bottom: 8px;
  font-size: 35px;
  font-weight: 800;
  letter-spacing: 3px;
}
.school-logo {
  /* 根据实际图片调整尺寸 */
  height: 50px;
  margin-right: 20px;
}

.header-titles {
  text-align: center;
  flex-grow: 1;
  margin-bottom: 5px;
}

h1 {
  font-size: 24px;
  margin-bottom: 5px; /* 小间距让标题紧凑 */
}

.header-right {
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.time-info {
  margin-bottom: 5px; /* 时间信息和用户信息之间的间距 */
}

.time {
  font-weight: bold;
  margin-right: 35px;
}
.date {
  font-size: 10px;
  color: #dedede;
}

.user-info {
  font-size: 12px;
}


</style>
