<template>
  <div class="common-layout">
    <el-container>
      <el-header>
    <el-tabs v-model="activeName" class="demo-tabs"  >
    <el-tab-pane v-for="item in next" :key="item.id" :label="item.label" :name="item.name" >
        <img :src="item.src" class="pic">
        <!-- (:src="item.src")这样加：的话就变成了 “响应式数据”，就可以找到数据 -->
        <p>{{ item.text }}</p>
        <h3>价格：￥{{ item.price }}
             <!-- <router-link :to="'Bookingroom?price='+item.price">我要预定</router-link>  -->
             <!-- <router-link :to="{name:'bookingroom',params:{price:item.price}}">我要预定</router-link>  -->
         <el-button @click="toLink( item.price,item.label,item.src)">
            <div>
              我要预定
            </div>
          </el-button>
        </h3>
    </el-tab-pane>
  </el-tabs>
    </el-header>
      <el-main>
     
    </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"


import {useStore} from 'vuex'
import { computed } from "vue";
const store=useStore()
const next = computed(()=>store.state.info.message.list)
//console.log(next); console.log(store.state.info.list);
const toLink = (price,label,src)=>{
store.commit('info/setprice', {price,label,src})
router.push(`/bookingroom`)
}


const activeName=ref('first');
const router = useRouter();


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
    height: 50px;
    background: orangered;
    color: brown;
}
.el-tab-pane{
  margin-top: 20px;
  text-align: center;
}
.pic{
  width: 90%;
  height: 450px;
}
.router-link-active{
  background-color: red;
}
.el-tabs{
  text-align: center;
}
</style>