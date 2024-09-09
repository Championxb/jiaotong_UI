<template>
    <div class="zone" @click="sendData(0,1)">
        <img class="cirle" src="../../assets/imgSort/background/circle1.png" >
        <span class="text">地区生产总值</span>
    </div>
    <div class="third"  @click="sendData(0,0)">
        <img class="cirle" src="../../assets/imgSort/background/circle1.png">
        <span class="text">三产产能</span>
    </div>
    <div class="house" @click="sendData(0,2)"> 
        <img class="cirle" src="../../assets/imgSort/background/circle1.png" >
        <span class="text">商品房销售面积</span>
    </div>
    <div class="transit" @click="sendData(1,0)">
        <img class="cirle" src="../../assets/imgSort/background/circle1.png" >
        <span class="text">交通设施密度</span>
    </div>
    <div class="ground" @click="sendData(2,0)">
        <img class="cirle" src="../../assets/imgSort/background/circle1.png" >
        <span class="text">建设用地面积</span>
    </div>

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
    .zone,
    .third,
    .house,
    .transit,
    .ground {
        position: absolute;
        border-radius: 5px;
        font-size: 16px;
        text-align: center; 
        font-weight: 600;
        width: 100px;
        height: 100px;
        .cirle {
            position: relative;
            box-shadow: 0 0 50px 3px #3b9eb7;
            border-radius: 50px;
            width: 100%;
            height: 100%;
            object-fit: cover; 
        }
        .text {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            color: #3b9eb7;
            line-height: 20px;
        }
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
        
    .zone {
        left: 26%;
        top: 21%;
        line-height: 40px;
    }
    .third {
        left: 54%;
        top: 3%;
        line-height: 40px;
    }
    .house {
        left: 62.7%;
        top: 25.3%;
        line-height: 40px;
    }
    .transit {
        left: 3.6%;
        top: 55%;
        line-height: 40px;
    }
    .ground {
        left: 42.3%;
        top: 78%;
        line-height: 40px;
    }
</style>