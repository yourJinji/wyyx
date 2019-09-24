<template>
  <header class="header_content">
      <!-- <span class="icon-img" @click="$router.replace('/firstView')"> -->
      <span class="icon-img" @click="goto('/firstView')">
          <i class="iconfont icon-home"></i>
        </span>
      <slot name="middle"/>
      <div class="righ_content">
        <img class="jing" src="./images/jing3.png" alt="" @click="$router.push('/search')">
         <span class="icon-img" @click="$router.replace('/shoppingCart')">
          <i class="iconfont icon-gouwuche"></i>
        </span>
      </div>
  </header>
</template>

<script>
  export default {
    methods: {
      goto(path){
        console.log(this)
        this.$router.replace(path)
      }

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.header_content
  width 100%
  height 88px
  position fixed
  top 0
  display flex
  align-items center
  z-index 99
  padding 0 30px
  background-color pink
  .icon-img
      .iconfont
        font-size 58px
  .righ_content
    display flex 
    align-items center
    position absolute
    right 100px
    .jing 
      width 54px
      height 54px

</style>