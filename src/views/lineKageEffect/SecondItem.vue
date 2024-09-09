<template>
    <div class="all-container">
        <div class="left-container">
            <div class="img-container">
                <p class="side-title">{{ currentItem.secondImgs[leftRealInde].imgTitle }}</p>
                <img 
                    class="side-img" 
                    :src="currentItem.secondImgs[leftRealInde].imgUrl"
                    @click="toggleFullScreen(currentItem.secondImgs[leftRealInde].imgUrl)">
                <div class="toggle">
                    <span class="previous" @click="previousImage('left')"><<</span>
                    <span class="num">{{ leftNowNum }}/{{ leftAllNum }}</span>
                    <span class="next" @click="nextImage('left')">>></span>
                </div>
            </div>
        </div>
        <div class="center-container">
            <div class="centerimg-box">
                <img class="center-img" :src="currentItem.coreImg">
                <ZoneClick v-if="props.currentPage === 1" @open-third="openThird"></ZoneClick>
                <CityClick v-if="props.currentPage === 2" @open-third="openThird"></CityClick>
            </div>  
            <div class="top-title">{{ currentItem.topName }}</div>
            <div class="bottom-title">{{ currentItem.bottomName }}</div>
        </div>
        <div class="right-container">
            <div class="img-container">
                <p class="side-title">{{ currentItem.secondImgs[rightRealInde].imgTitle }}</p>
                <img 
                    class="side-img" 
                    :src="currentItem.secondImgs[rightRealInde].imgUrl"
                    @click="toggleFullScreen(currentItem.secondImgs[rightRealInde].imgUrl)">
                <div class="toggle">
                    <span class="previous" @click="previousImage('right')"><<</span>
                    <span class="num">{{ rightNowNum }}/{{ rightAllNum }}</span>
                    <span class="next" @click="nextImage('right')">>></span>
                </div>
            </div>
        </div>
    </div>
    <!-- 全屏查看 -->
    <div
      v-if="isFullScreen"
      class="full-screen"
      @click="toggleFullScreen(null)"
    >
      <img class="full-screen-img" :src="fullScreenSrc" />
    </div>
    <div v-if="showThird" class="modal-mask" @click="handleClose"></div>
    <ThirdItem
        v-if="showThird"
        :imgs="currentItem.thirdImgs"
        :thirdMenu="thirdMenu"
        :thirdIndex="thirdIndex"
        @close="handleClose"
        style="z-index:1000">
    </ThirdItem>
</template>

<script setup>
import { ref, watch, computed, defineProps } from 'vue';
import { LINKAGEEFFECT_IMG } from '@/utils/imgData/linkageEffect.js';
import ZoneClick from './ZoneClick.vue'
import CityClick from './CityClick.vue'
import ThirdItem from './ThirdItem.vue'
// 定义全屏状态和当前显示的全屏图片的src
const isFullScreen = ref(false)
const fullScreenSrc = ref('')

const  props  = defineProps({
    currentPage: Number
});
let showThird = ref(false) // 控制三级页面
let thirdMenu = ref(0) // 控制三级页面打开的menu
let thirdIndex = ref(0) // 控制三级页面打开的index
const items = ref(LINKAGEEFFECT_IMG);
const currentItem = ref(items.value[props.currentPage - 1] || items.value[0]);
console.log(currentItem);
const leftNowNum = ref(1); // 初始 leftNowNum 为 1
const rightNowNum = ref(1); // 初始 rightNowNum 为 1
watch(() =>props.currentPage,(newValue) => {
    currentItem.value = items.value[newValue - 1] || items.value[0]
    leftNowNum.value =  1 
    rightNowNum.value =  1 
  }
)
console.log(currentItem.value.secondImgs.length);

