<template>
  <div class="perContainer">
    <SlotHeader class="header">
      <div class="bgHeader" slot="middle"></div>
    </SlotHeader>
    <div class="logoWrap">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
   <!-- 选择登录方式的按钮 -->
    <div class="btnWrap">
       <!-- 手机号登录 -->
      <div class="pButton" @click="choosePhone()" >
        <div class="phone"></div>
        <span class="pNum">手机号快捷登录</span>
      </div>
        <!-- 邮箱登录 -->
      <div class="eButton" @click="chooseEmail()">
        <div class="email"></div>
        <span class="eNum">邮箱账号登录</span>
      </div>
    </div>
    <!-- 手机号登录界面 -->
    <div class="pPage" v-show="phoneWay">
      <div class="hdPic"><img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""></div>
      <div class="midContainer">
        <div class="shouji shuru"><input type="text" placeholder="请输入手机号" v-model="phone"></div>
        <span class="warn">{{warning1}}</span>
        <div class="duanxin shuru"><input type="text" placeholder="请输入短信验证码" v-model="code"></div>
        <div class="yanzheng">获取验证码</div>
        <span class="warn">{{warning2}}</span>
        <div class="problem">
          <span class="leftTxt">遇到问题?</span>
          <span class="rightTxt">使用密码验证登录</span>
        </div>
        <div class="loginBtn">登录</div>
        <div class="agree">
          <input type="checkbox" class="admit">
          <span>我同意</span>
          <a>《服务条款》</a>
          <span>和</span>
          <a>《网易隐私政策》</a>
        </div>
        <div class="otherLogin" @click="chooseOther">
          <span>其他登录方式 </span>
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-8d47138d73.png" alt="">
        </div>
      </div>

    </div>
    <!-- 邮箱登录界面 -->
    <div class="ePage" v-show="emailWay">
      <div class="hdPic"><img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""></div>
      <div class="midContainer">
        <div class="shouji shuru"><input type="text" placeholder="邮箱账号" v-model="email"></div>
        <span class="warn">{{warning3}}</span>
        <div class="duanxin shuru"><input type="password" placeholder="密码" v-model="pwd"></div>
        <span class="warn">{{warning4}}</span>
        <div class="problem">
          <span class="leftTxt">注册账号</span>
          <span class="rightTxt">忘记密码</span>
        </div>
        <div class="loginBtn">登录</div>
        <div class="otherLogin" @click="chooseOther">
          <span>其他登录方式 </span>
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-8d47138d73.png" alt="">
        </div>
      </div>
    </div>
    <!-- 密码验证登录界面 -->
    <!-- <div class="ePage">
      <div class="hdPic"><img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""></div>
    </div> -->

    <div class="bottomWrap" v-show="!phoneWay&&!emailWay">
      <div class="itemWrap">
        <img class="weixin" src="./images/weixin.png"></img>
        <p>微信</p>
      </div>
      <div class="itemWrap">
        <img class="qq"  src="./images/qq.png"></img>
        <p>QQ</p>
      </div>
      <div class="itemWrap">
        <img class="weibo" src="./images/weibo.png"></img>
        <p>微博</p>
      </div>
    </div>
  </div>
</template>

