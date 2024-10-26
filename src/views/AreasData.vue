<template>
  <ScaleScreen :width="1920" :height="1080">
    <div class="box1">
      <div class="return" @click="returnHome"></div>
      <div class="content">
        <div class="content_left">
          <template v-if="currentSelectButtonPage == 1">
            <img src="../assets/综合交通数据公式.png" style="width: 80%" />
          </template>
          <template v-else v-for="(item, index) in leftPreview">
            <img
              class="areaImg"
              :src="item"
              @click="changeLeftPreview(index)"
            />
          </template>
        </div>
        <div
          class="content_center"
          :class="contents[currentSelectButtonPage].className"
        >
          <img :src="contents[currentSelectButtonPage].areaPreviewPath" />
        </div>
        <div class="content_right">
          <div class="title">
            {{ contents[currentSelectButtonPage].name }}
          </div>
          <div class="files">
            <el-tree
              :data="fileSource"
              :highlight-current="true"
              node-key="id"
              :default-expanded-keys="fileSource"
              :expand-on-click-node="false"
              :item-size="35"
            >
              <template #default="{ node, data }">
                <span
                  class="custom-tree-node"
                  style="width: 100%; display: flex; align-items: center"
                >
                  <span
                    class="prefix"
                    v-if="data.type == 'directory'"
                    style="display: inline-block; vertical-align: middle"
                  >
                    <el-icon :size="25" color="#4fc3f7">
                      <IconEpFolder />
                    </el-icon>
                  </span>
                  <span style="flex-grow: 1">{{ node.label }} </span>
                  <span
                    class="suffix"
                    style="
                      height: 100%;
                      display: inline-block;
                      margin-right: 10px; /* 添加一点间距 */
                    "
                    @click="downloadFile(data)"
                  >
                    <el-icon
                      :size="25"
                      class="downloadIcon"
                      :style="{
                        color: clickedIcons[data.path] ? '#66bb6a' : '',
                      }"
                    >
                      <IconIcBaselineCloudDownload />
                    </el-icon>
                  </span>
                </span>
              </template>
            </el-tree>
          </div>
        </div>
        <div class="uploadFile">
          <img
            src="../assets/yunshangchuan.png"
            alt=""
            style="width: 55px; margin-top: 55px; margin-left: 15px"
            @click="uploadFile"
          />
          <img
            class="unstartImg"
            ref="unstartImg"
            v-if="showImage"
            src="../assets/icon-steal-unstart.png"
            :style="{ opacity: fading ? 0 : 1, transition: 'opacity 2s ease' }"
          />
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
import { apiDownload } from "@/api/download";
import axios from "axios";
import JSZip from "jszip";

// import { readDirectoryRecursive } from "@/utils/getDir";
const route = useRoute();
const router = useRouter();
const currentSelectButtonPage = ref(0);
const page = usePageStore();
let fileSource = ref([]);
let basePath = "\\public\\平台数据包\\";
const areaPreview = ref(1);
//记录所有内容相关的索引
const contenIndex = ref(0);
onMounted(() => {
  currentSelectButtonPage.value = route.params.id;
  console.log(currentSelectButtonPage.value);
  // if (currentSelectButtonPage.value == 5) {
  //     page.setPageType(1);
  // }

  // axios.get("/public/directoryTree.json").then((res) => {
  //   fileSource.value = res.data.slice(
  //     currentSelectButtonPage.value - 1,
  //     currentSelectButtonPage.value
  //   );
  // });
  contenIndex.value = currentSelectButtonPage.value;
  getDirectoryTree(currentSelectButtonPage.value).then((res) => {
    fileSource.value = res;
  });
});
//获得文件目录
const getDirectoryTree = async (index) => {
  const res = await axios.get("/public/directoryTree.json");
  return res.data.slice(index - 1, index);
};
const clickedIcons = ref({}); // 存储已点击的图标路径
const downloadFile = async (data) => {
  const fullPath = basePath + data.path;
  // console.log(fullPath);
  if (data.type == "file") {
    // 使用 axios 获取文件
    try {
      const result = await apiDownload(fullPath);
      // console.log(result);
      createDownloadUrl(result, fullPath, "file");

      //改变当前点击图标的颜色 记录当前点击图标的路径为已点击
      clickedIcons.value[data.path] = true;
    } catch (error) {
      console.error(error);
    }
  } else if (data.type == "directory") {
    // 使用 axios 获取文件夹
    try {
      const zip = new JSZip(); // 使用 JSZip 打包文件
      // for (const child of data.children) {
      //   console.log(child);
      //   const result = await apiDownload(path + child.path);
      //   zip.file(child.path.split("\\").pop(), result.data);
      // }
      await addFilesToZip(zip, data.children, basePath); // 递归添加
      const zipContent = await zip.generateAsync({ type: "blob" });
      // console.log(zipContent, `${data.path}.zip`);
      createDownloadUrl(zipContent, `${data.path}.zip`, "directory"); // 创建下载链接

      // 记录当前点击图标的路径为已点击
      clickedIcons.value[data.path] = true;
    } catch (error) {
      console.error(error);
    }
  }
  // window.open("\\public\\平台数据包\\" + data.path);
};