// 计算 leftAllNum 和 rightAllNum
const leftAllNum = computed(() => {
    return currentItem.value.secondImgs ? countEvenNumbers(currentItem.value.secondImgs.length) : 0
})
const rightAllNum = computed(() => {
    return currentItem.value.secondImgs ? countOddNumbers(currentItem.value.secondImgs.length) : 0
})
const leftRealInde = computed(() => {
    return leftNowNum.value ? leftRealInde.value = leftNowNum.value *2 -2 : 0
})
const rightRealInde = computed(() => {
    return rightNowNum.value ? rightRealInde.value = rightNowNum.value *2 -1 : 0
})
// 计算奇数个数
function countOddNumbers(length) {
    let count = 0;
    for (let i = 1; i <= length-1; i++) {
        if (i % 2 !== 0) {
            count++;
        }
    }
    return count;
}

// 计算偶数个数
function countEvenNumbers(length) {
    let count = 0;
    for (let i = 0; i <= length-1; i++) {
        if (i % 2 === 0) {
            count++;
        }
    }
    return count;
}

// 切换到前一张或后一张图片
function previousImage(container) {
    if (container === 'left' && leftNowNum.value > 1) {
        leftNowNum.value--;
    } else if (container === 'right' && rightNowNum.value > 1) {
        rightNowNum.value--;
    }
}

function nextImage(container) {
    if (container === 'left' && leftNowNum.value < leftAllNum.value) {
        leftNowNum.value++
    } else if (container === 'right' && rightNowNum.value < rightAllNum.value) {
        rightNowNum.value++
    }
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
// 三级界面的打开
const openThird = (obj) => {
    thirdIndex.value = obj.thirdIndex
    thirdMenu.value = obj.thirdMenu
    showThird.value = true
}
// 关闭三级
const handleClose = () => {
    showThird.value = false
}
</script>



<style lang="scss" scoped>
.all-container {
    position: absolute;
    left: -10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120%; 
    height: 80%;
    .center-container {
        flex: 2;
        width: 1070px;
        height: 780px;
        background-image: url("../../assets/imgSort/background/allForm-shadow.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative; 
        font-size: 40px;
        line-height: 50px;
        color: aliceblue;
        .centerimg-box {
            position: absolute;
            left: 50%;
            top: 52%;
            transform: translate(-50%, -50%);
            height: 65%;
            .center-img {
                height: 100%;
                width: auto;
                box-shadow: 0 0 50px 3px #3b9eb7;
            }
            
        }
        
        .top-title {
            position: absolute;
            top: 11%;
            left: 50%;
            transform: translateX(-50%);
            font-weight: 700;
            text-shadow: 0 0 2px rgba(0, 191, 255, 0.8), 0 0 2px rgba(0, 191, 255, 0.6), 0 0 30px rgba(0, 191, 255, 0.4);
        }

        .bottom-title {
            position: absolute;
            bottom: 8%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 25px;
            font-weight: 500;
        }
    }

    .left-container, .right-container {
        margin: 0px 20px;
        width: 300px;   
        height: 830px;
        flex: 1;
        position: relative; 
        font-size: 40px;
        line-height: 50px;
        .img-container {
            position: absolute;
            left: 62%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 59%;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            .side-title {
                height: 60px;
                line-height: 30px;
                font-size: 18px;
                text-align: center;
            }
            .side-img {
                width: 100%;
                height: auto;
                border-radius: 10px;
                box-shadow: 0 0 10px #5ce9dd;
                cursor: pointer;
                &:hover {
                    transform: translateY(-6px);
                }
            }
            .toggle {
                height: 60px;
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: flex-end;
                font-size: 20px;
                .num {
                    font-weight: 0;
                    font-size: 15px;
                    position: relative;
                    top: 4px;
                }
                .next,
                .previous {
                    font-weight: 1000;
                    font-size: 25px;
                    cursor: pointer;
                    &:hover {
                        transform: translateY(-6px);
                    }
                }
            }
        }
    }
    .left-container {    
        background-image: url("../../assets/imgSort/background/leftForm.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    .right-container {
        background-image: url("../../assets/imgSort/background/rightForm.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        .img-container {
            left: 38%;
        }
    }
}
// 全屏
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
