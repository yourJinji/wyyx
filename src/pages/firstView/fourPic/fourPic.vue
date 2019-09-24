<template>
  <div>
    <ul class="supplyList">
      <li>
        <h4>海外制造商</h4>
        <div>
          <span class="left">9.9元起</span>
        </div>
      </li>
      <li>
        <h4>CK制造商</h4>
        <div>
          <span class="left">29.9元起</span>
        </div>
      </li>
      <li>
        <h4>新秀丽制造商</h4>
        <div>
          <span class="left">159元起</span>
        </div>
      </li>
      <li>
        <h4>Armani制造商</h4>
        <div>
          <span class="left">199元起</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">

.supplyList
  display flex
  flex-wrap wrap
  // position absolute
  padding 0 26px 26px 30px
  width 100%
  li
    width 343px
    height 260px
    background-image url('https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1')
    margin 0 4px 4px 0
    h4
      font-size 28px
      text-align center
      margin-bottom 4px
      margin-top 20px
    .left
      display block
      font-size 24px
      color #7f7f7f
      text-align center
      position relative
</style>