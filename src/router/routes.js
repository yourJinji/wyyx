import Categorys from '../pages/categorys/categorys.vue'
import Goods from '../pages/goods/goods.vue'
import Personal from '../pages/personal/personal.vue'
import ShoppingCart from '../pages/shoppingCart/shoppingCart.vue'
import FirstView from '../pages/firstView/firstView.vue'
import Choice from '../pages/goods/choice/choice.vue'
import Discover from '../pages/goods/discover/discover.vue'
import Search from '../pages/search/search.vue'
export default[
  {
    path:'/firstView',
    component:FirstView
  },
  {
    path:'/goods',
    component:Goods,
    children:[
      {
        path:'/goods/choice',
        component:Choice
      },
      {
        path:'/goods/discover',
        component:Discover
      },
      {
        path:'/goods',
        redirect:'/goods/discover'
      }
    ]
  },
  {
    path:'/categorys',
    component:Categorys
  },
  {
    path:'/shoppingCart',
    component:ShoppingCart
  },
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/',
    redirect:'/firstView'
  }
]