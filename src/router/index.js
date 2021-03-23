import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/my-knowledge-base-list',
    meta: {
      keepAlive: false
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home'),
    children: [
      {
        meta: {
          keepAlive: false
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
// const originalPush = router.prototype.push

// router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
export default router
