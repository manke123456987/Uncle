import Vue from 'vue'
import Router from 'vue-router'
import Kind from '@/components/Kind'
import Regist from '@/components/Regist'
import Daling from '@/components/Daling'
import Cart from '@/components/Cart'
import Detail from '@/components/Detail'
import Listing from '@/components/Listing'
import Zc from '@/components/Zc'
import Reg from '@/components/Reg'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Daling',
      component: Daling
    },
	{
      path: '/kind',
      name: 'Kind',
      component: Kind
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/detail',
      name: 'Detail',
      component:Detail
    },
    {
      path: '/listing',
      name: 'Listing',
      component:Listing
    },
    {
      path: '/zc',
      name: 'Zc',
      component:Zc
    },
    {
      path: '/reg',
      name: 'Reg',
      component:Reg
    }
  ]
})
