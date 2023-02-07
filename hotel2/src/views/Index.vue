<template>
     <div class="common-layout">
    <el-container>
      <el-header>
        <h2>酒店管理平台</h2>
        <div class="zc">
            <h2>注册</h2>
        </div>
        <div>
            <h2>登录</h2>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
            <el-menu
        :default-active="activeInedx"
        class="el-menu-vertical-demo"
        backgroud-color="#666"
        router
        
      >
      <el-menu-item index="/">
          <el-icon><setting /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/home">
          <el-icon><setting /></el-icon>
          <span>酒店介绍</span>
        </el-menu-item>  <el-menu-item index="/info">
          <el-icon><setting /></el-icon>
          <span>客房服务</span>
        </el-menu-item>  <el-menu-item index="/introduction">
          <el-icon><setting /></el-icon>
          <span>个人信息</span>
        </el-menu-item>  <el-menu-item index="order">
          <el-icon><setting /></el-icon>
          <span>订单信息</span>
        </el-menu-item>
      </el-menu>
        </el-aside>
        <el-main>
            main
            <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
  export default{
    data(){
      return {
        activeInedx:''
      }
    },
    created(){
      this.activeInedx = this.$route.path
    }
  }
</script>

<style lang="scss" scoped>
.el-header{
  background: #666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #132;
}
.user-info{
  display: flex;
  align-items: center;
}
.el-aside{
  height: calc(100vh - 60px);
}
.el-menu{
  height: 100%;
}
.zc{
    padding-left: 700px;
}
.el-menu{
    background: #000;
}
</style>