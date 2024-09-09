<template>
    <ScaleScreen :width="1920" :height="1080">
        <Header :isFirstPage="true"></Header>
        <div class="dashboard">
            <div ref="chart" class="chart-box"></div>
        </div>
        <MenuBottom  :toPage="toPage" :click="click"></MenuBottom>
    </ScaleScreen>
</template>
  
<script setup>
    import { ref, onMounted, getCurrentInstance, onUnmounted } from 'vue'
    import Header from '@/components/header.vue'
    import CDLINE from '@/assets/railLines/cdLine.json'
    import CDLINESTATION from '@/assets/railLines/cdLineStation.json'
    import ScaleScreen from '@/components/scale-screen/scale-screen.vue'
    import MenuBottom from '@/views/cityRail/MenuBottom.vue'
    const chart = ref(null)
    const toPage = ref(0)
    const click = ref(false)
    // echart展示部分
    const { proxy } = getCurrentInstance() // 获取当前组件实例
    let myChart = null // echart实例
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
        const defaultOption = {
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                if (params.seriesType === 'lines' && params.data.name) {
                    const name = params.data.name ? `${params.data.name}<br>` : '';
                    const subTitle = params.data.subTitle ? `${params.data.subTitle}<br>` : '';
                    return name + subTitle;
                }
            }
        },
        bmap: {
            center: [104.03474, 30.639902],
            zoom: 14,
            roam: true,
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
        series: [
            {
                type: 'lines',
                coordinateSystem: 'bmap',
                polyline: true,
                data: CDLINE,
                silent: true,
                lineStyle: {
                    // color: '#c23531',
                    // color: 'rgb(200, 35, 45)',
                    opacity: 0.2,
                    width: 1
                },
                progressiveThreshold: 500,
                progressive: 200
            },
            {
                type: 'lines',
                coordinateSystem: 'bmap',
                polyline: true,
                data: CDLINE,
                lineStyle: {
                    width: 0.1
                },
                effect: {
                    constantSpeed: 30,
                    show: true,
                    trailLength: 0.5,
                    symbolSize: 3.5
                },
                zlevel: 1
            },
            {
                type: 'lines',
                coordinateSystem: 'bmap',
                polyline: true,
                data: CDLINE,
                lineStyle: {
                    width: 0.1
                },
                effect: {
                    constantSpeed: 50,
                    show: true,
                    trailLength: 0.5,
                    symbolSize: 5
                },
                zlevel: 1
            },
            {
                type: 'lines',
                coordinateSystem: 'bmap',
                polyline: true,
                data: CDLINE,
                lineStyle: {
                    width: 0.1
                },
                effect: {
                    constantSpeed: 70,
                    show: true,
                    trailLength: 0.5,
                    symbolSize: 8
                },
                zlevel: 1
            },
            {
            name: '地铁站点类型',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: CDLINESTATION,
            symbol: function (val) {
                return val[3];
            },
            symbolSize: 15,
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
                color:  function(val) {
                    return val.data.value[4]
                }
            },
            emphasis: {
                label: {
                show: true
                },
                scale: true  // 强调状态下放大
            },
            zlevel: 2,
            }
        ]
        }
        myChart.setOption(defaultOption)
        // 添加点击事件监听
        myChart.on('click', function (params) {
            if (params.seriesType === 'effectScatter') {
                toPage.value=params.value[2]
                click.value = !click.value
            }
        })
    }
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
</style>
  