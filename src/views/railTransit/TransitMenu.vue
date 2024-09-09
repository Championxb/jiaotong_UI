<template>
  <!-- 底部分隔线组件 -->
  <div class="bottomBox">
    <div class="dashboard">
      <!-- 下侧面板 -->
      <div class="bottom-bar">
        <ul class="menu">
          <li
            v-for="(item, index) in menuList"
            :key="index"
            class="menu-item"
            @click="selectMenuItem(index)"
            :class="{ active: index === currentIndex }"
          >
            {{ item.itemName }}<br />
            <span class="menu-item-eg">{{ item.translation }}</span>
          </li>
        </ul>
      </div>
      <!-- 底部分隔线组件 -->
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, computed }from 'vue'
const { isMain, isCity } = defineProps({
  isMain: Boolean,
  isCity: Boolean
})
// 定义发出事件
const emit = defineEmits(['update:isMain', 'update:isCity'])
// 用于跟踪当前选中的项目索引
const currentIndex = ref(0)
// 根据父组件传递的属性设置当前选中的索引
watch(() => isMain, (newValue) => {
  if (newValue) {
    currentIndex.value = 0
  }
})

watch(() => isCity, (newValue) => {
  if (newValue) {
    currentIndex.value = 1
  }
})
// 基础资料
const menuList = [
  {
    itemName: '干线铁路',
    translation: 'Mainline railway'
  },
  {
    itemName: '城市轨道',
    translation: 'Urban rail transit'
  }
]
// 选择菜单项时更新当前索引并通知父组件
const selectMenuItem = (index) => {
  currentIndex.value = index
  if (index === 0) {
    emit('update:isMain', true)
    emit('update:isCity', false)
  } else if (index === 1) {
    emit('update:isMain', false)
    emit('update:isCity', true)
  }
}
</script>
  
<style scoped>

.bottomBox {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
}
.dashboard {
  display: flex;
  flex-direction: column;
  background-color: #000000dc; /* 主背景色 */
  height: 60px;
  z-index: 1000;
}

.bottom-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a0a0ccd; /* 标签背景色 */
  padding: 5px;
  border-radius: 25px; /* 明显的圆角效果 */
  margin: auto auto; /* 在顶部和底部增加间距，并且居中对齐 */
  width: 98%; /* 标签平均分屏幕宽度的95% */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 给矩形框增加阴影效果 */
  z-index: 1000;
}

.menu {
  list-style: none;
  display: flex;
  width: 100%; /* 使ul标签宽度与父容器相同 */
  justify-content: space-between; /* 使标签平均分布 */
  padding: 0; /* 移除ul默认的内边距 */
  margin: -5px; /* 移除ul默认的外边距 */
  z-index: 1000;
}

.menu-item {
  flex-grow: 1; /* 确保标签平均分布空间 */
  text-align: center;
  padding: 5px 20px;
  color: #ffffff; /* 文本颜色 */
  background-color: transparent; /* 透明背景 */
  cursor: pointer; /* 鼠标移上去时的手势 */
  transition: all 0.3s ease-in-out; /* 平滑过渡效果 */
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 4px;
}
.menu-item-eg {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
}
.menu-item.active,
.menu-item:hover {
  border-radius: 15px; /* 悬停时增加圆角 */
  border: 1px solid #485174; /* 高亮边框颜色 */
  box-shadow: 0 0 8px #485174; /* 发光效果 */
}

.menu-item:not(.active) {
  border: 1px solid transparent; /* 非活跃标签没有边框 */
}

/* 分割标签 */
.menu-item {
  /* ... 其他样式 ... */
  position: relative; /* 为伪元素定位做准备 */
}

.menu-item:not(:last-child)::after {
  content: '|';
  position: absolute;
  color: #ffffff; /* 分隔符的颜色 */
  right: -2px; /* 放置在菜单项的最右边 */
  top: 50%; /* 垂直居中 */
  transform: translateY(-50%); /* 确保完全垂直居中 */
}
</style>
