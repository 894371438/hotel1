<template>

  <el-steps :active="4">
    <el-step title="预定信息" />
    <el-step title="选择房间" />
    <el-step title="订单及宾客信息" />
    <el-step title="完成" />
  </el-steps>

  <el-button > <router-link :to="'Order'">预定</router-link> </el-button>
  <div class="text">预定成功</div>
</template>

<script>


</script>

<style lang="scss" scoped>
.el-button {
  margin-left: 90%;
  margin-top: 10%;

}

.text {
  text-align: center;
  font-size: 50px;
  font-weight: bolder;
}
</style>