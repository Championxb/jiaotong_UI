<template>
    <ScaleScreen :width="1920" :height="1080">
        <div class="box">
            <Header :isFirstPage="true"></Header>
            <div class="contents">
                <div class="content_left" @mouseenter="onMouseenter" @mouseleave="onMouseleave"
                    :style="{ '--ydeg': `${ydeg}deg` }" v-if="currentSelectButtomIndex == -1">
                    <div class="left_bg"></div>
                    <div class="left_title">站点信息</div>
                    <div class="text_wrap">
                        <vue3-seamless-scroll class="scroll-wrap" :list="FIRST_STATION_TEXT[stationIndex].text"
                            :hover="true" :limitScrollNum="5" :step="0.5">
                            <div class="ui-wrap" v-for="(item, index) in FIRST_STATION_TEXT[stationIndex].text"
                                :key="index">
                                <span>{{ item.title }}</span>
                            </div>
                            <div class="ui-wrap" v-for="(item, index) in FIRST_STATION_TEXT[stationIndex].text"
                                :key="index">
                                <span>{{ item.title }}</span>
                            </div>
                        </vue3-seamless-scroll>
                    </div>
                </div>

                <div class="content_center" v-if="currentSelectButtomIndex == -1">
                    <div class="center_bg_flowline"></div>
                    <div class="center_bg">
                        <img src="../assets/midTrain.png">
                    </div>
                    <!-- <div class="aim">
                        <img src="../assets/defaultHalo.png">
                    </div> -->
                    <template class="stations">
                        <ul>
                            <li v-for="(item, index) in firstHalf" :key="'first-' + index"
                                :style="[getStyle(index), index === selectedStationIndex1 ? stationSelectStyle : {}]"
                                @click="addBG1(index + 3)">
                                <div  class="station_bg" :style="getStationDivStyle(index === selectedStationIndex1)" >
                                    <img src=" ../assets/stationLogo.png">
                                    <span> {{ item }}</span>
                                    <span class='largeStationName'> {{ item }}</span>
                                </div>
                            </li>
                            <!-- 添加箭头元素 -->
                            <li :style="arrowStyle" class="arrow" @click="toggle">
                                <div>
                                    <img src="../assets/upArrow.png" v-if="!isUpArrow">
                                    <img src="../assets/upArrowColor.png" v-if="isUpArrow">
                                    <div class="spot" v-if="isUpArrow">
                                        <img src="../assets/spot.png">
                                        <img src="../assets/spotColor.png">
                                    </div>
                                    <div class="spot" v-if="!isUpArrow">
                                        <img src="../assets/spotColor.png">
                                        <img src="../assets/spot.png">
                                    </div>
                                    <img v-if="isUpArrow" src="../assets/downArrow.png">
                                    <img v-if="!isUpArrow" src="../assets/downArrowColor.png">
                                </div>
                            </li>
                            <!-- 插入箭头之后的li -->
                            <li v-for="(item, index) in secondHalf" :key="'second-' + index"
                                :style="[getStyle(index + firstHalf.length + 1), index === selectedStationIndex2 ? stationSelectStyle : {}]"
                                @click="addBG2(index)">
                                <div class="station_bg" :style="getStationDivStyle(index === selectedStationIndex2)" >
                                    <img src="../assets/stationLogo.png" alt="Station Logo">
                                    <span>{{ item }}</span>
                                    <span class='largeStationName'> {{ item }}</span>
                                </div>
                            </li>
                        </ul>
                    </template>
                </div>

                <div class="content_center2" v-if="currentSelectButtomIndex !== -1">
                    <div class="center2_title">{{ currentStation }}</div>
                    <div class="center2_logo">
                        <img src=" ../assets/stationLogo.png">
                        <span>{{ currentStation }}</span>
                    </div>
                    <div class="center2_bg">
                        <div class="left_arrow" v-if="selectTypeLength > 1" @click="leftChangeImg"></div>
                        <!-- <img :src="getImgSrc(titles[route.params.id].name, currentPage, route.params.id)"> -->
                        <img :src="currentTypeAllImg[currentTypeImgIndex]">
                        <div class="right_arrow" v-if="selectTypeLength > 1" @click="rightChangeImg"></div>
                    </div>
                </div>

                <div class="content_right" @mouseenter="onMouseenter" @mouseleave="onMouseleave"
                    :style="{ '--ydeg': `${ydeg}deg` }" v-if="currentSelectButtomIndex == -1">
                    <div class="right_bg"></div>
                    <div class="right_title">图片展示</div>

                    <div class="right_img">
                        <div class="img_wrap">
                            <!-- <img src="../assets/pic/成都东.png"> -->
                            <img :src="FIRST_STATION_DATA[stationIndex].url[0]">

                            <span>{{ FIRST_STATION_DATA[stationIndex].imgName[0] }}</span>
                        </div>
                        <div class="img_wrap">
                            <!-- <img src="../assets/pic/成都东站内部.png"> -->
                            <img :src="FIRST_STATION_DATA[stationIndex].url[1]">
                            <span>{{ FIRST_STATION_DATA[stationIndex].imgName[1] }}</span>
                        </div>
                    </div>
                </div>
                <div class="back" v-if="currentSelectButtomIndex !== -1" @click="turnBack"></div>
            </div>
        </div>
        <Foot @getSelectButtonIndex='getSelectButtonIndex' :buttonIndex="currentSelectButtomIndex"></Foot>
    </ScaleScreen>
