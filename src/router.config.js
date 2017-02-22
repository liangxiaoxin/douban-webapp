/**
 * Created by liangyongxin on 2017/2/22.
 */
// 引入组件
import movie from './components/movie/movie'
import book from './components/book/book'
import broadcast from './components/broadcast/broadcast'
import group from './components/group/group'
import movieId from './components/movie/movie.id'
import search from './common/components/search/search'

// 导出配置
export default {
  // 切换路径模式，变成history模式
  mode: 'history',
  scrollBehavior: () => ({y: 0}), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  // 路由配置
  routes: [
    {path: '/', component: movie},
    {path: '/movie', component: movie},
    {path: '/movie/subject/:id', component: movieId},
    {path: '/book', component: book},
    {path: '/broadcast', component: broadcast},
    {path: '/group', component: group},
    {path: '/search', component: search},
    {path: '*', redirect: '/'}
  ]
}
