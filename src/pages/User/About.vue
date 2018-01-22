<template>
  <div>
    <detail-table :table-data="tableData" :form="form"></detail-table>
    <Card style="margin: 15px">
      <normal-table :table="operatorData"></normal-table>
    </Card>
  </div>
</template>

<script>
  import detailTable from '@/components/detail_table'
  import normalTable from '@/components/normal_table'

    export default {
      name: "about",
      data(){
        return{
          tableData: [
            [
              {
                type: "avatar",
                colspan:2,
                rowspan:3,
                value: "http://www.kunfan1996.pw/v_store_admin/pic/store/people/wangxiaoming.jpg"
              },
              {
                type: "normal",
                text: "名字",
                value: "赵本山"
              },
              {
                type: "normal",
                text: "性别",
                value: "男"
              },
              {
                type: "normal",
                text: "民族",
                value: "汉"
              }
            ],
            [
              {
                type: "normal",
                text: "户籍所在地",
                value: "广东广州"
              },
              {
                type: "normal",
                text: "出生年月",
                value: "2018年12月01日"
              },
              {
                type: "normal",
                text: "身份证号",
                value: "442233445566778890"
              }
            ],
            [
              {
                type: "normal",
                text: "邮箱",
                value: "44223319980@qq.com"
              },
              {
                type: "normal",
                text: "手机号码",
                value: "13455667788"
              },
              {
                type: 'normal',
                text: "微信号",
                value: "13455667788"
              }
            ],
            [
              {
                type: "normal",
                text: "部门",
                value: "信息部"
              },
              {
                type: "normal",
                text: "职位",
                value: "部长"
              },
              {
                type: "normal",
                text: "工资",
                value: "7000"
              },
              {
                type: "normal",
                text: "合同年限",
                value: "3年"
              }
            ],
            [
              {
                type: "word",
                colspan:7,
                text: "居住地址",
                value: "广东省AA市AA镇AAAA街道AA楼2层30号"
              }
            ],
            [
              {
                type: "image",
                colspan:7,
                text: "劳动合同",
                value: ["http://www.kunfan1996.pw/v_store_admin/pic/store/contrast/contrast1-1.jpg", "http://www.kunfan1996.pw/v_store_admin/pic/store/contrast/contrast1-2.jpg"]
              }
            ]
          ],
          form: {
            commitData: {

            },
            formData: {
              formInline: false,
              labelWidth:80,
              show: [
                {
                  component: "time_select",
                  label: "出生日期",
                  type: "date",
                  model: "birth",
                  placeholder: "请选择搬迁日期",
                },
                {
                  component: "input",
                  label: "名字",
                  model: "store",
                  placeholder: "请输入商店名字",
                  type: "text",
                },
                {
                  component: "normal_select",
                  label: "性别",
                  model: "sex",
                  placeholder: "请选择性别",
                  choiceList: [
                    {label: "男", value: "男"},
                    {label: "女", value: "女"}
                  ]
                },
                {
                  component: "input",
                  label: "民族",
                  model: "nation",
                  placeholder: "请输入民族",
                  type: "text",
                },
                {
                  component: "input",
                  label: "户籍",
                  model: "local",
                  placeholder: "请输入户籍",
                  type: "text",
                },
                {
                  component: "input",
                  label: "身份证号",
                  model: "idcard",
                  placeholder: "请输入身份证号",
                  type: "text",
                },
                {
                  component: "input",
                  label: "邮箱",
                  model: "email",
                  placeholder: "请输入邮箱",
                  type: "text",
                },
                {
                  component: "input",
                  label: "手机号码",
                  model: "phone",
                  placeholder: "请输入手机号码",
                  type: "text",
                },
                {
                  component: "input",
                  label: "微信号",
                  model: "phone",
                  placeholder: "请输入微信号",
                  type: "text",
                },
                {
                  component: "input",
                  label: "部门",
                  model: "department",
                  placeholder: "请输入部门",
                  type: "text",
                },
                {
                  component: "input",
                  label: "职位",
                  model: "job",
                  placeholder: "请输入职位",
                  type: "text",
                },
                {
                  component: "input",
                  label: "工资",
                  model: "wages",
                  placeholder: "请输入工资",
                  type: "text",
                },
                {
                  component: "input",
                  label: "合同年限",
                  model: "time",
                  placeholder: "请输入合同年限",
                  type: "text",
                },
                {
                  component:"zone",
                  label:"地址",
                  model_one:"zone",
                  model_two:"detail"
                },

                {
                  label:"上传头像",
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
          },
          operatorData: {
              head: [
                {
                  title:"登录ip",
                  key:"ip"
                },
                {
                  title: '操作者',
                  key: 'name'
                },
                {
                  title:"操作时间",
                  key:"time"
                },
                {
                  title:"操作内容",
                  key:"content"
                }
              ],
              data: [
                {
                  ip:"127.0.0.1:8080",
                  name:"赵本山",
                  time:"2018-01-01 12:09",
                  content:"登录账户"
                },
                {
                  ip:"127.0.0.1:8080",
                  name:"赵本山",
                  time:"2018-01-01 12:09",
                  content:"查看外卖"
                },
                {
                  ip:"127.0.0.1:8080",
                  name:"赵本山",
                  time:"2018-01-01 12:09",
                  content:"修改外卖状态"
                },
                {
                  ip:"127.0.0.1:8080",
                  name:"赵本山",
                  time:"2018-01-01 12:09",
                  content:"退出登录"
                }
              ]
            }

        }
      },
      components:{
        detailTable,normalTable
      }
    }
</script>

<style scoped>

</style>
