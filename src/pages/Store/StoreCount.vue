<template>
    <div id="line-chart">
      <div style="width: 800px">
      <chart :data="chartDataLine"></chart>
    </div>
    <div class="flex-end">
      <div style="width: 800px">
        <chart :data="chartDataBar"></chart>
      </div>
    </div>
    </div>
</template>

<script>
  import chart from '@/components/chart'

    export default {
      name: "store-count",
      data(){
        return{
          chartDataLine:{
            type:"line",
            title:"2017年在驻商家数量统计",
            data:[
              {
                text:'一月',
                value:40
              },
              {
                text:'二月',
                value:32
              },
              {
                text:'三月',
                value:48
              },
              {
                text:'四月',
                value:38
              },
              {
                text:'五月',
                value:33
              },
              {
                text:'六月',
                value:43
              },
              {
                text:'七月',
                value:40
              },
              {
                text:'八月',
                value:43
              },
              {
                text:'九月',
                value:46
              },{
                text:'十月',
                value:40
              },
              {
                text:'十一月',
                value:43
              },
              {
                text:'十二月',
                value:37
              }
            ]
          },
          chartDataBar:{
            type:"bar",
            title:"2017年在驻商家数量统计",
            data:[
              {
                text:'一月',
                value:40
              },
              {
                text:'二月',
                value:32
              },
              {
                text:'三月',
                value:48
              },
              {
                text:'四月',
                value:38
              },
              {
                text:'五月',
                value:33
              },
              {
                text:'六月',
                value:43
              },
              {
                text:'七月',
                value:40
              },
              {
                text:'八月',
                value:43
              },
              {
                text:'九月',
                value:46
              },{
                text:'十月',
                value:40
              },
              {
                text:'十一月',
                value:43
              },
              {
                text:'十二月',
                value:37
              }
            ]
          },
        }
      },
      components:{
        chart
      }
    }
</script>

<style scoped>

</style>
