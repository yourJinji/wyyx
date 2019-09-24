<template>
  <div class="searchContainer">
    <div class="searchHeader">
      <input type="text" placeholder="提手式分类垃圾袋" @input="search" v-model="message" />
      <div class="jing">
        <img src="./images/jing2.png" alt />
      </div>
      <span class="cancel" @click="$router.back()">取消</span>
    </div>
    <div class="searchSuggestion">
      <header class="hd">热门搜索</header>
      <nav class="list">
        <a
          href="href"
          v-for="(hotWord,index) in hotWords"
          :key="index"
          :class="{'hLight':hotWord.highlight==1}"
        >{{hotWord.keyword}}</a>
      </nav>
    </div>
    <div class="resultContainer">
      <ul class="resultList">
        <li v-for="(result,index) in searchResult" :key="index">{{result}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import "../../api/index";
import { reqDefault, reqSearchData} from "../../api/index";
import {mapState} from 'vuex'
export default {
  data() {
    return {
      
      message: "", //搜索框输入的词
      timeId:null,
      
    };
  },
  computed: {
    ...mapState(['hotWords','searchResult'])
  },
  async mounted() {
    // const result = await reqDefault();
    // console.log(result);
    // if (result.code == 200) {
    //   this.hotWords = result.data.hotKeywordVOList;
    // }
    this.$store.dispatch('getDefault')
  },
  methods: {
     search() {
       if(this.timeId){
        clearTimeout(this.timeId)
      }
      this.timeId = setTimeout(async () => {
      //   if (this.message.trim("")) {
      //   const result = await reqSearchData(this.message);
      //   // console.log(result);
      //   if (result.code == 200) {
      //     this.searchResult = result.data;
      //     console.log(this.searchResult);
      //   }
      // }
      this.$store.dispatch('getSearchData',this.message)
      }, 500);
      
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.searchContainer
  .searchHeader
    height 88px
    width 100%
    box-sizing border-box
    padding 0 30px
    position fixed
    top 0
    background-color #fff
    z-index 99
    input
      height 54px
      width 560px
      background-color #f4f4f4
      box-sizing border-box
      padding 0 20px
      margin-left 44px
      position relative
      outline none
      margin-top 17px
      &::-ms-input-placeholder
        font-size 28px
        color #aaa
      &::-webkit-input-placeholder
        font-size 28px
        color #aaa
    .jing
      background-color #f4f4f4
      height 54px
      width 52px
      position absolute
      top 17px
      display flex
      justify-content flex-end
      align-items center
      img
        width 36px
        height 36px
        position absolute
    .cancel
      font-size 28px
      color #333
      float right
      line-height 88px
  .searchSuggestion
    width 100%
    height 408px
    background-color white
    box-sizing border-box
    margin-top 88px
    padding 0 30px 30px 30px
    .hd
      height 90px
      width 690px
      font-size 28px
      color #999
      line-height 90px
    .list
      height 320px
      width 720px
      // background-color pink
      float left
      a
        display inline-block
        border 1px solid #999
        padding 12px 15px
        margin 5px 32px 28px 0
        font-size 24px
        color #333
        border-radius 4px
        &.hLight
          border 1px solid #b4282d
          color #b4282d
  .resultContainer
    // width 100%
    background-color white
    position absolute
    top 88px
    .resultList
      width 720px
      padding 0 0 0 30px
      li
        width 720px
        height 90px
        font-size 28px
        color #333
        border-bottom 2px solid #eee
        line-height 100px

</style>