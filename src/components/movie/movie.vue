<template>
  <div class="content-wrapper">
    <showing></showing>
    <newmovie></newmovie>
    <commingsoon></commingsoon>
  </div>
</template>

<script type="text/ecmascript-6">
  import showing from './showing/showing'
  import newmovie from './newmovies/newmovie'
  import commingsoon from './comingsoon/commingsoon'
  export default {
    components: {
      showing,
      newmovie,
      commingsoon
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
