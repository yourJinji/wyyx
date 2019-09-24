// 引入data.json文件
import category from './category.json'
import categoryList from './categoryList.json'
import homeData from "./homeData.json";
// 引入mock
import Mock from 'mockjs'
Mock.mock('/firstViewWares', {
  code: 0,
  data: homeData
  
})
Mock.mock('/firstView', {
  code: 0,
  data: categoryList
})
Mock.mock('/categorys', {
  code: 0,
  data: category
})