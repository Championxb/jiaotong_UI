<template>
    <div class="footer">
        <ul class="nav">
            <li v-for="item, index in content" :key=index @click="handleClick(index)"
                @mouseenter="handleMouseEnter(index)" @mouseleave="handleMouseLeave(index)" class='line'>
                <div ref="getDom" class='box '>
                    <RouterLink to="/">
                        {{ item }}
                    </RouterLink>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted } from 'vue';
import { usePageStore } from "@/stores/modules/page";
const page = usePageStore()
const getDom = ref(null)
const content = ref([
    '应用案例',
    '综合交通数据',
    '站体数据',
    '站区数据',
    '站城数据',
    '国外高铁案例'
])
const router = useRouter();
onMounted(() => {
    checked(0)
})
const CheckedNum = ref(null)
const checked = (index) => {
    getDom.value[index].style.background = '#5ce9dd';
    getDom.value[index].style.borderRadius = '10em';
    getDom.value[index].style.opacity = '0.8';
    //取消选择
    if (CheckedNum.value !== null) {
        getDom.value[CheckedNum.value].style.background = 'none';
        getDom.value[CheckedNum.value].style.borderRadius = 'none';
        getDom.value[CheckedNum.value].style.opacity = '1';
    }
    CheckedNum.value = index;
}
const handleClick = (index) => {
    // getDom.value[index].style.background = '#5ce9dd';
    // getDom.value[index].style.backgroundColor = 'transparent';
    checked(index)
    setTimeout(() => {
        page.setFirstPage(index)
        page.setPageType(index == 5 ? 1 : 0)
        router.push('/firstPage/' + index)
    }, 1000)
    console.log(getDom.value[index].style)
}
const handleMouseEnter = (index) => {
    getDom.value[index].style.boxShadow = ' 0 0 10px #5ce9dd ';
    getDom.value[index].style.borderRadius = '10em';
    getDom.value[index].style.transition = 'all 0.3s cubic-bezier(0.4, 0, 1, 1 )';

}
// cubic-bezier(0.23, 2, 0.32, 1.05)
const handleMouseLeave = (index) => {
    getDom.value[index].style.border = 'none';
    getDom.value[index].style.borderRadius = 'none';
    getDom.value[index].style.boxShadow = ' none '
    console.log(index)
}

</script>

<style lang="scss" scoped>
.footer {
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;

    .nav {
        height: 50px;
        position: relative;
        border: none;
        border-radius: 10em;
        display: flex;
        list-style: none;
        background: #11516A;
        box-shadow: 0 0 6px #5ce9dd;
        /* padding: 10px; */
        display: flex;
        justify-content: space-around;
        align-items: center;


        li {
            .box {
                width: 300px;
                height: 40px;
                /* 文字居中 */
                display: flex;
                justify-content: center;
                align-items: center;
                /* 边框圆弧发光 */
                /* box-shadow: 0 0 10px #5ce9dd; */
                /* border-radius: 10em */
            }

            /* .box:hover {
                box-shadow: 0 0 10px #5ce9dd;
                border-radius: 10em;
                transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
            } */

            a {
                position: relative;
                /* padding: 15px 50px; */
                font: 800 22px '优设标题黑';
                border: none;
                outline: none;
                /* color: 口rgb(7, 100, 180); */
                color: #FFFFFF;
                display: inline-block;
                text-decoration: none;
                z-index: 3;
            }

        }

        .line:after {
            content: "|";
            position: absolute;
            color: #ffffff;
            top: 50%;
            transform: translateY(-50%) translateX(-13px);
            font-weight: 800;
            font-size: 24px;
            font-weight: 900;
        }


        .line:first-child:after {
            display: none;
        }
    }



}
</style>