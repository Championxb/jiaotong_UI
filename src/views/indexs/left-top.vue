<!--
 * @Author: daidai
 * @Date: 2022-02-28 16:16:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-20 17:57:11
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\left-center.vue
-->
<template>
    <router-link to="/railTransit">
        <div class="box">
            <div class="content">
                <div class="content_left">
                    <img src="../../assets/images/02枢纽交通分析/轨道交通数据1.png" style="width: 220px;height: 80px;">
                    <img src="../../assets/images/02枢纽交通分析/轨道交通数据2.png" style="width: 220px;height: 80px;">
                </div>
                <div class="content_right">
                    <img src="../../assets/images/02枢纽交通分析/轨道交通数据3.png" style="width: 220px;height: 90px;">
                    <img src="../../assets/images/02枢纽交通分析/轨道交通数据4.png" style="width: 220px;height: 90px;">
                </div>

                <!-- <div ref="myChart" id="barChart" :style="{ width: '250px', height: '160px' }">
                </div>
                <div ref="myChart" id="circleChart" :style="{ width: '200px', height: '150px' }">
                </div> -->
            </div>
        </div>
    </router-link>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
onMounted(() => {
    // initBarChart()
    // initcircleChart()
})
const initBarChart = () => {
    var chartDom = document.getElementById('barChart');
    var myChart = echarts.init(chartDom);

    // prettier-ignore
    let dataAxis = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    // prettier-ignore
    let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
    let yMax = 500;
    let dataShadow = [];
    for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
    }


    const option = {
        title: {
            text: '站体',
            left: 'center',
            top: -5,
            subtext: '',
            textStyle: {
                color: '#fff',
                fontSize: '16px',
                fontWeight: 100
            }
        },
        xAxis: {
            data: dataAxis,
            axisLabel: {
                inside: false,
                color: '#fff',
                show: true
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            z: 10
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#999'
            }
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        grid: {
            // 设置图表距离顶部,左侧，右侧和底部的高度
            top: '20px',
            left: '40px',
            right: '10px',
            bottom: '18px',
        },
        series: [
            {
                type: 'bar',
                showBackground: true,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#83bff6' },
                        { offset: 0.5, color: '#188df0' },
                        { offset: 1, color: '#188df0' }
                    ])
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#2378f7' },
                            { offset: 0.7, color: '#2378f7' },
                            { offset: 1, color: '#83bff6' }
                        ])
                    }
                },
                data: data
            }
        ]
    };
    myChart.setOption(option);
    // Enable data zoom when user click bar.
    const zoomSize = 6;
    myChart.on('click', function (params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        myChart.dispatchAction({
            type: 'dataZoom',
            startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
            endValue:
                dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
        });
    });
}
const initcircleChart = () => {
    var chartDom = document.getElementById('circleChart');
    var myChart = echarts.init(chartDom);
    const option = {
        tooltip: {
            trigger: 'item'
        },
        // legend: {
        //   top: '5%',
        //   left: 'center'
        // },
        series: [
            {
                name: '客流量',
                type: 'pie',
                radius: ['45%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        // fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: '重庆西站' },
                    { value: 735, name: '沙坪坝站' },
                    { value: 580, name: '李子坝站' },
                    { value: 484, name: '观音桥站' },
                    { value: 300, name: '江北城站' }
                ]
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
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 2px 10px 0 10px;

        // margin-top: 20px;
        // #circleChart,#lineChart {
        //   // margin: 60px auto;
        // }
        .content_left {
            position: relative;
            top: -15px;
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }

        .content_right {
            position: relative;
            top: -20px;
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            img {
                margin-bottom: 5px;
            }
        }
    }
}
</style>