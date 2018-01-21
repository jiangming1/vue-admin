<template>
    <div>
      <ec-chart :chart="bar_chartDataOne"></ec-chart>
      <ec-chart :chart="line_chartDataOne"></ec-chart>
      <ec-chart :chart="bar_chartDataTwo"></ec-chart>
      <ec-chart :chart="line_chartDataTwo"></ec-chart>
      <ec-chart :chart="pie_chartData"></ec-chart>
    </div>
</template>

<script>
  import ecChart from '@/components/chart'


  export default {
    name: "goods-count",
    data(){
      return{
        bar_chartDataOne: {
          id:"bar_chartDataOne",
          type: "bar",
          title: "2017年v百货商品销量量表",
          data: [
            {
              name: '一月',
              value: 3500
            },
            {
              name: '二月',
              value: 3400
            },
            {
              name: '三月',
              value: 5000
            },
            {
              name: '四月',
              value: 3010
            },
            {
              name: '五月',
              value: 4400
            },
            {
              name: '六月',
              value: 3877
            },
            {
              name: '七月',
              value: 3977
            },
            {
              name: '八月',
              value: 4300
            },
            {
              name: '九月',
              value: 3799
            },
            {
              name: '十月',
              value: 5008
            },
            {
              name: '十一月',
              value: 4377
            },
            {
              name: '十二月',
              value: 3799
            }
          ]
        },
        line_chartDataOne: {
          id:"line_chartDataOne",
          type: "line",
          title: "2017年v百货商品销量趋势表",
          data: [
            {
              name: '一月',
              value: 3500
            },
            {
              name: '二月',
              value: 3400
            },
            {
              name: '三月',
              value: 5000
            },
            {
              name: '四月',
              value: 3010
            },
            {
              name: '五月',
              value: 4400
            },
            {
              name: '六月',
              value: 3877
            },
            {
              name: '七月',
              value: 3977
            },
            {
              name: '八月',
              value: 4300
            },
            {
              name: '九月',
              value: 3799
            },
            {
              name: '十月',
              value: 5008
            },
            {
              name: '十一月',
              value: 4377
            },
            {
              name: '十二月',
              value: 3799
            }
          ]
        },
        bar_chartDataTwo: {
          id:"bar_chartDataTwo",
          type: "bar",
          title: "2017年v百货商品销售额表",
          data: [
            {
              name: '一月',
              value: 350000
            },
            {
              name: '二月',
              value: 340000
            },
            {
              name: '三月',
              value: 500000
            },
            {
              name: '四月',
              value: 301000
            },
            {
              name: '五月',
              value: 440000
            },
            {
              name: '六月',
              value: 387700
            },
            {
              name: '七月',
              value: 397700
            },
            {
              name: '八月',
              value: 430000
            },
            {
              name: '九月',
              value: 379900
            },
            {
              name: '十月',
              value: 500800
            },
            {
              name: '十一月',
              value: 437700
            },
            {
              name: '十二月',
              value: 379900
            }
          ]
        },
        line_chartDataTwo: {
          id:"line_chartDataTwo",
          type: "line",
          title: "2017年v百货商品销售额表",
          data: [
            {
              name: '一月',
              value: 350000
            },
            {
              name: '二月',
              value: 340000
            },
            {
              name: '三月',
              value: 500000
            },
            {
              name: '四月',
              value: 301000
            },
            {
              name: '五月',
              value: 440000
            },
            {
              name: '六月',
              value: 387700
            },
            {
              name: '七月',
              value: 397700
            },
            {
              name: '八月',
              value: 430000
            },
            {
              name: '九月',
              value: 379900
            },
            {
              name: '十月',
              value: 500800
            },
            {
              name: '十一月',
              value: 437700
            },
            {
              name: '十二月',
              value: 379900
            }
          ]
        },
        pie_chartData:{
          //id具有唯一性
          id:"pieChart",
          type:"pie",
          title:"2017年v百货商品销售比例统计表",
          data:[
            {
              name:'副食',
              value:4000
            },
            {
              name:'粮油',
              value:3200
            },
            {
              name:'生鲜类',
              value:4800
            },
            {
              name:'日配类',
              value:3800
            },
            {
              name:'洗涤品',
              value:3300
            },
            {
              name:'包装食品',
              value:4000
            },
            {
              name:'饮料烟酒',
              value:3200
            },
            {
              name:'散装加工',
              value:4800
            },
            {
              name:'文体办公',
              value:3800
            },
            {
              name:'五金家电',
              value:3300
            },
            {
              name:'家居百货',
              value:3800
            },
            {
              name:'针纺服饰',
              value:3300
            }
          ]
          // arr:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
        }
      }
    },
    components: {
      ecChart
    }
    }
</script>

<style scoped>

</style>
