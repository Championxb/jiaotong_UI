<!--
 * @Author: daidai
 * @Date: 2022-03-04 09:23:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-07 11:05:02
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\index.vue
-->
<template>
  <div class="contents">
    <div class="content_left">
      <div class="pagetab">
        <!-- <div class="item">实时监测</div> -->
      </div>
      <ItemWrap class="content_left-top content_lr-item" title="轨道交通网络"
        @mouseenter="handleMouseEnter('content_left-top')">
        <LeftTop />
      </ItemWrap>
      <ItemWrap class="content_left-center content_lr-item" title="高铁综合体"
        @mouseenter="handleMouseEnter('content_left-center')">
        <LeftCenter />
      </ItemWrap>
      <ItemWrap class="content_left-second content_lr-item" title="城市轨道综合体"
        @mouseenter="handleMouseEnter('content_left-second')">
        <leftCenterSecond />
      </ItemWrap>
      <ItemWrap class="content_left-bottom content_lr-item" title="重要数学模型"
        @mouseenter="handleMouseEnter('content_left-bottom')" style="padding: 0 10px 16px 0">
        <LeftBottom />
      </ItemWrap>
    </div>
    <div class="content_center">
      <!-- <Scene></Scene> -->
      <!-- <CenterMap class="content_center_top" /> -->
      <ItemWrap class="content_center-bottom" title="交通综合体与城市关联效应"
        @mouseenter="handleMouseEnter('content_center-bottom')">
        <CenterBottom />
      </ItemWrap>
    </div>
    <div class="content_right">
      <ItemWrap class="content_right-top content_lr-item" title="出行特征分析"
        @mouseenter="handleMouseEnter('content_right-top')">
        <RightTop />
      </ItemWrap>
      <ItemWrap class="content_right-center content_lr-item" title="机制机理解析"
        @mouseenter="handleMouseEnter('content_right-center')" style=" padding: 0 10px 16px 0">
        <RightCenter />
      </ItemWrap>
      <ItemWrap class="content_right-bottom content_lr-item" @mouseenter="handleMouseEnter('content_right-bottom')"
        title="效能优化方法和规划设计范式 ">
        <RightBottom />
      </ItemWrap>
    </div>
  </div>
</template>
<script setup>
import LeftTop from './left-top.vue'
import LeftCenter from "./left-center.vue";
import leftCenterSecond from './left-center-second.vue';
import LeftBottom from "./left-bottom.vue";
import CenterBottom from "./center-bottom.vue";
import RightTop from "./right-top.vue";
import RightCenter from "./right-center.vue";
import RightBottom from "./right-bottom.vue";
const handleMouseEnter = (className) => {
  const dom = document.getElementsByClassName(className)[0]
  dom.style.top = '-8px'
  // 鼠标离开
  dom.onmouseleave = () => {
    dom.style.top = '0px'
  }
}
</script>
<style lang="scss" scoped>
// 内容
.contents {
  margin-top: 10px;
  position: relative;
  .content_left {
    margin-left: 10px;
  }
  .content_right {
    margin-right: 10px;
  }
  .content_left-top:hover {
    // top: -20px;
  }
  .content_left,
  .content_right {
    width: 540px;
    box-sizing: border-box;
    // padding: 16px 0;
  }
  .content_center {
    width: 600px;
    position: relative;
    left: -70px;
  }
  .content_right-bottom {
    width: 680px;
    position: relative;
    left: -140px;
  }
  //左右两侧 三个块
  .content_lr-item {
    height: 225px;
    transition: all 0.2s cubic-bezier(0.4, 0, 1, 1);
  }
  .content_right-top {
    height: 450px;
  }
  .content_center_top {
    width: 100%;
  }
  // 中间
  .content_center {
    // height: 100vh !important;
    // position: absolute;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-around;
    // 居中屏幕下方
    // position: absolute;
    // bottom: 0;
    // left: 50%;
    // transform: translateX(-50%);
    // z-index: 2;
    // flex布局 居中屏幕下方 
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .content_center-bottom {
    height: 225px;
    transition: all 0.2s cubic-bezier(0.4, 0, 1, 1);
  }
  //左边 右边 结构一样
  .content_left,
  .content_right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    z-index: 3
  }
}

@keyframes rotating {
  0% {
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
  }
  50% {
    -webkit-transform: rotate(180deg) scale(1.1);
    transform: rotate(180deg) scale(1.1);
  }
  100% {
    -webkit-transform: rotate(360deg) scale(1);
    transform: rotate(360deg) scale(1);
  }
}
</style>

