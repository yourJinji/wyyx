<template>
    <header class="header_content">
      <slot name="left">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
      </slot>
      <slot name="middle">
        <input type="text" placeholder="搜索商品, 共22673款好物" @click="$router.push('/search')">
        <img class="pic" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="">
      </slot>
      <slot name="right">
         <div class="login" @click="$router.replace('/personal')">登录</div>
      </slot> 
    </header>
</template>

<script>
  export default {
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header_content
  width 100%
  height 88px
  position fixed
  top 0
  display flex
  align-items center
  z-index 99
  padding 0 30px
  background-color white
  img 
    height 40px
    width 138px
    margin-right 20px
  input 
    width 442px
    height 56px
    border-radius 10px
    outline none
    position relative
    background-color #eee
    &::-ms-input-placeholder
      text-align center
    &::-webkit-input-placeholder
      text-align center
  .pic
    position absolute
    width 28px
    height 28px
    left 234px
  .login
    height 40px
    width 74px
    border 1px solid #b4282d
    text-align center
    line-height 40px
    margin-left 16px
    font-size 24px
    border-radius 10px
    color #b4282d



</style>