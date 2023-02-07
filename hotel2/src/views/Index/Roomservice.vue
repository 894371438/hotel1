<template>
      <el-carousel :interval="2000" type="card" height="1000px">
            <el-carousel-item v-for="item in carouseData" :key="item">
            
            
            <img :src="item.url" alt="" />
        </el-carousel-item>
          </el-carousel>
</template>

    


<script setup>
const carouseData = [
    { url: "../imgs/1.png" },
    { url: "../imgs/2.png" },
    { url: "../imgs/3.png" },
    { url: "../imgs/4.png" },
    { url: "../imgs/5.png" },
    { url: "../imgs/6.png" },
]

</script>

<style scoped>
img {
    width: 100%;
    height: 100%;
}

.el-carousel-item {

    text-align: center;
    background: #000;
}
.el-carousel-item {

text-align: center;
background: #000;
}
</style>