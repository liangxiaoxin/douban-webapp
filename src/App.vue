<template>
  <div id="app">
    <!--头部-->
    <Vheader></Vheader>
    <!--渲染区-->
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import Vheader from './common/components/header/header'
  export default {
    name: 'app',
    data() {
      return {

      }
    },
    components: {
        Vheader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">


  .page
    padding-top: 47px
</style>
