import Vue from 'vue'
import Router from 'vue-router'

const Login = () =>import('@/pages/Login')
const Index = () =>import('@/pages/Index')

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
      component:Index
    }
  ]
})