// 递归将文件添加到 ZIP
const addFilesToZip = async (zip, children, basePath) => {
  for (const child of children) {
    const childFullPath = basePath + child.path; // 获取完整路径
    if (child.type === "file") {
      // 如果是文件，下载并添加到 ZIP
      const result = await apiDownload(childFullPath);
      zip.file(child.path, result.data); // 保持源文件的目录结构
    } else if (child.type === "directory") {
      // 如果是目录，递归调用，传入新的相对路径
      await addFilesToZip(zip, child.children, childFullPath);
    }
  }
};

const createDownloadUrl = (result, path, type = "file") => {
  const downloadElement = document.createElement("a");
  let href = "";
  if (type == "file") {
    href = URL.createObjectURL(result.data);
    downloadElement.download = path.split("\\").pop();
  } else if (type == "directory") {
    href = URL.createObjectURL(result);
    downloadElement.download = path;
  }
  downloadElement.href = href;
  document.body.appendChild(downloadElement);
  downloadElement.click();
  document.body.removeChild(downloadElement);
  window.URL.revokeObjectURL(href);
};

const unstartImg = ref("");
const fading = ref(false); // 用于控制淡出状态
const showImage = ref(false); // 控制图片是否显示

const uploadFile = () => {
  if (fading.value) return; // 如果正在淡出，不执行
  showImage.value = true; // 显示图片
  fadeOutImage().then(() => {
    showImage.value = false;
    fading.value = false;
  });
};

const fadeOutImage = () => {
  return new Promise((resolve) => {
    // 1秒后开始淡出效果
    setTimeout(() => {
      fading.value = true; // 开始淡出效果
    }, 0);
    setTimeout(() => {
      resolve(); // 淡出效果完成后返回 Promise
    }, 2000);
  });
};
const returnHome = () => {
  // 返回上一级
  router.push("/index");
};
const changeLeftPreview = (index) => {
  let map = {
    0: 4,
    1: 3,
    2: 2,
  };
  getDirectoryTree(map[index]).then((res) => {
    fileSource.value = res;
  });
  router.push(`/areasData/${map[index]}`);
  currentSelectButtonPage.value = map[index];
};
const leftPreview = ref([
  new URL("../assets/站体左图.png", import.meta.url),
  new URL("../assets/站区左图.png", import.meta.url),
  new URL("../assets/站城左图.png", import.meta.url),
]);
const contents = ref([
  {},
  {
    name: "综合交通数据",
    className: "area1",
    areaPreviewPath: new URL("../assets/通用对应.png", import.meta.url),
  },
  {
    name: "站城数据",
    className: "area2",
    areaPreviewPath: new URL("../assets/站城对应.png", import.meta.url),
  },
  {
    name: "站区数据",
    className: "area3",
    areaPreviewPath: new URL("../assets/站区对应.png", import.meta.url),
  },
  {
    name: "站体数据",
    className: "area4",
    areaPreviewPath: new URL("../assets/站体对应.png", import.meta.url),
  },
]);
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
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .areaImg:nth-child(1) {
        width: 160px;
        margin-right: 14px;
        margin-bottom: 20px;
        cursor: pointer;
      }
      .areaImg:nth-child(2) {
        width: 300px;
        margin-bottom: 20px;
        cursor: pointer;
      }
      .areaImg:nth-child(3) {
        width: 450px;
        cursor: pointer;
      }
    }

    /* 默认状态下设置过渡效果 */
    .content_left .areaImg {
      transition: transform 0.5s ease; /* 设置过渡效果 */
    }

    /* 鼠标悬停效果 */
    .content_left .areaImg:hover {
      transform: scale(1.1); /* 将图片放大10% */
    }

    .area1 {
      position: absolute;
      top: 55px;
      left: 33.5%;
      img {
        width: 97%;
      }
    }
    .area2 {
      position: absolute;
      top: 70px;
      left: 29%;
      img {
        width: 95%;
      }
    }
    .area3 {
      position: absolute;
      top: 70px;
      left: 32%;
      img {
        width: 95%;
      }
    }
    .area4 {
      position: absolute;
      top: 70px;
      left: 32.5%;
      img {
        width: 95%;
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

    .uploadFile {
      .unstartImg {
        position: absolute;
        top: 120px;
        right: 20px;
        width: 300px;
        transition: width 0.5s;
      }
    }
  }
}
:deep(.el-tree) {
  //   color: antiquewhite;
  font-size: 20px;
  font-weight: 800;
  overflow: auto;
  max-height: 600px;
  min-height: 29px;
  min-width: 100%;
  display: inline-block;
  //透明背景
  // background-color: transparent;
}
:deep(.el-tree-node__content .el-icon) {
  font-size: 20px;
}
.downloadIcon {
  transition: color 0.3s; /* 添加颜色变化的过渡效果 */
}
</style>
