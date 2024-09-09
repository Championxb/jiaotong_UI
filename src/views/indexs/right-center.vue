<template>
    <router-link to="/analysis">
        <div class="box">
            <div class="content">
                <div class="content_left">
                    <img src="../../assets/images/04效能测度体系/效能测度体系1.png" style="width: 160px;height: 70px;">
                    <img src="../../assets/images/04效能测度体系/效能测度体系2.png" style="width: 180px;height: 70px;">

                </div>
                <div class="content_center">
                    <img src="../../assets/images/04效能测度体系/效能测度体系3.png" style="width: 210px;height: 150px;">

                </div>
            </div>
        </div>
    </router-link>
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
        padding: 8px 25px 0 25px;
        position: relative;

        .content_left {
            img {
                margin-top: 5px;
            }
        }
    }

}
</style>