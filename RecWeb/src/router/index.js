import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import PersonalView from '../views/PersonalView.vue'
import notFound from '../views/notFound.vue'

const Home = { template: '<div><h1>Home</h1></div>' }
const About = { template: '<div><h1>About</h1></div>' }


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/login',
      component: LoginView
    },
    {
      // path: '/p/:uid(\\d+)',// ()裡是正則表達, + 是至少會有一個參數, * 可有可無
      path: '/p/',// ()裡是正則表達, + 是至少會有一個參數, * 可有可無
      name: 'personalView',
      component: PersonalView
      // children:[] //同一個面板中的嵌套路由：{path,component},再用rowter-view

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/HomeView.vue')
    },
    {
      path: '/:path(.*)',
      component: notFound
    },
  ]
})

export default router
