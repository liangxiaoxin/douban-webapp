<template>
  <section class="commingsoon">
    <header>
      <h2>即将上映</h2>
      <a href="#" class="more">更多</a>
    </header>
    <div class="section-content" ref="moviesUl">
      <ul class="items">
        <li class="item" v-for="(movie, movieindex) in movies">
          <router-link :to="'/movie/subject/'+movie.id">
            <a href="javascript:;">
              <div class="item-img"><img :src="movie.images.medium" style="width: 100px; height: 148px" alt=""></div>
              <span class="item-title">{{movie.title}}</span>
              <div class="rating">
              <span class="rating-stars">
                <span class="rating-star" v-for="starClass in starClasses[movieindex]" :class="starClass"></span>
              </span>
                <span class="rating-average">{{movie.rating.average}}</span>
              </div>
            </a>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  const LENGTH = 5
  const CLS_FULL = 'full'
  const CLS_GREY = 'grey'
  export default {
    //    接收两个参数  1 接收标题 2 接收一个url  接收参数可改可变
    props: {
      url: String,
      Title: String
    },
    data() {
      return {
        movies: [],
        starClassesData: [
        ]
      }
    },
    methods: {
      // 使用better-scroll实现左右滑动
      _initScroll() {
        this.moviesScroll = new BScroll(this.$refs.moviesUl, {
          scrollX: true,
          eventPassthrough: 'vertical',
          click: true
        })
      }
    },
    computed: {
      // 实现评分
      starClasses: function () {
        for (let i = 0; i < this.movies.length; i++) {
          let result = []
          let fullCount = Math.floor(this.movies[i].rating.average / 2)
          let greyCount = LENGTH - fullCount
          for (let j = 0; j < fullCount; j++) {
            result.push(CLS_FULL)
          }
          for (let k = 0; k < greyCount; k++) {
            result.push(CLS_GREY)
          }
          // 将所有movie算好的star存到starClassesData
          this.starClassesData.push(result)
        }
        return this.starClassesData
      }
    },
    created: function () {
      let opt = {
        params: {
          'count': 8,
          'start': 0,
          'apikey': '00fa6c0654689a0202ef4412fd39ce06'
        }
      }

      this.$http.jsonp(this.url, opt).then(function (response) {
        // 这里是处理正确的回调
        this.movies = response.data.subjects
        this.$nextTick(() => {
          this._initScroll()
        })
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response)
      })
    },
    compontents: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  section
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
      .more
        float: right
        font-size: .9rem;
        color: #42bd56;
    .section-content
      margin-bottom: 20px
      .items
        padding: 15px 0 43px 0;
        overflow: hidden
        width: 780px
        height: 150px
        .item
          float: left
          margin-left: 0.48rem;
          text-align: center
          .item-title
            display: inline-block
            overflow: hidden;
            text-overflow: ellipsis
            white-space: nowrap
            width: 100px
            margin-top: .6rem
            line-height: .94rem
            word-wrap: normal
            color: #111111
          .rating
            color: #aaa;
            line-height: .94rem
            margin-top: .3rem
            font-size: .72rem
            .rating-stars
              display: inline-block
              height: 10px
              .full, .grey
                display: inline-block
                width: 10px
                height: 10px
                background-size: 10px 10px
              .full
                background-image: url("../../assets/rating-star-small-full.png")
              .grey
                background-image: url("../../assets/rating-star-small-grey.png")
            .rating-average
              color: #aaa
              font-size: .72rem
</style>
