<template>
  <div class="disContainer">
    <!-- better-scroll导航 -->
    <div class="wrapper">
      <ul class="scroll_content">
        <li class="list" v-for="(scroll,index) in scrollArr" :key="index" @click="change(index)" :class="{'on':currentIndex==index}">
          <span>{{scroll.title}}</span>
        </li>
      </ul>
    </div>
    <div class="bsContainer">
      <div class="bsContent">
                <!-- 上面的四张图片 -->
        <div class="pic_content">
          <img class="shouce1" src="https://yanxuan.nosdn.127.net/05c56c6c8a364dd8a928e19ec89e2729.jpeg" alt="">
          <img class="shouce2" src="https://yanxuan.nosdn.127.net/4cedf9351bba46c7ab513ef32f991eae.jpeg" alt="">
          <img class="bimai" src="https://yanxuan.nosdn.127.net/bcab412a58aa4680bb5ea62dc378b8e6.jpg?imageView&thumbnail=750x0" alt="">
          <img class="ziliu" src="https://yanxuan.nosdn.127.net/bed0ce2a994444789e85c14071b13c81.jpeg" alt="">
        </div>
        <!-- 淡入淡出轮播图 -->
        <div class="bannerImg">
          <transition-group tag="div" name="fadeIn" >
            <div v-for="(img,index) in imgArr" :key="index" :style="{opacity:(index+1)==n?'1':'0'}" class="active">
              <!-- ![]('./src/assets/banner'+v) ??????-->
              <img :src="img.title" alt="">
            </div>
          </transition-group> 
          <div class="smallPic">
            <ul class="smPic_list">
              <li v-for="(smImg,index) in smImgArr" :key="index">
                <img :src="smImg" alt="">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
  export default {
    data() {
    return {
      scrollArr:[
        {title:'家装节'},
        {title:'推荐'},
        {title:'好货内部价'},
        {title:'回购榜'},
        {title:'晒单'},
        {title:'开发者日记'},
        {title:'达人'},
        {title:'HOME'}
      ],
      imgArr:[
        {title:"https://yanxuan.nosdn.127.net/15681816558299250.jpg"},
        {title:'https://yanxuan.nosdn.127.net/15681816566229256.jpg'},
        {title:'https://yanxuan.nosdn.127.net/15681816560549253.jpg'},
        {title:'https://yanxuan.nosdn.127.net/15686277932824776.jpg'},
        {title:'https://yanxuan.nosdn.127.net/15681816558479251.jpg'},
        {title:'https://yanxuan.nosdn.127.net/15681816559239252.jpg'},
        {title:'https://yanxuan.nosdn.127.net/15681816561199254.jpg'},
      ],
      currentIndex:0,
      n:1,　　　　　　　// 图片的index。
      bFlag:true,      // 锁定
      timer1:'',　　　　// 这是bFlag定时器的数据
      timer2:'',　　　　// 这是自动播放（next（））定时器的数据
      timer3:'',　　　　// 这是打开浏览器时，初始运动定时器的数据
      smImgArr:[
        'https://yanxuan-item.nosdn.127.net/8ee282bed26f6248b3453b4b202a55db.png?quality=95&thumbnail=130x130&imageView',
        'https://yanxuan-item.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?quality=95&thumbnail=130x130&imageView',
        'https://yanxuan-item.nosdn.127.net/fd9ab8ca4a9e89cb71d24ef2c27783c0.png?quality=95&thumbnail=130x130&imageView',
        'https://yanxuan-item.nosdn.127.net/0fecbab07b9a3522015958ba8f31e27a.png?quality=95&thumbnail=130x130&imageView',
        'https://yanxuan-item.nosdn.127.net/1f93923086cbb7d63be958c920289f05.png?quality=95&thumbnail=130x130&imageView',
        'https://yanxuan-item.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?quality=95&thumbnail=130x130&imageView',
        'https://yanxuan-item.nosdn.127.net/7f5f2b51b69dacfd49d4e77c6110b9de.png?quality=95&thumbnail=130x130&imageView'
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      let scroll1 = new BScroll(".wrapper", {
        scrollX: true,
        click: true,
        bounce: false
      });
      let scroll2 = new BScroll(".smallPic",{
        scrollX:true,
        click:true
      })
      let scroll3 = new BScroll(".bsContainer",{
        click:true,
        bounce: false
      })
    });
    this.timer3=setTimeout(this.next,3000);
  },
  methods: {
    change(index){
      this.currentIndex = index
    },
    next(){
            this.clearT();　　　　　　　　　   // 运动之前，清除所有定时器。
            this.n=this.n+1==4?1:this.n+1;　  // 下一张，如果是第4张，就返回第一张。
            // 调用timeout函数，延迟进入下一次轮播，以便可以点击切换。
            this.timeout();
    },
    clearT(){
        // 清除所有定时器　　　　　　　　　　　　　　　
        clearTimeout(this.timer1);
        clearTimeout(this.timer2);
        clearTimeout(this.timer3);
    },
    timeout(){　　　　　　
        // 运动结束后设置bFlag为true，并且3秒后调用next，进行下一次运动。
        // 运动时间是1s。
        this.timer2=setTimeout(()=>{
            this.bFlag=true
        },1000);
        this.timer1=setTimeout(()=>{
            this.next()
        },3000);
    },
    // change(num){　　　　　　　　　　
    //     // 点击按钮，切换到对应图片，需要获取index。
    //     if(this.bFlag){
    //         this.bFlag=false;
    //         this.clearT();
    //         this.n=num;　　　　　　　         // 将显示图片变为选中的那一张。　　　　
    //         this.timeout()
    //     }
    // }
  },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.disContainer
  .wrapper
    position fixed
    top 88px
    z-index 99
    width 750px
    height 72px
    background-color white
    .scroll_content
      width 1150px
      height 100%
      display flex
      align-items center
      justify-content space-around
      .list
        height 72px
        box-sizing border-box
        &.on
          border-bottom 4px solid #b4282d
          span 
            color #b4282d
        span 
          font-size 28px
          color #7f7f7f  
          line-height 72px          
  .bsContainer
    height 1076px
    margin-top 160px
    .bsContent
      .pic_content
        font-size 0
        .shouce1
          width 100%
          height 300px
      .bannerImg
        width 100%
        height 604px
        position relative
        .active
          &.fadeIn-enter-active,.fadeIn-leave-active 
            transition all 1s ease
          &.fadeIn-enter-active,.fadeIn-leave
            opacity 1
          &.fadeIn-enter,.fadeIn-leave-active
            opacity 0
          img 
            width 750px
            height 450px
            position absolute
        .smallPic
          width 100%
          height 154px
          box-sizing border-box
          padding 14px 10px
          // background-color pink
          position absolute
          top 450px
          .smPic_list
            width 960px
            height 100%
            display flex 
            align-items center
            li
              height 126px
              width 126px
              background-color #f4f4f4
              margin-right 10px
              display flex 
              flex-direction column 
              align-items center
              border-radius 10px 
              &:first-child
                img
                  margin-right 10px
</style>