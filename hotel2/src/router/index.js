import { createRouter, createWebHistory } from 'vue-router'
/* import store from '../store' */
const Login = () => import('../views/Login.vue')
const Index = () => import('../views/Index.vue')
const Home = () => import('../views/Index/Home.vue')
const ShopSetting = () => import('../views/Index/info.vue')
const ShopFood = () => import('../views/Index/Introduction.vue')
const OrderList = () => import('../views/Index/Order.vue')
const Roomservice= () => import('../views/Index/Roomservice.vue')


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/home',
      meta: {
        auth: true
      },
      children:[
        {
          path: 'home',
          name: 'home',
          component: Home,
          meta: {
            breadcrumb: ['首页']
          }
        },
        {
          path: 'shop/setting',
          name: 'shopsetting',
          component: ShopSetting,
          meta: {
            breadcrumb: ['店铺管理','店铺设置']
          }
        },
        {
          path: 'shop/food',
          name: 'shopfood',
          component: ShopFood,
          meta: {
            breadcrumb: ['店铺管理','菜品设置']
          }
        },
        {
          path: 'order/list',
          name: 'orderlist',
          component: OrderList,
          meta: {
            breadcrumb: ['订单管理','订单列表 ']
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        auth: false
      },
    },
  ]
})

export default router
