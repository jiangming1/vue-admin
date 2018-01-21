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
    name: "parcel-list",
    data(){
      return{
        form: {
          commitData: {
            sort:"",
            name:'',
            id:"",
            rest:null
          },
          formData: {
            formInline: true,
            show: [
              {
                component: "normal_select",
                label: "分类",
                model: "sort",
                placeholder: "请选择类别",
                choiceList: [
                  {label: "衣服区", value: "衣服区"},
                  {label: "香烟专区", value: "香烟专区"},
                  {label: "化妆品区", value: "化妆品区"},
                  {label: "母婴区", value: "母婴区"},
                  {label: "餐饮区", value: "餐饮区"}
                ]
              },
              {
                component: "input",
                label: "商品名字",
                model: "name",
                placeholder: "请输入商店名字",
                type: "text",
              },
              {
                component: "input",
                label: "商品条形码",
                model: "id",
                placeholder: "请输入商品条形码",
                type: "text",
              },
              {
                component:"number_input",
                label:"余量",
                model:"rest"
              },
              {
                component: "submit"
              },
              {
                component:"new",
                form: {
                  commitData: {
                    sort:"",
                    money:"",
                    date:[]
                  },
                  formData: {
                    formInline: false,
                    labelWidth:80,
                    show: [
                      {
                        component: "normal_select",
                        label: "分类",
                        model: "sort",
                        placeholder: "请选择类别",
                        choiceList: [
                          {label: "衣服区", value: "衣服区"},
                          {label: "香烟专区", value: "香烟专区"},
                          {label: "化妆品区", value: "化妆品区"},
                          {label: "母婴区", value: "母婴区"},
                          {label: "餐饮区", value: "餐饮区"}
                        ]
                      },
                      {
                        component: "input",
                        label: "商品名字",
                        model: "name",
                        placeholder: "请输入商店名字",
                        type: "text",
                      },
                      {
                        component: "input",
                        label: "商品条形码",
                        model: "id",
                        placeholder: "请输入商品条形码",
                        type: "text",
                      },
                      {
                        component:"number_input",
                        label:"余量",
                        model:"rest"
                      },
                      {
                        component: "edit"
                      }
                    ]
                  }
                }
              }
            ]
          }
        },
        tableData: {
          head: [
            {
              title: '名字',
              key: 'name'
            },
            {
              title: '分类',
              key: 'sort'
            },
            {
              title: '条形码',
              key: 'id'
            },
            {
              title: '余量',
              key: 'rest'
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
                  }, '下架')
                ])
              }
            }
          ],
          data: [
            {
              name:"三鲜薯条",
              sort: "零食",
              id:"123456789oioio",
              rest:"89"
            },
            {
              name:"三鲜薯条",
              sort: "零食",
              id:"123456789oioio",
              rest:"89"
            },
            {
              name:"三鲜薯条",
              sort: "零食",
              id:"123456789oioio",
              rest:"89"
            },
            {
              name:"三鲜薯条",
              sort: "零食",
              id:"123456789oioio",
              rest:"89"
            },
            {
              name:"三鲜薯条",
              sort: "零食",
              id:"123456789oioio",
              rest:"89"
            },
            {
              name:"三鲜薯条",
              sort: "零食",
              id:"123456789oioio",
              rest:"89"
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
