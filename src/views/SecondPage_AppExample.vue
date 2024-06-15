<template>
    <ScaleScreen :width="1920" :height="1080">
        <div class="box">
            <div class="return" @click="returnHome"> 返回</div>
            <div class="top">
                <div class="left_arrow" @click="leftChange"></div>
                <span class="title"> {{ titles[page.pageType][route.params.id].name }}</span>
                <div class="right_arrow" @click="rightChange"></div>
            </div>
            <div class="center">
                <img :src="getImgSrc(page.pageType, currentPage, route.params.id)">
                <!-- <div class="center_left">
                    <div class="center_left_inner">
                        <div class="top_icon">
                            <img src="../assets/火车icon.png" style="width: 24%;">
                        </div>
                        <div class="inner_bottom">
                            <div class="bottom_icon">
                                <img src="../assets/布局.png" style="width: 50%; height: 40%;">
                                <span>布局</span>
                            </div>
                            <div class="bottom_icon">
                                <img src="../assets/换乘.png" style="width: 50%; height: 40%;">
                                <span>换乘</span>
                            </div>
                            <div class="bottom_icon">
                                <img src="../assets/模型.png" style="width: 60%; height: 50%;">
                                <span>模型</span>
                            </div>
                            <div class="bottom_icon">
                                <img src="../assets/设施.png" style="width: 60%; height: 50%;">
                                <span>设施</span>
                            </div>
                        </div>
                    </div>
                </div> -->

                <!-- <div class="center_right">
                    <div class="center_right_l"></div>
                    <div class="center_right_r">
                        <img src="../assets/成都东站.jpg" style="width: 80%; height: 35%;">
                    </div>
                </div> -->
            </div>
            <div class="bottom">
                <div class="bottom_left_arrow" @click="leftChangePage"></div>
                <div class="page">{{ currentPage }}/{{ titles[page.pageType][route.params.id].totalPage }}</div>
                <div class="bottom_right_arrow" @click="rightChangePage"></div>
            </div>
        </div>
    </ScaleScreen>
</template>
<script setup>
import ScaleScreen from '@/components/scale-screen/scale-screen.vue'
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { usePageStore } from '@/stores/modules/page'
import { getImgSrc } from '@/utils/getSrc'
const page = usePageStore()
const route = useRoute();
const router = useRouter();
const titles = ref([
    [
        {
            name: '成都南站改造方案',
            totalPage: 1
        },
        {
            name: '成都东站快速进站厅研究',
            totalPage: 1
        },
        {
            name: '杭州城站地区城市更新规划',
            totalPage: 1
        },
        {
            name: '成都地铁陆肖站TOD一体化城市设计',
            totalPage: 8
        },
        {
            name: '深圳平湖枢纽空间适应性评价与优化',
            totalPage: 13
        },
        {
            name: '成都双流区地下空间规划',
            totalPage: 21
        }
    ],
    [
        {
            name: '日本京都火车站',
            totalPage: 1
        },
        {
            name: '英国伦敦国王十字火车站',
            totalPage: 1
        },
        {

            name: '德国柏林中央火车站',
            totalPage: 1
        },
        {
            name: '日本上野火车站',
            totalPage: 1
        }
    ]

])
const currentId = ref(route.params.id)
const currentPage = ref(1)

onMounted(() => {
    console.log(page.pageType)
    console.log(route.params)
})
const returnHome = () => {
    // 返回上一级
    router.push('/firstPage/' + page.firstPage)
}

// const getImgSrc = (name, page, id) => {
//     id = Number(id) + 1
//     let fullNme = id + '-' + name + '图片' + String(page) + '.jpg'
//     const url = new URL('../assets/images/09二级界面案例/' + fullNme, import.meta.url).href
//     // return new URL(`../assets/images/09二级界面案例/${id}-${name}图片${page}.jpg`, import.meta.url).href
//     return url
// }
const leftChange = () => {
    currentPage.value = 1
    if (currentId.value > 0) {
        currentId.value--
    } else {
        currentId.value = titles.value[page.pageType].length - 1
    }
    router.push('/firstPage/appExample/' + currentId.value)
}

const rightChange = () => {
    currentPage.value = 1
    if (currentId.value < titles.value[page.pageType].length - 1) {
        currentId.value++
    } else {
        currentId.value = 0
    }
    router.push('/firstPage/appExample/' + currentId.value)
}

