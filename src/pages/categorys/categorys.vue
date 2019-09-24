<template>
  <div class="allContainer">
    <div class="header">
      <input type="text" placeholder="搜索商品,共22896款好物" @click="$router.push('/search')"/>
      <img
        class="pic"
        src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png"
        alt
      />
    </div>
    <div class="container">
      <div class="leftContent">
        <ul class="leftList">
          <li v-for="(leftItem,index) in leftArr" :key="index" @click="find(index)" :class="{'on':currentIndex==index}">{{leftItem.name}}</li>
          
        </ul>
      </div>
      <div class="rightContent">
       <div class="rightScroll">
          <div class="rightTop">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img
                  src="https://yanxuan.nosdn.127.net/40ee9e553e6a2c228b0544bff65a618d.jpg?imageView&quality=75&thumbnail=0x196"
                  alt
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="https://yanxuan.nosdn.127.net/f7f216f5d01874f8f768ccfd78a7112e.jpg?imageView&quality=75&thumbnail=0x196"
                  alt
                />
              </div>
            </div>
          </div>
          <!-- <div class="swiper-pagination"></div> -->
          <!--分页器-->
        </div>
        <div class="rightBottom">
          <ul class="rightList">
            <li class="item" v-for="(subCateItem,index) in subCateObj.subCateList" :key="index">
              <img
                :src="subCateItem.bannerUrl"
                alt
              />
              <p class="txt">{{subCateItem.name}}</p>
            </li>
          </ul>
        </div>
       </div>
      </div>
    </div>
    <FooterGuide />
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import {reqcategory} from '../../api/index'
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      // leftArr:[],
      currentIndex:0,
      subCateObj:{},
    }
  },
  computed: {
    ...mapState(['leftArr'])
  },
  methods: {
    find(index){
      this.currentIndex = index
      this.subCateObj = this.leftArr[index]
      // console.log(this.subCateObj)
    }
  },
  async mounted() {
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        autoplay: true, //可选选项，自动滑动]
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        bulletClass: "my-bullet", //需设置.my-bullet样式
        bulletActiveClass: "my-bullet-active"
      });
      let leftScroll = new BScroll('.leftContent')
      let rightScroll = new BScroll('.rightContent')
    });
    // const result = await reqcategory()
    // if (result.code == 0) {
    //   this.leftArr = result.data.categoryL1List
    //   this.subCateObj = this.leftArr[0]
    //   console.log(this.leftArr)  
    // }
    await this.$store.dispatch('getcategory')
    this.subCateObj = this.leftArr[0]

    
  }
    
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.allContainer
  background-color #fff
  .header
    position fixed
    padding 0 30px
    height 88px
    display flex
    align-items center
    background-color white
    z-index 99
    top 0
    input
      height 56px
      width 690px
      background-color #ededed
      text-align center
      font-size 28px
      color #666
      position relative
      border-radius 10px
      outline none
    .pic
      position absolute
      left 180px
  .container
    top-border-1px(#e4e4e4)
    margin-top 88px
    background-color #fff
    display flex
    .leftContent
      margin 40px 0
      background-color white
      height 1120px
      width 162px
      box-sizing border-box
      // padding 40px 0
      .leftList
        display flex
        flex-direction column
        flex 1
        li
          font-size 28px
          color #333
          text-align center
          line-height 50px
          margin-bottom 40px
          height 50px
          box-sizing border-box
          &.on
            color #ab2b2b
            border-left 4px solid #ab2b2b
    .rightContent
      height 1149px
      width 588px
      box-sizing border-box
      padding 0 30px 21px 30px
      margin-top 30px
      .rightScroll
        .rightBottom
          width 528px
          margin-top 30px
          .rightList
            width 100%
            height 100%
            display flex
            flex-wrap wrap
            flex 1
            .item
              width 144px
              height 216px
              display flex
              flex-direction column
              align-items center
              margin-right 38px
              color #333
              font-size 24px
              &:nth-child(3n+0)
                margin-right 0
              img 
                width 144px 
                height 144px

</style>
<style>
.swiper-pagination-bullets{
  height:5px;
  
}
.swiper-pagination-bullet {
  width: 40px;
  height: 4px;
  background-color: #fff;
  opacity: 0.4;
  display: inline-block;
  position: absolute;
  bottom:20px;
  left:240px;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background-color: white;
}
</style>