<template>
    <ScaleScreen :width="1920" :height="1080">
        <div class="box">
            <Header :isFirstPage="true"></Header>
            <div class="mask-overall" v-if="showMask" @click="closeMask">
                <div class="mask_content">
                    <img :src="STATION_AREA[imgTypeIndex].imgURL.right[imgIndex - 1]">
                </div>
            </div>
            <div class="content">
                <div class="content_left">
                    <div class="inner_img">
                        <img :src="STATION_AREA[imgTypeIndex].imgURL.left[0]">
                    </div>
                </div>
                <div class="content_right">
                    <div class="inner">
                        <div class="inner_left">
                            <img src="../assets/previous.png" v-if="currentImgTypeTotalPge > 1" @click="leftChange">
                        </div>
                        <div class="inner_center">
                            <img :src="STATION_AREA[imgTypeIndex].imgURL.right[imgIndex - 1]" @click="openMask">
                        </div>
                        <div class="inner_right">
                            <img src="../assets/next.png" v-if="currentImgTypeTotalPge > 1" @click="rightChange">
                        </div>
                    </div>

                    <div class="bottom_page">
                        <span>{{ imgIndex }}/{{ currentImgTypeTotalPge }}</span>
                    </div>
                </div>
            </div>

            <div class="content_bottom">
                <ul class="content_bottom_item">
                    <li v-for="item, index in imgSrc" :key="index" @click="buttonSelect(index)"
                        @mouseenter="handleMouseenter(index)" @mouseleave="handleMouseleave(index)" ref="buttonList">
                        <!-- <img :src="item.url" alt=""> -->
                        <div class="title" :style="{ background: 'url(' + item.url + ')' }">
                            <span>{{ item.title }}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </ScaleScreen>
</template>
<script setup>
import ScaleScreen from '@/components/scale-screen/scale-screen.vue'
import Header from '@/components/header.vue'
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { STATION_AREA } from '@/utils/imgData/stationArea.js'
const router = useRouter()
const route = useRoute()
console.log(STATION_AREA);
const showMask = ref(false)
const openMask = () => {
    showMask.value = true
}
const closeMask = () => {
    showMask.value = false
}
const imgSrc = ref([
    {
        title: '站城',
        url: new URL('../assets/defaultCircle.png', import.meta.url).href,
        isActive: false
    },
    {
        title: '站区',
        url: new URL('../assets/defaultCircle.png', import.meta.url).href,
        isActive: false
    },
    {
        title: '站体',
        url: new URL('../assets/defaultCircle.png', import.meta.url).href,
        isActive: false
    }
])
//中间图片相关
const imgTypeIndex = ref(0)
imgTypeIndex.value = route.params.id
const imgIndex = ref(1)
const currentImgTypeTotalPge = ref(STATION_AREA[imgTypeIndex.value].imgURL.right.length)

const leftChange = () => {
    if (imgIndex.value == 1) {
        imgIndex.value = currentImgTypeTotalPge.value
    } else {
        imgIndex.value--
    }
}
const rightChange = () => {
    if (imgIndex.value == currentImgTypeTotalPge.value) {
        imgIndex.value = 1
    } else {
        imgIndex.value++
    }
}

//底部按钮ref
const buttonList = ref([])
//选中的按钮
const activeIndex = ref()

const buttonSelect = (index) => {
    imgSrc.value[activeIndex.value].isActive = false
    imgSrc.value[activeIndex.value].url = new URL('../assets/defaultCircle.png', import.meta.url).href

    imgIndex.value = 1
    activeIndex.value = index
    imgTypeIndex.value = index
    currentImgTypeTotalPge.value = STATION_AREA[imgTypeIndex.value].imgURL.right.length

    imgSrc.value[activeIndex.value].isActive = true

    router.push('/updateWay/' + index)

    resetbUttonStyle()
}
// 鼠标经过效果
const handleMouseenter = (index) => {
    if (activeIndex.value !== index) {
        buttonList.value[index].children[0].children[0].style.transform = 'translate(-70%, -90%)'
        imgSrc.value[index].url = new URL('../assets/activeCircle.png', import.meta.url).href
    }
}
const handleMouseleave = (index) => {

    if (activeIndex.value !== index) {
        buttonList.value[index].children[0].children[0].style.transform = 'translate(-60%, -120%)'
        imgSrc.value[index].url = new URL('../assets/defaultCircle.png', import.meta.url).href
    }
}

