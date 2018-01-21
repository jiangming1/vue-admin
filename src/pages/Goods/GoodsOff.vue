<template>
  <div>
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
    name: "goods-off",
    data(){
      return{
        form: {
          commitData: {
            name: "",
            id: "",
            sort: "",
            effect: [],
          },
          formData: {
            formInline: true,
            show: [
              {
                component: "input",
                label: "商品名字",
                model: "name",
                placeholder: "请输入商品名字",
                type: "text",
              },
              {
                component: "input",
                label: "条纹码",
                model: "id",
                placeholder: "请输入条纹码",
                type: "text",
              },
              {
                component: "normal_select",
                label: "商品类别",
                model: "sort",
                placeholder: "请选择类别",
                choiceList: [
                  {label: "副食", value: "副食"},
                  {label: "粮油", value: "粮油"},
                  {label: "生鲜类", value: "生鲜类"},
                  {label: "日配类", value: "日配类"},
                  {label: "洗涤品", value: "洗涤品"},
                  {label: "包装食品", value: "包装食品"},
                  {label: "饮料烟酒", value: "饮料烟酒"},
                  {label: "散装加工", value: "散装加工"},
                  {label: "文体办公", value: "文体办公"},
                  {label: "五金家电", value: "五金家电"},
                  {label: "家居百货", value: "家居百货"},
                  {label: "针纺服饰", value: "针纺服饰"}
                ]
              },
              {
                component: "time_select",
                label: "有效日期",
                type: "daterange",
                model: "effect",
                placeholder: "请选择有效日期",
              },
              {
                component: "submit"
              }
            ]
          }
        },
        tableData: {
          // 名字,有效日期,生产地,生产公司,条纹码,类别
          head: [
            {
              title: '商品名字',
              key: 'name'
            },
            {
              title: '条纹码',
              key: 'id'
            },
            {
              title: '类别',
              key: 'sort'
            },
            {
              title: '有效日期',
              key: 'effect'
            },
            {
              title: "生产公司",
              key: "source"
            },
            {
              title: "生产地区",
              key: "zone"
            },
            {
              title: "生产地址",
              key: "detail"
            },
            {
              title:"操作",
              key: "action",
              width:150,
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        console.log(params);
                        this.tableData.data.splice(params.index,1)
                      }
                    }
                  }, '重新上架')
                ])
              }
            }
          ],
          data: [
            {
              name:"三鲜薯条",
              id:"201812116787",
              effect:"20180102-20180605",
              sort:"包装食品",
              source:"XXXXXX公司",
              zone:"XXXX省XXXX市XXXX区",
              detail:"XXXXXXXXXXXXXXXXXXXX"
            },
            {
              name:"三鲜薯条",
              id:"201812116787",
              effect:"20180102-20180605",
              sort:"包装食品",
              source:"XXXXXX公司",
              zone:"XXXX省XXXX市XXXX区",
              detail:"XXXXXXXXXXXXXXXXXXXX"
            },{
              name:"三鲜薯条",
              id:"201812116787",
              effect:"20180102-20180605",
              sort:"包装食品",
              source:"XXXXXX公司",
              zone:"XXXX省XXXX市XXXX区",
              detail:"XXXXXXXXXXXXXXXXXXXX"
            },{
              name:"三鲜薯条",
              id:"201812116787",
              effect:"20180102-20180605",
              sort:"包装食品",
              source:"XXXXXX公司",
              zone:"XXXX省XXXX市XXXX区",
              detail:"XXXXXXXXXXXXXXXXXXXX"
            },{
              name:"三鲜薯条",
              id:"201812116787",
              effect:"20180102-20180605",
              sort:"包装食品",
              source:"XXXXXX公司",
              zone:"XXXX省XXXX市XXXX区",
              detail:"XXXXXXXXXXXXXXXXXXXX"
            },{
              name:"三鲜薯条",
              id:"201812116787",
              effect:"20180102-20180605",
              sort:"包装食品",
              source:"XXXXXX公司",
              zone:"XXXX省XXXX市XXXX区",
              detail:"XXXXXXXXXXXXXXXXXXXX"
            },{
              name:"三鲜薯条",
              id:"201812116787",
              effect:"20180102-20180605",
              sort:"包装食品",
              source:"XXXXXX公司",
              zone:"XXXX省XXXX市XXXX区",
              detail:"XXXXXXXXXXXXXXXXXXXX"
            },{
              name:"三鲜薯条",
              id:"201812116787",
              effect:"20180102-20180605",
              sort:"包装食品",
              source:"XXXXXX公司",
              zone:"XXXX省XXXX市XXXX区",
              detail:"XXXXXXXXXXXXXXXXXXXX"
            },
          ]
        }
      }
    },
    components: {
      normalForm, normalTable
    }

  }
</script>

<style scoped>

</style>
