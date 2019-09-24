<template>
  <div>
    <div class="cart_header">
      <span class="left">购物车</span>
      <span class="right">领券</span>
    </div>
    <div class="container">
      <div class="duty">
      <div>
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png" alt="">
        <span>30天无忧退货</span>
      </div>
      <div>
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png" alt="">
        <span>48小时快速退款</span>
      </div>
      <div>
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png" alt="">
        <span>满88元免邮费</span>
      </div>
    </div>
      <div class="cart">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
        <p class="add">去添加点什么吧</p>
      </div>
      <div class="login" @click="$router.replace('/personal')">登录</div>
    </div>
    <FooterGuide/>
  </div>
</template>

<script>
  export default {
    components:{
      
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.cart_header
  width 690px
  height 88px
  padding 0 30px
  position absolute
  top 0
  .left
    float left
    color #333
    font-size 36px
    line-height 88px
  .right
    font-size 30px
    color #b4282d
    line-height 88px
    position absolute
    right 60px
.container 
  height 1148px
  width 100%
  background-color #f4f4f4
  .duty
    height 70px
    width 100%
    background-color #eee
    margin-top 88px
    display flex
    flex 1
    align-items center
    justify-content space-around
    div
      img 
        margin-right 5px
        margin-bottom 5px
      span 
        color #666
  .cart
    height 300px
    width 100%
    margin-top 398px
    display flex
    flex-direction column
    align-items center
    img 
      height 248px
      width 248px
    .add
      font-size 28px
      color #999
      margin-top -15px
  .login
    height 92px
    width 480px
    background-color #b4282d
    font-size 30px
    color #ffffff
    text-align center
    line-height 92px
    margin-left 135px
</style>