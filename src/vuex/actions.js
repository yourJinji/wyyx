import {
  RECEIVE_WARESLIST,
  RECEIVE_FIRSTNAV,
  RECEIVE_DAFAULT,
  RECEIVE_SEARCHDATE,
  RECEIVE_CATEGORY
}
from './mutation-types'
import {
  reqWaresList,
  reqfirstNav,
  reqDefault,
  reqSearchData,
  reqcategory
}
from '../api/index'
export default {
  async getWaresList({
    commit
  }) {
    const result = await reqWaresList();
    if (result.code == 0) {
      const waresArr = result.data.kingKongModule.kingKongList;
      const liArray = result.data.kingKongModule.kingKongList;
      const planArr = result.data.policyDescList;
      commit(RECEIVE_WARESLIST, {
        waresArr,
        liArray,
        planArr
      })
    }
  },
  async getFirstNav({
    commit
  }) {
    const result = await reqfirstNav()
    if (result.code == 0) {
      const clsArray = result.data;
      commit(RECEIVE_FIRSTNAV, {
        clsArray
      })
    }
  },
  async getDefault({
    commit
  }) {
    const result = await reqDefault()
    if (result.code == 200) {
      const hotWords = result.data.hotKeywordVOList;
      commit(RECEIVE_DAFAULT, {
        hotWords
      })
    }
  },
  async getSearchData({
    commit
  },message) {
    const result = await reqSearchData(message)
    if (result.code == '200') {
      const searchResult = result.data;
      commit(RECEIVE_SEARCHDATE, {
        searchResult
      })
      console.log(searchResult)
    }
  },
  async getcategory({commit}){
    const result = await reqcategory()
    if (result.code == 0) {
      const leftArr = result.data.categoryL1List
      commit(RECEIVE_CATEGORY,{
        leftArr
      })
    }
  }


}