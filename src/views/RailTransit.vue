<template>
    <ScaleScreen :width="1920" :height="1080">
        <Header :isFirstPage="true"></Header>
        <div class="dashboard">
            <div ref="chart" class="chart-box"></div>
            <!-- 点击跳转组件 -->
            <div v-if="isMenu"  class="right">
                <div class="main-line" @click="handleMain">
                    <div class="title">干线铁路</div>
                    <span class="title-eg">Mainline railway</span>
                </div>
                <div class="city-line" @click="handleCity">
                    <div class="title">城市轨道</div>
                    <span class="title-eg">Urban rail transit</span>
                </div>
            </div>
            <!-- 底部菜单 -->
            <TransitMenu 
                v-if="!isMenu" 
                :isCity="isCity" 
                :isMain="isMain" 
                @update:isMain="updateIsMain"
                @update:isCity="updateIsCity">
            </TransitMenu>
            <!-- 干线铁路组件 -->
            <MainLine v-if="isMain"></MainLine>
            <!-- 城市轨道组件 -->
            <CityLine v-if="isCity"></CityLine>
        </div>
    </ScaleScreen>
</template>
  
<script setup>
    import { ref, watch, onMounted, getCurrentInstance, onUnmounted } from 'vue'
    import Header from '@/components/header.vue'
    import NATIONALLINES from '@/assets/railLines/nationalLine.json'
    import NATIONALLINESDOT from '@/assets/railLines/nationalLineDot.json'
    import NATIONALSUBWAY from '@/assets/railLines/nationalSubway.json'
    import ScaleScreen from '@/components/scale-screen/scale-screen.vue'
    import MainLine from '@/views/railTransit/MainLine.vue'
    import CityLine from '@/views/railTransit/CityLine.vue'
    import TransitMenu from '@/views/railTransit/TransitMenu.vue'
    const isMenu = ref(true)
    const isMain = ref(false)
    const isCity = ref(false)
    const coordinate = ref([100, 30])
    const handleMain = () => {
        isMenu.value = false
        isMain.value = true
    }
    const handleCity = () => {
        isMenu.value = false
        isCity.value = true
    }
    const chart = ref(null)
    // echart展示部分
    const { proxy } = getCurrentInstance() // 获取当前组件实例
    let myChart = null // echart实例
    const menuSeries = ref([
        {
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: NATIONALLINES,
            silent: true,
            lineStyle: {
            opacity: 0.2,
            width: 1
            },
            progressiveThreshold: 500,
            progressive: 200,
            tooltip: {  // 禁用 lines 类型的 tooltip
                show: false
            }
        },
        {
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: NATIONALLINES,
            lineStyle: {
            width: 0.1
            },
            effect: {
            constantSpeed: 30,
            show: true,
            trailLength: 0.1,
            symbolSize: 3.5
            },
            zlevel: 1,
            tooltip: {  // 禁用 lines 类型的 tooltip
                show: false
            }
        },
        {
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: NATIONALLINES,
            lineStyle: {
            width: 0.1
            },
            effect: {
            constantSpeed: 30,
            show: true,
            trailLength: 0.1,
            symbolSize: 3.5
            },
            zlevel: 1,
            tooltip: {  // 禁用 lines 类型的 tooltip
                show: false
            },
            label: {
                formatter: '{b}',
                position: 'right',
                show: true
            },
            emphasis: {
                label: {
                show: true
                }
            }
        },
        {
            name: '干线铁路',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: NATIONALLINESDOT,
            symbolSize: function (val) {
                return val[2] / 1.5;  // 点的大小根据第三个值除以10来确定
            },
            encode: {
                value: 2
            },
            showEffectOn: 'render',  // 效果展示触发条件为渲染时
            rippleEffect: {
                brushType: 'stroke',  // 涟漪效果的画笔类型为描边
                scale: 2.5,  // 涟漪扩散比例
                period: 8   // 涟漪扩散速度
            },
            label: {
                formatter: '{b}',
                position: 'right',
                fontSize: 20,
                color: '#fffff9',
                textBorderColor: '#33', // 描边颜色
                textBorderWidth: 1, // 描边宽度
                show: false
            },
            itemStyle: {
                shadowBlur: 4,
                shadowColor: '#899aa9',
                color: '#ADD8E6' 
            },
            emphasis: {
                label: {
                show: true
                },
                scale: true  // 强调状态下放大
            },
            zlevel: 2,
            tooltip: {
                formatter: function (params) {
                    return params.name;  // 仅显示名称
                }
            }
            },
            
        ])
    const citySeries = ref([
    {
        name: '地铁运营长度',
        type: 'effectScatter',
        coordinateSystem: 'bmap',
        data: NATIONALSUBWAY,
        symbolSize: function (val) {
            return val[2] / 20;
        },
        encode: {
            value: 2
        },
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke',
            scale: 2,  
            period: 40   
        },
        label: {
            formatter: '{b}',
            position: 'right',
            show: false
        },
        itemStyle: {
            color: '#4682B4'
        },
        emphasis: {
            label: {
                show: true
            }
        }
    },
    {
        name: '地铁运营长度Top 5',
        type: 'effectScatter',
        coordinateSystem: 'bmap',
        data: NATIONALSUBWAY.slice(0, 5),
        symbolSize: function (val) {
            return val[2] / 20;
        },
        encode: {
            value: 2
        },
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke',
            scale: 5,  
            period: 40   
        },
        label: {
            formatter: '{b}',
            position: 'right',
            fontSize: 20,
            color: '#fffff9',
            textBorderColor: '#33', // 描边颜色
            textBorderWidth: 1, // 描边宽度
            show: true
        },
        itemStyle: {
            shadowBlur: 10,
            shadowColor: '#333',
            color: '#91cc75'
        }, 
        emphasis: {
            scale: true
        },
        zlevel: 1
    }
    ])
    const nowSeries = ref(menuSeries.value)
    const setChartOptions = () => {
        const defaultOption = {
        tooltip: {
            trigger: 'item',
        },
        bmap: {
            center: coordinate.value,
            zoom: 5,
            roam: false,
            mapStyle: {
                styleJson: [
                {
                    featureType: 'water',
                    elementType: 'all',
                    stylers: {
                    color: '#031628'
                    }
                },
                {
                    featureType: 'land',
                    elementType: 'geometry',
                    stylers: {
                    color: '#000102'
                    }
                },
                {
                    featureType: 'highway',
                    elementType: 'all',
                    stylers: {
                    visibility: 'off'
                    }
                },
                {
                    featureType: 'arterial',
                    elementType: 'geometry.fill',
                    stylers: {
                    color: '#000000'
                    }
                },
                {
                    featureType: 'arterial',
                    elementType: 'geometry.stroke',
                    stylers: {
                    color: '#0b3d51'
                    }
                },
                {
                    featureType: 'local',
                    elementType: 'geometry',
                    stylers: {
                    color: '#000000'
                    }
                },
                {
                    featureType: 'railway',
                    elementType: 'geometry.fill',
                    stylers: {
                    color: '#000000'
                    }
                },
                {
                    featureType: 'railway',
                    elementType: 'geometry.stroke',
                    stylers: {
                    color: '#08304b'
                    }
                },
                {
                    featureType: 'subway',
                    elementType: 'geometry',
                    stylers: {
                    lightness: -70
                    }
                },
                {
                    featureType: 'building',
                    elementType: 'geometry.fill',
                    stylers: {
                    color: '#000000'
                    }
                },
                {
                    featureType: 'all',
                    elementType: 'labels.text.fill',
                    stylers: {
                    color: '#857f7f'
                    }
                },
                {
                    featureType: 'all',
                    elementType: 'labels.text.stroke',
                    stylers: {
                    color: '#000000'
                    }
                },
                {
                    featureType: 'building',
                    elementType: 'geometry',
                    stylers: {
                    color: '#022338'
                    }
                },
                {
                    featureType: 'green',
                    elementType: 'geometry',
                    stylers: {
                    color: '#062032'
                    }
                },
                {
                    featureType: 'boundary',
                    elementType: 'all',
                    stylers: {
                    color: '#465b6c'
                    }
                },
                {
                    featureType: 'manmade',
                    elementType: 'all',
                    stylers: {
                    color: '#022338'
                    }
                },
                {
                    featureType: 'label',
                    elementType: 'all',
                    stylers: {
                    visibility: 'off'
                    }
                }
                ]
            }
        },
        series: nowSeries.value
    }
    myChart.setOption(defaultOption, true)
    }
    // 生命周期函数
    onMounted(() => {
        renderChart() // 生命周期挂载函数渲染图表
        window.addEventListener('resize', reSize)
    })
    onUnmounted(() => {
        removeEventListener('resize', reSize)
        if (myChart) {
        myChart.dispose() // 销毁 ECharts 实例
        myChart = null // 清空引用
        }
    })
    function reSize() {
        myChart.resize()
    }
    const renderChart = async () => {
        myChart = proxy.$echarts.init(chart.value)
        setChartOptions()
    }
    

    // 子传父改
    const updateIsMain = (newValue) => {
      isMain.value = newValue
    }
    const updateIsCity = (newValue) => {
      isCity.value = newValue
    }
    // 监听 is 的改变
    watch(() => isMain.value, (newValue) => {
    if (newValue) {
        coordinate.value = [80, 30]
        nowSeries.value = menuSeries.value
        setChartOptions()
        reSize()
    }
    })
    watch(() => isCity.value, (newValue) => {
    if (newValue) {
        coordinate.value = [98, 30]
        nowSeries.value = citySeries.value
        console.log("1",nowSeries.value);
        setChartOptions()
        console.log("2",nowSeries.value);
        reSize()
    }
    })
