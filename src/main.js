import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible.js'
import VueRouter from 'vue-router'
import  './mock/mock.server'
import store from './vuex/store'
import FooterGuide from './components/footerGuide/footerGuide.vue'

Vue.config.productionTip = false
// 注册为全局组件
Vue.component('FooterGuide',FooterGuide)
Vue.use(VueRouter)
new Vue({
  el:'#app',
  components: {App},
  template: '<App/>',
  router,
  store
})