</template>
<script setup>
import ScaleScreen from '@/components/scale-screen/scale-screen.vue'
import Header from '@/components/header.vue'
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import Foot from '@/components/firstFooter.vue'
import { ref, onMounted, watch, computed } from 'vue'
import { FIRST_STATION_DATA, FIRST_STATION_TEXT } from '@/utils/firstStationData.js'
import { color } from 'echarts';
const ydeg = ref(0)
const onMouseenter = (e) => {
    if (e.target.className === 'content_left') {
        ydeg.value = -4
    } else {
        ydeg.value = 4
    }
}
const onMouseleave = () => [
    ydeg.value = 0
]
const isUpArrow = ref(false)
//倒叙
// const stations = ref([
//     '沙坪坝站',
//     '南京南站',
//     '长沙站',
//     '杭州西站',
//     '杭州东站',
//     '上海虹桥',
//     '重庆西站',
//     '重庆北站',
//     '成都站',
//     '成都南站',
//     '成都东站',
//     '成都西站'
// ])
const stationsGroup2 = ref([
    '长沙站',
    '南京南站',
    '沙坪坝站',
    '上海虹桥',
    '杭州东站',
    '杭州西站',

]);
const stationsGroup1 = ref([
    '成都站',
    '重庆北站',
    '重庆西站',
    '成都西站',
    '成都东站',
    '成都南站',

]);
const currentGroupStartIndex = ref(0);
const currentGroup = ref(1);
//当前站点组的所有站点
const currentStations = computed(() => {
    return currentGroup.value === 1 ? stationsGroup1.value : stationsGroup2.value;
});
//所选底部的按钮类型
const currentSelectButtomIndex = ref(-1)

const shutDownInterval = () => {
    clearInterval(timer.value);
    timer.value = null;
}

// 选中的station的索引
const selectedStationIndex1 = ref(null);
const selectedStationIndex2 = ref(null);

const src = new URL('../assets/defaultHalo.png', import.meta.url).href

