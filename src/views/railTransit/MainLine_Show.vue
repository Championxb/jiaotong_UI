<template>
  <!-- dakuang -->
  <div class="main-container">
    <img
      class="allForm"
      :src="bckUrl.allFormShadow"
      @mousedown="handleMouseDown"
    />
    <!-- 上边列表 -->
    <div class="top-bar">
      <ul class="menu">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="menu-item"
          :class="{ active: index === tagIndex }"
          @click="selectMenuItem(index)"
        >
          {{ item.itemName }}<br />
          <span class="menu-item-eg">{{ item.translation }}</span>
        </li>
      </ul>
    </div>
    <!-- 下边图片框 -->
    <div class="center">
      <img
        class="show-item"
        :src="items[tagIndex].images[0]"
        @click="toggleFullScreen(items[tagIndex].images[0])"
      />
    </div>
    <!-- 返回按钮 -->
    <img
      class="back"
      :src="bckUrl.back"
      @click="closeComponent"
      @mousedown="handleMouseDown"
    />
    <!-- 全屏查看 -->
    <div
      v-if="isFullScreen"
      class="full-screen"
      @click="toggleFullScreen(null)"
    >
      <img class="full-screen-img" :src="fullScreenSrc" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineProps, defineEmits } from "vue";
// 获取父传过来的参数
const { items, currentItemIndex } = defineProps({
  items: Array,
  currentItemIndex: Number,
});
const tagIndex = ref(currentItemIndex);
//   const currentItem = ref(items.items[0]) // 默认选中第一个项
// 储存bck图片
const bckUrl = ref({
  allFormShadow: new URL(
    "../../assets/imgSort/background/allForm3.png",
    import.meta.url
  ).href,
  back: new URL("../../assets/imgSort/background/back2.png", import.meta.url)
    .href,
});
// 定义emit事件
const emit = defineEmits(["close"]);
// 定义全屏状态和当前显示的全屏图片的src
const isFullScreen = ref(false);
const fullScreenSrc = ref("");
// 定义关闭组件的函数
const closeComponent = () => {
  emit("close");
};
// 切换
const selectMenuItem = (index) => {
  tagIndex.value = index;
};
// 切换全屏状态的函数
const toggleFullScreen = (src) => {
  if (src) {
    fullScreenSrc.value = src;
    isFullScreen.value = true;
  } else {
    isFullScreen.value = false;
    fullScreenSrc.value = "";
  }
};

const handleMouseDown = (event) => {
  // 阻止默认的拖拽行为
  event.preventDefault();
};
</script>

<style lang="scss" scoped>
.main-container {
  position: absolute;
  top: 10%;
  left: 5%;
  right: 5%;
  bottom: 5%;
  z-index: 999;
  border-radius: 25px; /* 明显的圆角效果 */
  .center {
    position: absolute;
    height: 60%;
    width: 70%;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
    .show-item {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -45%);
      width: auto;
      height: 100%;
      border-radius: 15px; /* 悬停时增加圆角 */
      border: 1px solid #00bfff; /* 高亮边框颜色 */
      &:hover {
        top: 49%;
        left: 51%;
        box-shadow: 0 0 8px #00bfff; /* 发光效果 */
      }
    }
  }
}

.allForm {
  width: 100%;
  height: 100%;
}
.top-bar {
  position: absolute;
  top: 15%;
  left: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #22202e; /* 标签背景色 */
  padding: 5px;
  border-radius: 25px; /* 明显的圆角效果 */
  margin: auto auto; /* 在顶部和底部增加间距，并且居中对齐 */
  width: 80%; /* 标签平均分屏幕宽度的95% */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 给矩形框增加阴影效果 */
}

.menu {
  list-style: none;
  display: flex;
  width: 100%; /* 使ul标签宽度与父容器相同 */
  justify-content: space-between; /* 使标签平均分布 */
  padding: 0; /* 移除ul默认的内边距 */
  margin: 0; /* 移除ul默认的外边距 */
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
  font-size: 20px;
  .menu-item-eg {
    font-size: 13px;
  }
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

.back {
  position: absolute;
  width: 30px;
  height: 30px;
  right: 6%;
  top: 12%;
  cursor: pointer;
  &:hover {
    transform: translateY(-6px);
    width: 35px;
    height: 35px;
  }
}

.full-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.full-screen-img {
  height: 80%;
  max-width: 90%;
  max-height: 90%;
}
</style>
