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
          list:[
                      {id:1,name:'first',label:'标准大房',src:'../imgs/1.jpg' ,text:'1.8米大床、舒适的羽绒枕和羽绒被、免费WIFI高速上网、独立淋浴间 不可携带宠物',price:'198'},
                      {id:2,name:'second',label:'豪华大床',src:'../imgs/2.jpg',text:'1.8米大床、舒适的羽丝棉枕和羽丝棉被、电子保险箱、免费WIFI高速上网、39英寸液晶电视、独立淋浴间 不可携带宠物',price:'298 '},
                      {id:3,name:'third',label:'标准双床',src:'../imgs/3.jpg',text:'1.2米双床、舒适的羽绒枕和羽绒被、免费WIFI高速上网、独立淋浴间 不可携带宠物',price:'268 '},
                      {id:4,name:'fourth',label:'豪华双床',src:'../imgs/4.jpg',text:'1.2米床、舒适的羽绒枕和羽绒被、电子保险箱、39英寸的液晶电视、免费WIFI高速上网、独立淋浴间 不可携带宠物',price:'368 '},
                      {id:5,name:'five',label:'行政套房',src:'../imgs/5.jpg',text:'1.8米大床、舒适的羽绒枕和羽绒被、免费WIFI高速上网、39英寸的液晶电视、高档沙发、茶几、办公桌、独立淋浴间 不可携带宠物',price:'688'},
                      {id:6,name:'six',label:'豪华套房',src:'../imgs/6.jpg',text:'1.8米大床、舒适的羽丝棉枕和羽丝棉被、电子保险箱、免费WIFI高速上网、39英寸的液晶电视、独立淋浴间 不可携带宠物',price:'888 '},
                      {id:7,name:'seven',label:'总统套房',src:'../imgs/7.jpg',text:'复式楼，635平方，餐厅、红酒吧、会客厅、书房、KTV厅、桑拿房、高乐夫推杆等各项设施，舒适的羽绒枕和羽绒被、香薰炉、免费WIFI高速上网、高档沙发、茶几、办公桌、42英寸的液晶电视 不可携带宠物',price:'1688 '},
                      {id:8,name:'eight',label:'普通大床',src:'../imgs/8.jpg',text:'1.8米大床、舒适的羽绒枕和羽绒被、免费WIFI高速上网、独立淋浴间 不可携带宠物，此房型不含早餐。',price:'168'},
                  ]
      }
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