const stationSelectStyle = ref({
    background: `url(${src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '190px 160px',
});
//得到当前站点序号 且有锁定效果
const addBG1 = (index) => {
    stationIndex.value = index + currentGroupStartIndex.value
    selectedStationIndex2.value = null
    selectedStationIndex1.value = index - 3;
    shutDownInterval()
    autoChangStation()

    // console.log(index)
}

const addBG2 = (index) => {
    stationIndex.value = index + currentGroupStartIndex.value
    selectedStationIndex1.value = null
    selectedStationIndex2.value = index;
    shutDownInterval()
    autoChangStation()
    // console.log(index)
}
const getStationDivStyle = (isSelected) => {
    // 根据是否选中来决定是否放大
    if (isSelected) {
        return {
            transform: 'scale(1.15)',
            transition: 'transform 0.3s ease',
        };
    } else {
        return {};
    }
};
//所获对应按钮的图片数量，默认为一张
const selectTypeLength = ref(1)
//当station底部所有按钮对应图片
const getImgSrc = (index, type) => {
    console.log(selectTypeLength.value)
    return FIRST_STATION_DATA[stationIndex.value].imgSrc[type]
}
//当前所点击的底部按钮得到的对应所有图片
const currentTypeAllImg = ref(null)
//当前所点击的底部按钮的index
const currentTypeImgIndex = ref(0)

const leftChangeImg = () => {
    if (currentTypeImgIndex.value === 0) {
        currentTypeImgIndex.value = selectTypeLength.value - 1
    } else {
        currentTypeImgIndex.value--
    }
}
const rightChangeImg = () => {
    if (currentTypeImgIndex.value === selectTypeLength.value - 1) {
        currentTypeImgIndex.value = 0
    } else {
        currentTypeImgIndex.value++
    }

}
//得到当前所选底部按钮的index,并根据index得到button对应的图片
const getSelectButtonIndex = (index) => {
    // console.log(index)
    currentSelectButtomIndex.value = index
    //重置所选按钮图片index
    currentTypeImgIndex.value = 0
    if (index == -1) {
        autoChangStation()
        return
    }
    switch (index) {
        case 0:
            selectTypeLength.value = FIRST_STATION_DATA[stationIndex.value].imgSrc.layout.length
            currentTypeAllImg.value = getImgSrc(selectTypeLength.value - 1, 'layout')
            // console.log(currentTypeAllImg.value)
            shutDownInterval()
            break;
        case 1:
            selectTypeLength.value = FIRST_STATION_DATA[stationIndex.value].imgSrc.transfer.length
            currentTypeAllImg.value = getImgSrc(selectTypeLength.value - 1, 'transfer')
            // console.log(currentTypeAllImg.value)
            shutDownInterval()
            break;
        case 2:
            selectTypeLength.value = FIRST_STATION_DATA[stationIndex.value].imgSrc.model.length
            currentTypeAllImg.value = getImgSrc(selectTypeLength.value - 1, 'model')
            // console.log(currentTypeAllImg.value)
            shutDownInterval()
            break;
        case 3:
            selectTypeLength.value = FIRST_STATION_DATA[stationIndex.value].imgSrc.facility.length
            currentTypeAllImg.value = getImgSrc(selectTypeLength.value - 1, 'facility')
            shutDownInterval()
            break;
    }
}
//底部返回
const turnBack = () => {
    currentSelectButtomIndex.value = -1
    autoChangStation()
}
onMounted(() => {
    getStyle()
    autoChangStation()
    addBG2(0)
})


const startAngle = ref(0);
const timer = ref(null);
//当前所选站点序号
const stationIndex = ref(0);
//当前所选站点名称
const currentStation = ref(FIRST_STATION_DATA[stationIndex.value].name);

watch(stationIndex, (val) => {
    currentStation.value = FIRST_STATION_DATA[stationIndex.value].name;
    // console.log(currentStation.value)
});
const toggle = () => {
    shutDownInterval()
    // startAngle.value = startAngle.value + 30;
    // stationIndex.value = (stationIndex.value + 1) % stations.value.length;
    //箭头方向切换
    isUpArrow.value = !isUpArrow.value;
    //切换station组
    currentGroupStartIndex.value = currentGroupStartIndex.value === 6 ? 0 : 6;
    //当箭头切换时，更新当前站点序号，以即使刷新右边图片
    stationIndex.value = currentGroupStartIndex.value;
    //重新锁定站点
    addBG2(0)
    //切换station组
    currentGroup.value = currentGroup.value === 1 ? 2 : 1;
};
const autoChangStation = () => {
    timer.value = setInterval(() => {
        // startAngle.value = startAngle.value + 30;
        // stationIndex.value = (stationIndex.value + 1) % stations.value.length;
        //箭头方向切换
        isUpArrow.value = !isUpArrow.value;
        //切换station组
        currentGroupStartIndex.value = currentGroupStartIndex.value === 6 ? 0 : 6;
        //当箭头切换时，更新当前站点序号，以即使刷新右边图片
        stationIndex.value = currentGroupStartIndex.value;
        //重新锁定站点
        addBG2(0)
        //切换station组
        currentGroup.value = currentGroup.value === 1 ? 2 : 1;
    }, 10000);
};
const getStyle = (index) => {
    // const totalItems = stations.value.length;
    const totalItems = currentStations.value.length + 1; // 包括箭头的总数
    const radius = 300;
    // const startAngle = 0;
    const angle = (index / totalItems) * 360 + 210;

    return {
        transition: `all 0.5s ease-in-out`,
        transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`//参数分别是旋转角度，平移距离，旋转角度
    };
}
// 分成两部分的站点
const firstHalf = computed(() => currentStations.value.slice(0, Math.ceil(currentStations.value.length / 2)));//slice() 方法可从已有的数组中返回选定的元素。
const secondHalf = computed(() => currentStations.value.slice(Math.ceil(currentStations.value.length / 2)));

