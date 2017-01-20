<template>
  <section class="findmovie">
    <header>
      <h2>发现好电影</h2>
    </header>
    <div class="content" ref="content">
      <ul>
        <li v-for="item in findmovieData" :style="{'border-color':item.color}"><a href="#" :style="{'color':item.color}">{{item.title}}</a></li>

      </ul>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        findmovieData: [
                {
                    title: '同时入选IMDB250和豆瓣电影250的电影',
                    color: '#2384E8'
                },
                {
                  title: '带你进入不正常的世界',
                  color: '#FFAC2D'
                },
                {
                  title: '用电【影】来祭奠逝去的岁月',
                  color: '#2384E8'
                },
                {
                  title: '女孩们的故事【电影】',
                  color: '#FFC46C'
                },
                {
                  title: '科幻是未来的钥匙——科幻启示录【科幻题材】',
                  color: '#FF4055'
                },
                {
                  title: '美国生活面面观',
                  color: '#42BD56'
                },
                {
                  title: '经典韩国电影——收集100部',
                  color: '#CC3344'
                }
              ]
      }
    },
    methods: {
      _initScroll() {
        this.moviesScroll = new BScroll(this.$refs.content, {
          scrollX: true,
          click: true
        })
      }
    },
    created: function () {
      this.$nextTick(() => {
        this._initScroll()
      })
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/css/common.css"
  .findmovie
    padding-top: 10px
    overflow: hidden;
    header
      width: 100%
      height: 24px
      box-sizing: border-box
      padding: 0 1.12rem;
      h2
        display: inline-block
        float: left
        font-size: 1rem
    .content
      ul
        width: 1180px
        padding: 15px
        font-size: 0
        margin-left: -5px
        li
          margin: 0 0 8px 8px
          display: inline-block
          font-size: .94rem
          border-radius: .25rem
          border: solid 1px
          a
            height: 50px
            line-height: 50px
            padding: 0 1.55rem
            letter-spacing: .1em
            overflow: auto
            display: block
            text-align: center
</style>
