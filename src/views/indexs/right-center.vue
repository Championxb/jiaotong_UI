<template>
    <div class="box">
        <div class="content">
            <img src="../../assets/images/07重要数学模型/重要数学模型1.png" style="width: 280px;height: 80px;">

            <div class="content_bottom">
                <img src="../../assets/images/07重要数学模型/重要数学模型2.png" style="width: 250px;height: 80px;">
                <img src="../../assets/images/07重要数学模型/重要数学模型3.png" style="width: 250px;height: 80px;">
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
        flex-direction: column;
        justify-content: space-around;
        // height: 100%;
        padding: 2px 5px 0 5px;
        position: relative;

        img {
            background-color: #f96706;
        }

        .content_bottom {
            margin-top: 5px;
            display: flex;
            // justify-content: space-around;
            // padding: 0 0px 0 20px;
        }
    }

}
</style>