</script>
  
<style lang="scss" scoped>
    .dashboard {
        width: 1920px;
        height: 1080px;
        .chart-box {
        width: 100%;
        height: 100%;
        }
    }
    ::v-deep .anchorBL {
        display: none;
    }
    .right {
        position: absolute;
        right: 0;
        top: 95px;
        width: 25%;
        height: 985px;
        background-color: #03030e62;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .main-line {
            position: relative;
            top: -30px;
            width: 250px;
            height: 250px;
            background-image: url("../assets/imgSort/s1RailTransit/mainline-default.png");
            background-size: cover;
        }
        .main-line:hover{
            width: 300px;
            height: 300px;
            background-image: url("../assets/imgSort/s1RailTransit/mainline-active.png");
            cursor: pointer;
        }
        .city-line {
            position: relative;
            top: -50px;
            width: 250px;
            height: 250px;
            background-image: url("../assets/imgSort/s1RailTransit/cityrail-default.png");
            background-size: cover;
        }
        .city-line:hover {
            width: 300px;
            height: 300px;
            background-image: url("../assets/imgSort/s1RailTransit/cityrail-active.png");
            cursor: pointer;
        }
        
    }
    .title {
        position: absolute;
        bottom: -50px;
        left: 50%;
        transform: translate(-55%,0%);
        color: white;
        font-size: 30px;
        font-weight: 500;
    }
    .title-eg {
        position: absolute;
        bottom: -80px;
        left: 50%;
        transform: translate(-55%,0%);
        color: white;
        font-size: 16px;
        font-weight: 300;
    }
    
    
    
</style>
  