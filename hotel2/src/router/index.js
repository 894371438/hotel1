import { createRouter, createWebHistory } from 'vue-router'
/* import store from '../store' */
const Login = () => import('../views/Login.vue')
const Index = () => import('../views/Index.vue')
const Home = () => import('../views/Index/Home.vue')
const Info = () => import('../views/Index/info.vue')
const Introduction = () => import('../views/Index/Introduction.vue')
const Order = () => import('../views/Index/Order.vue')
const Roomservice= () => import('../views/Index/Roomservice.vue')


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
        {
          path: 'home',
          name: 'home',
          component: Home,
        },
        {
          path: 'info',
          name: 'info',
          component: Info,
        },
        {
          path: 'introduction',
          name: 'introduction',
          component: Introduction,
        },
        {
          path: 'order',
          name: 'order',
          component: Order,
        },
        {
          path: 'roomservice',
          name: 'roomservice',
          component: Roomservice,
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ]
})

export default router

