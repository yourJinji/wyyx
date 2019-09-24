<template>
  <div class="homePicContainer">
    <div class="bannder">

    </div>
    <div class="scroll_wrap">
      <ul class="img_list">
        <li class="img_item" v-for="(scroll,index) in scrollArr" :key="index">
          <img :src="scroll.url" alt="">
          <p class="intro">{{scroll.title}}</p>
          <p class="price">{{scroll.price}}</p>
        </li>
        <li class="more"><a href="javascript:;">查看更多></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        scrollArr:[
        {title:'保温电水壶 无缝内胆',price:'￥129',url:'https://yanxuan-item.nosdn.127.net/5da3f661a64783610bcce622be6d1b5c.png?imageView&quality=65&thumbnail=330x330'},
        {title:'保温电水壶 无缝内胆',price:'￥129',url:'https://yanxuan-item.nosdn.127.net/5da3f661a64783610bcce622be6d1b5c.png?imageView&quality=65&thumbnail=330x330'},
        {title:'保温电水壶 无缝内胆',price:'￥129',url:'https://yanxuan-item.nosdn.127.net/5da3f661a64783610bcce622be6d1b5c.png?imageView&quality=65&thumbnail=330x330'},
        {title:'保温电水壶 无缝内胆',price:'￥129',url:'https://yanxuan-item.nosdn.127.net/5da3f661a64783610bcce622be6d1b5c.png?imageView&quality=65&thumbnail=330x330'},
        {title:'保温电水壶 无缝内胆',price:'￥129',url:'https://yanxuan-item.nosdn.127.net/5da3f661a64783610bcce622be6d1b5c.png?imageView&quality=65&thumbnail=330x330'},
        {title:'保温电水壶 无缝内胆',price:'￥129',url:'https://yanxuan-item.nosdn.127.net/5da3f661a64783610bcce622be6d1b5c.png?imageView&quality=65&thumbnail=330x330'},
        {title:'保温电水壶 无缝内胆',price:'￥129',url:'https://yanxuan-item.nosdn.127.net/5da3f661a64783610bcce622be6d1b5c.png?imageView&quality=65&thumbnail=330x330'},
        {title:'保温电水壶 无缝内胆',price:'￥129',url:'https://yanxuan-item.nosdn.127.net/5da3f661a64783610bcce622be6d1b5c.png?imageView&quality=65&thumbnail=330x330'},
        ]
      }
    },
    mounted() {
      this.$nextTick(()=>{
        let scroll = new BScroll('.scroll_wrap',{
          click:true,
          scrollX:true,
          scrollY:false
        })
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.homePicContainer
  height 745px
  width 750px
  background-color white
  margin-top 20px
  .bannder
    background-image url(https://yanxuan.nosdn.127.net/ed5009d639d5a1068742041421432387.jpg?imageView&thumbnail=750x0&quality=75)
    background-repeat no-repeat
    height 370px
    width 100%
    margin-bottom 20px
  .scroll_wrap
    height 350px
    width 100% 
    .img_list
      height 324px
      width 1960px
      padding 0 30px 30px 30px
      display flex
      .img_item
        height 325px
        width 200px
        margin-right 20px
        img 
          width 200px
          height 200px
          background-color #f4f4f4
        .intro
          font-size 24px
          color #333
        .price
          color #b4282d
          font-size 24px
      .more
        height 200px
        width 200px
        background-color #f4f4f4
        a
          display block
          height 200px
          width 200px
          line-height 200px
          text-align center
          color #333
          font-size 28px
</style>