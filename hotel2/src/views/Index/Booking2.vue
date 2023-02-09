<template>

  <el-steps :active="3">
      <el-step title="Step 1" />
      <el-step title="Step 2" />
      <el-step title="Step 3" />
      <el-step title="Step 4" />
  </el-steps>

  <el-form :inline="true" :model="formInline" id="up">
  <h2>订房信息</h2>
  <el-form-item label="到店日期">
    <el-input v-model="formInline.user" placeholder="" />
  </el-form-item>
  <el-form-item label="离店日期">
    <el-input v-model="formInline.user" placeholder="" />
  </el-form-item>
  <p>预定保留到当天18:00，如需保留更长时间，请致电酒店客服。</p>
  <el-form-item :label="'房型:'+next2 ">
    <!-- 这里（:label="'房型'+next2 "）这样写也是运用响应式数据来接收数据，房型加上''就可以用+接上变量 -->
    <el-input v-model="formInline.user" :placeholder="next2" />
  </el-form-item>
  <el-form-item label="间数">
    <el-input v-model="formInline.user" placeholder="" />
  </el-form-item>
  <el-form-item label="房价￥：">
    <el-input v-model="formInline.user" :placeholder='next1' />
  </el-form-item>
  <el-form-item label="总价￥：">
    <el-input v-model="formInline.user" placeholder="" />
  </el-form-item>
  <p>其他需求：</p>
  <el-form-item id="txt">
    <el-input v-model="form.desc" type="textarea" />
  </el-form-item>
</el-form>

  <el-form :inline="true" :model="formInline">
  <h2>住店客人信息</h2>
  <el-form-item style="width: 45%">
    <el-input v-model="formInline.user" placeholder="姓名" />
  </el-form-item>
  <el-form-item style="width: 45%">
    <el-input v-model="formInline.user" placeholder="电话号码" />
  </el-form-item>
  <br>
  <el-form-item>
    <el-button type="primary" @click="next">提交</el-button>
  </el-form-item>
</el-form>
  
</template>
  
<script lang="ts" setup>
  import { useRouter } from "vue-router";
  import { reactive,computed } from 'vue'

  import {useStore} from 'vuex'
  const store=useStore()
  const next1 = computed(()=>store.state.info.message.price)
  const next2 = computed(()=>store.state.info.message.label)


  const router=useRouter()
  const next=()=>{
  router.push('/booking3')
  }

  const formInline = reactive({
  user: '',
  })
  const form = reactive({
  desc: '',
  })
// const onSubmit = () => {
//   console.log('submit!')
// }
</script>
  
  <style lang="scss" scoped>
  .el-button{
  margin-left:90%;
  margin-top: 10%;
  }
  .el-form{
      margin: auto;
      width: 60%;
      background: rgb(170, 155, 125);
      margin-bottom: 30px;
  }
  h2{
      text-align: center;
  }
  .el-button{
      background: #744213;
      margin-left: 0;
     
      
  }
  #txt{
      width: 90%;
      margin-left: 30px;
  }
  
  
  </style>