/**
 * Created by liangyongxin on 2017/1/18.
 */
// 引入路由
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
// 引入组件
import movie from './components/movie/movie'
import book from './components/book/book'
import broadcast from './components/broadcast/broadcast'
import group from './components/group/group'

// 定义路由
const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: movie
    },
    {
      path: '/movie',
      component: movie
      // children: [
      //   {path: '1', component: moviecontent2},
      //   {path: '2', component: moviecontent2},
      //   {path: '3', component: moviecontent2}
      // ]
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

