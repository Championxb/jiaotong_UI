<template>
  <ScaleScreen :width="1920" :height="1080">
    <div class="box1">
      <div class="return" @click="returnHome"></div>
      <div class="content">
        <div class="content_left">
          <img class="areaImg" src="../assets/站城左图.png" />
        </div>
        <div class="content_right">
          <div class="title">{{ contents[currentSelectButtonPage - 1] }}</div>
          <div class="files">
            <el-tree
              style="max-width: 600px"
              :data="filesDir"
              :props="defaultProps"
              @node-click="handleNodeClick"
            />
          </div>
        </div>
      </div>
    </div>
  </ScaleScreen>
</template>
<script setup>
import ScaleScreen from "@/components/scale-screen/scale-screen.vue";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { usePageStore } from "@/stores/modules/page";
import { readDirectoryRecursive } from "@/utils/getDir";
const route = useRoute();
const router = useRouter();
const currentSelectButtonPage = ref(0);
const page = usePageStore();
let filesDir = ref([]);
onMounted(() => {
  currentSelectButtonPage.value = route.params.id;
  // if (currentSelectButtonPage.value == 5) {
  //     page.setPageType(1);
  // }
});

const returnHome = () => {
  // 返回上一级
  router.push("/index");
};
const contents = ref(["综合交通数据", "站城数据", "站区数据", "站体数据"]);
onMounted(() => {
  // filesDir.value = readDirectoryRecursive(`./public/data/${contents[currentSelectButtonPage - 1]}`);
  filesDir.value = readDirectoryRecursive(`./public/平台数据包`);
});
</script>

<style lang="scss" scoped>
.box1 {
  width: 100%;
  height: 100%;
  background-image: url("../assets/下载界面背景素材.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  color: rgb(255, 255, 255);

  .return {
    height: 64px;
    width: 62px;
    position: absolute;
    top: 28px;
    right: 34px;
    // background: chartreuse;
    // opacity: 0.5;
    align-content: center;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
  }

  .content {
    position: absolute;
    top: 15%;
    // background: #000;
    // opacity: 0.5;
    width: 100%;
    height: 85%;
    display: flex;
    // justify-content: space-around;

    .content_left {
      margin-left: 35px;
      margin-top: 54px;
      // background: #bc4848;
      width: 32%;
      height: 76%;
      display: flex;
      justify-content: center;
      align-items: center;

      .areaImg {
      }
    }

    .content_right {
      width: 53%;
      height: 82%;
      margin-left: 118px;
      // background: #09daccbe;

      .title {
        color: aliceblue;
        font-size: 40px;
        text-align: center;
        line-height: 110px;
        margin: 0 auto;
        width: 280px;
        height: 110px;
        // background: #d0e20a;
      }

      .files {
        margin: 10px auto;
        width: 80%;
        height: 80%;
        // background: #0a76e2;
      }
    }
  }
}
</style>
