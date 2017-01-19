<template>
  <div class="content-wrapper">
    <showing></showing>
    <newmovie></newmovie>
    <commingsoon></commingsoon>
    <findmovie></findmovie>
    <navtype></navtype>
  </div>
</template>

<script type="text/ecmascript-6">
  import showing from './showing/showing'
  import newmovie from './newmovies/newmovie'
  import commingsoon from './comingsoon/commingsoon'
  import findmovie from './findmovie/findmovie'
  import navtype from './navtype/navtype'
  export default {
    components: {
      showing,
      newmovie,
      commingsoon,
      findmovie,
      navtype
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
