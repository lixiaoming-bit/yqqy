import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/my-knowledge-base-list',
    meta: {
      keepAlive: true
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home'),
    children: [
      {
        meta: {
          keepAlive: true
        },
        path: '/my-knowledge-base-list',
        name: 'MyKnowledgeBaseList',
        component: () =>
          import(/* webpackChunkName: "about" */ '@/views/Knowledge/MyKnowledgeBaseList')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
