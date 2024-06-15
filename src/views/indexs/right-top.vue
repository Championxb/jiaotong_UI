<!--
 * @Author: daidai
 * @Date: 2022-03-01 14:13:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-27 15:04:49
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\right-top.vue
-->
<template>
  <div class="box">
    <div class="content">
      <div class="content_left">
        <div class="content_left_item">
          <img src="../../assets/images/08轨道出行特征/轨道出行特征1.png" style="width: 250px;height: 120px;">
          <img src="../../assets/images/08轨道出行特征/轨道出行特征2.png" style="width: 250px;height: 120px;">
          <img src="../../assets/images/08轨道出行特征/轨道出行特征3.png" style="width: 240px;height: 120px; margin-top: 25px;">
          <!-- <div id="barChart_1" :style="{ width: '250px', height: '120px' }"></div> -->
          <!-- <div id="barChart_2" :style="{ width: '250px', height: '115px' }"></div> -->
          <!-- <div id="sankey" :style="{ width: '300px', height: '150px' }"></div> -->
        </div>
      </div>

      <div class="content_right">
        <div class="content_right_item">
          <img src="../../assets/images/08轨道出行特征/轨道出行特征4.png" style="width: 250px;height: 380px;">
          <!-- <div id="thermoChart" :style="{ width: '280px', height: '380px' }"></div> -->
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
import { nodes, links } from '../../assets/data/sankeyData.js'
onMounted(() => {
  // initBarChart_1()
  // initBarChart_2()
  // initSankeyChart()
  // initThermoChart()
  // console.log(nodes, links)
})
onBeforeUnmount(() => {
  // echarts.dispose(document.getElementById('barChart_1'))
  // echarts.dispose(document.getElementById('barChart_2'))
  // echarts.dispose(document.getElementById('sankey'))
  // echarts.dispose(document.getElementById('thermoChart'))

})
const initBarChart_1 = () => {
  var chartDom = document.getElementById('barChart_1');
  var myChart = echarts.init(chartDom);

  const rawData = [
    [100, 302, 301, 334, 390, 330, 320],
    [320, 132, 101, 134, 90, 230, 210],
    [220, 182, 191, 234, 290, 330, 310],
    [150, 212, 201, 154, 190, 330, 410],
    [820, 832, 901, 934, 1290, 1330, 1320]
  ];
  const totalData = [];
  for (let i = 0; i < rawData[0].length; ++i) {
    let sum = 0;
    for (let j = 0; j < rawData.length; ++j) {
      sum += rawData[j][i];
    }
    totalData.push(sum);
  }
  const grid = {
    left: 15,
    right: 30,
    top: 20,
    bottom: 45
  };
  const series = [
    'Direct',
    'Mail Ad',
    'Affiliate Ad',
    'Video Ad',
    'Search Engine'
  ].map((name, sid) => {
    return {
      name,
      type: 'bar',
      stack: 'total',
      barWidth: '50%',
      label: {
        // show: true,
        formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
      },
      data: rawData[sid].map((d, did) =>
        totalData[did] <= 0 ? 0 : d / totalData[did]
      )
    };
  });
  const option = {
    title: {
      text: '出行距离分布图',
      x: '40',
      y: '5',
      textStyle: {
        color: '#e3e7e9',
        fontWeight: 600,
        fontSize: 12,
        lineHeight: 2,
        fontFamily: 'Microsoft Yahei'
      }
    },
    legend: {
      show: true,
      orient: "horizontal",
      selectedMode: true,
      x: '-5',      //可设定图例在左、右、居中
      y: '90',     //可设定图例在上、下、居中
      icon: "circle", // 修改形状
      itemHeight: 6,
      textStyle: {
        fontSize: 6,
        color: "#e3e7e9",
        padding: [0, 0, 0, -10], // 修改文字和图标距离
      },
    },
    grid,
    yAxis: {
      type: 'category'
    },
    xAxis: {
      type: 'value',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series
  };
  myChart.setOption(option);
}

const initBarChart_2 = () => {
  var chartDom = document.getElementById('barChart_2');
  var myChart = echarts.init(chartDom);

  const rawData = [
    [100, 302, 301, 334, 390, 330, 320],
    [320, 132, 101, 134, 90, 230, 210],
    [220, 182, 191, 234, 290, 330, 310],
    [150, 212, 201, 154, 190, 330, 410],
    [820, 832, 901, 934, 1290, 1330, 1320]
  ];
  const totalData = [];
  for (let i = 0; i < rawData[0].length; ++i) {
    let sum = 0;
    for (let j = 0; j < rawData.length; ++j) {
      sum += rawData[j][i];
    }
    totalData.push(sum);
  }
  const grid = {
    left: 15,
    right: 30,
    top: 16,
    bottom: 40
  };
  const series = [
    'Direct',
    'Mail Ad',
    'Affiliate Ad',
    'Video Ad',
    'Search Engine'
  ].map((name, sid) => {
    return {
      name,
      type: 'bar',
      stack: 'total',
      barWidth: '50%',
      label: {
        // show: true,
        formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
      },
      data: rawData[sid].map((d, did) =>
        totalData[did] <= 0 ? 0 : d / totalData[did]
      )
    };
  });
  const option = {
    title: {
      text: '出行时间分布图',
      x: '40',
      y: '2',
      textStyle: {
        color: '#e3e7e9',
        fontWeight: 600,
        fontSize: 12,
        lineHeight: 2,
        fontFamily: 'Microsoft Yahei'
      }
    },
    legend: {
      show: true,
      orient: "horizontal",
      selectedMode: true,
      x: '-5',      //可设定图例在左、右、居中
      y: '90',     //可设定图例在上、下、居中
      icon: "circle", // 修改形状
      itemHeight: 6,
      textStyle: {
        fontSize: 6,
        color: "#e3e7e9",
        padding: [0, 0, 0, -10], // 修改文字和图标距离
      },
    },
    grid,
    yAxis: {
      type: 'category'
    },
    xAxis: {
      type: 'value',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series
  };
  myChart.setOption(option);
}
const initSankeyChart = () => {
  var chartDom = document.getElementById('sankey');
  var myChart = echarts.init(chartDom);
  // axios.get('/public/dataSankey.json').then(res => {
  // let data = res.data.nodes
  // let links = res.data.links


  const option = {
    title: {
      text: '桑基图',
      x: '80',
      y: '',
      textStyle: {
        color: '#e3e7e9',
        fontWeight: 600,
        fontSize: 10,
        lineHeight: 2,
        fontFamily: 'Microsoft Yahei'
      }
    },

    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    grid: {
      left: -10,
      right: 0,
      top: 100,
      bottom: 0
    },
    series: [
      {
        type: 'sankey',
        data: nodes,
        links: links,
        emphasis: {
          focus: 'adjacency'
        },
        lineStyle: {
          color: 'gradient',
          curveness: 0.5
        },
        label: {
          show: false,
        }
      }
    ]
  }
  myChart.setOption(option);
  // })

}
const initThermoChart = () => {
  var chartDom = document.getElementById('thermoChart');
  var myChart = echarts.init(chartDom);
  const dataAll = [
    [
      [10.0, 8.04],
      [8.0, 6.95],
      [13.0, 7.58],
      [9.0, 8.81],
      [11.0, 8.33],
      [14.0, 9.96],
      [6.0, 7.24],
      [4.0, 4.26],
      [12.0, 10.84],
      [7.0, 4.82],
      [5.0, 5.68]
    ],
    [
      [10.0, 9.14],
      [8.0, 8.14],
      [13.0, 8.74],
      [9.0, 8.77],
      [11.0, 9.26],
      [14.0, 8.1],
      [6.0, 6.13],
      [4.0, 3.1],
      [12.0, 9.13],
      [7.0, 7.26],
      [5.0, 4.74]
    ],
    [
      [10.0, 7.46],
      [8.0, 6.77],
      [13.0, 12.74],
      [9.0, 7.11],
      [11.0, 7.81],
      [14.0, 8.84],
      [6.0, 6.08],
      [4.0, 5.39],
      [12.0, 8.15],
      [7.0, 6.42],
      [5.0, 5.73]
    ],
    [
      [8.0, 6.58],
      [8.0, 5.76],
      [8.0, 7.71],
      [8.0, 8.84],
      [8.0, 8.47],
      [8.0, 7.04],
      [8.0, 5.25],
      [19.0, 12.5],
      [8.0, 5.56],
      [8.0, 7.91],
      [8.0, 6.89]
    ]
  ];
  const markLineOpt = {
    animation: false,
    label: {
      // formatter: 'y = 0.5 * x + 3',
      align: 'right'
    },
    lineStyle: {
      type: 'solid'
    },
    tooltip: {
      // formatter: 'y = 0.5 * x + 3'
    },
    data: [
      [
        {
          coord: [0, 3],
          symbol: 'none'
        },
        {
          coord: [20, 13],
          symbol: 'none'
        }
      ]
    ]
  };
  const option = {
    title: {
      // text: "Anscombe's quartet",
      left: 'center',
      top: 0
    },
    grid: [
      { left: '2%', top: '7%', width: '38%', height: '38%' },
      { right: '15%', top: '7%', width: '38%', height: '38%' },
      { left: '2%', bottom: '5%', width: '38%', height: '38%' },
      { right: '15%', bottom: '5%', width: '38%', height: '38%' }
    ],
    tooltip: {
      formatter: 'Group {a}: ({c})'
    },
    xAxis: [
      { gridIndex: 0, min: 0, max: 20 },
      { gridIndex: 1, min: 0, max: 20 },
      { gridIndex: 2, min: 0, max: 20 },
      { gridIndex: 3, min: 0, max: 20 },

    ],
    yAxis: [
      { gridIndex: 0, min: 0, max: 15, axisLabel: { show: false } },
      { gridIndex: 1, min: 0, max: 15, axisLabel: { show: false } },
      { gridIndex: 2, min: 0, max: 15, axisLabel: { show: false } },
      { gridIndex: 3, min: 0, max: 15, axisLabel: { show: false } }
    ],
    series: [
      {
        name: 'I',
        type: 'scatter',
        xAxisIndex: 0,
        yAxisIndex: 0,
        data: dataAll[0],
        markLine: markLineOpt
      },
      {
        name: 'II',
        type: 'scatter',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: dataAll[1],
        markLine: markLineOpt
      },
      {
        name: 'III',
        type: 'scatter',
        xAxisIndex: 2,
        yAxisIndex: 2,
        data: dataAll[2],
        markLine: markLineOpt
      },
      {
        name: 'IV',
        type: 'scatter',
        xAxisIndex: 3,
        yAxisIndex: 3,
        data: dataAll[3],
        markLine: markLineOpt
      }
    ]
  };
  myChart.setOption(option);
}
</script>
<style lang='scss' scoped>
.box {
  box-sizing: border-box;

  .content {
    position: relative;
    display: flex;
    justify-content: space-between;
    // height: 100%;
    padding: 2px 8px 0 8px;

    .content_left {
      width: 50%;
      // height: 560px;

      .content_left_item {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }

      #barChart_1 {
        height: 200px;
      }

      #barChart_2 {
        height: 200px;
      }

      #sankey {
        position: relative;
        left: -15px
      }
    }

    .content_right {
      width: 50%;
      // height: 560px;
    }
  }

}
</style>