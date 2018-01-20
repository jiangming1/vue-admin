export default [
  {
    path:"/store-new",
    meta:{
      group:"store",
      item:"store-new"
    },
    component: resolve =>import('@/pages/Store/StoreNew')
  },
  {
    path:"/store-move",
    meta:{
      group:"store",
      item:"store-move"
    },
    component:resolve =>import('@/pages/Store/StoreMove')
  },
  {
    path:"/store-detail",
    meta:{
      group:"store",
      item:"store-detail"
    },
    component: resolve =>import('@/pages/Store/StoreDetail')
  },
  {
    path:"/store-count",
    meta:{
      group:"store",
      item:"store-count"
    },
    component: resolve =>import('@/pages/Store/StoreCount')
  }
]
