<template>

  <el-steps :active="1">
      <el-step title="Step 1" :icon="Edit" />
      <el-step title="Step 2" :icon="Upload" />
      <el-step title="Step 3" :icon="Picture" />
      <el-step title="Step 4" :icon="Picture" />
    </el-steps>
  
  <!-- 日期 -->
  
    <div class="demo-date-picker">
      <div class="block">
        <span class="demonstration">Default</span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          
        />
      </div>
  
      </div>
  <!-- <router-link :to="'booking1?price='+price"> <el-button @click="next">预定</el-button></router-link> -->
    <el-button @click="toLink(next)">预定</el-button> 
  </template>
  
  <script setup>
   import { useRouter } from "vue-router";
   import { useRoute } from "vue-router";
  import { ref } from 'vue'
  const router=useRouter()
  const route=useRoute()
  
  const toLink = ()=>{//传数据
    router.push(`/booking1`)
  }
  
  
  
  // const next=()=>{
  // router.push('/booking1');
  // }
  //console.log(route)
  
  // 动态传参（/）接收用params，现在不是用动态传参所以我们用query
  const price=ref(route)
  
  
  // 日期
  const value1 = ref('')
  const shortcuts = [
    {
      text: 'Last week',
      value: () => {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
        return [start, end]
      },
    },
    {
      text: 'Last month',
      value: () => {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
        return [start, end]
      },
    },
    {
      text: 'Last 3 months',
      value: () => {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
        return [start, end]
      },
    },
  ]
  
  </script>
  
  <style lang="scss" scoped>
  // 日期
  .demo-date-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
  }
  
  .demo-date-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    flex: 1;
  }
  
  .demo-date-picker .block:last-child {
    border-right: none;
  }
  
  .demo-date-picker .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }
  .el-button{
    margin-left:90%;
  }
  </style>