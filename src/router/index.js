import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/pages/Store/router'
import Goods from '@/pages/Goods/router'
import Worker from '@/pages/Worker/router'
import Property from '@/pages/Property/router'
import Vip from '@/pages/Vip/router'
import Parcel from '@/pages/Parcel/router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: resolve =>import('@/pages/Login')
    },{
      path:'/index',
      name:"Index",
      meta:{
        group:"store",
        item:"index"
      },
      component:resolve =>import('@/pages/Index'),
      children:[
        ...Store,...Goods,...Worker,...Property,...Vip,...Parcel
      ]
    },
    {
      path:"*",
      name:"404",
      meta:{
        group:"erro",
        item:"erro"
      },
      component:resolve =>import('@/pages/Erro')
    }
  ]
})
