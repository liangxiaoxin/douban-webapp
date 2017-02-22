<template>
  <div class="content-wrapper">
    <!--优化后，通过改变传入的url改变后台接口就能同一组件重用-->
    <movieItem :Title='Title[0]' :url='url+"in_theaters"'></movieItem>
    <movieItem :Title='Title[1]' :url='url+"top250"'></movieItem>
    <movieItem :Title='Title[2]' :url='url+"coming_soon"'></movieItem>
    <navtype></navtype>
    <download></download>
  </div>
</template>

<script type="text/ecmascript-6">
  import movieItem from './movieItem'

  import navtype from './navtype/navtype'
  import download from './download/download'
  export default {
    name: 'movie',
    data() {
      return {
        url: 'https://api.douban.com/v2/movie/',
        Title: ['影院热映', 'TOP250', '即将上映']
      }
    },
    components: {
      movieItem,
      navtype,
      download
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
