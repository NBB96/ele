import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './../views/index'
import Login from './../views/Login'
import Home from './../views/Home'
import Me from './../views/Me'
import Order from './../views/Order'
import Address from './../views/Address'
import City from './../views/City'
import Search from './../views/Search'
import Shop from './../views/Shops/Shop'
import Goods from './../views/Shops/Goods'
import Comments from './../views/Shops/Comments'
import Seller from './../views/Shops/Seller'
import MyAddress from './../views/Orders/MyAddress'
import AddAddress from './../views/Orders/AddAddress'
import Settlement from './../views/Orders/Settlement'
import Remark from './../views/Orders/Remark'
import Pay from './../views/Orders/Pay'
import OrderInfo from './../views/Orders/OrderInfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'index',
    component: Index,
    children: [
      { path: '', redirect: '/home' },
      { path: '/home', name: 'home', component: Home },
      { path: '/me', name: 'me', component: Me },
      { path: '/order', name: 'order', component: Order },
      { path: '/address', name: 'address', component: Address },
      { path: '/city', name: 'city', component: City },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop,
    redirect: '/goods',
    children: [
      {
        path: '/goods',
        name: 'goods',
        component: Goods
      },
      {
        path: '/comments',
        name: 'comments',
        component: Comments
      },
      {
        path: '/seller',
        name: 'seller',
        component: Seller
      }
    ]
  },
  {
    path: '/myAddress',
    name: 'myAddress',
    component: MyAddress
  },
  {
    path: '/addAddress',
    name: 'addAddress',
    component: AddAddress
  },
  {
    path: '/settlement',
    name: 'settlement',
    component: Settlement
  },
  {
    path: '/remark',
    name: 'remark',
    component: Remark
  },
  {
    path: '/pay',
    name: 'pay',
    component: Pay
  },
  {
    path: '/orderInfo',
    name: 'orderInfo',
    component: OrderInfo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.ele_login ? true : false
  if (to.path == '/login') {
    next()
  } else {
    isLogin ? next() : next('./login')
  }
})

export default router
