export default [
  {
    path:"/vip-valid",
    meta:{
      group:"vip",
      item:"vip-valid"
    },
    component: resolve =>import('@/pages/Vip/VipValid')
  },
  {
    path:"/vip-invalid",
    meta:{
      group:"vip",
      item:"vip-invalid"
    },
    component: resolve =>import('@/pages/Vip/VipInvalid')
  }
]
