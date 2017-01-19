<template>
  <div id="app">
    <div class="header-wrapper">
      <div class="header">
        <h1><a href="#" class="title">豆瓣</a></h1>
        <nav class="nav">
          <ul>
            <li><router-link to="/movie" class="item" style="color: #0a8ddf">电影</router-link></li>
            <li><router-link to="/book" class="item" style="color: #9F7860">图书</router-link></li>
            <li><router-link to="/broadcast" class="item" style="color: #E4A813">广播</router-link></li>
            <li><router-link to="/group" class="item" style="color: #2AB8CC">小组</router-link></li>
          </ul>
          <span class="search"></span>
        </nav>
      </div>
    </div>
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'app',
    components: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header-wrapper
    position: fixed
    left: 0
    top: 0
    box-sizing: border-box
    width: 100%
    height: 46px
    padding: 0 18px
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
        .search
          position: relative
          vertical-align: middle
          display: inline-block
          width: 24px
          height: 18px
          background-size: 24px 18px
          background-image: url("./search.png")
          background-repeat: no-repeat
  .page
    padding-top: 47px
</style>
