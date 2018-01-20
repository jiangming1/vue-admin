<template>
  <div id="store-new">
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
    name: "store-new",
    data() {
      return {
        form: {
          commitData: {
            store: "",
            boss: "",
            sort: "",
            open: [],
          },
          formData: {
            formInline: true,
            show: [
              {
                component: "input",
                label: "商店名字",
                model: "store",
                placeholder: "请输入商店名字",
                type: "text",
              },
              {
                component: "input",
                label: "店主名字",
                model: "boss",
                placeholder: "请输入店主名字",
                type: "text",
              },
              {
                component: "normal_select",
                label: "商店类别",
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
                component: "time_select",
                label: "开店日期",
                type: "daterange",
                model: "open",
                placeholder: "请选择开店日期",
              },
              {
                component: "submit"
              },
              {
                component:"new",
                form: {
                  commitData: {
                    store: "",
                    sort:"",
                    status:"",
                    boss:"",
                    law:'',
                    num:"",
                    idcard:"",
                    phone:"",
                    mobil_phone:"",
                    ready_mobil_phone:'',
                    qq:"",
                    email:"",
                    hire_money:"",
                    hire_time:"",
                    begin:"",
                    move:"",
                    zone:[],
                    detail:""
                  },
                  formData: {
                    formInline: false,
                    labelWidth:80,
                    show: [
                      {
                        component: "time_select",
                        label: "开店日期",
                        type: "date",
                        model: "begin",
                        placeholder: "请选择搬迁日期",
                      },
                      {
                        component: "time_select",
                        label: "搬迁日期",
                        type: "date",
                        model: "move",
                        placeholder: "请选择搬迁日期",
                      },
                      {
                        component: "input",
                        label: "商店名字",
                        model: "store",
                        placeholder: "请输入商店名字",
                        type: "text",
                      },
                      {
                        component: "normal_select",
                        label: "类别",
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
                        component: "normal_select",
                        label: "状态",
                        model: "status",
                        placeholder: "请选择状态",
                        choiceList: [
                          {label: "营业", value: "营业"},
                          {label: "搬迁", value: "搬迁"}
                        ]
                      },
                      {
                        component: "input",
                        label: "店主名字",
                        model: "boss",
                        placeholder: "请输入店主名字",
                        type: "text",
                      },
                      {
                        component: "input",
                        label: "法定人",
                        model: "law",
                        placeholder: "请输入法定人名字",
                        type: "text",
                      },
                      {
                        component: "input",
                        label: "工商号",
                        model: "num",
                        placeholder: "请输入工商号",
                        type: "text",
                      },
                      {
                        component: "input",
                        label: "身份证",
                        model: "idcard",
                        placeholder: "请输入店主身份证",
                        type: "text",
                      },
                      {
                        component: "input",
                        label: "店主固号",
                        model: "phone",
                        placeholder: "请输入店主固号",
                        type: "text",
                      },
                      {
                        component: "input",
                        label: "店主手机",
                        model: "mobil_phone",
                        placeholder: "请输入店主手机",
                        type: "text",
                      },
                      {
                        component: "input",
                        label: "备用手机",
                        model: "ready_mobil_phone",
                        placeholder: "请输入店主备用手机",
                        type: "text",
                      },
                      {
                        component: "input",
                        label: "店主qq",
                        model: "qq",
                        placeholder: "请输入店主qq",
                        type: "text",
                      },
                      {
                        component: "input",
                        label: "店主邮箱",
                        model: "email",
                        placeholder: "请输入店主email",
                        type: "text",
                      },
                      {
                        component: "input",
                        label: "租金",
                        model: "hire_money",
                        placeholder: "请输入租金(月)",
                        type: "text",
                      },
                      {
                        component: "input",
                        label: "租期",
                        model: "hire_time",
                        placeholder: "请输入租期(月)",
                        type: "text",
                      },
                      {
                        component:"zone",
                        label:"商店地址",
                        model_one:"zone",
                        model_two:"detail"
                      },
                      {
                        label:"上传头像",
                        component:"uploadSinglePic"
                      },
                      {
                        label:"上传门店",
                        component:"uploadSinglePic"
                      },
                      {
                        label:"上传合同",
                        component:"uploadSinglePic"
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
              title: "工商号",
              key: "id"
            },
            {
              title: "类别",
              key: "sort"
            },
            {
              title: "操作",
              key: "action",
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
                        // console.log(params);
                        this.$router.push({path:"store-detail"})
                      }
                    }
                  }, '查看详情')
                ])
              }
            }
          ],
          data: [
            {
              store: "正新鸡排店",
              name: "王小明",
              law: "王大明",
              id: "123456789ABCDEFG",
              sort: "餐饮"
            }, {
              store: "正新鸡排店",
              name: "王小明",
              law: "王大明",
              id: "123456789ABCDEFG",
              sort: "餐饮"
            }, {
              store: "正新鸡排店",
              name: "王小明",
              law: "王大明",
              id: "123456789ABCDEFG",
              sort: "餐饮"
            }, {
              store: "正新鸡排店",
              name: "王小明",
              law: "王大明",
              id: "123456789ABCDEFG",
              sort: "餐饮"
            }, {
              store: "正新鸡排店",
              name: "王小明",
              law: "王大明",
              id: "123456789ABCDEFG",
              sort: "餐饮"
            }, {
              store: "正新鸡排店",
              name: "王小明",
              law: "王大明",
              id: "123456789ABCDEFG",
              sort: "餐饮"
            }, {
              store: "正新鸡排店",
              name: "王小明",
              law: "王大明",
              id: "123456789ABCDEFG",
              sort: "餐饮"
            }, {
              store: "正新鸡排店",
              name: "王小明",
              law: "王大明",
              id: "123456789ABCDEFG",
              sort: "餐饮"
            }
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
