const StoreNew = resolve =>import('@/pages/Store/StoreNew')
const StoreMove = resolve =>import('@/pages/Store/StoreMove')
const StoreDetail = resolve =>import('@/pages/Store/StoreDetail')
const StoreCount = resolve =>import('@/pages/Store/StoreCount')

export default [
  {
    path:"/store-new",
    meta:{
      group:"store",
      item:"store-new"
    },
    component: StoreNew
  },
  {
    path:"/store-move",
    meta:{
      group:"store",
      item:"store-move"
    },
    component:StoreMove
  },
  {
    path:"/store-detail",
    meta:{
      group:"store",
      item:"store-detail"
    },
    component: StoreDetail
  },
  {
    path:"/store-count",
    meta:{
      group:"store",
      item:"store-count"
    },
    component: StoreCount
  }
]
