<template>
  <div id="line-chart">
    <Card style="margin: 15px">
      <div id="lineChart" style="height: 300px">

      </div>
    </Card>
  </div>
</template>

<script>
  export default {
    name: "store-count",
    props:['data'],
    data(){
      return{
        xData: [],
        yData: [],
        title:"",
        eg_data:{
          type:"line",
          title:"777",
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
        }
      }
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('lineChart'))
        // 绘制图表
          myChart.setOption({
            title:{
              text:this.title,
              textStyle:{
                fontSize:30
              }
            },
            xAxis: {
              type: 'category',
              data: this.xData
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: this.yData,
              type: this.data.type
            }]
          });
      },
      init(){
        this.title=this.data.title;
        this.data.data.map((item)=>{
          this.xData.push(item.text)
          this.yData.push(item.value)
        })
      }
    },
    mounted(){
      this.drawLine()

    },
    created(){
      this.init()
    }
  }
</script>

<style scoped>

</style>
