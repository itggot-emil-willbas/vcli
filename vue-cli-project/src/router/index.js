import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RouteWorld from '@/components/RouteWorld'
import Shop from '@/components/Shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/firstRoute',
      name: 'RouteWorld',
      component: RouteWorld
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
