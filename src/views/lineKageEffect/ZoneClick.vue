<template>
    <div class="transit" @click="sendData(0,0)">交通组织</div>
    <div class="economy" @click="sendData(1,0)">社会经济</div>
    <div class="space" @click="sendData(2,0)">空间形态</div>
</template>

<script setup>
    import { ref, defineEmits } from 'vue';
    let obj = ref({})
    const emit = defineEmits(['open-third'])
    const sendData = ( thirdMenu, thirdIndex) => {
        obj.value = {
            thirdMenu:thirdMenu,
            thirdIndex:thirdIndex
        }
        emit('open-third', obj.value)
    }
</script>

<style lang="scss" scoped>
    .transit,
    .economy,
    .space {
        position: absolute;
        background-color: #8bb8e1;
        box-shadow: 0 0 30px 3px #3b9eb7;
        border: 1px solid rgb(0, 0, 0); 
        border-radius: 5px;
        font-size: 25px;
        text-align: center; 
        font-weight: 550;
        cursor: pointer;
        animation: float 3s ease-in-out infinite;
        animation-play-state: running; /* 鼠标悬停时暂停动画 */
        &:hover {
            animation-play-state: paused; /* 鼠标悬停时暂停动画 */
        }
    }
    @keyframes float {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-6px);
        }
        100% {
            transform: translateY(0);
        }
    }
    .transit {
        width: 45px;
        height: 160px;
        left: 18%;
        top: 21%;
        line-height: 40px;
    }
    .economy {
        width: 200px;
        height: 40px;
        left: 38%;
        top: 75%;
        line-height: 40px;
        letter-spacing: 15px;
    }
    .space {
        width: 45px;
        height: 160px;
        right: 16%;
        top: 21%;
        line-height: 40px;
    }
</style>