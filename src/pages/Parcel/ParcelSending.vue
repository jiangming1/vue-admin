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
    name: "parcel-sending",
    data(){
      return{
        form: {
          commitData: {
            sort:"",
            name:'',
            id:"",
            customer:""
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
                component: "input",
                label: "下单人",
                model: "customer",
                placeholder: "请输入下单人",
                type: "text",
              },
              {
                component: "submit"
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
              title: '下单人',
              key: 'customer'
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
                  }, '已签收'),
                  h('Button', {
                    props: {
                      type: 'error',
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
                  }, '异常')
                ])
              }
            }
          ],
          data: [
            {
              name:"三鲜薯条",
              sort: "零食",
              id:"123456789oioio",
              customer:"赵本山"
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
