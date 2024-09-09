<!--
 * @Author: daidai
 * @Date: 2022-03-01 09:43:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-09 11:40:22
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\left-bottom.vue
-->
<template>
   <router-link to="/cityRail">
    <div class="box">
      <div class="content">
        <div class="content_left">
          <!-- <div class="LineChart" id="LineChart" :style="{ width: '200px', height: '90px' }">
          </div>
          <div class="ScatterChart" id="ScatterChart" :style="{ width: '200px', height: '100px' }">
          </div> -->
          <img src="../../assets/images/03关键要素解析/关键要素1.png" style="width: 180px;height: 140px;">

        </div>

        <div class="content_right">
          <!-- 图片 -->
          <img src="../../assets/images/03关键要素解析/关键要素2.png" style="width: 220px;height: 170px;">
        </div>
      </div>
    </div>
</router-link>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
onMounted(() => {
  // initLineChart()
  // initScatterChart()
})
onBeforeUnmount(() => {
  // echarts.dispose(document.getElementById('LineChart'))
  // echarts.dispose(document.getElementById('ScatterChart'))
})
const initLineChart = () => {
  var chartDom = document.getElementById('LineChart');
  var myChart = echarts.init(chartDom);
  const data = [
    ["1", 116], ["2", 129], ["3", 135], ["4", 86], ["5", 73],
    ["6", 85], ["7", 73], ["8", 68], ["9", 92], ["10", 130]
  ];
  const dateList = data.map(function (item) {
    return item[0];
  });
  const valueList = data.map(function (item) {
    return item[1];
  });
  const option = {
    // Make gradient line here
    visualMap: [
      {
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 400
      },
    ],

    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      data: dateList,
    },


    yAxis: {
      splitLine: {
        show: true
      },
      axisLine: {
        show: false
      },
    },

    grid: {
      left: 30,
      right: 10,
      top: 0,
      bottom: 30
    },

    series: [
      {
        type: 'line',
        showSymbol: false,
        data: valueList
      },
    ]
  };
  myChart.setOption(option);

}

const initScatterChart = () => {

  var chartDom = document.getElementById('ScatterChart');
  var myChart = echarts.init(chartDom);
  const option = {
    xAxis: {
      scale: true,
      splitLine: {
        show: false
      },
    },
    yAxis: {
      scale: true,
      splitLine: {
        show: false
      },
    },

    grid: {
      left: 30,
      right: 10,
      top: 2,
      bottom: 36
    },
    series: [
      {
        type: 'effectScatter',
        symbolSize: 20,
        data: [
          [172.7, 61.1],
          [153.4, 42]
        ]
      },
      {
        type: 'scatter',
        // prettier-ignore
        data: [
          [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
          [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
          [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
          [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
          [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
          [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
          [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
          [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
          [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
          [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
          [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
          [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
          [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
          [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
          [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
          [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
          [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
          [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
        ]
      }
    ]
  }
  myChart.setOption(option);
};
</script>
<style lang='scss' scoped>
.box {
  box-sizing: border-box;

  .content {
    display: flex;
    justify-content: space-around;
    // height: 100%;
    padding: 2px 10px 0 15px;

    .content_left {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      img {
        position: relative;
        left: -10px;
      }

      .LineChart {
        height: 100px;
      }

      .ScatterChart {
        height: 100px;
      }
    }
  }
}
</style>