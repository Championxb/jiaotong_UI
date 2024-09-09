<template>
    <!-- 左项 -->
    <div class="left-form">
        <img class="bck" src="../../assets/imgSort/s1RailTransit/leftShadow.png">
        <div class="imglist">
            <div v-for="(item, index) in leftItems" :key="index" class="image-item" @click="item.active && selectMenuItem()">
                <div :class="[{'mask': item.active}]"></div>
                <img 
                    :class="['img', { 'img-can': item.active }]" 
                    :src="item.src" 
                >
                <img class="text-img" src="../../assets/imgSort/s1RailTransit/cityline-shanghai.png">
                <div class="text-box1">
                    <span class="text-name">{{ item.textName }}</span>
                    <span>&nbsp;</span>
                    <span class="text-km">{{ item.textKm }}</span>
                    <span> km </span>
                </div>
                <div class="text-box2">
                    <span class="text-line">{{ item.textLine }}</span>
                    <span> 线路 </span>
                    <span class="text-line">{{ item.textNum }}</span>
                    <span> 万日客运量</span>
                </div>
                
            </div>
        </div>
    </div>

    <!-- 右项 -->
    <div class="right-form">
        <img class="bck" src="../../assets/imgSort/s1RailTransit/rightShadow.png">
        <div class="imglist">
            <div v-for="(item, index) in rightItems" :key="index" class="image-item">
                <img 
                    :class="['img', { 'img-can': item.active }]" 
                    :src="item.src" 
                    @click="item.active && selectMenuItem()"
                >
                <img class="text-img" src="../../assets/imgSort/s1RailTransit/cityline-shanghai.png">
                <div class="text-box1">
                    <span class="text-name">{{ item.textName }}</span>
                    <span>&nbsp;</span>
                    <span class="text-km">{{ item.textKm }}</span>
                    <span> km </span>
                </div>
                <div class="text-box2">
                    <span class="text-line">{{ item.textLine }}</span>
                    <span> 线路 </span>
                    <span class="text-line">{{ item.textNum }}</span>
                    <span> 万日客运量</span>
                </div>
            </div>
        </div>
    </div>
    <!-- 遮罩层 -->
    <div v-if="showImgComponent" class="modal-mask" @click="handleClose"></div>
    <!-- 地铁弹窗 -->
    <CityLine_Show
        v-if="showImgComponent"
        @close="handleClose"
        style="z-index:1000"
    />
</template>


<script setup>
    import { ref } from 'vue'
    import CityLine_Show from './CityLine_Show.vue'

    // 导入imgData数据
    import { CITYLINE_LEFT, CITYLINE_RIGHT } from '@/utils/imgData/cityLine.js' 

    const showImgComponent = ref(false)

    // 左侧图片和文字数据
    const leftItems = CITYLINE_LEFT
    // 右侧图片和文字数据
    const rightItems = CITYLINE_RIGHT
    // 点击切换状态
    const selectMenuItem = () => {
    if (!showImgComponent.value) {
        showImgComponent.value = !showImgComponent.value
    }
    }

    const handleClose = () => {
    showImgComponent.value = false
    }
</script>


<style lang="scss" scoped>
    .left-form, .right-form {
    position: absolute;
    top: 95px;
    z-index: 999;
    .bck {
        height: 100%;
        width: auto;
    }

    .imglist {
        position: absolute;
        top: 6%;
        width: 100%;
        height: 86%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    }

    .left-form {
    left: 0%;
    width: 400px;
    height: 925px;

    .imglist .image-item {
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative; 
        .img {
            width: 90%;
            height: auto;
        }
        .img-can {
            width: 90%;
            height: auto;
            cursor: pointer;
            &:hover {
                width: 100%;
                transform: translateY(-6px);
            }
        }
        .mask {
            position: absolute;
            width: 100%;
            height: 100%;
            cursor: pointer;
            z-index: 999;
            &:hover ~ .img-can {
                width: 100%;
                transform: translateY(-6px);
            }
        }
        .text-img {
            position: absolute;
            left: 12%;
            top: 17%;
            width: 60px;
            height: 60px;
            background-color: #fff;
        }
        color: #fff;
        .text-box1 {
            position: absolute;
            left: 35%;
            top: 17%;
            font-size: 16px;
            .text-name {
                font-size: 30px;
                font-weight: 550;
            }
            .text-km {
                color: #f4841c;
                font-size: 30px;
                font-weight: 550;
            }

        }
        .text-box2 {
            position: absolute;
            left: 35%;
            top: 46%;
            font-size: 11px;
            .text-line {
                font-size: 18px;
                font-weight: 550;
            }
        }
    }
    }

    .right-form {
    right: 0;
    width: 350px;
    height: 923px;

    .imglist .image-item {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative; 
        .img {
        width: 90%;
        height: auto;
        }
        .img-can {
        width: 90%;
        height: auto;
            &:hover {
                width: 100%;
                transform: translateY(-6px);
                cursor: pointer;
            }
        }
        .text-img {
            position: absolute;
            left: 10%;
            top: 13%;
            width: 60px;
            height: 60px;
            background-color: #fff;
        }
        color: #fff;
        .text-box1 {
            position: absolute;
            left: 35%;
            top: 26%;
            font-size: 16px;
            .text-name {
                font-size: 30px;
                font-weight: 550;
            }
            .text-km {
                color: #f4841c;
                font-size: 30px;
                font-weight: 550;
            }
        }
        .text-box2 {
            position: absolute;
            left: 20%;
            top: 74%;
            font-size: 13px;
            font-weight: 100;
            .text-line {
                font-size: 18px;
                font-weight: 550;
            }
        }
    }
    }
    .text-img,
    .text-name,
    .text-km,
    .text-line { 
        pointer-events: none; 
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
