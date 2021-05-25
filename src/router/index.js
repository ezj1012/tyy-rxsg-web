import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Gaming from '../views/Gaming.vue'

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
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
