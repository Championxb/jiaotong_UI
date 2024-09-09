<template>
<ScaleScreen :width="1920" :height="1080">
    <div class="box">
        <Header :isFirstPage="true"></Header>
        <div class="container">     
            <!-- 特效 -->
            <img class="flow" src="../assets/imgSort/s4Math/flowLine2.png"></img>
            <!-- 左侧 -->
            <div class="left-box">
                <div class="formList">
                    <div 
                    v-for="(item, index) in mathLeft" 
                    :key=index  
                    class="form"
                    @click="openSecond('left', index)">
                        <div class="smallform-container">
                            <img class="smallform" src="../assets/imgSort/background/smallForm4.png" >
                            <span class="smallform-text">{{ item.mathName }}</span>
                        </div>
                        <div :class="[{ 'ifgo': item.islink },{'nogo': !item.islink}]" @click="goToWebsite">
                            <img class="gobtn" src="../assets/imgSort/background/gobtn2.png">
                            <span class="gobtn-text">{{ item.linkName }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 中部 -->
            <div class="center-box">
                <div class="title">
                    <span class="title-text">基于建成环境指标和GBDT的城市轨道交通站点客流量预测</span>
                </div>
                <div class="main">
                    <img class="main-img" src="../assets/imgSort/s4Math/mainMathText.png">
                    <div class="go-box" @click="openSecondMain">
                        <img class="go-img" src="../assets/imgSort/background/gobtn1.png" >
                        <span class="main-text" >GBDT</span>
                    </div>
                </div>
                <div class="bottom"></div>
            </div>
            <!-- 右侧 -->
            <div class="right-box">
                <div class="formList">
                    <div 
                    v-for="(item, index) in mathRight" 
                    :key=index  
                    class="form"
                    @click="openSecond('right', index)">
                        <div class="smallform-container">
                            <img class="smallform" src="../assets/imgSort/background/smallForm4.png" >
                            <span class="smallform-text">{{ item.mathName }}</span>
                        </div>
                        <div :class="[{ 'ifgo': item.islink },{'nogo': !item.islink}]" @click="goToWebsite">
                            <img class="gobtn" src="../assets/imgSort/background/gobtn2.png">
                            <span class="gobtn-text">{{ item.linkName }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="showSecond" class="modal-mask" @click="handleClose"></div>
    <SecondItem
        v-if="showSecond"
        :imgs="currentData"
        @close="handleClose"
        style="z-index:1000">
    </SecondItem>
</ScaleScreen>
</template>

<script setup>
import ScaleScreen from '@/components/scale-screen/scale-screen.vue'
import Header from '@/components/header.vue'
import { ref } from 'vue'
import { MATHLEFT, MATHRIGHT } from '@/utils/imgData/math.js'
import SecondItem from './math/SecondItem.vue'
const mathLeft = ref(MATHLEFT)
const mathRight = ref(MATHRIGHT)
let currentData = ref({})
const showSecond = ref(false)
const mainData = ref({
        mathName: '基于建成环境指标和GBDT的城市轨道交通站点客流量预测',
        imgUrl:[new URL('../assets/imgSort/s4Math/math-core.png', import.meta.url)]
    })
// 关er级
const handleClose = () => {
    showSecond.value = false
}
const openSecond = (direction, index) => {
    if(direction === 'left') {
        currentData.value = mathLeft.value[index]
        
    }
    if(direction === 'right') {
        currentData.value = mathRight.value[index]
    }
    showSecond.value = true
}
const openSecondMain = () => {
    currentData.value = mainData.value
    showSecond.value = true
}
const goToWebsite = (event) => {
    window.location.href = 'https://www.spsspro.com/'
    event.stopPropagation()
}
</script>

<style lang="scss" scoped>
    .box {
        width: 100%;
        height: 100%;
        background-image: url("../assets/imgSort/background/math-bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .container {
        height: 92%;
        display: flex;
        justify-content: space-around;
        position: relative;
        .flow {
            position: absolute;
            left: 6%;
            top: 0%;
            width: auto;
            height: 500px;
            animation: moveDown 4.5s linear infinite; 
        }
        @keyframes moveDown {
            from {
                top: 0%;
            }
            to {
                top: 100%;
            }
        }
        .left-box {
            width: 600px;
            height: 100%;
            position: relative;
        }
        .center-box {
            position: relative;
            top: 3%;
            width: 720px;
            height: 94%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            background-image: url("../assets/imgSort/background/formShadow4.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            .title {
                position: relative;
                top: 1%;
                left: 3%;
                height: 115px;
                width: 94%;
                background-image: url("../assets/imgSort/background/mainTitle.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                .title-text {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    width: 92%;
                    font-size: 46px;
                    text-align: center;
                    color: aliceblue;
                    line-height: 50px;
                }
            }
            .main {
                position: relative;
                height: 720px;
                .main-img {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                    width: auto;
                    height: 100%;
                }
                
                .go-box {
                    position: absolute;
                    bottom: 50px;
                    right: 120px;
                    cursor: pointer;
                    &:hover {
                        transform: translateY(-6px);
                    }
                    .main-text {
                        position: absolute;
                        bottom: 10px;
                        right: 15px;
                        font-size: 26px;
                        color: rgb(87, 86, 86);
                    }
                }
            }
            .bottom {
                position: relative;
                left: 3%;
                bottom: 1%;
                width: 94%;
                height: 70px;
                background-image: url("../assets/imgSort/background/getStarted.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                cursor: pointer;
                &:hover {
                        transform: translateY(-6px);
                    }
            }
        }
        .right-box {
            position: relative;
            width: 600px;
            height: 100%;
            
        }
    }
    .formList {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 93%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .form {
            width: 100%;
            height: 230px;
            position: relative;
            .smallform-container {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                height: 240px;
                width: 530px;
                cursor: pointer;
                &:hover {
                    transform: translate(-50%, -52%);
                }
                .smallform {
                    position: absolute;
                    height: 240px;
                    width: 530px;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
                .smallform-text {
                    position: absolute;
                    width: 370px;
                    left: 49%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    font-size: 25px;
                    line-height: 35px;
                    color: #1a3b59;
                }
            }
            .ifgo {
                position: absolute;
                right: 60px;
                bottom: -20px;
                text-align: center;
                font-size: 30px;
                line-height: 35px;
                color: #1a3b59;
                cursor: pointer;
                &:hover {
                    transform: translateY(-6px);
                }
                .gobtn-text {
                    position: absolute;
                    left: 50%;
                    top: 40%;
                    width: 200px;
                    transform: translate(-50%, -50%);
                    color: aliceblue;
                    font-size: 15px;
                }
            }
            .nogo {
                display: none;
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