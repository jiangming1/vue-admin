<template>
  <div id="line-chart">
    <Card style="margin: 15px">
      <div :id="chart.id" style="height: 500px">

      </div>
    </Card>
  </div>
</template>

<script>
  export default {
    name: "store-count",
    props:['chart'],
    data(){
      return{
        xData: [],
        yData: [],
        title:"",
        type:"",
        //模板数据
        eg_chart:{
          //id具有唯一性
          id:"lineChart",
          type:"bar",
          title:"11111",
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
          ],
          arr:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
        }
      }
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById(this.chart.id))
        // 绘制图表
        //line和bar形表格
        if(this.chart.type==='bar'||this.chart.type==='line'){
          myChart.setOption({
            title:{
              text:this.title,
              textStyle:{
                fontSize:30
              }
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross'
              }
            },
            xAxis: {
              type: '',
              data: this.xData
            },
            yAxis: {
              type: 'value',
              axisPointer: {
                snap: true
              }
            },
            series: [{
              data: this.yData,
              type: this.type
            }]
          });
        }
        //pie表格
        if(this.chart.type==='pie'){
          myChart.setOption({
            title:{
              text:this.title,
              textStyle:{
                fontSize:30,
              },
              left:"center"
            },

            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              x: 'left',
              data:this.xData
            },
            series: [
              {
                name:'所占百分比',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '30',
                      fontWeight: 'bold'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data:this.chart.data
              }
            ]
          });
        }
      },
      init(){

        //转换为符合要求的数据
        this.title=this.chart.title;
        this.type=this.chart.type;
        this.chart.data.map((item)=>{
          this.xData.push(item.name)
          this.yData.push(item.value)
        })
      }
    },
    mounted(){
      this.init()
      this.drawLine()
    }
  }
</script>

<style scoped>

</style>
