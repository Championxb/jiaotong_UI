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
                    <el-icon :size="25">
                      <IconIcBaselineCloudDownload />
                    </el-icon>
                  </span>
                </span>
              </template>
            </el-tree>
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

onMounted(() => {
  currentSelectButtonPage.value = route.params.id;
  console.log(currentSelectButtonPage.value);
  // if (currentSelectButtonPage.value == 5) {
  //     page.setPageType(1);
  // }

  axios.get("/public/directoryTree.json").then((res) => {
    fileSource.value = res.data.slice(
      currentSelectButtonPage.value - 1,
      currentSelectButtonPage.value
    );
  });
});

const downloadFile = async (data) => {
  const fullPath = basePath + data.path;
  // console.log(fullPath);
  if (data.type == "file") {
    // 使用 axios 获取文件
    try {
      const result = await apiDownload(fullPath);
      console.log(result);
      createDownloadUrl(result, fullPath, "file");
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
      console.log(zipContent, `${data.path}.zip`);
      createDownloadUrl(zipContent, `${data.path}.zip`, "directory"); // 创建下载链接
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
const returnHome = () => {
  // 返回上一级
  router.push("/index");
};
const contents = ref(["综合交通数据", "站城数据", "站区数据", "站体数据"]);
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
</style>
