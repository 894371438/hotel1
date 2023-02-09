
<template>
   <el-carousel :interval="2000" type="card" height="600px">
    <el-carousel-item v-for="item in carouseData" :key="item">
      <img :src="item.url" alt=""/>
    </el-carousel-item>
  </el-carousel>
  </template>

  
  <script setup>
      const carouseData = [
    {url:"../imgs/11.jpg"},
    {url:"../imgs/12.jpg"},
    {url:"../imgs/13.jpg"},
    {url:"../imgs/14.jpg"},
    {url:"../imgs/15.jpg"},
    {url:"../imgs/16.jpg"},
  ]
  
  </script>
  
  <style scoped>
     img{
      width:100%;
      height: 100%;
     } 
  
  .el-carousel-item{
    
    text-align: center;
    background: #000;

  }
  
  </style>