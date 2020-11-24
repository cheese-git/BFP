import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    component: () => import(/* webpackChunkName:"login" */ '@/views/Login.vue')
  },
  {
    path: '/register',
    component: () => import(/* webpackChunkName:"register" */ '@/views/Register.vue')
  },
  {
    path: '/forget-pwd',
    component: () => import(/* webpackChunkName:"forget-pwd" */ '@/views/ForgetPwd.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
