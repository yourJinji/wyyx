// 引入ajax
import ajax from './ajax'
const BASE = '/api'
// 搜索热搜数据
export const reqDefault = () => ajax(`${BASE}/xhr/search/init.json`)
// input框发送请求
export const reqSearchData = (keywordPrefix) => ajax(`${BASE}/xhr/search/searchAutoComplete.json`, {keywordPrefix})
//首页商品图片列表请求
export const reqWaresList = () => ajax('/firstViewWares')
// 首页头部列表导航
export const reqfirstNav = () => ajax('/firstView')
// 分类页面数据请求
export const reqcategory = () => ajax('/categorys')
// 识物页面头部导航请求
export const reqGoodsNav = () => ajax('/goods')