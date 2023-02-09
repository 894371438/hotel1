import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('../views/Login.vue')
const Index = () => import('../views/Index.vue')
const Register = () => import('../views/Register.vue')
const Home = () => import('../views/Index/Home.vue')
const Info = () => import('../views/Index/info.vue')
const Introduction = () => import('../views/Index/Introduction.vue')
const Order = () => import('../views/Index/Order.vue')
const Roomservice= () => import('../views/Index/Roomservice.vue')
const Bookingroom= () => import('../views/Index/Bookingroom.vue')
const Booking1= () => import('../views/Index/Booking1.vue')
const Booking2= () => import('../views/Index/Booking2.vue')
const Booking3= () => import('../views/Index/Booking3.vue')


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
        },
        {
          path: 'bookingroom',
          name: 'bookingroom',
          component: Bookingroom,
        },
        {
          path: 'booking1',
          name: 'booking1',
          component: Booking1,
        },
        {
          path: 'booking2',
          name: 'booking2',
          component: Booking2,
        },
        {
          path: 'booking3',
          name: 'booking3',
          component: Booking3,
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
  ]
})

export default router

