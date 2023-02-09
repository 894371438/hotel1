<template>

  <el-steps :active="4">
    <el-step title="Step 1" :icon="Edit" />
    <el-step title="Step 2" :icon="Upload" />
    <el-step title="Step 3" :icon="Picture" />
    <el-step title="Step 4" :icon="Picture" />
  </el-steps>

  <el-button @click="next">预定</el-button>
  <div class="text">预定成功</div>
</template>

<script>


</script>

<style lang="scss" scoped>
.el-button {
  margin-left: 90%;
  margin-top: 10%;

}
.text{
  text-align: center;
  font-size: 50px;
  font-weight: bolder;
}
</style>