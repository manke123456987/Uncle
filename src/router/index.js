import Vue from 'vue'
import Router from 'vue-router'
import Kind from '@/components/Kind'
import Regist from '@/components/Regist'
import Daling from '@/components/Daling'
import Cart from '@/components/Cart'

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
    }
  ]
})
