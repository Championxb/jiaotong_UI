<template>
    <!-- dakuang -->
    <div class="main-container">
        <img class="allForm" :src="bckUrl.allFormShadow" @mousedown="handleMouseDown"/>
        <!-- 下边地铁线路显示框 -->
        <div ref="Littlechart" class="center">
        </div>
        <!-- 返回按钮 -->
        <img class="back" :src="bckUrl.back" @click="closeComponent" @mousedown="handleMouseDown"/>
    
    </div>
  </template>
  
<script setup>
    import { ref } from 'vue'
    import { defineProps, defineEmits } from 'vue'
    import { onMounted, getCurrentInstance, onUnmounted } from 'vue'
    import CDLINE from '@/assets/railLines/cdLine.json'
    const Littlechart = ref(null)
    // echart展示部分
    const { proxy } = getCurrentInstance() // 获取当前组件实例
    let myChart2 = null // echart实例
    // 生命周期函数
    onMounted(() => {
        renderChart() // 生命周期挂载函数渲染图表
        window.addEventListener('resize', reSize)
    })
    onUnmounted(() => {
        removeEventListener('resize', reSize)
        if (myChart2) {
            myChart2.dispose() // 销毁 ECharts 实例
            myChart2 = null // 清空引用
        }
    })
    function reSize() {
        myChart2.resize()
        }
        const renderChart = async () => {
        myChart2 = proxy.$echarts.init(Littlechart.value)
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
          center: [104.08474, 30.639902],
          zoom: 13,
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
            }
        ]
        }
        myChart2.setOption(defaultOption)
    }
  // 获取父传过来的参数
  const { items, currentItemIndex } = defineProps({
    items: Array,
    currentItemIndex: Number
  })
  const tagIndex = ref(currentItemIndex)
//   const currentItem = ref(items.items[0]) // 默认选中第一个项
  // 储存bck图片
  const bckUrl = ref( 
      {
        allFormShadow: new URL('../../assets/imgSort/background/allForm3.png', import.meta.url).href,
        back: new URL('../../assets/imgSort/background/back2.png', import.meta.url).href
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

  const handleMouseDown = (event) => {
    // 阻止默认的拖拽行为
    event.preventDefault();
  }
  
  </script>
  
  <style lang="scss" scoped>
  
  .main-container {
    position: absolute;
    top: 10%;
    left: 5%;
    right: 5%;
    bottom: 5%;
    border-radius: 25px; /* 明显的圆角效果 */
    z-index: 1000;
  }
  .center{
        position: absolute;
        height: 80%;
        width: 89%;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        z-index: 5;
    }
  
  .allForm {
    width: 100%;
    height: 100%;
    z-index: 1001;
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
    z-index: 1000;
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
  