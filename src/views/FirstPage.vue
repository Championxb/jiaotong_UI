<template>
    <ScaleScreen :width="1920" :height="1080">
        <div class="box1" v-if="currentSelectButtonPage == 0">
            <div class="return" @click="returnHome"> 返回</div>
            <div class="content">
                <div class="content_bottom">
                    <ul class="content_bottom_item">
                        <li v-for="item, index in contents" :key="index" @click="handleClick(index)">
                            <div class="title">
                                <span>{{ item }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="box2" v-if="currentSelectButtonPage == 5">
            <div class="return" @click="returnHome"> </div>
            <div class="content">
                <div class="content_bottom">
                    <ul class="content_bottom_item">
                        <li v-for="item, index in 4" :key="index" @click="handleClick(index)">
                            <div class="title">
                            </div>
                            <div class="pic">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </ScaleScreen>
</template>
<script setup>
import ScaleScreen from '@/components/scale-screen/scale-screen.vue'
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { usePageStore } from '@/stores/modules/page'
const route = useRoute()
const router = useRouter()
const currentSelectButtonPage = ref(0)
const page = usePageStore()
onMounted(() => {
    currentSelectButtonPage.value = route.params.id
    if (currentSelectButtonPage.value == 5) {
        page.setPageType(1)
    }
})

const returnHome = () => {
    // 返回上一级
    router.push('/index')
}
const contents = ref([
    '成都南站改造方案',
    '成都东站快速进站厅研究',
    '杭州城站地区城市更新规划',
    '成都地铁陆肖站TOD一体化城市设计',
    '深圳平湖枢纽空间适应性评价与优化',
    '成都双流区地下空间规划'
])

const handleClick = (index) => {
    router.push('/firstPage/appExample/' + index)
}
</script>

<style lang="scss" scoped>
.box1 {
    width: 100%;
    height: 100%;
    background-image: url("../assets/一级界面.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    color: rgb(255, 255, 255);

    .return {
        height: 29px;
        width: 70px;
        position: absolute;
        top: 15px;
        right: 10px;
        // background: chartreuse;
        align-content: center;
        text-align: center;
        font-weight: 600;
        cursor: pointer;
        ;
    }

    .content_bottom {
        width: 100%;
        height: 400px;
        // background: #e88585;
        // opacity: 0.5;
        position: absolute;
        bottom: 0;

        .content_bottom_item {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            position: relative;
            height: 405px;
            margin: 0 44px;

            li {
                width: 285px;
                height: 345px;
                margin-top: 20px;
                // background: #99db48;
                text-align: center;
                cursor: pointer;

                span {
                    //行内元素垂直居中
                    display: inline-block;
                    width: 250px;
                    margin-top: 30px;
                    font-size: 28px;
                    font-weight: 600;
                    font-family: '宋体';
                }
            }
        }
    }
}

.box2 {
    width: 100%;
    height: 100%;
    background-image: url("../assets/一级界面2.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    color: rgb(255, 255, 255);

    .return {
        height: 42px;
        width: 92px;
        position: absolute;
        top: 16px;
        right: 28px;
        // background: chartreuse;
        // opacity: 0.5;
        align-content: center;
        text-align: center;
        font-weight: 600;
        cursor: pointer;
    }

    .content_bottom {
        width: 100%;
        height: 400px;
        // background: #e88585;
        // opacity: 0.5;
        position: absolute;
        bottom: 0;

        .content_bottom_item {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-around;
            position: relative;
            height: 405px;
            margin: -5px 28px;

            li {
                width: 450px;
                height: 334px;
                margin-right: 15px;
                // background: #99db48;
                // text-align: center;
                cursor: pointer;

                .title {
                    width: 70px;
                    height: 334px;
                    // background: #138fe1;
                    display: inline-block;
                    margin-right: 12px;
                }

                .pic {
                    width: 368px;
                    height: 334px;
                    display: inline-block;
                    // background: #ea0caf;
                }
            }
        }
    }
}
</style>