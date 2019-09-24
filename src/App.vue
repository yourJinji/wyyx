<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import {reqSearchData} from './api'
  export default {
    components:{
      
    },
    // async mounted() {
    //  const result = await reqSearchData('a')
    //   console.log(result)
    // },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>