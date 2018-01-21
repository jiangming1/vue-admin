export default[
  {
    path:"/property-pay",
    meta:{
      group:"property",
      item:"property-pay"
    },
    component: resolve =>import('@/pages/Property/PropertyPay')
  },
  {
    path:"/property-take",
    meta:{
      group:"property",
      item:"property-take"
    },
    component: resolve =>import('@/pages/Property/PropertyTake')
  },
  {
    path:"/property-arrearge",
    meta:{
      group:"property",
      item:"property-arrearge"
    },
    component: resolve =>import('@/pages/Property/PropertyArrearge')
  }
]
