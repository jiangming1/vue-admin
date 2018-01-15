<template>
    <div id="store-move">
      <Card style="margin: 15px">
        <normal-form :form="form"></normal-form>
      </Card>
      <Card style="margin: 15px">
        <normal-table :table="tableData"></normal-table>
      </Card>
    </div>
</template>

<script>
  import normalForm from '@/components/normal_form'
  import normalTable from '@/components/normal_table'

    export default {
        name: "store-move",
        data(){
          return{
            form:{
              commitData:{
                store:"",
                boss:"",
                sort:"",
                move:[],
              },
              formData:{
                formInline:true,
                show:[
                  {
                    component:"input",
                    label:"商店名字",
                    model:"store",
                    placeholder:"请输入商店名字",
                    type:"text",
                  },
                  {
                    component:"input",
                    label:"店主名字",
                    model:"boss",
                    placeholder:"请输入店主名字",
                    type:"text",
                  },
                  {
                    component:"normal_select",
                    label:"商店类别",
                    model:"sort",
                    placeholder:"请选择类别",
                    choiceList:[
                      {label:"衣服区",value:"衣服区"},
                      {label:"香烟专区",value:"香烟专区"},
                      {label:"化妆品区",value:"化妆品区"},
                      {label:"母婴区",value:"母婴区"},
                      {label:"餐饮区",value:"餐饮区"}
                    ]
                  },
                  {
                    component:"time_select",
                    label:"搬迁日期",
                    type:"daterange",
                    model:"move",
                    placeholder:"请选择搬迁日期",
                  },
                  {
                    component:"submit"
                  }
                ]
              }
            },
            tableData:{
              head: [
                {
                  title: '商店名字',
                  key: 'store'
                },
                {
                  title: '店主名字',
                  key: 'name'
                },
                {
                  title: '法定人',
                  key: 'law'
                },
                {
                  title:"工商号",
                  key:"id"
                },
                {
                  title:"类别",
                  key:"sort"
                },
                {
                  title:"操作",
                  key:"action",
                  render:(h,params) => {
                    return h('div',[
                      h('Button',{
                        props: {
                          type: 'primary',
                          size: 'small'
                        },
                        style: {
                          marginRight: '5px'
                        },
                        on: {
                          click: () => {
                            console.log(params)
                          }
                        }
                      },'查看详情')
                    ])
                  }
                }
              ],
              data: [
                {
                  store:"正新鸡排店",
                  name:"王小明",
                  law:"王大明",
                  id:"123456789ABCDEFG",
                  sort:"餐饮"
                },{
                  store:"正新鸡排店",
                  name:"王小明",
                  law:"王大明",
                  id:"123456789ABCDEFG",
                  sort:"餐饮"
                },{
                  store:"正新鸡排店",
                  name:"王小明",
                  law:"王大明",
                  id:"123456789ABCDEFG",
                  sort:"餐饮"
                },{
                  store:"正新鸡排店",
                  name:"王小明",
                  law:"王大明",
                  id:"123456789ABCDEFG",
                  sort:"餐饮"
                },{
                  store:"正新鸡排店",
                  name:"王小明",
                  law:"王大明",
                  id:"123456789ABCDEFG",
                  sort:"餐饮"
                },{
                  store:"正新鸡排店",
                  name:"王小明",
                  law:"王大明",
                  id:"123456789ABCDEFG",
                  sort:"餐饮"
                },{
                  store:"正新鸡排店",
                  name:"王小明",
                  law:"王大明",
                  id:"123456789ABCDEFG",
                  sort:"餐饮"
                },{
                  store:"正新鸡排店",
                  name:"王小明",
                  law:"王大明",
                  id:"123456789ABCDEFG",
                  sort:"餐饮"
                }
              ]
            }
          }
        },
        components:{
          normalForm,normalTable
       }
    }
</script>

<style scoped>

</style>
