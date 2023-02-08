<template>

  <el-steps :active="2">
      <el-step title="Step 1" :icon="Edit" />
      <el-step title="Step 2" :icon="Upload" />
      <el-step title="Step 3" :icon="Picture" />
      <el-step title="Step 4" :icon="Picture" />
    </el-steps>
  
    <el-button @click="next">预定</el-button>
  </template>
  
  <script setup>
  import { useRouter } from "vue-router";
  const router=useRouter()
  const next=()=>{
  router.push('/booking2')
  }
  
  </script>
  
  <style lang="scss" scoped>
  .el-button{
margin-left:90%;
margin-top: 10%;
}
  </style>