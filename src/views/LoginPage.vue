<template>
    <ScaleScreen :width="1920" :height="1080">
        <div class="dashboard">
            <!-- 头部组件 -->
            <PageTitle headerColor="#000000"></PageTitle>
            <!-- 中部组件 -->
            <div class="container">
                <!-- 展示组件 -->
                <div class="left">
                    <div ref="chart" class="chart-box"></div>
                    <!-- <div id="map" class="mapp"></div> -->
                </div>
                <!-- 登录组件 -->
                <div class="right">
                    <div class="login">
                        <el-input v-model="username" style="width: 300px;height: 50px;font-size: 20px;"
                            placeholder="请输入用户名">
                            <template #prefix>
                                <el-icon :size="25">
                                    <IconEpUser />
                                </el-icon>
                            </template>
                        </el-input>
                        <div style="height: 2vh"></div>
                        <el-input v-model="password" style="width: 300px;height: 50px;font-size: 20px;"
                            :type="[ifViewPwd ? 'text' : 'password']" placeholder="请输入密码">
                            <template #prefix>
                                <el-icon :size="25">
                                    <IconEpLock />
                                </el-icon>
                            </template>
                            <template #suffix>
                                <el-icon :size="25" @click="ifViewPwd = !ifViewPwd" style="cursor: pointer;">
                                    <IconEpView v-if="ifViewPwd" />
                                    <IconEpHide v-else />
                                </el-icon>
                            </template>
                        </el-input>
                        <div style="height: 2vh"></div>
                        <div style="display: flex;align-items: center;justify-content: space-around;cursor: pointer;">
                            <el-button type="success" @click="handleLogin"
                                :style="{ fontSize: '20px', width: (ifLoginStatus ? '200px' : '80px'), height: (ifLoginStatus ? '45px' : '35px') }">登录</el-button>
                            <el-button type="warning" @click="handleRegister"
                                :style="{ fontSize: '20px', width: (!ifLoginStatus ? '200px' : '80px'), height: (!ifLoginStatus ? '45px' : '35px') }">注册</el-button>
                            <!-- <span @click="handleRegister" style="color: aliceblue;">注册</span> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ScaleScreen>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance, onUnmounted } from 'vue'
import { apiLogin, apiRegister } from "@api/user";
import ScaleScreen from '@/components/scale-screen/scale-screen.vue'
import PageTitle from '@/components/PageTitle.vue'
import { useRouter } from 'vue-router'
import BJBUSLINE from '@/assets/railLines/bjBusLine.json'
import msg from '@/utils/message';
const router = useRouter() // 跳转路由
// 登录部分
const username = ref(localStorage.getItem("username") || '')
const password = ref('')
const chart = ref(null)
const ifViewPwd = ref(false)
const ifLoginStatus = ref(true)
const ifSubmit = ref(false)
// 地图部分
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

// 渲染图表
const renderChart = async () => {
    myChart = proxy.$echarts.init(chart.value)
    const defaultOption = {
        bmap: {
            center: [116.4, 39.89],
            zoom: 12,
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
                data: BJBUSLINE,
                silent: true,
                lineStyle: {
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
                data: BJBUSLINE,
                lineStyle: {
                    width: 0
                },
                effect: {
                    constantSpeed: 20,
                    show: true,
                    trailLength: 0.1,
                    symbolSize: 1.5
                },
                zlevel: 1
            }
        ]
    }
    myChart.setOption(defaultOption)
}

// 点击事件处理登录程序
const handleLogin = async () => {
    ifLoginStatus.value = true
    try {
        const loginRes = await apiLogin({ username: username.value, password: password.value })
        console.log(loginRes)
        localStorage.setItem('token', loginRes.token)
        localStorage.setItem('username', loginRes.username)
        localStorage.setItem('userId', loginRes.userId)
        router.push('/index') // 跳转到 '/home'
        msg.success(loginRes.message)
    } catch (error) {
        msg.error(error.response.data.message)
        console.log(error)
    }
}
const handleRegister = async () => {
    ifLoginStatus.value = false
    try {
        const registerRes = await apiRegister({ username: username.value, password: password.value })
        msg.success(registerRes.message, '返回登录')
        setTimeout(() => {
            ifLoginStatus.value = true
        }, 1000)
    } catch (error) {
        msg.error(error.response.data.message)
        console.log(error)
    }
}
</script>

<style lang="scss" scoped>
.dashboard {
    display: flex;
    flex-direction: column;
    background-color: #133453;
}

.container {
    height: 1080px;
    width: 1920px;
    /* 全屏宽度 */
    display: flex;

    /* 水平布局 */
    .left {
        width: 75%;
        display: flex;

        .mapp {
            width: 100%;
            height: 100%;
        }

        .chart-box {
            width: 1420px;
            height: 1080px;
        }
    }

    .right {
        width: 25%;
        background-color: #fafafa;
        display: flex;
        justify-content: center;
        text-align: center;

        .login {
            position: relative;
            justify-content: center;
            text-align: center;
            top: 35%;
        }
    }
}

:deep(.el-icon .el-input__iconz) {
    width: 50px;
}
</style>