const leftChangePage = () => {
    if (currentPage.value > 1) {
        currentPage.value--
    } else {
        currentPage.value = titles.value[page.pageType][currentId.value].totalPage
    }
}
const rightChangePage = () => {
    if (currentPage.value < titles.value[page.pageType][currentId.value].totalPage) {
        currentPage.value++
    } else {
        currentPage.value = 1
    }
}
</script>
<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
    background-image: url("../assets/二级界面.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    color: rgb(255, 255, 255);

    .return {
        height: 29px;
        width: 70px;
        position: absolute;
        top: 13px;
        right: 10px;
        // background: chartreuse;
        align-content: center;
        text-align: center;
        font-weight: 600;
        cursor: pointer;
    }

    .top {
        //居中 不使用position
        position: absolute;
        top: 36px;
        left: 50%;
        transform: translate(-50%, 0);
        width: 652px;
        height: 115px;
        // background: #c63030;
        opacity: 0.8;

        .left_arrow {
            // 行内块元素
            display: inline-block;
            width: 50px;
            height: 115px;
            // background: #08d805;
            position: absolute;
            // 箭头形状 尖端在左
            clip-path: polygon(0 50%, 100% 0, 100% 100%);
            cursor: pointer;
        }

        .title {
            // 自适应高度
            height: 100%;
            // 居中
            position: absolute;
            top: 0;
            left: 50%;
            // background: #000;
            transform: translate(-50%, 0);
            font-size: 35px;
            font-family: "宋体";
            display: flex;
            align-items: center;
            text-align: center;
        }

        .right_arrow {
            // 行内块元素
            display: inline-block;
            width: 50px;
            height: 115px;
            // background: #08d805;
            position: absolute;
            // 箭头形状 尖端在右
            clip-path: polygon(0 0, 100% 50%, 0 100%);
            right: 0;
            cursor: pointer;
        }
    }

    .center {
        width: 96%;
        height: 800px;
        position: absolute;
        //居中
        left: 50%;
        transform: translate(-50%, 0);
        top: 180px;
        display: flex;
        justify-content: space-around;

        // background: #b82222;
        .center_left {
            height: 90%;
            width: 25%;
            background-color: rgba(183, 211, 237, 0.3);
            border: solid 3px rgba(255, 255, 255, 1);
            border-radius: 80px;

            .top_icon {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 10px;
            }

            .inner_bottom {

                height: 600px;
                padding: 0 10px 0 10px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                align-items: center;

                .bottom_icon {
                    width: 150px;
                    height: 180px;
                    background-color: rgba(189, 206, 221, 0.5);
                    border-radius: 30px;
                    align-items: center;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    color: black;
                    //阴影
                    box-shadow:
                        7px 7px 5px 4px rgba(0, 0, 0, .4), //参数为水平偏移，垂直偏移，模糊半径，阴影尺寸
                        -7px -7px 15px 2px rgba(255, 255, 255, .2);

                    span {
                        font-size: 20px;
                        font-weight: 600;
                    }
                }

            }

        }

        .center_right {
            height: 90%;
            width: 65%;
            background-color: rgba(183, 211, 237, 0.3);
            border: solid 3px rgba(255, 255, 255, 1);
            border-radius: 80px;
            display: flex;

            .center_right_l {
                height: 100%;
                width: 50%;
                background: #f7f7f7;
                border-radius: 80px 0 0 80px;
                opacity: 0.2;
            }

            .center_right_r {
                height: 100%;
                width: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
            }

            img {
                // filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.5));//参数为水平偏移，垂直偏移，模糊半径，阴影颜色
                mask-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 1)20%, rgba(235, 15, 15, 0) 100%);
                border-radius: 0px;
            }

            .center_right_r::before {
                content: '';
                position: absolute;
                width: 80%;
                height: 35%;
                background-image: url('../assets/成都东站.jpg');
                background-size: cover;
                background-position: center;
                filter: blur(20px);
                z-index: 0;
            }
        }
    }

    .bottom {
        width: 100%;
        height: 60px;
        // background: #d62525;
        // opacity: 0.8;
        position: absolute;
        bottom: 15px;
        display: flex;

        .bottom_left_arrow {
            width: 45px;
            height: 50px;
            // background: #08d805;
            clip-path: polygon(0 50%, 100% 0, 100% 100%);
            position: absolute;
            bottom: 4px;
            left: 28px;
            cursor: pointer;
        }

        .bottom_right_arrow {
            width: 45px;
            height: 60px;
            // background: #08d805;
            clip-path: polygon(0 0, 100% 50%, 0 100%);
            position: absolute;
            bottom: 3px;
            right: 25px;
            cursor: pointer;
        }

        .page {
            width: 60px;
            height: 60px;
            border-radius: 25px;
            position: absolute;
            // background: #000;
            bottom: 3px;
            left: 50%;
            transform: translate(-50%, 0);
            color: rgb(5, 5, 5);
            font-size: 22px;
            font-family: "宋体";
            font-weight: 900;
            align-items: center;
            display: flex;
            justify-content: center;
        }

    }
}
</style>