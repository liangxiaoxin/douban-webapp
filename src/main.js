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
import routerConfig from './router.config'

// 动画库
import '../static/css/animate.min.css'

// 引入mint-ui实现轮播
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

// 定义路由
const router = new VueRouter(routerConfig)
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})

