const state={
  message:{
     list:[
         {id:1,name:'first',label:'标准大房',src:'../imgs/1.jpg' ,text:'1.8米大床、舒适的羽绒枕和羽绒被、免费WIFI高速上网、独立淋浴间 不可携带宠物',price:'198'},
         {id:2,name:'second',label:'豪华大床',src:'../imgs/2.jpg',text:'1.8米大床、舒适的羽丝棉枕和羽丝棉被、电子保险箱、免费WIFI高速上网、39英寸液晶电视、独立淋浴间 不可携带宠物',price:'298 '},
         {id:3,name:'third',label:'标准双床',src:'../imgs/3.jpg',text:'1.2米床、舒适的羽绒枕和羽绒被、电子保险箱、39英寸的液晶电视、免费WIFI高速上网、独立淋浴间 不可携带宠物',price:'368 '},
         {id:4,name:'fourth',label:'豪华双床',src:'../imgs/4.jpg',text:'1.2米床、舒适的羽绒枕和羽绒被、电子保险箱、39英寸的液晶电视、免费WIFI高速上网、独立淋浴间 不可携带宠物',price:'368 '},
         {id:5,name:'five',label:'行政套房',src:'../imgs/5.jpg',text:'1.8米大床、舒适的羽绒枕和羽绒被、免费WIFI高速上网、39英寸的液晶电视、高档沙发、茶几、办公桌、独立淋浴间 不可携带宠物',price:'688'},
         {id:6,name:'six',label:'豪华套房',src:'../imgs/6.jpg',text:'1.8米大床、舒适的羽丝棉枕和羽丝棉被、电子保险箱、免费WIFI高速上网、39英寸的液晶电视、独立淋浴间 不可携带宠物',price:'888 '},
         {id:7,name:'seven',label:'总统套房',src:'../imgs/7.jpg',text:'复式楼，635平方，餐厅、红酒吧、会客厅、书房、KTV厅、桑拿房、高乐夫推杆等各项设施，舒适的羽绒枕和羽绒被、香薰炉、免费WIFI高速上网、高档沙发、茶几、办公桌、42英寸的液晶电视 不可携带宠物',price:'1688 '},
         {id:8,name:'eight',label:'普通大床',src:'../imgs/8.jpg',text:'1.8米大床、舒适的羽绒枕和羽绒被、免费WIFI高速上网、独立淋浴间 不可携带宠物，此房型不含早餐。',price:'168'},
     ],
      price: 0,    
      label:'',
      src:'',
      all: 0,
  }
 }
 const mutations={
     setprice(state,payload){
         state.message.price=payload.price
         state.message.label=payload.label
         state.message.src=payload.src
         state.message.all=payload.all
     }
 }
 export default{
     namespaced:true,
     state,
     mutations
 }