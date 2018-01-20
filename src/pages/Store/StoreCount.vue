<template>
  <div id="line-chart">
    <ec-chart :chart="line_chartData"></ec-chart>
    <div>
      <ec-chart :chart="bar_chartData"></ec-chart>
    </div>
    <ec-chart :chart="pie_chartData"></ec-chart>
  </div>
</template>

<script>
  import ecChart from '@/components/chart'

  export default {
    name: "store-count",
    data() {
      return {
        line_chartData: {
          id:"lineChart",
          type: "bar",
          title: "2017年v百货在驻商家情况表",
          data: [
            {
              name: '一月',
              value: 40
            },
            {
              name: '二月',
              value: 32
            },
            {
              name: '三月',
              value: 48
            },
            {
              name: '四月',
              value: 38
            },
            {
              name: '五月',
              value: 33
            },
            {
              name: '六月',
              value: 43
            },
            {
              name: '七月',
              value: 40
            },
            {
              name: '八月',
              value: 43
            },
            {
              name: '九月',
              value: 46
            }, {
              name: '十月',
              value: 40
            },
            {
              name: '十一月',
              value: 43
            },
            {
              name: '十二月',
              value: 37
            }
          ]
        },
        bar_chartData:{
          //id具有唯一性
          id:"lineCharts",
          type: "line",
          title: "2017年v百货在驻商家情况变化表",
          data: [
            {
              name: '一月',
              value: 40
            },
            {
              name: '二月',
              value: 32
            },
            {
              name: '三月',
              value: 48
            },
            {
              name: '四月',
              value: 38
            },
            {
              name: '五月',
              value: 33
            },
            {
              name: '六月',
              value: 43
            },
            {
              name: '七月',
              value: 40
            },
            {
              name: '八月',
              value: 43
            },
            {
              name: '九月',
              value: 46
            }, {
              name: '十月',
              value: 40
            },
            {
              name: '十一月',
              value: 43
            },
            {
              name: '十二月',
              value: 37
            }
          ]
        },
        pie_chartData:{
          //id具有唯一性
          id:"pieChart",
          type:"pie",
          title:"2017年v百货在驻商家份额与比例统计表",
          data:[
            {
              name:'衣服区',
              value:40
            },
            {
              name:'香烟专区',
              value:32
            },
            {
              name:'化妆品区',
              value:48
            },
            {
              name:'母婴区',
              value:38
            },
            {
              name:'餐饮区',
              value:33
            }
          ]
          // arr:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
        }
      }
    },
    methods: {},
    components: {
      ecChart
    }
  }
</script>

<style scoped>

</style>
