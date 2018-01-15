const StoreNew = resolve =>import('@/pages/Store/StoreNew')
const StoreMove = resolve =>import('@/pages/Store/StoreMove')

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
  }
]
