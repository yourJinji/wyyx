<template>
  <div class="sixPicContainer">
    <ul class="sixPicList">
      <li class="sixPicItem" v-for="(buy,index) in buyArr" :key="index">
        <img :src="buy.url" alt="">
        <span class="newPrice">{{buy.price}}</span>
        <del class="oldPrice">{{buy.oldPrice}}</del>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        buyArr:[
          {url:'https://yanxuan-item.nosdn.127.net/288bbd8a941f5216dc80a2b7266b219b.png?imageView&thumbnail=216x216&quality=75',price:'￥629',oldPrice:'￥699'},
          {url:'https://yanxuan-item.nosdn.127.net/37721979dfc82a0a2648f3b5b46e2161.png?imageView&thumbnail=216x216&quality=75',price:'￥42.5',oldPrice:'￥59'},
          {url:'https://yanxuan-item.nosdn.127.net/09b841eaad33544c48efd43c31a2096c.png?imageView&thumbnail=216x216&quality=75',price:'￥263',oldPrice:'￥299'},
          {url:'https://yanxuan-item.nosdn.127.net/e88a79f3cbb3037fdf0fdf990583314a.png?imageView&thumbnail=216x216&quality=75',price:'￥25.5',oldPrice:'￥32'},
          {url:'https://yanxuan-item.nosdn.127.net/3d7c248460c3b0b9ac53dea8b7cd4606.png?imageView&thumbnail=216x216&quality=75',price:'￥159',oldPrice:'￥159'},
          {url:'https://yanxuan-item.nosdn.127.net/77f320232858c77724eeee80b7d62a2c.png?imageView&thumbnail=216x216&quality=75',price:'￥209',oldPrice:'￥299'}
        ]
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.sixPicContainer
  height 600px
  width 750px
  box-sizing border-box
  padding 0 10px 0 30px
  // background-color pink 
  .sixPicList
    height 100%
    width 100%
    .sixPicItem
      width 216px
      height 300px
      margin 0 20px 10px 0
      float left
      img 
        width 216px
        height 216px
        background-color #f4f4f4
        margin-bottom 10px
      .newPrice
        color #b4282d
        font-size 28px
        display inline-block
        margin 0 10px 0 20px
      .oldPrice
        color #7f7f7f
        font-size 24px
</style>