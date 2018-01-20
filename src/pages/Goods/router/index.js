export default [
  {
    path:"/goods-selling",
    meta:{
      group:"goods",
      item:"goods-selling"
    },
    component: resolve => import('@/pages/Goods/GoodsSelling')
  },
  {
    path:"/goods-out",
    meta:{
      group:"goods",
      item:"goods-out"
    },
    component: resolve => import('@/pages/Goods/GoodsOut')
  },
  {
    path:"/goods-off",
    meta:{
      group:"goods",
      item:"goods-off"
    },
    component: resolve => import('@/pages/Goods/GoodsOff')
  },
  {
    path:"/goods-count",
    meta:{
      group:"goods",
      item:"goods-count"
    },
    component: resolve => import('@/pages/Goods/GoodsCount')
  }
]
