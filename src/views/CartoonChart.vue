<template>
  <ScaleScreen :width="1920" :height="1080">
    <div class="box">
      <Header :isFirstPage="true"></Header>
      <div class="content">
        <div class="content_left"></div>
        <div class="content_right">
          <div class="top"></div>
          <div class="bottom">
            <v-chart :option="option" autoresize></v-chart>
            <div class="typeName">{{ typeName[currentIndex] }}</div>
          </div>
        </div>
      </div>
    </div>
  </ScaleScreen>
</template>
<script setup>
import ScaleScreen from "@/components/scale-screen/scale-screen.vue";
import Header from "@/components/header.vue";
import { ref, onMounted, onUnmounted } from "vue";
const data = {
  metro: {
    minDist: [1000, 600],
    maxDist: [1400, 1300],
    minTime: [23, 16],
    maxTime: [29, 27.5],
  },
  taxi: {
    minDist: [600, 550],
    maxDist: [900, 750],
    minTime: [16, 15.5],
    maxTime: [21, 18.5],
  },
  car: {
    minDist: [600, 550],
    maxDist: [800, 750],
    minTime: [16, 15.5],
    maxTime: [19.5, 18.5],
  },
  bus: {
    minDist: [900, 550],
    maxDist: [1200, 950],
    minTime: [21, 15.5],
    maxTime: [26, 22],
  },

  longDistBus: {
    minDist: [1000, 550],
    maxDist: [1600, 950],
    minTime: [23, 15.5],
    maxTime: [33, 22],
  },
};
let currentIndex = 0;
const type = ["metro", "taxi", "car", "bus", "longDistBus"];
const typeName = ref([
  "地铁换乘",
  "出租车、网约车换乘",
  "小汽车换乘",
  "公交车换乘",
  "长途巴士换乘",
]);
let current = ref(data[type[currentIndex]]);
let progress1 = 0; // 第一条线的进度
let progress2 = 0; // 第二条线的进度

function changeDataReveal() {
  currentIndex++;
  if (currentIndex >= type.length) {
    currentIndex = 0;
  }
  current.value = data[type[currentIndex]];
  // option.value.xAxis.data = [
  //   current.minDist[0],
  //   current.maxDist[0],
  //   current.minDist[1],
  //   current.maxDist[1],
  // ];
  // option.value.series[0].data = [
  //   { value: [0, current["minTime"][0]] },
  //   { value: [1, current["maxTime"][0]] },
  // ];
  // option.value.series[1].data = [
  //   { value: [2, current["minTime"][1]] },
  //   { value: [3, current["maxTime"][1]] },
  // ];

  // 重置光点进度
  progress1 = 0;
  progress2 = 0;
  lightPoint1X.value = current.value.minDist[0];
  lightPoint1Y.value = current.value.minTime[0];
  lightPoint2X.value = current.value.minDist[1];
  lightPoint2Y.value = current.value.minTime[1];
}
const timer = setInterval(() => {
  changeDataReveal();
}, 1000 * 5);
const lightPoint1X = ref(0),
  lightPoint1Y = ref(0),
  lightPoint2X = ref(0),
  lightPoint2Y = ref(0);
const changeProgress = () => {
  // 更新第一条线的进度
  progress1 += 0.02; // 每次移动的步长
  // 第一条线的光点动态位置计算
  const x1Start = current.value.minDist[0];
  const x1End = current.value.maxDist[0];
  const y1Start = current.value.minTime[0];
  const y1End = current.value.maxTime[0];
  lightPoint1X.value = x1Start + progress1 * (x1End - x1Start);
  lightPoint1Y.value = y1Start + progress1 * (y1End - y1Start);
  if (progress1 > 1) {
    progress1 = 0;
  }

  // 更新第二条线的进度
  progress2 += 0.02;
  // 第二条线的光点动态位置计算
  const x2Start = current.value.minDist[1];
  const x2End = current.value.maxDist[1];
  const y2Start = current.value.minTime[1];
  const y2End = current.value.maxTime[1];
  lightPoint2X.value = x2Start + progress2 * (x2End - x2Start);
  lightPoint2Y.value = y2Start + progress2 * (y2End - y2Start);
  if (progress2 > 1) {
    progress2 = 0;
  }
};
/// 定时器用于更新光点位置
const pointTimer = setInterval(() => {
  changeProgress();
}, 100); // 每 100 毫秒更新一次位置

