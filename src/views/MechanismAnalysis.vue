<template>
    <ScaleScreen :width="1920" :height="1080">
        <div class="box">
            <Header :isFirstPage="true"></Header>
            <div  class="img-container">
                <img class="home-img" src="../assets/imgSort/s7Analysis/home-bg.png">
                <img class="home-left" @click="openRail(0)" src="../assets/imgSort/s7Analysis/bg-left.png">
                <img class="home-right" @click="openStation(0)" src="../assets/imgSort/s7Analysis/bg-right.png"> 
                <div class="bottom-left">
                    <span class="text" @click="openRail(0)">流量</span>
                    <span class="text" @click="openRail(1)">时间</span>
                    <span class="text" @click="openRail(2)">空间</span>
                    <span class="text" @click="openRail(3)">活力</span>
                </div>
                <div class="bottom-right">
                    <span class="text" @click="openStation(0)">城市</span>
                    <span class="text" @click="openStation(1)">站区</span>
                    <span class="text" @click="openStation(2)">站体</span>
                </div>
            </div>
        </div>
        <div v-if="showThird" class="modal-mask" @click="handleClose"></div>
        <ThirdItem
            v-if="showThird"
            :imgs="currentData"
            :thirdMenu="thirdMenu"
            @close="handleClose"
            style="z-index:1000">
        </ThirdItem>
    </ScaleScreen>
</template>

<script setup>
import { ref } from 'vue'
import ScaleScreen from '@/components/scale-screen/scale-screen.vue'
import Header from '@/components/header.vue'
import { ANALYSIS_RAIL, ANALYSIS_STATION } from '@/utils/imgData/analysis.js';
import ThirdItem from './analysis/ThirdItem.vue';

const currentData = ref([]) // 选择传的东西
const thirdMenu = ref(0)
const showThird = ref(false)

const openStation = (index) => {
    currentData.value = ANALYSIS_STATION
    thirdMenu.value = index
    showThird.value = true
}

const openRail = (index) => {
    currentData.value = ANALYSIS_RAIL
    thirdMenu.value = index
    showThird.value = true
}
// 关闭三级
const handleClose = () => {
    showThird.value = false
}
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
    background-image: url("../assets/imgSort/background/analysis-bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    .img-container {
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        width: 1320px;
        height: 740px;
        position: relative; /* Set img-container as a reference for positioning */
        .home-img {
            width: auto;
            height: 740px;
        }
        .home-left {
            position: absolute;
            left: 0%;
            top: 48%;
            cursor: pointer;
            &:hover {
                transform: translateY(-5px);
            }
        }
        .home-right {
            position: absolute;
            left: 59%;
            top: 48%;
            cursor: pointer;
            &:hover {
                transform: translateY(-5px);
            }
        }
        .bottom-left {
            position: absolute;
            left: 4.5%;
            top: 87.5%;
            width: 400px;
            font-size: 40px;
            line-height: 50px;
            color: #91ace0;
            display: flex;
            justify-content: space-around;
            align-items: center;
            span {
                font-weight: 1000; /* Make the font weight of p tags bolder */
                &:hover {
                    font-size: 43px;
                    color: white; 
                    text-shadow: 0 0 10px rgba(0, 191, 255, 0.8), 0 0 20px rgba(0, 191, 255, 0.6), 0 0 30px rgba(0, 191, 255, 0.4);
                    cursor: pointer;
                }
            }
        }
        .bottom-right {
            position: absolute;
            left: 66%;
            top: 87.5%;
            width: 350px;
            font-size: 40px;
            line-height: 50px;
            color: #91ace0;
            display: flex;  
            justify-content: space-around;
            align-items: center;
            span {
                font-weight: 1000; /* Make the font weight of p tags bolder */
                &:hover {
                    font-size: 43px;
                    color: white; 
                    text-shadow: 0 0 10px rgba(0, 191, 255, 0.8), 0 0 20px rgba(0, 191, 255, 0.6), 0 0 30px rgba(0, 191, 255, 0.4);
                    cursor: pointer;
                }
            }
        }
    }
}

/* 遮罩层样式 */
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* 比其他元素高，确保遮罩层覆盖整个页面 */
}
</style>
