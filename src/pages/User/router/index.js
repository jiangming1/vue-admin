export default [
  {
    path:"/about",
    meta:{
      group:"user",
      item:"user-detail"
    },
    component:resolve=>import('@/pages/User/About')
  }
]
