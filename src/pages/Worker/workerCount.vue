<template>
  <div>
    <ec-chart :chart="line_chartDataOne"></ec-chart>
    <ec-chart :chart="pie_chartData"></ec-chart>
  </div>
</template>

<script>
  import ecChart from '@/components/chart'

  export default {
      name: "worker-count",
      data(){
        return{
          line_chartDataOne: {
            id:"line_chartDataOne",
            type: "line",
            title: "2017年v百货员工流动情况表",
            data: [
              {
                name: '一月',
                value: 42
              },
              {
                name: '二月',
                value: 40
              },
              {
                name: '三月',
                value: 40
              },
              {
                name: '四月',
                value: 31
              },
              {
                name: '五月',
                value: 40
              },
              {
                name: '六月',
                value: 47
              },
              {
                name: '七月',
                value: 37
              },
              {
                name: '八月',
                value: 30
              },
              {
                name: '九月',
                value: 39
              },
              {
                name: '十月',
                value: 30
              },
              {
                name: '十一月',
                value: 37
              },
              {
                name: '十二月',
                value: 36
              }
            ]
          },
          pie_chartData:{
            //id具有唯一性
            id:"pieChart",
            type:"pie",
            title:"2017年v百货员工来源分析",
            data:[
              {
                name:'广东省',
                value:120
              },
              {
                name:'云南省',
                value:32
              },
              {
                name:'福建省',
                value:48
              },
              {
                name:'湖北省',
                value:38
              },
              {
                name:'海南省',
                value:33
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
