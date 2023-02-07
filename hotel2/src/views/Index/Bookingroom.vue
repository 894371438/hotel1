<template>

<el-steps :active="1">
    <el-step title="Step 1" :icon="Edit" />
    <el-step title="Step 2" :icon="Upload" />
    <el-step title="Step 3" :icon="Picture" />
    <el-step title="Step 4" :icon="Picture" />
  </el-steps>

  <el-button><router-link to="booking1">预定</router-link></el-button>
</template>

<script setup>



</script>

<style lang="scss" scoped>

</style>