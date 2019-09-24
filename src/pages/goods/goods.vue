<template>
  <div class="goodsContainer">
    <SlotHeader class="header">
      <div class="headerTab" slot="middle">
        <router-link
          to="/goods/discover"
          class="left"
          :class="{'active':$route.path==='/goods/discover'}"
        >发现</router-link>
        <router-link
          to="/goods/choice"
          class="right"
          :class="{'active':$route.path==='/goods/choice'}"
        >甄选家</router-link>
      </div>
    </SlotHeader>
    <router-view></router-view>
    <FooterGuide />
  </div>
</template>

<script>
import SlotHeader from "../../components/SlotHeader/SlotHeader";
import Discover from './discover/discover'
export default {
  components:{
    Discover,
    SlotHeader
  },
  mounted() {
   
  },
  
};
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.goodsContainer
  width 100 $
  height 100%
  .header
    position fixed
    top 0
    z-index 99
    .headerTab
      height 100px
      width 240px
      // background-color pink
      position absolute
      left 50%
      margin-left -160px
      display flex
      align-items center
      justify-content space-around
      .left
        font-size 28px
        color #7f7f7f
        &.active
          font-size 40px
          color #b4282d
          font-weight 700
      .right
        font-size 28px
        color #7f7f7f
        &.active
          font-size 40px
          color #b4282d
          font-weight 700
  

</style>