<script>
import SlotHeader from '../../components/SlotHeader/SlotHeader'
  export default {
    components:{
      SlotHeader
    },
    data() {
      return {
        phoneWay:false,
        emailWay:false,
        phone:'',
        code:'',
        email:'',
        pwd:'',
        warning1:'',
        warning2:'',
        warning3:'',
        warning4:''
      }
    },
    watch: {
      phone(newVal,oldVal){
        if(/[1]\d{10}/.test(newVal)){
          this.warning1 = ''
        }else{
          this.warning1 = '请输入正确的手机号'
        }
      },
      code(newVal,oldVal){
        if (/[a-z0-9A-Z]{6}/.test(newVal)) {
          this.warning2 = ''
        }else{
           this.warning2 = '请输入正确的验证码'
        }
      },
      email(newVal,oldVal){
        if (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(newVal)) {
          this.warning3 = ''
        }else{
          this.warning3 = '请输入正确的邮箱'
        }
      },
      pwd(newVal,oldVal){
        if(/[0-9a-zA-Z]{3,6}/.test(newVal)){
          this.warning4 = ''
        }else{
          this.warning4 = '请输入正确的密码'
        }
      }

    },
    methods: {
      choosePhone(){
        this.phoneWay = !this.phoneWay
      },
      chooseEmail(){
        this.emailWay = !this.emailWay
      },
      chooseOther(){
        this.phoneWay = false
        this.emailWay = false
      }
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.perContainer
  background-color #f2f5f4
  height 1336px
  width 100%
  .header
    .bgHeader
      height 50px
      width 170px
      margin 30px 210px
      // background-color pink 
      background-image url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png)
      background-repeat no-repeat
      background-position 0px -127px
  .logoWrap
    img 
      width 268px
      height 90px
      position absolute
      top 248px
      left 50%
      margin-left -134px
  .btnWrap 
    height 220px
    width 750px
    position absolute
    top 600px
    box-sizing border-box
    padding 0 40px
    .pButton
      height 94px
      width 670px
      background-color #dd1a21
      border-radius 5px
      display flex
      position relative
      .phone
        width 45px
        height 45px
        position absolute
        top 25px
        left 210px
        background-image url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png)
        background-repeat no-repeat
        background-position -5px -50px
    .pNum
        display block
        font-size 28px
        color #fff
        text-align center
        margin 33px 0 0 260px
    .eButton
      height 94px
      width 670px
      background-color #f2f5f4
      border 1px solid #dd1a21
      border-radius 5px
      display flex
      position relative
      margin-top 32px
      .email
        width 45px
        height 45px
        position absolute
        top 25px
        left 210px
        background-image url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png)
        background-repeat no-repeat
        background-position 6px 2px
      .eNum
        display block
        font-size 28px
        color #dd1a21
        text-align center
        margin 33px 0 0 270px
  .bottomWrap
    height 40px
    width 100%
    position absolute
    bottom 100px
    display flex
    justify-content center
    align-items center
    .itemWrap
      width 180px
      height 40px
      display flex
      align-items center
      justify-content center
      &:nth-child(2n)
        border-right 2px solid #707070
        border-left 2px solid #707070
      img
        width 35px
        height 35px
      p
        color #7f7f7f
        font-size 28px
        margin-left 4px  
  .pPage
    top-border-1px(#e4e4e4)
    // display none
    height 1246px
    width 100%
    // background-color pink
    position absolute
    top 88px
    background-color white
    .hdPic
      width 100%
      height 64px
      margin-top 56px
      img 
        width 192px
        height 64px
        margin-left 279px
  .midContainer
    width 670px
    height 650px
    background-color white
    padding 0 40px 
    margin-top 56px
    overflow hidden
    position relative
    .shuru
      height 90px
      width 100%
      margin-top 20px
      border-bottom 2px solid #eee
      display flex
      align-items center 
      input 
        height 42px
        width 100%
        line-height 90px
        outline none
        &::-ms-input-placeholder
          font-size 28px
        &::-webkit-input-placeholder
          font-size 28px 
    .yanzheng
      height 52px
      width 164px
      border 1px solid #7f7f7f
      border-radius 5px
      font-size 28px
      color #333
      text-align center 
      line-height 52px
      position absolute
      top 160px
      right 50px
    .duanxin
      margin-top 30px    
    .problem
      width 100% 
      height 42px
      margin-top 40px
      .leftTxt
        font-size 28px
        color #7f7f7f
        float left
      .rightTxt
        font-size 28px
        color #333
        float right
    .warn
      color red
      font-size 24px

    .loginBtn
      height 90px
      width 100%
      background-color #dd1a21
      color #ffffff
      font-size 28px
      text-align center
      line-height 90px
      border-radius 10px
      margin-top 20px
    .agree
      height 32px
      width 100%
      // background-color pink 
      font-size 24px
      line-height 32px
      margin-top 30px
      display flex
      align-items center
      .admit
        width 34px
        height 34px
        background-color #fff
        margin-right 5px
      a
        color #007aff
    .otherLogin
      height 40px
      width 100%
      margin-top 46px
      text-align center
      display flex 
      justify-content center
      align-items center
      span 
        font-size 28px
        color #333
  .ePage
    top-border-1px(#e4e4e4)
    height 1246px
    width 100%
    // background-color pink
    position absolute
    top 88px
    background-color white 
    .hdPic
      width 100%
      height 64px
      margin-top 56px
      img 
        width 192px
        height 64px
        margin-left 279px
</style>