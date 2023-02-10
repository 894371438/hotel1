
<template>

    <el-steps :active="2">
        <el-step title="预定信息"  />
        <el-step title="选择房间"  />
        <el-step title="订单及宾客信息"  />
        <el-step title="完成"  />
      </el-steps>
       
<div class="card">
  <div>
    <h2>{{t}}</h2>
  </div>
<!-- 图片 -->
<div class="demo-fit">
    <div v-for="fit in fits" :key="fit" class="block">
      <el-avatar shape="square" :size="100" :fit="fit" :src="pic" />
    </div>
  </div>

<!-- 价格 -->
<div>
    <h2>价格:￥{{p}}</h2>
  </div>
  <!-- 选项 -->
  <p>预定数量 {{ r }}</p>
  <el-select v-model="values" placeholder="1"  class="change2">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.label"
      :disabled="item.disabled"
      class="change1"
    />
  </el-select>

  <div>
 <!--    <h2>总价：￥{{ p * values }}</h2> -->
    <h2>总价 {{ all }}</h2>

  </div>
      <el-popover
       placement="top-start"
       title="太棒了"
       :width="200"
       trigger="hover"
       content="不要998不要999只要19999"
     > 
       <template #reference>
        <el-button @click="toLink(next)">预定</el-button> 
       </template>
     </el-popover>
</div>
    </template>
    
    <script  setup>
    import { ref,reactive, toRefs  } from "vue";
    import { useRouter } from "vue-router";
    import { useRoute } from "vue-router";

    import { computed } from "vue";
    import {useStore} from 'vuex'
    const store=useStore()
    const next = computed(()=>store.state.info.message)
    const p = computed(()=>store.state.info.message.price)
    const t = computed(()=>store.state.info.message.label)
    const pic = computed(()=>store.state.info.message.src)
    const all = computed(()=>store.state.info.message.price * values.value)
   
    
    // const l=computed(()=>store.state.info.label)
    
    const toLink = ()=>{//传数据
      router.push(`/booking2`)
      store.commit('info/setprice',{all: all.value,price:p.value,label:t.value})
    }
    
    const router=useRouter()
    const route=useRoute()
    // const next=()=>{
      // router.push('/booking2')
      // }
      
      const price=ref(route.query.price)
    const msg=ref(price)
    
    const label=ref(route.query.label)
    // 选项
    const values = ref('1')
const options = [
  {
    value: 'Option1',
    label: '1',
  },
  {
    value: 'Option2',
    label: '2',
    // disabled: true,
  },
  {
    value: 'Option3',
    label: '3',
  },
  {
    value: 'Option4',
    label: '4',
  },
  {
    value: 'Option5',
    label: '5',
  },
]

// 图片
const state = reactive({
  fits: [ 'cover'],
  url: '../imgs/1.jpg',
})

const { fits, url } = toRefs(state)
    </script>

<style lang="scss" scoped>
h2{margin-left: 40px;margin-right: 40px;}
    .card{
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: wheat;
      margin-left:10%;
      margin-top: 10%;
      height: 200px;
    }

// 选项
.change1{
  width: 60px;
}
.change2{
  width: 60px;
  margin-right: 40px;
}
// 图片
.demo-fit {
  display: flex;
  text-align: center;
  justify-content: space-between;
}
.demo-fit .block {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
}

.demo-fit .title {
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--el-text-color-secondary);
}
    </style>