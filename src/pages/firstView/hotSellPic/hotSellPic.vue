<template>
  <div class="hotSellContainer">
    <div class="hotSellTitle">
      类目热销榜
    </div>
    <div class="hotSellContent">
      <div class="firstPic">
        <span>热销榜</span>
        <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200" alt="">
      </div>
      <div class="secondPic">
        <span>好评榜</span>
        <img src="https://yanxuan-item.nosdn.127.net/e272316176963bd54052126a7657bbb9.png?imageView&quality=65&thumbnail=200x200" alt="">
      </div>
      <ul class="picList">
        <li class="picItem" v-for="(pic,index) in picArr" :key="index">
          <p>{{pic.title}}</p>
          <img :src="pic.url" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        picArr:[
        {title:"居家生活榜",url:"https://yanxuan.nosdn.127.net/15681816558299250.jpg"},
        {title:"服饰鞋包榜",url:'https://yanxuan.nosdn.127.net/15681816566229256.jpg'},
        {title:"个护清洁榜",url:'https://yanxuan.nosdn.127.net/15681816560549253.jpg'},
        {title:"数码家电榜",url:'https://yanxuan.nosdn.127.net/15686277932824776.jpg'},
        {title:"运动旅行榜",url:'https://yanxuan.nosdn.127.net/15681816558479251.jpg'},
        {title:"母婴亲子榜",url:'https://yanxuan.nosdn.127.net/15681816559239252.jpg'},
        {title:"美食酒水榜",url:'https://yanxuan-item.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200'},
        {title:"全球特色榜",url:'https://yanxuan.nosdn.127.net/15681816561199254.jpg'}
        ]
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.hotSellContainer
  height 710px
  width 100%
  background-color white
  margin-top 20px
  .hotSellTitle
    height 100px
    box-sizing border-box
    padding 0 30px
    line-height 90px
    font-size 32px
    color #333
  .hotSellContent
    height 610px
    width 750px
    box-sizing border-box
    padding 0 20px 20px 30px
    position relative
    div
      width 340px
      height 200px
      margin 0 10px 10px 0
      background-color white
      position relative
      img 
        float right
      span 
        font-size 28px
        color #333
        display block
        position absolute
        top 70px
        left 30px
        &::after
          content ''
          display block
          height 4px
          width 48px
          background-color #333
          position absolute
          top 50px
    .firstPic
      background-color #f9f3e4
    .secondPic
      background-color #ebeff6
      position absolute
      right 20px
      top 0
    .picList
      
      .picItem
        height 180px
        width 165px
        float left
        background-color #f5f5f5
        margin 0 10px 10px 0
        display flex
        flex-direction column
        align-items center
        border-radius 5px
        p
          color #333
          font-size 24px
          margin-top 10px
          // text-align center

        img 
          height 120px
          width 120px
          margin-top 10px
</style>