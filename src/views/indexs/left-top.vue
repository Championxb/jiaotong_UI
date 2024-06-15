<!--
 * @Author: daidai
 * @Date: 2022-02-28 16:16:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-25 09:18:22
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\left-center.vue
-->
<template>
  <div class="box">
    <div class="content">
      <div class="content_left">
        <el-carousel :interval="4000" height="160px" indicator-position="none" @change="getIndex" :initial-index="0">
          <el-carousel-item v-for="item in content" :key="item">
            <div class="content_left_title">
              {{ item.name }}
            </div>
            <div class="content_left_item">
              <!-- 图片 -->
              <router-link to="/railComplex">
                <img :src="getImgSrc(item.name)" style="width: 240px;height: 100px;" alt="">
              </router-link>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="content_right">
        <el-carousel ref="changeByIndex" height="160px" indicator-position="none" :autoplay="false" arrow="never">
          <el-carousel-item v-for="item in content" :key="item" initial-index="index">
            <router-link to="/railComplex">
              <div class="content_right_title">
                {{ item.title[textIndex] }}
              </div>
              <div class="content_right_item">
                {{ item.text[textIndex] }}
              </div>
            </router-link>

          </el-carousel-item>
        </el-carousel>
      </div>

    </div>
    <ul class="bottom">
      <li v-for="item, index in bottom" :key="index" @click="handleButtonText(index)"> {{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const index = ref(0);
const changeByIndex = ref(null);
const content = ref([
  {
    name: '重庆西',
    title: ['基础资料', '建筑设计', '整体布局', '设施情况', '站台线路', '交通换乘'],
    text: ['重庆西站为高架候车模式，站房设计采用上进下出为主、下进下出为辅的进出站方式，共设五层，采用“综合交通、立体布局”的方式。', '重庆西建筑设计', '重庆西整体布局', '重庆西设施情况', '重庆西站台线路', '重庆西交通换乘']
  },
  {
    name: '成都东',
    title: ['基础资料', '建筑设计', '整体布局', '设施情况', '站台线路', '交通换乘'],
    text: ['主要包括遂成铁路（成渝快铁）、成渝高铁、西成高铁、成贵高铁。', '成都东建筑设计', '成都东整体布局', '成都东设施情况', '成都东站台线路', '成都东交通换乘']
  },
  {
    name: '成都南',
    title: ['基础资料', '建筑设计', '整体布局', '设施情况', '站台线路', '交通换乘'],
    text: ['主要包括遂成铁路（成渝快铁）、成渝高铁、西成高铁、成贵高铁。', '成都南建筑设计', '成都南整体布局', '成都南设施情况', '成都南站台线路', '成都南交通换乘']
  },
  {
    name: '成都西',
    title: ['基础资料', '建筑设计', '整体布局', '设施情况', '站台线路', '交通换乘'],
    text: ['主要包括遂成铁路（成渝快铁）、成渝高铁、西成高铁、成贵高铁。', '成都西建筑设计', '成都西整体布局', '成都西设施情况', '成都西站台线路', '成都西交通换乘'],
  },
  {
    name: '重庆北',
    title: ['基础资料', '建筑设计', '整体布局', '设施情况', '站台线路', '交通换乘'],
    text: ['主要包括遂成铁路（成渝快铁）、成渝高铁、西成高铁、成贵高铁。', '重庆北建筑设计', '重庆北整体布局', '重庆北设施情况', '重庆北站台线路', '重庆北交通换乘'],
  },
  {
    name: '杭州东站',
    title: ['基础资料', '建筑设计', '整体布局', '设施情况', '站台线路', '交通换乘'],
    text: ['主要包括遂成铁路（成渝快铁）、成渝高铁、西成高铁、成贵高铁。', '杭州东站建筑设计', '杭州东站整体布局', '杭州东站设施情况', '杭州东站站台线路', '杭州东站交通换乘'],
  },
  {
    name: '杭州西站',
    title: ['基础资料', '建筑设计', '整体布局', '设施情况', '站台线路', '交通换乘'],
    text: ['主要包括遂成铁路（成渝快铁）、成渝高铁、西成高铁、成贵高铁。', '杭州西站建筑设计', '杭州西站整体布局', '杭州西站设施情况', '杭州西站站台线路', '杭州西站交通换乘'],
  },
  {
    name: '南京南站',
    title: ['基础资料', '建筑设计', '整体布局', '设施情况', '站台线路', '交通换乘'],
    text: ['主要包括遂成铁路（成渝快铁）、成渝高铁、西成高铁、成贵高铁。', '南京南站建筑设计', '南京南站整体布局', '南京南站设施情况', '南京南站站台线路', '南京南站交通换乘'],
  },
  {
    name: '沙坪坝站',
    title: ['基础资料', '建筑设计', '整体布局', '设施情况', '站台线路', '交通换乘'],
    text: ['主要包括遂成铁路（成渝快铁）、成渝高铁、西成高铁、成贵高铁。', '沙坪坝站建筑设计', '沙坪坝站整体布局', '沙坪坝站设施情况', '沙坪坝站站台线路', '沙坪坝站交通换乘'],
  },
  {
    name: '上海虹桥',
    title: ['基础资料', '建筑设计', '整体布局', '设施情况', '站台线路', '交通换乘'],
    text: ['主要包括遂成铁路（成渝快铁）、成渝高铁、西成高铁、成贵高铁。', '上海虹桥建筑设计', '上海虹桥整体布局', '上海虹桥设施情况', '上海虹桥站台线路', '上海虹桥交通换乘'],
  },
  {
    name: '长沙站',
    title: ['基础资料', '建筑设计', '整体布局', '设施情况', '站台线路', '交通换乘'],
    text: ['主要包括遂成铁路（成渝快铁）、成渝高铁、西成高铁、成贵高铁。', '长沙站建筑设计', '长沙站整体布局', '长沙站设施情况', '长沙站站台线路', '长沙站交通换乘'],
  }
])
const titleIndex = ref(0)
const textIndex = ref(0)
const bottom = ref([
  '基础资料',
  '建筑设计',
  '整体布局',
  '设施情况',
  '站台线路',
  '交通换乘'
])
const handleButtonText = (index) => {
  textIndex.value = index
}

const getImgSrc = (name) => {
  return new URL(`../../assets/pic/${name}.png`, import.meta.url).href;
}

onMounted(() => {
  getIndex()
})
const getIndex = (active) => {
  index.value = active
  // console.log(index.value, typeof index.value)
  // 判断index.value是int类型
  if (Number.isInteger(index.value)) {
    changeByIndex.value.setActiveItem(index.value)
    textIndex.value = 0
  }
}

</script>
<style lang='scss' scoped>
.box {
  box-sizing: border-box;

  .content {
    display: flex;
    justify-content: space-between;
    height: 140px;
    padding: 2px 20px 0 20px;


    .content_left {
      .router-link-active {
        text-decoration: none;
        color: #fff;
      }

      a {
        text-decoration: none;
        color: #fff;
      }

      width: 50%;
      height: 140px;
      color: #e3e7e9;

      .content_left_title {
        margin-bottom: 5px;
        font-size: 20px;
        font-weight: 500;
      }
    }

    .content_right {
      width: 45%;
      height: 140px;
      color: #e3e7e9;

      a {
        text-decoration: none;
        color: #fff;
      }

      .content_right_title {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 10px;
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin-top: -5px;

    li {
      width: 80px;
      height: 30px;
      // background: #000;
      color: #fff;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 3;
    }

    li:hover {
      //边框圆弧发光
      margin-top: -2px;
      box-shadow: 0 0 5px #5ce9dd;
      border-radius: 10em;
      transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);

    }
  }
}
</style>