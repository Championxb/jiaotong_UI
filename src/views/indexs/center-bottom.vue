<template>
  <div class="box">
    <div class="content">
      <div class="content_left">
        <img src="../../assets/images/05交通综合体和城市关联效应/关联效应机制机理1.png" style="width: 250px;height: 170px;">
      </div>
      <!-- <div class="content_center">
        <img src="../../assets/1.3设施情况.png" style="width: 210px;height: 160px;">
      </div> -->
      <div class="content_right">
        <img src="../../assets/images/05交通综合体和城市关联效应/关联效应机制机理2.png" style="width: 250px;height: 90px;">
        <div class="content_right_bottom">
          <img src="../../assets/images/05交通综合体和城市关联效应/关联效应机制机理3.png" style="width: 140px;height: 80px;">
          <img src="../../assets/images/05交通综合体和城市关联效应/关联效应机制机理4.png" style="width: 100px;height: 75px;">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>
<style lang="scss" scoped>
.box {
  box-sizing: border-box;

  .content {
    display: flex;
    justify-content: space-between;
    // height: 100%;
    padding: 2px 10px 0 10px;
    position: relative;

    .content_right {
      display: flex;
      flex-direction: column;

      .content_right_bottom {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
