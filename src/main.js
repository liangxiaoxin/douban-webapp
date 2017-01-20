// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
/* eslint-disable no-new */
// 引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入http
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 引入组件
import movie from './components/movie/movie'
import book from './components/book/book'
import broadcast from './components/broadcast/broadcast'
import group from './components/group/group'

// 定义路由
const router = new VueRouter({
  linkActiveClass: 'active',
  // 消除地址#号
  mode: 'history',
  base: __dirname,
  // 路由配置
  routes: [
    {
      path: '/',
      component: movie
    },
    {
      path: '/movie',
      component: movie
    },
    {
      path: '/book',
      component: book
    },
    {
      path: '/broadcast',
      component: broadcast
    },
    {
      path: '/group',
      component: group
    }
  ]
})
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
})

