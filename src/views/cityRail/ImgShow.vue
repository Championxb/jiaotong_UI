<template>
  <!-- dakuang -->
  <div class="main-container">
    <img class="allForm" :src="bckUrl.allFormShadow" @mousedown="handleMouseDown"/>
    <!-- 上边列表 -->
    <div class="top-bar">
      <ul class="menu">
        <li
          v-for="(item, index) in props.items.items"
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
    <div class="left" :style="leftStyle">
      <img v-if="showBottomImg" class="bottom-img" :src="bckUrl.leftForm" @mousedown="handleMouseDown"/>
      <img
        class="show-item"
        :src="leftImage"
        @click="toggleFullScreen(leftImage)"
      />
    </div>
    <div v-if="!isLastImage" class="right">
      <img class="bottom-img" :src="bckUrl.rightForm" @mousedown="handleMouseDown"/>
      <img
        class="show-item"
        :src="rightImage"
        @click="toggleFullScreen(rightImage)"
      />
    </div>
    <!-- 文 -->
    <span class="des"> {{ currentItem.des }}</span>
    <!-- 切 -->
    <img
      v-if="showPreviousButton"
      class="previous"
      :src="bckUrl.previous"
      @click="previousImage"
      @mousedown="handleMouseDown"
    />
    <img
      v-if="showNextButton"
      class="next"
      :src="bckUrl.next"
      @click="nextImage"
      @mousedown="handleMouseDown"
    />
    <img class="back" :src="bckUrl.back" @click="closeComponent" @mousedown="handleMouseDown"/>
   
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
import { ref, computed, watch } from 'vue'
import { defineProps, defineEmits } from 'vue'
// 获取父传过来的参数
const props = defineProps({
  pageIndex: Number,
  items: Object
})
const tagIndex = ref(props.pageIndex)
const currentItem = ref(props.items.items[props.pageIndex]) // 默认选中第一个项
// 储存bck图片
const bckUrl = ref( 
    {
      allFormShadow: new URL('../../assets/imgSort/background/allForm-shadow.png', import.meta.url).href,
      leftForm: new URL('../../assets/imgSort/background/leftForm.png', import.meta.url).href,
      rightForm: new URL('../../assets/imgSort/background/rightForm.png', import.meta.url).href,
      previous: new URL('../../assets/imgSort/background/previous.png', import.meta.url).href,
      next: new URL('../../assets/imgSort/background/next.png', import.meta.url).href,
      back: new URL('../../assets/imgSort/background/back.png', import.meta.url).href
    },
)
// 定义emit事件
const emit = defineEmits(['close'])
// 定义全屏状态和当前显示的全屏图片的src
const isFullScreen = ref(false)
const fullScreenSrc = ref('')
// 定义关闭组件的函数
const closeComponent = () => {
  emit('close')
}
// 切换
const selectMenuItem = (index) => {
  tagIndex.value = index
  currentItem.value = props.items.items[tagIndex.value]

  images.value = props.items.items[tagIndex.value].images
  currentImgIndex.value = 0
}
// 切换全屏状态的函数
const toggleFullScreen = (src) => {
  if (src) {
    fullScreenSrc.value = src
    isFullScreen.value = true
  } else {
    isFullScreen.value = false
    fullScreenSrc.value = ''
  }
}

// 定义图片列表和当前图片索引
let images = ref([])
images.value = props.items.items[tagIndex.value].images || []
const currentImgIndex = ref(0)
// 计算左侧和右侧当前显示的图片
const leftImage = computed(() => images.value[currentImgIndex.value])
const rightImage = computed(() => images.value[currentImgIndex.value + 1])

// 控制右侧图片是否显示
const isLastImage = computed(
  () =>
    images.value.length % 2 !== 0 &&
    currentImgIndex.value + 2 >= images.value.length
)
// 控制 previous 和 next 按钮的显示
const showPreviousButton = computed(() => currentImgIndex.value > 0)
const showNextButton = computed(
  () => currentImgIndex.value + 2 < images.value.length
)

// 切换到下一张图片的函数
const nextImage = () => {
  if (currentImgIndex.value < images.value.length - 1) {
    currentImgIndex.value = currentImgIndex.value + 2
  }
}

// 切换到上一张图片的函数
const previousImage = () => {
  if (currentImgIndex.value > 0) {
    currentImgIndex.value = currentImgIndex.value - 2
  }
}
const handleMouseDown = (event) => {
  // 阻止默认的拖拽行为
  event.preventDefault();
}
// ----------实现单张图片特殊样式
// 定义 left 样式和控制 .bottom-img 的显示
const leftStyle = ref({
  position: 'absolute',
  top: '20%',
  left: '10%',
  width: '40%',
  height: '50%'
})
const showBottomImg = ref(true)

// 监听 images 的变化
watch(images, (newVal) => {
  if (newVal.length === 1) {
    // 如果 images 长度为1，更新 leftStyle 和隐藏 .bottom-img
    leftStyle.value = {
      position: 'absolute',
      top: '45%',
      left: '50%',
      width: '60%',
      height: '70%',
      transform: 'translate(-50%, -50%)'
    }
    showBottomImg.value = false
  } else {
    leftStyle.value = {
      position: 'absolute',
      top: '20%',
      left: '10%',
      width: '40%',
      height: '50%'
    }
    showBottomImg.value = true
  }
}, { immediate: true })



</script>

<style lang="scss" scoped>
  .main-container {
    position: absolute;
    top: 10%;
    left: 5%;
    right: 5%;
    bottom: 5%;
    background-color: #171721;
    z-index: 999;
    border-radius: 25px; /* 明显的圆角效果 */
    .show-item {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -45%);
      width: auto;
      height: 70%;
      border-radius: 15px; /* 悬停时增加圆角 */
      border: 1px solid #00bfff; /* 高亮边框颜色 */
    }
    .show-item:hover {
      top: 49%;
      left: 51%;
      box-shadow: 0 0 8px #00bfff; /* 发光效果 */
    }
    .left {
      position: absolute;
      top: 20%;
      left: 10%;
      width: 40%;
      height: 50%;
    }
    .right {
      position: absolute;
      top: 20%;
      left: 52.5%;
      width: 40%;
      height: 50%;
    }
    .des{
      position: absolute;
      top:75%;
      bottom: 10%;
      left: 10%;
      right: 10%;
      font-size: 20px;
      letter-spacing: 1.5px;
      line-height: 24px;
      z-index: 999;
      color: white;
      white-space: pre-line; // 回车
      overflow: auto;
    }
  }

  .allForm {
    width: 100%;
    height: 100%;
  }
  .top-bar {
    position: absolute;
    top: 10%;
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
    z-index: 999;
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


  .bottom-img {
    width: 100%;
    height: 100%;
  }
  .previous {
    position: absolute;
    left: 5%;
    top: 50%;
    cursor: pointer;
  }
  .next {
    position: absolute;
    right: 5%;
    top: 50%;
    cursor: pointer;
  }
  .previous:hover {
    top: 49%;
  }
  .next:hover {
    top: 49%;
  }
  .back {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 5%;
    top: 12%;
    cursor: pointer;
  }
  .back:hover {
    top: 11%;
    width: 35px;
    height: 35px;
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
    width: 60%;
    max-width: 90%;
    max-height: 100%;
  }
</style>
