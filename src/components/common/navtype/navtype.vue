<template>
  <section class="navtype">
    <header>
      <h2>分类浏览</h2>
    </header>
    <div class="content clearfix">
      <ul class="type-list">
        <li v-for="type in typeData">
          <a href="#">{{type}}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
      data() {
          return {
              typeData: ['经典', '冷片佳片', '豆瓣高分', '动作', '喜剧', '爱情', '悬疑', '恐怖', '科幻', '治愈', '文艺', '成长', '动画', '华语', '欧美', '韩国', '日本', '']
          }
      }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .navtype
    padding-top: 10px
    overflow: hidden;
    header
      width: 100%
      height: 24px
      box-sizing: border-box
      padding: 0 1.12rem;
      h2
        display: inline-block
        font-size: 1rem
        margin-bottom: 10px
    .content
      margin-left: .94rem
      width: 100%
      .type-list
        padding: 1.12rem 0 1.88rem;
        color: #eee;
        font-size: .9rem;
        li
          float: left
          width: 40%
          padding-right: 1.12rem
          height: 2.64rem
          border-top: solid 1px #eee
          border-right: solid 1px #eee
          a
            float: left
            display: inline-block
            width: 100%
            line-height: 2.64rem
            color: #42bd56;
        li:nth-child(even)
          border-right: none
          padding-left:1.12rem
        li:last-child
          border-bottom: solid 1px #eee
        li:nth-last-child(2)
          border-bottom: solid 1px #eee
</style>
