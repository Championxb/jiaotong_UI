<template>
    <ScaleScreen :width="1920" :height="1080">
        <div class="box">
            <Header :isFirstPage="true"></Header>
            <div v-if="currentPage === 0 " class="img-container">
                <img class="home-img" src="../assets/imgSort/s5LinkageEffect/home-bg.png">
                <div class="menu-list">
                    <p @click="setCurrentPage(1)">站区</p>
                    <p @click="setCurrentPage(2)">城市</p>
                    <p @click="setCurrentPage(3)">城市群</p>
                </div>
            </div>
            <SecondItem 
                v-if="currentPage !== 0  "
                :currentPage = "currentPage">
            </SecondItem>
            <div class="bottom-container">
                <img class="bottom-img" src="../assets/imgSort/background/BottomList.png">
                <div class="menu-list2">
                    <span :class="{ active: currentPage === 1 }"  @click="setCurrentPage(1)">站区</span>
                    <span :class="{ active: currentPage === 2 }"  @click="setCurrentPage(2)">城市</span>
                    <span :class="{ active: currentPage === 3 }"  @click="setCurrentPage(3)">城市群</span>
                </div>
            </div>
        </div>
    </ScaleScreen>
</template>

<script setup>
import { ref } from 'vue'
import ScaleScreen from '@/components/scale-screen/scale-screen.vue'
import Header from '@/components/header.vue'
import SecondItem from '@/views/lineKageEffect/SecondItem.vue'

const currentPage = ref(0) // 0 首页 1 zone 2 city 3 group 
const setCurrentPage = (page) => {
    currentPage.value = page
}
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
    background-image: url("../assets/imgSort/background/linkage-bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;

    .img-container {
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        width: 1320px;
        height: 740px;
        position: relative; /* Set img-container as a reference for positioning */

        .home-img {
            width: auto;
            height: 740px;
        }

        .menu-list {
            position: absolute;
            left: 62%;
            top: 37%;
            font-size: 40px;
            line-height: 50px;
            color: #2e76b6;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            p {
                font-weight: 1000; /* Make the font weight of p tags bolder */
                &:hover {
                    font-size: 43px;
                    color: white; 
                    text-shadow: 0 0 10px rgba(0, 191, 255, 0.8), 0 0 20px rgba(0, 191, 255, 0.6), 0 0 30px rgba(0, 191, 255, 0.4);
                    cursor: pointer;
                }
            }
        }
    }
    .bottom-container {
        position: absolute;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, -50%);
        width: 800px;
        height: 80px;
        .bottom-img {
            width: 800px;
            height: 80px;
        }
        .menu-list2 {
            position: absolute;
            left: 0;
            top: 0;
            font-size: 35px;
            line-height: 50px;
            color: white;
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 95%;
            height: 95%;
            span {
                display: flex; 
                justify-content: center; 
                align-items: center; 
                width: 150px; 
                height: 50px; 
                transition: box-shadow 0.3s;
                border-radius: 10px; /* Larger rounded corners */
                &:hover {
                    font-size: 40px;
                    box-shadow: 0 0 5px rgba(0, 191, 255, 0.8), 0 0 10px rgba(0, 191, 255, 0.6), 0 0 15px rgba(0, 191, 255, 0.4); /* Blue glow */
                    border: 3px solid transparent; 
                    border-color: rgb(179, 209, 255); /* Blue border color */
                    cursor: pointer;
                }
                
            }
            .active {
                font-size: 40px;
                box-shadow: 0 0 5px rgba(0, 191, 255, 0.8), 0 0 10px rgba(0, 191, 255, 0.6), 0 0 15px rgba(0, 191, 255, 0.4); /* Blue glow */
                border: 3px solid transparent; 
                border-color: rgb(179, 209, 255); /* Blue border color */
                cursor: pointer;
            }

        }
        
    }
}
</style>