const colors = ["#1982C4 ", "#7b1fa2"];
const option = computed(() => ({
  tooltip: {
    trigger: "axis",
  },

  xAxis: {
    type: "value",
    name: "米",
    nameTextStyle: {
      fontSize: 20,
    },
    boundaryGap: false,
    // data: [
    //   current.value.minDist[0],
    //   current.value.maxDist[0],
    //   current.value.minDist[1],
    //   current.value.maxDist[1],
    // ],
    min: Math.min(current.value.minDist[0], current.value.minDist[1]), // 根据数据计算最小值
    max: Math.max(current.value.maxDist[0], current.value.maxDist[1]), // 根据数据计算最大值
    axisLine: {
      show: true,
      lineStyle: {
        color: "#fff",
      },
    },
    splitLine: {
      show: false,
    },
    axisLabel: {
      fontSize: 20,
    },
  },
  yAxis: {
    type: "value",
    name: "进站时间范围 (分钟)",
    nameTextStyle: {
      fontSize: 20,
    },
    nameLocation: "end",
    axisLabel: {
      formatter: "{value}",
      fontSize: 12,
    },
    min: 0,
    max: 36,
    interval: 4,
    splitLine: {
      show: false,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "#fff",
      },
    },
    axisLabel: {
      fontSize: 20,
    },
  },
  series: [
    {
      type: "line",
      showSymbol: false,
      // data: [
      //   { value: [0, current.value["minTime"][0]] },
      //   { value: [1, current.value["maxTime"][0]] },
      // ],
      data: [
        [current.value.minDist[0], current.value.minTime[0]],
        [current.value.maxDist[0], current.value.maxTime[0]],
      ],
      lineStyle: {
        color: colors[0],
        width: 3,
      },
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: colors[0], // 顶部颜色
            },
            {
              offset: 0.6,
              color: "#64b5f6", // 底部颜色
            },
          ],
          global: false, // 缺省为 false
        },
        opacity: 0.5, // 填充区域的透明度，可以根据需要调整
      },
    },
    {
      type: "line",
      showSymbol: false,
      lineStyle: {
        color: colors[1],
        width: 3,
      },
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: colors[1], // 顶部颜色
            },
            {
              offset: 0.6,
              color: "#9c27b0", // 底部颜色
            },
          ],
          global: false,
        },
        opacity: 0.5, // 填充区域的透明度，可以根据需要调整
      },
      // data: [
      //   { value: [2, current.value["minTime"][1]] },
      //   { value: [3, current.value["maxTime"][1]] },
      // ],
      data: [
        [current.value.minDist[1], current.value.minTime[1]],
        [current.value.maxDist[1], current.value.maxTime[1]],
      ],
    },
    // 第一条线的动态光点
    {
      type: "scatter",
      data: [[lightPoint1X.value, lightPoint1Y.value]], // 动态位置
      symbol: "circle",
      symbolSize: 20,
      animation: false,
      itemStyle: {
        color: "#FFD700", // 光点颜色
      },
    },
    // 第二条线的动态光点
    {
      type: "scatter",
      data: [[lightPoint2X.value, lightPoint2Y.value]], // 动态位置
      symbol: "circle",
      symbolSize: 20,
      animation: false,
      itemStyle: {
        color: "#FFD700", // 光点颜色
      },
    },
  ],
}));

onMounted(() => {
  changeDataReveal();
  changeProgress();
});
onUnmounted(() => {
  clearInterval(timer);
  clearInterval(pointTimer);
});
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background-image: url("../assets/imgSort/background/updateWay-background.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .content {
    color: rgb(255, 255, 255);
    width: 100%;
    height: calc(100% - 85px);
    display: flex;
    justify-content: center;
    align-items: center;

    .content_left {
      margin-right: 50px;
      width: 65%;
      height: 88%;
      background-image: url("../assets/fisrtPageStationRightForm.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }

    .content_right {
      width: 30%;
      height: 88%;
      //   margin-right: 150px;
      background-image: url("../assets/rightForm.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .top {
        width: 80%;
        height: 40%;
        margin-top: 60px;
        // background: #000;
        // 水平旋转
        transform: perspective(500px) rotateX(0deg) rotateY(-10deg);
      }
      .bottom {
        width: 80%;
        height: 40%;
        margin-right: 40px;
        transform: perspective(500px) rotateX(0deg) rotateY(-10deg);

        .typeName {
          color: aliceblue;
          font-size: 20px;
          text-align: center;
          margin-top: -30px;
        }
      }
    }
  }
}
</style>
