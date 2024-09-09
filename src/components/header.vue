<template>
    <div class=" title_wrap">
        <div class="symbol_bg">
            <img src="../assets/school-logo.png">
        </div>
        <div class="center">
            <div class="title">
                <span class="title-text">交通综合体效能优化与智能规划设计平台</span>
                <div class="title-text-sub">Traffic Complex Efficiency Optimization and Intelligent Planning and Design Platform</div>
            </div>
        </div>
        <div class="tool">
            <div class="search" v-if="!isFirstPage">
                <el-select v-model="selectValue" placeholder="Select" style="width: 240px">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>
            <div class="flex">
                <div class="flex_left">
                    <div class="timers">
                        <div class="full_time">
                            <span>{{ dateDay }}</span>
                            {{ dateYear }} {{ dateWeek }}
                        </div>
                    </div>
                    <div class="names">
                        <div class="name-left">
                        系统开发:
                    </div>
                    <div class="name-right">
                        <div class="name">崔叙、沈中伟</div>
                        <div class="name">吴晓、于洋、袁红、杨林川等</div>
                    </div>
                    </div>
                    
                </div>
                <div class="flex_right">
                    <div class="return" v-if="isFirstPage" @click="backHome">
                        <img src="../assets/back.png">
                        <span>首页</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="sperate"></div>
        <slot></slot>
    </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, watch, defineProps } from 'vue'
import { useRouter } from 'vue-router'
const dateYear = ref(null)
const dateWeek = ref(null)
const dateDay = ref(null)
const timer = ref(null)
const selectValue = ref('')
const router = useRouter()
watch(selectValue, (val) => {
    console.log(val)
    router.push('/firstPage/appExample/' + val)
    // selectValue.value = ''
})
const backHome = () => {
    router.push('/index')
}
const options = ref([
    {
        value: 0,
        label: '成都南站',
    },
    {
        value: 1,
        label: '成都东站',
    },
    {
        value: 2,
        label: '杭州城站',
    },
    {
        value: 3,
        label: '成都地铁陆肖站',
    },
    {
        value: 4,
        label: '深圳平湖枢纽',
    },
    {
        value: 5,
        label: '成都双流区',
    },
])
// 接受父组件参数
const props = defineProps({
    isFirstPage: {
        type: Boolean,
        default: false
    }
})
const weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
onMounted(() => {
    timeFn()
})
onBeforeUnmount(() => {
    clearInterval(timer.value)
})
const timeFn = () => {
    timer.value = setInterval(() => {
        const date = new Date()
        let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()
        let day = date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate().toString()
        dateYear.value = (date.getFullYear() + '-' + month + '-' + day)
        dateWeek.value = weekday[date.getDay()].toString()
        //获取时分秒
        let h = date.getHours() < 10 ? '0' + date.getHours().toString() : date.getHours().toString()
        let m = date.getMinutes() < 10 ? '0' + date.getMinutes().toString() : date.getMinutes().toString()
        let s = date.getSeconds() < 10 ? '0' + date.getSeconds().toString() : date.getSeconds().toString()
        dateDay.value = h + ':' + m + ':' + s
    }, 1000)
}
</script>
<style lang="scss" scoped>
.title_wrap {
    height: 85px;
    position: relative;
    margin-top: 5px;
    margin-bottom: 4px;
    color: rgb(255, 255, 255);
    .symbol_bg {
        position: absolute;
        left: 20px;
        top: 10px;
        width: 250px;
        height: 60px;
        img {
            width: 90%;
            // height: 100%;
        }
    }
    .title {
        position: relative;
        // width: 500px;
        text-align: center;
        background-size: cover;
        color: transparent;
        height: 60px;
        line-height: 46px;  
        top: 5px;
        .title-text {
            
            font-size: 38px;
            font-weight: 900;
            letter-spacing: 6px;
            width: 100%;
            // background: linear-gradient(92deg, #0072FF 0%, #00EAFF 48.8525390625%, #01AAFF 100%); //从左上角到右下角渐变
            // background: linear-gradient(to right, #01AAFF, #00EAFF 30%, #01AAFF 50%);
            // background: linear-gradient(to right, #ffffff, #00eaff9f 30%, #01aaffb8 50%,#ffffff 100%);
            background-color: white;
            background-size: 200%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            // animation: shine 30s linear infinite;
        }
        .title-text-sub {
            font-size: 14px;
            font-weight: 900;
            letter-spacing: 1px;
            width: 100%;
            // background: linear-gradient(92deg, #0072FF 0%, #00EAFF 48.8525390625%, #01AAFF 100%);
            // background: linear-gradient(to right, #01AAFF, #00EAFF 30%, #01AAFF 50%);
            // background: linear-gradient(to right, #ffffff, #00eaff9f 30%, #01aaffb8 50%,#ffffff 100%);
            // background: linear-gradient(to right, #ffffff, #01aaffb8 50%,#ffffff 100%);
            background-color: white;
            background-size: 255%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            // animation: shine 30s linear infinite;
            position: absolute;
            top: 40px;
            // transform: translate(-2px, 2px); 
        }
    }
    .tool {
        .search {
            position: absolute;
            right: 580px;
            top: 120px;
            z-index: 1;
        }
        .flex {
            display: flex;
            position: absolute;
            right: 10px;
            top: 10px;
            .flex_left {
                flex-direction: column ;
                
                margin-right: 15px;
                .timers {
                    align-items: center;
                    display: flex;
                    font-size: 12px;
                    color:#dedede;
                    span {
                        font-size: 20px;
                        color:white;
                    }
                }
                .names {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: 600;
                    font-size: 13px;
                    margin-top: 5px;
                    flex-direction: column;
                    .name-left{
                        margin-bottom: 5px;
                   
                    }
                    .name-right{
                        color:#efeeee;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        .name {
                            margin-bottom: 4px; 
                        }
                    }
                }
               
            }
            .flex_right {
                .return {
                    margin: 12px 0 0 10px;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    img {
                        width: 25px;
                    }
                    span {
                        font-size: 25px;
                        margin-left: 5px;
                        margin-right: 15px;
                    }
                    
                }
                .return:hover{
                    transform: translateY(-6px);
                    transition: transform 0.5s;
                }
            }
        }
    }
    .sperate {
        // 一条长线 分割
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #7CE7FD;
        top: 90px;
        // 发光
        box-shadow: 0 0 10px #7CE7FD;
        // 模糊
        filter: blur(1px);
    }
}
@keyframes shine {
    0% {
        background-position: 500%;
    }
    100% {
        background-position: -500%;
    }
}
</style>

