export default [
  {
    path:"/parcel-list",
    meta:{
      group:"parcel",
      item:"parcel-list"
    },
    component: resolve =>import('@/pages/Parcel/parcelList')
  },
  {
    path:"/parcel-notsend",
    meta:{
      group:"parcel",
      item:"parcel-notsend"
    },
    component: resolve =>import('@/pages/Parcel/parcelNotsend')
  },
  {
    path:"/parcel-sending",
    meta:{
      group:"parcel",
      item:"parcel-sending"
    },
    component: resolve =>import('@/pages/Parcel/parcelSending')
  },
  {
    path:"/parcel-finish",
    meta:{
      group:"parcel",
      item:"parcel-finish"
    },
    component: resolve =>import('@/pages/Parcel/parcelFinish')
  },
  {
    path:"/parcel-erro",
    meta:{
      group:"parcel",
      item:"parcel-erro"
    },
    component: resolve =>import('@/pages/Parcel/parcelErro')
  },
  {
    path:"/parcel-history",
    meta:{
      group:"parcel",
      item:"parcel-history"
    },
    component: resolve =>import('@/pages/Parcel/parcelHistory')
  }
]
