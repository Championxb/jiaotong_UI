<template>
  <!-- dakuang -->
  <div class="main-container" v-if="safeDatas">
    <img
      class="allForm"
      :src="bckUrl.allFormShadow"
      @mousedown="handleMouseDown"
    />
    <!-- 下边图片框 -->
    <div class="center">
      <div class="show-item">
        <p class="title">{{ safeName }}</p>
        <img
          class="side-img"
          :src="props.imgs.imgUrl ? props.imgs.imgUrl[safeNowNum] : ''"
          @click="toggleFullScreen(props.imgs.imgUrl[safeNowNum])"
        />
        <div class="toggle">
          <span class="previous" @click="previousImage()"><<</span>
          <span class="num">{{ safeNowNum + 1 }}/{{ allNum }}</span>
          <span class="next" @click="nextImage()">>></span>
        </div>
      </div>
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
import { ref, computed, watchEffect } from "vue";
import { defineProps, defineEmits } from "vue";

// 获取父传过来的参数
const props = defineProps({
  imgs: Array,
  thirdMenu: Number,
});

const datas = ref(props.imgs || []);
const nowNum = ref(0);
watchEffect(() => {
  nowNum.value = 0;
});

const safeNowNum = computed(() => nowNum.value || 0);
const safeDatas = computed(() => (datas.value.length ? props.imgs.value : {}));
const safeName = computed(() => props.imgs.mathName || "0");
console.log(datas.value.imgUrl);
// 储存bck图片
const bckUrl = ref({
  allFormShadow: new URL(
    "../../assets/imgSort/background/allForm4.png",
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

// ------图片操作------
console.log(props.imgs);
const allNum = computed(() => {
  return safeDatas.value ? props.imgs.imgUrl.length : 0;
});

// 切换到前一张或后一张图片
function previousImage() {
  if (safeNowNum.value > 0) {
    nowNum.value--;
  }
}

function nextImage() {
  if (safeNowNum.value < allNum.value - 1) {
    nowNum.value++;
  }
}
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
  z-index: 1000;
  .center {
    position: absolute;
    height: 80%;
    width: 80%;
    left: 50%;
    top: 51%;
    transform: translate(-50%, -50%);
    .show-item {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      .title {
        font-size: 40px;
        line-height: 80px;
        font-weight: 700;
        text-shadow: 0 0 2px rgba(0, 191, 255, 0.8),
          0 0 2px rgba(0, 191, 255, 0.6), 0 0 30px rgba(0, 191, 255, 0.4);
      }
      .side-img {
        width: auto;
        height: 80%;
        border-radius: 10px;
        box-shadow: 0 0 10px #5ce9dd;
        cursor: pointer;
        &:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 8px #00bfff; /* 发光效果 */
        }
      }
      .toggle {
        height: 30px;
        width: 60%;
        display: flex;
        justify-content: space-around; /* 改为 space-between */
        align-items: flex-end;
        font-size: 20px;
        .num {
          font-weight: 0;
          font-size: 15px;
          position: relative;
          top: 3px;
          text-align: center;
        }
        .next,
        .previous {
          text-align: center;
          font-weight: 1000;
          font-size: 25px;
          cursor: pointer;
          &:hover {
            transform: translateY(-6px);
          }
        }
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
    font-size: 15px;
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
  max-width: 90%;
  max-height: 90%;
}
</style>
