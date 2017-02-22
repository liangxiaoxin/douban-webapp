<template>
  <div id="app">
    <!--头部-->
    <Vheader></Vheader>
    <!--渲染区-->
    <div class="page">
      <transition enter-active-class="animated flipInY"><router-view></router-view></transition>
    </div>

  </div>
</template>
<script>
  import Vheader from './components/common/header/header'
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