// 添加箭头样式
const arrowStyle = computed(() => {
    const totalItems = currentStations.value.length + 1; // 包括箭头的总数
    const radius = 300;
    const angle = (firstHalf.value.length / totalItems) * 360 + startAngle;
    return {
        transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
        cursor: 'pointer'
    };
});
</script>
<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
    background-image: url("../assets/imgSort/background/railComplex-background.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;

    .contents {
        .content_left {
            position: relative;
            transform: perspective(500px) rotateY(var(--ydeg, 0deg));
            transition: all 0.1s cubic-bezier(0.4, 0, 1, 1);

            .left_bg {
                width: 450px;
                height: 850px;
                background-image: url("../assets/leftForm.png");
                background-size: 100% 100%;
                background-repeat: no-repeat;
                position: relative;
                top: 40px;
                left: 40px;

            }

            .left_title {
                position: absolute;
                top: 72px;
                left: 220px;
                font-size: 30px;
                font-weight: 900;
                transform: rotate(5deg);
            }

            .scroll-wrap {
                position: absolute;
                top: 200px;
                left: 100px;
                font-size: 22px;
                height: 600px;
                width: 360px;
                margin: 0 auto;
                overflow: hidden;
                cursor: pointer;
                transform: perspective(500px) rotateY(10deg);

                .ui-wrap {
                    list-style: none;
                    padding: 5px 0;
                    margin: 0 auto;

                    .li-item {
                        display: flex;
                        align-items: center;
                        width: 100%;
                        // text-align: center;
                    }
                }
            }

            .text_wrap {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .left_text {
                height: 300px;
                position: absolute;
                top: 200px;
                left: 100px;
                font-size: 25px;

                font-weight: 900;
                transform: perspective(500px) rotateX(-1deg) rotateY(10deg);
            }
        }

        .content_center {
            position: relative;
            @keyframes rotate {
            from {
                transform: rotate(360deg);
            }
            to {
                transform: rotate(0deg);
            }
            }
            .center_bg_flowline {
                width: 780px;
                height: 780px;
                background-image: url("../assets/flowLine.png");
                background-size: 100% 100%;
                background-repeat: no-repeat;
                // 内容居中
                position: absolute;
                left: 10%;
                top: 7%;
                transform: translate(-50%,-50%);
                animation: rotate 15s linear infinite;
                animation-play-state: running;
                opacity: 0.5;
            }
            .center_bg {
                width: 800px;
                height: 800px;
                margin: 100px 0 0 150px;
                // background-image: url("../assets/flowLine.png");
                background-size: 90% 90%;
                background-repeat: no-repeat;
                // 内容居中
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    margin: -100px 0 0 -80px;
                    width: 28%;
                    transition: all 0.1s cubic-bezier(0.4, 0, 1, 1);

                }

                img:hover {
                    margin: -100px 0 0 -80px;
                    // width: 28%;
                    transition: all 0.1s cubic-bezier(0.4, 0, 1, 1);
                }
                
            }

            .aim {
                position: absolute;
                top: 220px;
                right: 90px;

                img {
                    width: 230px;
                }
            }

            .stations {
                position: absolute;
                top: 150px;
                // right: 25px;
                display: flex;

                li {
                    position: absolute;
                    width: 190px;
                    height: 170px;
                    // background: #000;
                    // opacity: 0.5;
                    // background: url('../assets/defaultHalo.png');
                    // background-repeat: no-repeat;
                    // background-size: 220px 190px;
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    align-items: center;
                    top: 230px;
                    left: 380px;
                    transform-origin: center center;
                    // .station_bg {
                    //     background: url('../assets/defaultHalo.png');
                    //     background-repeat: no-repeat;
                    // }

                    div {
                        img {
                            position: relative;
                            top: 40px
                        }

                        span {
                            display: inline-block;
                            // background: #d22121;
                            width: 25px;
                            height: 70px;
                            // writing-mode: vertical-rl; //文字竖排
                            font-size: 15px;
                            position: relative;
                            left: 100px;
                            top: -70px;
                            // text-align: center;
                            display: flex;
                            align-items: center;
                            justify-content: center;

                        }

                        .largeStationName {
                            // writing-mode: vertical-lr; //文字横排
                            width: 160px;
                            height: 30px;
                            font-size: 30px;
                            position: relative;
                            left: 15px;
                            top: -30px;
                            display: flex;
                            text-align: center;
                            align-items: center;
                            color: #5ce9dd;
                        }
                    }
                }

                li:hover:not(.arrow) {
                    cursor: pointer;
                    top: 260px;
                    animation: bounce 1.2s infinite cubic-bezier(0.4, 0, 1, 1);
                }
               

                @keyframes bounce {
                    0% {
                        top: 220px;
                    }

                    40% {
                        top: 230px;
                    }

                    40% {
                        top: 210px;
                    }

                    100% {
                        top: 220px;
                    }
                }

                .arrow {
                    // background: #000;
                    margin-left: 330px;
                    margin-top: -10px;
                    // 旋转箭头
                    transform: rotate(3deg);
                    text-align: center;
                    align-items: center;


                    .spot {
                        //竖直排列
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        margin-left: 40px;


                        img:nth-child(1) {
                            width: 50px;
                            // background: #b53636;
                            margin-bottom: 5px;
                        }

                        img:nth-child(2) {
                            width: 50px;
                            // background: #6aaa0b;
                        }
                    }
                }
            }
        }

        .content_center2 {
            // background: #000;
            width: 85%;
            height: 60%;
            position: relative;
            // 位于box中间
            left: 50%;
            top: 55%;
            transform: translate(-50%, -55%);
            display: flex;
            justify-content: center;
            align-items: center;

            .center2_title {
                position: absolute;
                top: -150px;
                font-size: 55px;
                font-family: '宋体';
                // font-weight: 900;
            }

            .center2_logo {
                position: absolute;
                top: -150px;
                left: 400px;
                // background: #000;

                img {
                    width: 160px;
                }

                span {
                    position: absolute;
                    left: 110px;
                    top: 20px;
                    font-size: 20px;
                    //文字竖直
                    writing-mode: vertical-rl;
                    // background-color: #5ce9dd;
                }
            }

            .left_arrow {
                position: absolute;
                left: 100px;
                top: 50%;
                transform: translateY(-50%);
                width: 100px;
                height: 150px;
                background-image: url("../assets/左键.png");
                background-size: 100% 100%;
                background-repeat: no-repeat;
            }

            .right_arrow {
                position: absolute;
                right: 100px;
                top: 50%;
                transform: translateY(-50%);
                width: 100px;
                height: 150px;
                background-image: url("../assets/右键.png");
                background-size: 100% 100%;
                background-repeat: no-repeat;
            }

            .center2_bg {
                width: 100%;
                height: 100%;
                background-image: url("../assets/边框.png");
                background-size: 100% 100%;
                background-repeat: no-repeat;

                // 内容居中
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 60%;
                    height: 80%;
                }
            }

        }

        .content_right {
            position: relative;
            transform: perspective(500px) rotateY(var(--ydeg));
            transition: all 0.1s cubic-bezier(0.4, 0, 1, 1);

            .right_bg {
                width: 450px;
                height: 850px;
                background-image: url("../assets/rightForm.png");
                background-size: 100% 100%;
                background-repeat: no-repeat;
                position: relative;
                top: 40px;
                right: 40px;
            }

            .right_title {
                position: absolute;
                top: 72px;
                right: 220px;
                font-size: 30px;
                font-weight: 900;
                transform: rotate(-4deg);
            }

            .right_img {
                position: absolute;
                top: 150px;

                .img_wrap {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    img {
                        width: 300px;
                        height: 250px;
                        margin: 20px 20px 15px 20px;
                        border-radius: 10px;
                        box-shadow: 0 0 10px #5ce9dd;
                        transform: perspective(500px);
                    }

                    span {
                        font-size: 20px;
                        font-weight: 900;
                        margin-bottom: 40px;
                    }

                }

                .img_wrap:nth-child(1) {
                    img {
                        transform: perspective(1600px) rotate(1deg) rotateX(10deg) rotateY(-22deg);

                    }
                }



                .img_wrap:nth-child(2) {
                    img {
                        transform: perspective(500px) rotate(1deg) rotateX(0deg) rotateY(-10deg);
                    }

                    span {
                        transform: rotate(4deg);
                    }
                }
            }
        }

        .back {
            width: 100px;
            height: 50px;
            background: #000;
            background-image: url("../assets/返回.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            position: absolute;
            right: 200px;
            bottom: 50px;
            cursor: pointer;
        }
    }
}
</style>