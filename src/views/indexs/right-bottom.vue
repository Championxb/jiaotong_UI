<template>
  <div class="box">
    <div class="content">
      <div class="content_left">
        <img src="../../assets/images/06优化方法及范式/优化方式及范式1.png" style="width: 280px;height: 160px;">
      </div>
      <div class="content_right">
        <div class="content_right_top">
          <img src="../../assets/images/06优化方法及范式/优化方式及范式2.png" style="width: 160px;height: 80px;">
          <img src="../../assets/images/06优化方法及范式/优化方式及范式3.png" style="width: 160px;height: 80px;">
        </div>
        <img src="../../assets/images/06优化方法及范式/优化方式及范式4.png" style="width: 320px;height: 100px;">
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
    padding: 2px 15px 0 15px;
    position: relative;

    .content_right {
      position: relative;
      top: -20px;
      display: flex;
      flex-direction: column;

      .content_right_top {
        display: flex;
        justify-content: space-between;
      }
    }
  }

}
</style>