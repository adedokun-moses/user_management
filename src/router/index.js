import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import Login from '../views/login.vue'
import Home from '../views/home.vue'
import Congratulatory from '../views/congratulatory.vue'
import User from '../views/user.vue'
import Update from '../views/update.vue'
//import Modal from '../components/deletemodal.vue'


const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/congratulatory',
    name: 'congratulatory',
    component: Congratulatory
  },
  {
    path: '/user:id',
    name: 'user',
    component: User
  },
  {
    path: '/update:id',
    name: 'update',
    component: Update
  }
/*   {
    path: '/deletemodal',
    name: 'modal',
    component: Modal
  } */

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