const resetbUttonStyle = () => {
    for (let i = 0; i < imgSrc.value.length; i++) {
        if (imgSrc.value[i].isActive) {
            imgSrc.value[activeIndex.value].url = new URL('../assets/activeCircle.png', import.meta.url).href
            imgSrc.value[activeIndex.value].isActive = true
            buttonList.value[i].children[0].children[0].style.transform = 'translate(-70%, -90%)'
        } else {
            buttonList.value[i].children[0].children[0].style.transform = 'translate(-60%, -120%)'
        }
    }
}

onMounted(() => {
    imgSrc.value[route.params.id].isActive = true
    activeIndex.value = Number(route.params.id)
    resetbUttonStyle()
})
</script>
<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
    background-image: url("../assets/imgSort/background/updateWay-background.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .mask-overall {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.65);
        height: 100%;
        animation: move .3s linear;
        animation-fill-mode: forwards;

        .mask_content {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            // background-color: #fff;
            width: 80%; //大小可自己定义
            height: 80%;
            img {
                width: 100%;
                opacity: 1;
            }
        }

        @keyframes move {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }

    }

    .content {
        margin-top: 30px;
        margin-left: 80px;
        color: rgb(255, 255, 255);
        width: 100%;
        height: 70%;
        // background-color: #fff;
        display: flex;
        justify-content: space-around;

        .content_left {
            width: 22%;
            height: 98%;
            background-image: url("../assets/leftForm.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;

            // background-color: #db3636;
            .inner_img {
                margin-top: 98px;
                margin-left: 40px;
                transform: perspective(500px) rotateY(5deg);

                img {
                    width: 360px;
                }
            }
        }


        .content_right {
            margin-top: 70px;
            margin-right: 150px;
            width: 55%;
            height: 82%;
            background-image: url("../assets/fisrtPageStationRightForm.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            // background-color: #3ee614;

            .inner {
                width: 100%;
                height: 80%;
                margin-top: 50px;
                // background-color: #3ee614;
                display: flex;
                justify-content: space-around;
                align-items: center;
                
                .inner_left {
                    width: 5%;
                    // height: 80%;
                    margin-left: 40px;
                    // background-color: #13e9df;
                    //图片居中
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;

                    img {
                        width: 60px;
                    }
                }
                .inner_center {
                    box-shadow: 0 0 50px 3px #3b9eb7; //参数分别为：水平偏移，垂直偏移，模糊半径，阴影尺寸

                    img {
                        width: 820px;
                    }
                }
                .inner_right {
                    width: 5%;
                    // height: 80%;
                    // background-color: #13e9df;
                    margin-right: 40px;
                    //图片居中
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;

                    img {
                        width: 60px;
                    }
                }
                .inner_left:hover,
                .inner_center:hover,
                .inner_right:hover {
                    transform: translateY(-6px);
                    transition: transform 0.5s;
                }
            }

            .bottom_page {
                margin-top: 10px;
                display: flex;
                justify-content: center;
                font-size: 25px;
            }
        }
    }

    .content_bottom {
        width: 100%;
        height: 30%;
        // background-color: #f21313;
        display: flex;
        justify-content: center;
        align-items: center;

        .content_bottom_item {
            display: flex;
            justify-content: space-around;
            position: relative;
            width: 70%;
            height: 100%;
            // background-color: #e88585;
            margin-left: 120px;

            li {
                margin-top: -64px;
                // background: #99db48;
                cursor: pointer;

                .title {
                    width: 300px;
                    height: 250px;
                    //行内元素垂直居中
                    display: inline-block;
                    margin-top: 30px;
                    position: relative;

                    span {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-70%, -90%);
                        color: #ffffff;
                        font-size: 40px;
                        font-weight: 500;
                        // font-family: '宋体';
                    }
                }
            }
        }
    }
}
</style>