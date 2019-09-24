<template>
  <div class="allContainer">
    <Header />
    <div class="list">
      <div class="list_content">
        <ul class="childList">
          <li
            @click="pick(index)"
            :class="{'active':current==index}"
            v-for="(cls,index) in clsArray"
            :key="index"
          >
            <a href="javascript:;">{{cls.name}}</a>
          </li>
        </ul>
      </div>
      <div class="icon" @click="toggle" :class>
        <!-- <img :src="rotate?'./images/up.png':'./images/down.png'" :class="rotate?'come':'go'"
        alt="">-->
        <img src="./images/down.png" :class="{go:rotate}" alt />
      </div>
      <div class="tabWrap" v-show="rotate">
        <div class="tabAlter">
          <p>全部频道</p>
        </div>
        <div class="moreCate">
          <ul>
            <li
              class="cateTag"
              @click="choice(index)"
              :class="{'on':liCurrent==index}"
              v-for="(li,index) in liArray"
              :key="index"
            >{{li.text}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mask" v-show="rotate" @click="toggleMask"></div>
    <div class="scrollContainer">
      <div class="scrollContent">
        <div class="swiper-content">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(img,index) in imgArray" :key="index">
                <div class="goods_container">
                  <img :src="img.src" />
                  <!-- <img src="./images/01.jpg" /> -->
                </div>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="duty">
          <div v-for="(plan,index) in planArr" :key="index">
            <img :src="plan.icon" alt />
            <span>{{plan.desc}}</span>
          </div>
        </div>
        <div class="wares">
          <ul class="wares_list">
            <li v-for="(wares,index) in waresArr" :key="index">
              <a href="javascript:;">
                <img :src="wares.picUrl" alt />
                <span>{{wares.text}}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="freshManModule">
          <div class="moduleTitle">— 新人专享礼 —</div>
          <div class="content">
            <div class="left">
              <p>新人专享礼包</p>
              <div class="coupon">
                <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt />
              </div>
            </div>
            <div class="rightTop">
              <p class="title">福利社</p>
              <p class="subTitle">今日特价</p>
              <div class="goods">
                <img
                  src="https://yanxuan-item.nosdn.127.net/fd9ab8ca4a9e89cb71d24ef2c27783c0.png?imageView&thumbnail=200x200&quality=75"
                  alt
                />
              </div>
            </div>
            <div class="rightBottom">
              <p class="title">新人拼团</p>
              <p class="subTitle">1元起包邮</p>
              <div class="goods">
                <img
                  src="https://yanxuan-item.nosdn.127.net/bb9025c24057dfb89403055ac5b9f85c.png?imageView&thumbnail=200x200&quality=75"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mainSupply">
          <div class="moduleTitle">
            <span class="left">品牌制造商直供</span>
            <a class="right" href="javascript:;">更多 ></a>
          </div>
          <FourPic />
        </div>
        <HotSellPic />
        <div class="fourPicContainer">
          <FourPic />
        </div>
        <SwiperPic />
        <div class="limitContainer">
          <div class="limitBuy">
            <div class="left">
              <span class="txt">限时购</span>
              <div class="time">
                <span class="hour">{{h}}</span>
                :
                <span class="minute">{{m}}</span>
                :
                <span class="seconds">{{s}}</span>
              </div>
            </div>
            <a class="right" href="javascript:;">更多 ></a>
          </div>
          <SixPic/>
        </div>
        <SwiperPic />
        <div class="bottom">
          <div class="banben">
            <div>下载APP</div>
            <div>电脑版</div>
          </div>
          <div class="company">
            <p>网易公司版权所有 © 1997-2019</p>
            <p>食品经营许可证：JY13301080111719</p>
          </div>
        </div>
      </div>
    </div>
    <FooterGuide />
  </div>
</template>

<script>
import Header from "../../components/header/header";
import HotSellPic from "./hotSellPic/hotSellPic";
import FourPic from "./fourPic/fourPic";
import SwiperPic from "./swiperPic/swiperPic";
import SixPic from './sixPic/sixPic'
import BScroll from "better-scroll";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import { reqfirstNav, reqWaresList } from "../../api/index";
import { mapState } from "vuex";
export default {
  components: {
    Header,
    HotSellPic,
    FourPic,
    SwiperPic,
    SixPic
  },
  computed: {
    ...mapState(["clsArray", "liArray", "planArr", "waresArr", "imgArray"])
  },
  data() {
    return {
      rotate: false,
      current: 0,
      liCurrent: 0,
      h:'00',
      m:'00',
      s:'00',
    };
  },
  async mounted() {
    // 发送请求获取导航列表数据
    await this.$store.dispatch("getWaresList");
    await this.$store.dispatch("getFirstNav");
    this.$nextTick(() => {
      let scroll1 = new BScroll(".scrollContainer", {
        click: true,
        scrollY: true
      });
      let scroll2 = new BScroll(".list_content", {
        click: true,
        scrollX: true
      });

      new Swiper(".swiper-container", {
        autoplay: true,
        loop: true,
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },
        bulletClass: "my-bullet",
        bulletActiveClass: "my-bullet-active"
      });

    });
    setInterval( ()=> {
      // 获取当前时间
      var date = new Date();
      var now = date.getTime();
      //设置截止时间
      var endDate = new Date("2019-09-24 23:59:59");
      var end = endDate.getTime();
      //时间差
      var leftTime = end - now;
      //定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        const h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
        if (h<10) {
          this.h = `0${h}`
        }else{
          this.h = h
        }
        const m = Math.floor((leftTime / 1000 / 60) % 60);
        if (m<10) {
          this.m = `0${m}`
        }else{
          this.m = m
        }
        const s = Math.floor((leftTime / 1000) % 60);
        if (s<10) {
          this.s = `0${s}`
        }else{
          this.s = s
        }
      }
    }, 1000);
  },
  methods: {
    toggle() {
      this.rotate = !this.rotate;
    },
    toggleMask() {
      this.rotate = !this.rotate;
    },
    pick(index) {
      this.current = index;
    },
    choice(index) {
      this.liCurrent = index;
    },
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.allContainer
  background-color #eeeeee
  // height 10000px
  position relative
  .list
    height 65px
    width 100%
    position fixed
    top 88px
    background-color white
    z-index 98
    .list_content
      // display flex
      display flex
      width 620px
      overflow hidden
      .childList
        display flex
        // flex 1
        padding-left 30px
        li
          line-height 60px
          padding 0 16px
          margin-right 16px
          width 120px
          text-align center
          &.active
            border-bottom 4px solid #b4282d
            a
              color #b4282d
          a
            font-size 28px
            color #333
          &:last-child
            margin-right 0
    .icon
      height 60px
      width 100px
      display flex
      align-items center
      justify-content center
      position absolute
      right 0
      top 0
      z-index 99
      img
        width 30px
        height 30px
        z-index 99
        transition all 0.5s
      .go
        transform rotateZ(180deg)
  .tabWrap
    width 100%
    height 372px
    background-color #fff
    position absolute
    top 0
    z-index 9
    .tabAlter
      height 60px
      width 100%
      background-color white
      margin-left 30px
      p
        font-size 28px
        color #333
        line-height 60px
    .moreCate
      height 312px
      width 100%
      background-color #fff
      margin-top 24px
      ul
        display flex
        flex-wrap wrap
        .cateTag
          width 150px
          height 56px
          border 1px solid #ccc
          margin 0 0 40px 30px
          border-radius 2px
          text-align center
          line-height 56px
          color #333
          &.on
            color #b4282d
            border 1px solid #b4282d
  .mask
    height 1246px
    width 100%
    background-color rgba(0, 0, 0, 0.5)
    position absolute
    top 88px
    z-index 5
  .scrollContainer
    height 1083px
    .scrollContent
      .swiper-content
        margin-top 153px
      .duty
        height 72px
        width 100%
        display flex
        flex 1
        align-items center
        justify-content space-around
        background-color white
        div
          height 36px
          diaplay flex
          align-items center
          img
            width 32px
            height 32px
            margin-right 5px
            vertical-align middle
          span
            font-size 24px
            color #666
            display inline-block
            vertical-align middle
      .wares
        height 373px
        width 100%
        background-color white
        .wares_list
          height 341px
          width 100%
          display flex
          flex-wrap wrap
          flex 1
          li
            height 156px
            width 110px
            display flex
            flex-direction column
            margin 10px 20px 9px
            a
              display flex
              flex-direction column
              align-items center
              img
                width 110px
                height 110px
              span
                display inline-block
                margin-top 10px
                font-size 24px
                color #333
      .freshManModule
        height 558px
        width 100%
        background-color white
        margin 20px 0
        .moduleTitle
          height 90px
          padding 0 30px
          font-size 32px
          color #333
          line-height 90px
          text-align center
        .content
          height 438px
          padding 0 0 0 30px
          position relative
          .left
            width 343px
            height 434px
            background-color #F9E9CF
            overflow hidden
            p
              font-size 32px
              margin 30px 0 0 30px
            img
              width 257px
              height 258px
              margin 50px 0 0 43px
          .rightTop
            width 343px
            height 215px
            background-color #FBE2D3
            position absolute
            top 0
            right 30px
            box-sizing border-box
            padding 20px 0 0 30px
            .title
              font-size 32px
              color #333
              margin-bottom 10px
            .subTitle
              font-size 24px
              color #7f7f7f
            .goods
              img
                width 200px
                height 200px
                position absolute
                bottom 0
                right 0
          .rightBottom
            width 343px
            height 215px
            background-color #FBE2D3
            position absolute
            bottom 2px
            right 30px
            box-sizing border-box
            padding 20px 0 0 30px
            .title
              font-size 32px
              color #333
              margin-bottom 10px
            .subTitle
              width 120px
              height 32px
              background-color #cbb693
              font-size 22px
              color #ffffff
              border-radius 4px
              text-align center
              line-height 32px
              position relative
            .goods
              img
                width 200px
                height 200px
                position absolute
                bottom 0
                right 0
      .mainSupply
        width 100%
        height 654px
        background-color white
        // position relative
        // display flex
        .moduleTitle
          height 100px
          padding 0 30px
          .left
            font-size 32px
            color #333
            line-height 100px
          .right
            float right
            line-height 100px
            font-size 28px
            color #333
      .fourPicContainer
        background-color white
        height 576px
        width 750px
        box-sizing border-box
        padding 20px 30px 30px 0
        margin-top 20px
      .limitContainer
        margin-top 20px
        width 100%
        height 700px
        background-color white
        .limitBuy
          height 100px
          padding 0 30px
          display flex
          justify-content space-between
          .left
            height 101px
            width 290px
            display flex
            align-items center
            .txt
              font-size 32px
              color #333
              margin-right 10px
            .time
              align-items center
              span 
                display inline-block
                height 36px
                width 36px
                background-color #333 
                border-radius 5px
                color #ffffff
                text-align center
                line-height 36px
          .right
            line-height 100px
            font-size 28px
            color #333
      .bottom
        height 244px
        width 750px
        background-color #333
        box-sizing border-box
        padding 50px 20px 28px 20px
        margin-top 20px
        color #ffffff
        .banben
          height 62px
          width 100%
          display flex
          justify-content space-around
          div
            height 62px
            width 172px
            border 1px solid #999
            font-size 24px
            line-height 62px
            text-align center
            border-radius 5px
        .company
          margin-top 36px
          text-align center
          p 
            color #999
            padding 5px 0
</style>
<style >
/* .swiper-pagination-bullet {
  width: 40px;
  height: 4px;
  background-color: #fff;
  opacity: 0.4;
  display: inline-block;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background-color: white;
} */
</style>