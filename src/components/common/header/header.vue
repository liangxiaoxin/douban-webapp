<template>
  <div class="header-wrapper">
    <div class="header">
      <h1><a href="#" class="title">豆瓣</a></h1>
      <nav class="nav">
        <ul>
          <li>
            <router-link to="/movie" class="item" style="color: #0a8ddf">电影</router-link>
          </li>
          <li>
            <router-link to="/book" class="item" style="color: #9F7860">图书</router-link>
          </li>
          <li>
            <router-link to="/broadcast" class="item" style="color: #E4A813">广播</router-link>
          </li>
          <li>
            <router-link to="/group" class="item" style="color: #2AB8CC">小组</router-link>
          </li>
        </ul>
        <span class="search-btn" @click="showSearch"></span>
      </nav>
      <transition enter-active-class="animated fadeInLeft"
                  leave-active-class="animated fadeOutRight">
        <div class="search-wrapper"  v-show="isShowSearch">
          <span class="close" @click="showSearch">关闭</span>
          <form action="/search" method="GET" class="form">
            <div>
              <input type="search" name="query">
            </div>
          </form>
          <ul class="nav-list">
            <li v-for="nav in NavData">
              <a href="">
                <strong :style="{'color': nav.color}">{{nav.title}}</strong>
                <span>{{nav.description}}</span>
              </a>
            </li>
          </ul>
          <div class="navBottom">
            <div class="nav-item">
              <a href="">注册账号</a>
              <a href="">登录豆瓣</a>
            </div>
            <div class="nav-item">
              <a href="">使用桌面版</a>
              <a href="">使用豆瓣APP</a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        isShowSearch: false,
        NavData: [
          {
            title: '电影',
            description: '影院热映',
            color: 'rgb(35, 132, 232)'
          },
          {
            title: '电视',
            description: '正在热播',
            color: 'rgb(122, 106, 219)'
          },
          {
            title: '图书',
            description: '畅销排行',
            color: 'rgb(159, 120, 96)'
          },
          {
            title: '同城',
            description: '周末活动',
            color: 'rgb(230, 70, 126)'
          },
          {
            title: '小组',
            description: '志趣相投',
            color: 'rgb(42, 184, 204)'
          },
          {
            title: '音乐',
            description: '新碟榜',
            color: 'rgb(244, 143, 46)'
          },
          {
            title: '阅读',
            description: '电子书',
            color: 'rgb(159, 120, 96)'
          },
          {
            title: '游戏',
            description: '虚拟世界',
            color: 'rgb(87, 116, 197)'
          },
          {
            title: '应用',
            description: '玩手机',
            color: 'rgb(89, 108, 221)'
          },
          {
            title: '东西',
            description: '心爱之物',
            color: 'rgb(89, 108, 221)rgb(225, 100, 77)'
          },
          {
            title: 'FM',
            description: '红心歌单',
            color: 'rgb(64, 207, 169)'
          },
          {
            title: '市集',
            description: '购买原创',
            color: 'rgb(66, 189, 86)'
          }
        ]
      }
    },
    components: {},
    methods: {
      showSearch: function () {
        this.isShowSearch = !this.isShowSearch
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header-wrapper
    position: fixed
    left: 0
    top: 0
    z-index: 99
    box-sizing: border-box
    width: 100%
    height: 46px
    padding: 0 18px
    background-color: #fff
    border-bottom: 1px solid #e1e1e1
    .header
      display: flex;
      justify-content: space-between;
      align-items: center;
      -webkit-box-pack: justify;
      -webkit-box-align: center;
      width: 100%
      height: 46px
      h1
        display: inline-block
        text-align: center
        .title
          display: inline-block
          height: 22px
          color: #00b600
          font-size: 22px
          font-weight: 700
      .nav
        display: inline-block
        ul
          display: inline-block
          li
            display: inline-block
            margin-right: 20px
            font-size: 15px
        .search-btn
          position: relative
          vertical-align: middle
          display: inline-block
          width: 24px
          height: 18px
          background-size: 24px 18px
          background-image: url("../../../assets/search.png")
          background-repeat: no-repeat
      .search-wrapper
        position: absolute;
        left: 0;
        top: 0;
        z-index: 9999
        width: 100%
        background-color: #fff
        border-bottom: 1px solid #f3f3f3;
        .close
          position: absolute
          left: 5px
          height: 62px
          width: 62px
          line-height: 62px
          text-align: center
          color: #42bd56
          font-size: 16px
        .form
          width: 100%
          display: inline-block
          padding: 15px 25px 15px 60px;
          box-sizing: border-box;
          input
            border-radius: 3px
            background: #f3f3f3
            padding-left: 5px
            width: 100%
            height: 31px
            font-size: 14px
        .nav-list
          padding-top: 25px
          overflow: hidden;
          background-color: #fff
          li
            width: 33%
            float: left
            text-align: center
            margin-bottom: 25px
            a
              display: inline-block
              width: 100%
              height: 100%
              strong
                color: gold
                font-weight: 400
                font-size: 24px
                line-height: 28px
              span
                display: block
                margin-top: 2px
                color: #999
                height: 17px
                font-size: 12px
                letter-spacing: 1px
        .navBottom
          width: 100%
          background-color: #fff
          margin-bottom: 200px
          .nav-item
            display: flex
            border-bottom: 1px solid #f3f3f3
            padding: 13px 0
            text-align: center
            a
              flex: 1
              font-size: 15px;
              color: #42bd56;
            a:first-child
              border-right: 1px solid #e5e5e5
          .nav-item:first-child
            border-top: 1px solid #f3f3f3
</style>
