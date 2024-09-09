<template>
  <!-- 底部分隔线组件 -->
  <div class="bottomBox">
    <div class="dashboard">
      <!-- 图例 -->
      <img class="legend" src="../../assets/imgSort/s3CityRail/legend.png"></img>
      <!-- 下侧面板 -->
      <div class="bottom-bar">
        <ul class="menu">
          <li
            v-for="(item, index) in menuList"
            :key="index"
            class="menu-item"
            @click="selectMenuItem(index)"
          >
            {{ item.itemName }}<br />
            <span class="menu-item-eg">{{ item.translation }}</span>
          </li>
        </ul>
      </div>
      <!-- 底部分隔线组件 -->
    </div>
  </div>
  <div v-if="showImgComponent" class="modal-mask" @click="handleClose"></div>
  <ImgShow
    v-if="showImgComponent"
    @close="handleClose"
    style="z-index:1000"
    :items="menuItems[currentItemIndex]"
    :pageIndex="sonTopage"
  />
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue'
import ImgShow from './ImgShow.vue'
import { CITYRAIL_IMG } from '@/utils/imgData/cityRail.js' // 导入imgData数据
// 受父
const props = defineProps({
  toPage: Number,
  click: Boolean
})
const sonTopage = ref(props.toPage);
const showImgComponent = ref(false)
// 基础资料
const menuList = [
  {
    itemName: '站点类型',
    translation: 'Site Type'
  },
  {
    itemName: '出行规律',
    translation: 'Travel Pattern'
  }
]
// 传给子的详细图片
const menuItems = CITYRAIL_IMG
// 点击显示弹窗
const currentItemIndex = ref(0)
const selectMenuItem = (index) => {
  currentItemIndex.value = index
  sonTopage.value = 0
  if (!showImgComponent.value) {
    showImgComponent.value = !showImgComponent.value
  }
}
const handleClose = () => {
  showImgComponent.value = false
}
watch(
  () => props.click,
  () => {
    sonTopage.value = props.toPage;
    currentItemIndex.value = 0;
    showImgComponent.value = true;
  }
)
</script>

<style lang="scss" scoped>

.bottomBox {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
}
.dashboard {
  display: flex;
  flex-direction: column;
  background-color: #000000dc; /* 主背景色 */
  height: 100px;
  z-index: 999;
  .legend {
    width: 350px;
    height: auto;
    position: absolute;
    right: 0;
    bottom: 100px;
  }
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
  z-index: 999;
}

.menu {
  list-style: none;
  display: flex;
  width: 100%; /* 使ul标签宽度与父容器相同 */
  justify-content: space-between; /* 使标签平均分布 */
  padding: 0; /* 移除ul默认的内边距 */
  margin: 0; /* 移除ul默认的外边距 */
  z-index: 999;
}

.menu-item {
  flex-grow: 1; /* 确保标签平均分布空间 */
  text-align: center;
  padding: 5px 20px;
  color: #ffffff; /* 文本颜色 */
  background-color: transparent; /* 透明背景 */
  cursor: pointer; /* 鼠标移上去时的手势 */
  transition: all 0.3s ease-in-out; /* 平滑过渡效果 */
  font-weight: 550;
  font-size: 28px;
  letter-spacing: 4px;
}
.menu-item-eg {
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1px;
}
.menu-item.active,
.menu-item:hover {
  border-radius: 15px; /* 悬停时增加圆角 */
  border: 1px solid #00bfff; /* 高亮边框颜色 */
  box-shadow: 0 0 8px #00bfff; /* 发光效果 */
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
/* 遮罩层样式 */
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* 比其他元素高，确保遮罩层覆盖整个页面 */
}


</style>
