<template>
    <div class="common-layout">
      <el-container>
        <el-header>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" >
      <el-tab-pane v-for="item in list" :key="item.id" :label="item.label" :name="item.name" >
          <img :src="item.src" class="pic">
          <p>{{ item.text }}</p>
          <h3>价格：￥{{ item.price }}
              <router-link to="Bookingroom">我要预定</router-link>
          </h3>
      </el-tab-pane>
    </el-tabs>
      </el-header>
        <el-main>
       
      </el-main>
      </el-container>
    </div>
  </template>
  
  <script>
  export default{
  data(){
      return{
          activeName:'first',
          list:[]
      }
  },
  mounted(){
    this.$store.dispatch('info/detailList').then(()=>{
        console.log(this.$store.state.info.list)
        this.list = this.$store.state.info.list
    })
  },
  methods:{
      handleClick(){
  
      }
  }
  }
  </script>
  
  <style scoped>
  .el-header{
      background-color:#666666;
      height: 65px;
      width: 1200px;
      padding-left: 130PX;
  }
  .el-button{
      width: 150px;
      height: 26px;
  
  }
  .el-tab-pane{
    margin-top: 20px;

  }
  .pic{
    width: 80%;
    height: 450px;
  }
  </style>