<template>
    <footer class="footer_guide border-1px">
      <router-link class="guide_item" to="/firstView" :class='{"on":$route.path==="/firstView"}'>
        <span class="icon-img" >
          <i class="iconfont icon-home"></i>
        </span>
        <span class="text">首页</span>
      </router-link>
      <router-link class="guide_item" to="/categorys" :class="{'on':$route.path==='/categorys'}">
        <span class="icon-img">
          <i class="iconfont icon-fenlei"></i>
        </span>
        <span class="text">分类</span>
      </router-link>
      <router-link class="guide_item" to="/goods"  :class="{'on':$route.path==='/goods/discover'||$route.path==='/goods/choice'}">
        <span class="icon-img">
          <i class="iconfont icon-xiai"></i>
        </span>
        <span class="text">识物</span>
      </router-link>
      <router-link class="guide_item" to="/shoppingCart"  :class="{'on':$route.path==='/shoppingCart'}">
        <span class="icon-img">
          <i class="iconfont icon-gouwuche"></i>
        </span>
        <span class="text">购物车</span>
      </router-link>
      <router-link class="guide_item" to="/personal" :class="{'on':$route.path==='/personal'}">
        <span class="icon-img">
          <i class="iconfont icon-huiyuan"></i>
        </span>
        <span class="text">个人</span>
      </router-link>
      <!-- <ul>
        <li class="guide_item" v-for="(route,index) in routeArr" :key="index" @click="jump(route.road)">
        <span class="icon-img">
          <i class="iconfont " :class="route.icon"></i>
        </span>
        <span class="text">{{route.title}}</span>
      </li>
      </ul> -->
    </footer>
</template>

<script>
  export default {
    data() {
      return {
        // routeArr:[
        //   {title:'首页',road:'/firstView',icon:'icon-home'},
        //   {title:'分类',road:'/categorys',icon:'icon-fenlei'},
        //   {title:'识物',road:'/goods',icon:'icon-xiai'},
        //   {title:'购物车',road:'/shoppingCart',icon:'icon-gouwuche'},
        //   {title:'个人',road:'/personal',icon:'icon-huiyuan'}

        // ]
      }
    },
    methods: {
      // jump(path){
      //   if (this.$router.path!=path) {
      //      this.$router.replace(path)
      //   }
      // }
    },
    mounted() {
      // console.log(this.routeArr)
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.footer_guide
  top-border-1px(#e4e4e4)
  height 98px
  width 100%
  position fixed
  bottom 0
  z-index 2
  display flex
  background-color white
  .guide_item
    display flex
    flex-direction column
    flex 1
    &.on
      color #b4282d
    span 
      text-align center
      margin-top 5px
      font-weight 600
      .iconfont
        font-size 40px
        text-align center
        font-weight 600
        

  


  
</style>

