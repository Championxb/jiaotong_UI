<template>
    <div class="foot">
        <div class="foot_content">
            <ul class="nav">
                <li v-for="item, index in content" :key=index @click="handleClick(index)">
                    <div class="out_wrap">
                        <div class="wrap" ref="getDom">
                            <RouterLink to="">
                                {{ item }}
                            </RouterLink>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, defineEmits, defineProps, watch } from 'vue'
const content = ref([
    '布局',
    '换乘',
    '模型',
    '设施',
])
const props = defineProps({
    buttonIndex: {
        type: Number,
        default: -1
    }
})
watch(() => props.buttonIndex, (val) => {
    if (val === -1) {
        getDom.value[CheckedNum.value].style.border = 'none';
        getDom.value[CheckedNum.value].style.boxShadow = 'none';
        getDom.value[CheckedNum.value].style.borderRadius = 'none';
        getDom.value[CheckedNum.value].style.outline = 'none';
        getDom.value[CheckedNum.value].style.outlineOffset = '0';
    }
})

onMounted(() => {
    // checked(3)
})
const emit = defineEmits(['getSelectButtonIndex'])
const getDom = ref(null)
const CheckedNum = ref(null)
const checked = (index) => {
    if (CheckedNum.value === index) {
        getDom.value[index].style.borderRadius = '10px';
        getDom.value[index].style.border = '3px solid #fdfdfd';
        getDom.value[index].style.boxShadow = '0 0 15px #5837ec';
        getDom.value[index].style.outline = '3px solid rgba(88, 55, 236)';
        getDom.value[index].style.outlineOffset = '-6px';
        return;
    }
    getDom.value[index].style.borderRadius = '10px';
    getDom.value[index].style.border = '3px solid #fdfdfd';
    getDom.value[index].style.boxShadow = '0 0 15px #5837ec';
    getDom.value[index].style.outline = '3px solid rgba(88, 55, 236)';
    getDom.value[index].style.outlineOffset = '-6px';

    // 取消选择
    if (CheckedNum.value !== null) {
        getDom.value[CheckedNum.value].style.border = 'none';
        getDom.value[CheckedNum.value].style.boxShadow = 'none';
        getDom.value[CheckedNum.value].style.borderRadius = 'none';
        getDom.value[CheckedNum.value].style.outline = 'none';
        getDom.value[CheckedNum.value].style.outlineOffset = '0';
    }
    CheckedNum.value = index;
}
const handleClick = (index) => {
    emit('getSelectButtonIndex', index)
    checked(index)
}
</script>
<style>
.foot {
    display: flex;
    justify-content: center;
    align-items: center;

    .foot_content {
        width: 50%;
        height: 100px;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 900;
        background-image: url("../assets/BottomList.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: absolute;
        bottom: 30px;

        .nav {
            width: 90%;
            height: 50px;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;

            li {
                .out_wrap {
                    width: 200px;
                    height: 80px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .wrap {
                        width: 100px;
                        height: 50px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        /* box-shadow:
                    0 0 10px #5837ec,
                    0 0 10px #5837ec inset; */
                        /* filter: drop-shadow(0 0 15px #5837ec); */

                        /* border-radius: 10px;
                border: 3px solid #fdfdfd;
                box-shadow: 0 0 15px #5837ec;
                outline: 3px solid rgba(88, 55, 236);
                outline-offset: -6px; */

                        /* Moves the outline inside the border */
                        a {
                            color: rgb(255, 255, 255);
                        }
                    }
                }
            }
        }
    }
}
</style>