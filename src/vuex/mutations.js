import {
  RECEIVE_FIRSTNAV,
  RECEIVE_WARESLIST,
  RECEIVE_DAFAULT,
  RECEIVE_SEARCHDATE,
  RECEIVE_CATEGORY
}
from './mutation-types';

export default {
  // 获取首页头部横向导航
  [RECEIVE_FIRSTNAV](state, {
    clsArray
  }) {
    state.clsArray = clsArray
  },
  // 获取首页点击下拉框热词 和 热卖商品图片 获取首页网易自营文字
  [RECEIVE_WARESLIST](state, {
    liArray,
    waresArr,
    planArr
  }) {
    state.liArray = liArray
    state.waresArr = waresArr
    state.planArr = planArr

  },
  [RECEIVE_DAFAULT](state, {
    hotWords,
  }) {
    state.hotWords = hotWords
  },
  [RECEIVE_SEARCHDATE](state, {
    searchResult,
  }) {
    state.searchResult = searchResult
  },
  [RECEIVE_CATEGORY](state, {
    leftArr, subCateObj
  }) {
    state.leftArr = leftArr
    state.subCateObj = subCateObj
  }

}