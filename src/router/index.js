import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Gaming from '../views/Gaming.vue'
import Admin from '../views/Admin.vue'
import Coder from '../components/admin/coder/Coder.vue'
import Module from '../components/admin/coder/Module.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/gaming',
    name: 'Gaming',
    component: Gaming
  }, {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [
      {
        path: 'coder',
        name: 'coder',
        component: Coder
      },
      {
        path: 'module/:id',
        name: 'moduleInfo',
        component: Module
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
