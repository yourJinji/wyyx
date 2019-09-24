// 1 引入vue
import Vue from 'vue'
// 2 引入vuex
import Vuex from 'vuex'

Vue.use(Vuex)
import actions from './actions'
import state from './state'
import getters from './getters'
import mutations from './mutations'

export default new Vuex.Store({
  mutations,
  state,
  actions,
  getters
})