import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/pages/Store/router'

const Login = resolve =>import('@/pages/Login')
const Index = resolve =>import('@/pages/Index')
const Erro = resolve =>import('@/pages/Erro')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path:'/index',
      name:"Index",
      component:Index,
      children:[
        ...Store
      ]
    },
    {
      path:"*",
      name:"404",
      component:Erro
    }
  ]
})
