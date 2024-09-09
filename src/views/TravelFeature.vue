<template>
  <ScaleScreen :width="1920" :height="1080">
    <div class="box">
      <Header :isFirstPage="true"></Header>
      <div class="container">
        <!-- 左侧 -->
        <div class="left-box">
          <div class="left-top">
            <div
              v-for="(item, index) in mainData"
              :key="index"
              class="station"
              :class="{ active: index === currentIndex }"
              @click="toggleItem(index)"
            >
              <span class="station-text">{{ item.stationName }}</span>
            </div>
          </div>
          <div class="left-bottom">
            <div class="main-box">
              <img
                class="main-img"
                :src="currentItem.travelImg"
                @click="toggleFullScreen(currentItem.travelImg)"
              />
              <span class="main-title">站点全程出行链可视化</span>
            </div>
          </div>
        </div>
        <!-- 右侧 -->
        <div class="right-box">
          <div class="right-top">
            <div class="top-form">
              <span class="top-title">站点客流分布及路径</span>
              <img
                class="top-img"
                :src="currentImageSrc"
                @click="toggleFullScreen(currentImageSrc)"
              />
              <div class="toggle">
                <span class="previous" @click="toggleTwo()"><<</span>
                <span class="num">{{ nowNum }}/ 2 </span>
                <span class="next" @click="toggleTwo()">>></span>
              </div>
            </div>
          </div>
          <div class="right-bottom">
            <div class="bottom-form">
              <div class="to-box" @click="goToWebsite1">
                <span class="to-name"> 出行链在线生成1 </span>
              </div>
              <div class="to-box" @click="goToWebsite2">
                <span class="to-name"> 出行链在线生成2 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 全屏查看 -->
    <div
      v-if="isFullScreen"
      class="full-screen"
      @click="toggleFullScreen(null)"
    >
      <img class="full-screen-img" :src="fullScreenSrc" />
    </div>
  </ScaleScreen>
</template>

<script setup>
import ScaleScreen from "@/components/scale-screen/scale-screen.vue";
import Header from "@/components/header.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { TRAVEL_IMG } from "@/utils/imgData/travel.js";
const nowNum = ref(1);
const currentIndex = ref(0);
const currentItem = ref({});
const mainData = ref(TRAVEL_IMG);
currentItem.value = mainData.value[currentIndex.value];
const goToWebsite1 = () => {
  window.location.href =
    "https://dycharts.com/appv2/#/pages/home/index?dypos=navi-logo";
};
const goToWebsite2 = () => {
  window.location.href = "https://www.lddgo.net/chart/sankey-chart";
};
const toggleItem = (index) => {
  currentIndex.value = index;
  currentItem.value = mainData.value[index];
  currentImageSrc.value = currentItem.value.coreImg;
  nowNum.value = 1;
};
// 定义全屏状态和当前显示的全屏图片的src
const isFullScreen = ref(false);
const fullScreenSrc = ref("");
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
// 定义当前图片的src
const currentImageSrc = ref(currentItem.value.lineImg);
// 定义一个变量用于存储定时器ID
let intervalId;

// 每3秒切换一次图片
const switchImage = () => {
  if (currentImageSrc.value === currentItem.value.lineImg) {
    currentImageSrc.value = currentItem.value.coreImg;
    nowNum.value = 1;
  } else {
    currentImageSrc.value = currentItem.value.lineImg;
    nowNum.value = 2;
  }
};
// 切换到前一张或后一张图片
function toggleTwo() {
  if (currentImageSrc.value === currentItem.value.lineImg) {
    currentImageSrc.value = currentItem.value.coreImg;
    nowNum.value = 1;
  } else {
    currentImageSrc.value = currentItem.value.lineImg;
    nowNum.value = 2;
  }
}

// 设置定时器
onMounted(() => {
  intervalId = setInterval(switchImage, 5000);
});

// 清除定时器
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background-image: url("../assets/imgSort/background/travel-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.container {
  height: 92%;
  display: flex;
  justify-content: space-around;
  position: relative;
  .left-box {
    width: 1190px;
    height: 100%;
    position: relative;

    .left-top {
      position: relative;
      width: 80%;
      left: 10%;
      height: 250px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      .station {
        position: relative;
        width: 250px;
        height: 85px;
        background-image: url("../assets/imgSort/background/stationForm6-default.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        .station-text {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          font-size: 28px;
          font-weight: 550;
          color: aliceblue;
        }
        &:hover {
          position: relative;
          scale: 1.4;
          width: 250px;
          height: 100px;
          background-image: url("../assets/imgSort/background/stationForm6-active.png");
          background-size: 100% 100%;
          .station-text {
            font-size: 25px;
          }
        }
      }
      .active {
        position: relative;
        scale: 1.4;
        width: 250px;
        height: 100px;
        background-image: url("../assets/imgSort/background/stationForm6-active.png");
        background-size: 100% 100%;
        .station-text {
          font-size: 25px;
        }
      }
    }
    .left-bottom {
      position: relative;
      top: 2%;
      width: 96%;
      left: 2%;
      height: 700px;
      background-image: url("../assets/imgSort/background/allForm6.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .main-box {
        position: absolute;
        height: 85%;
        width: 87%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .main-img {
          width: 100%;
          max-width: 100%;
          max-height: 100%;
          border-radius: 10px;
          cursor: pointer;
          box-shadow: 0 0 10px #00bfff; /* 发光效果 */
          &:hover {
            transform: translateY(-6px);
          }
        }
        .main-title {
          position: absolute;
          font-size: 40px;
          top: -70px;
          color: white;
          font-weight: 700;
          text-shadow: 0 0 2px rgba(0, 191, 255, 0.8),
            0 0 2px rgba(0, 191, 255, 0.6), 0 0 30px rgba(0, 191, 255, 0.4);
        }
      }
    }
  }
  .right-box {
    position: relative;
    width: 730px;
    height: 100%;
    .right-top {
      position: relative;
      width: 100%;
      height: 580px;
      display: flex;
      justify-content: center;
      align-items: center;
      .top-form {
        width: 90%;
        height: 100%;
        background-image: url("../assets/imgSort/background/topForm6.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .top-img {
          width: auto;
          height: 60%;
          cursor: pointer;
          box-shadow: 0 0 20px #00bfff; /* 发光效果 */
          border-radius: 10px;
          &:hover {
            transform: translateY(-6px);
          }
        }
        .top-title {
          font-size: 35px;
          line-height: 60px;
          color: white;
          font-weight: 700;
          text-shadow: 0 0 2px rgba(0, 191, 255, 0.8),
            0 0 2px rgba(0, 191, 255, 0.6), 0 0 30px rgba(0, 191, 255, 0.4);
        }
        .toggle {
          height: 40px;
          width: 60%;
          display: flex;
          justify-content: space-around; /* 改为 space-between */
          align-items: flex-end;
          font-size: 20px;
          color: aliceblue;
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
    .right-bottom {
      position: relative;
      left: 5%;
      width: 90%;
      height: 380px;
      background-image: url("../assets/imgSort/background/bottomForm6.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .bottom-form {
        width: 90%;
        height: 92%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .to-box {
          margin: 30px;
          width: 400px;
          height: 70px;
          background-image: url("../assets/imgSort/background/to.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          position: relative;
          cursor: pointer;
          &:hover {
            transform: translateY(-6px);
          }
          .to-name {
            position: absolute;
            left: 10%;
            top: 50%;
            transform: translateY(-50%);
            font-size: 23px;
            color: white;
          }
        }
      }
    }
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
  width: 70%;
  max-width: 90%;
  max-height: 90%;
}
</style>
