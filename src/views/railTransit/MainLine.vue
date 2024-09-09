<template>
    <div>
        <!-- 左表 -->
        <div class="left-form">
            <div class="form">
                <img class="img-title" src="../../assets/imgSort/s1RailTransit/titleForm1.png">
                <div class="form-chart">
                    <img class="img" src="../../assets/imgSort/s1RailTransit/s1Form1.png" >
                </div>
            </div>
            <div class="form">
                <img class="img-title" src="../../assets/imgSort/s1RailTransit/titleForm2.png">
                <div class="form-chart">
                    <img class="img" src="../../assets/imgSort/s1RailTransit/s1Form2.png" >
                </div>
            </div>
        </div>
        <!-- 右圈 -->
        <div class="chang" @click="selectMenuItem(0)">
            <img class="circle-img" src="../../assets/imgSort/s1RailTransit/chang.png" >
            <img class="circle-title" src="../../assets/imgSort/s1RailTransit/titlechang.png">
        </div>
        <div class="zhu" @click="selectMenuItem(1)">
            <img class="circle-img" src="../../assets/imgSort/s1RailTransit/zhu.png" >
            <img class="circle-title" src="../../assets/imgSort/s1RailTransit/titlezhu.png">
        </div>
        <div class="jing" @click="selectMenuItem(2)">
            <img class="circle-img" src="../../assets/imgSort/s1RailTransit/jing.png" >
            <img class="circle-title" src="../../assets/imgSort/s1RailTransit/titlejing.png">
        </div>
        <div class="cheng" @click="selectMenuItem(3)">
            <img class="circle-img" src="../../assets/imgSort/s1RailTransit/cheng.png" >
            <img class="circle-title" src="../../assets/imgSort/s1RailTransit/titlecheng.png">
        </div>
        <!-- 遮罩层 -->
        <div v-if="showImgComponent" class="modal-mask" @click="handleClose"></div>
        <!-- 干线弹窗 -->
        <MainLine_Show
            v-if="showImgComponent"
            @close="handleClose"
            style="z-index:1000"
            :items="menuItems"
            :currentItemIndex="currentItemIndex"
        />
        
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import MainLine_Show from './MainLine_Show.vue'
    import { MAINLINE_IMG } from '@/utils/imgData/mainLine.js' // 导入imgData数据
    const showImgComponent = ref(false)
    // 传给子的详细图片
    const menuItems = MAINLINE_IMG
    // 点击切换状态
    const currentItemIndex = ref(0)
    const selectMenuItem = (index) => {
    currentItemIndex.value = index
    if (!showImgComponent.value) {
        showImgComponent.value = !showImgComponent.value
    }
    }
    const handleClose = () => {
    showImgComponent.value = false
    }
</script>

<style lang="scss" scoped>
    .left-form {
        position: absolute;
        left: 5%;
        top: 95px;
        width: 30%;
        height: 900px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .form {
            position: relative;
            
            .img-title {
                height: 50px;
                width: auto;
            }
            .form-chart {
                position: relative;
                height: 350px;
                width: 650px;
                display: flex;
                justify-content: center;
                align-items: center;
                .img {
                    position: absolute;
                    top:5px;
                    width: 100%;
                    cursor: pointer;
                    &:hover {
                        transform: translateY(-6px);
                    }
                }
            }
        }
    }
    /* 圆柱互动样式 */
    .circle-title {
        position: relative;
        height: 38px;
        width: auto;
        left: 30px;
        top: -80px;
        &:hover {
            cursor: pointer;
            transform: translateY(-6px);
        }
    }
    .circle-img {
        width: 80px;
        height: auto;
        &:hover {
            cursor: pointer;
            transform: translateY(-6px);
        }
    }
    .chang {
        position: absolute;
        left: 1480px;
        top: 480px;
        .circle-img {
            width: 60px;
            height: auto;
        }
    }
    .zhu {
        position: absolute;
        left: 1380px;
        top: 680px;
        .circle-img {
            width: 95px;
            height: auto;
        }
    }
    .jing {
        position: absolute;
        left: 1420px;
        top: 400px;
    }
    .cheng {
        position: absolute;
        left: 1230px;
        top: 580px;
        .circle-img {
            width: 120px;
            height: auto;
        }
        .circle-title {
        position: relative;
        height: 38px;
        width: auto;
        left: -250px;
        top: -120px;
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
