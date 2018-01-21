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
    name: "worker-leave",
    data(){
      return{
        form: {
          commitData: {
            name:"",
            sex:"",
            phone:"",
            idcard:"",
            job:"",
            department:"",
            birth:[],
            zone:[],
            detail:""
          },
          formData: {
            formInline: true,
            show: [
              {
                component: "input",
                label: "员工名字",
                model: "name",
                placeholder: "请输入员工名字",
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
                label: "身份证号",
                model: "idcard",
                placeholder: "请输入身份证号",
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
                component: "normal_select",
                label: "部门",
                model: "department",
                placeholder: "请选择部门",
                choiceList: [
                  {label: "AAA", value: "AAA"},
                  {label: "CCC", value: "CCC"},
                  {label: "BBB", value: "BBB"}
                ]
              },
              {
                component: "normal_select",
                label: "职位",
                model: "job",
                placeholder: "请选择职位",
                choiceList: [
                  {label: "AAA", value: "AAA"},
                  {label: "CCC", value: "CCC"},
                  {label: "BBB", value: "BBB"}
                ]
              },
              {
                component: "time_select",
                label: "出生日期",
                type: "daterange",
                model: "birth",
                placeholder: "请选择出生日期",
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
              title: '性别',
              key: 'sex'
            },
            {
              title: '出生日期',
              key: 'birth'
            },
            {
              title: "身份证号",
              key: "idcard",
              width:"200"
            },
            {
              title:"部门",
              key:"department"
            },
            {
              title:"职位",
              key:"job"
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
                    on: {
                      click: () => {
                        // console.log(params);
                        this.$router.push({path:"worker-detail"})
                      }
                    }
                  }, '查看编辑')
                ])
              }
            }
          ],
          data: [
            {
              name:"李云龙",
              sex:"男",
              birth:"1992-09-08",
              idcard:"441322199566778899",
              department:"独立团",
              job:"团战"
            },
            {
              name:"李云龙",
              sex:"男",
              birth:"1992-09-08",
              idcard:"441322199566778899",
              department:"独立团",
              job:"团战"
            },
            {
              name:"李云龙",
              sex:"男",
              birth:"1992-09-08",
              idcard:"441322199566778899",
              department:"独立团",
              job:"团战"
            },
            {
              name:"李云龙",
              sex:"男",
              birth:"1992-09-08",
              idcard:"441322199566778899",
              department:"独立团",
              job:"团战"
            },
            {
              name:"李云龙",
              sex:"男",
              birth:"1992-09-08",
              idcard:"441322199566778899",
              department:"独立团",
              job:"团战"
            },
            {
              name:"李云龙",
              sex:"男",
              birth:"1992-09-08",
              idcard:"441322199566778899",
              department:"独立团",
              job:"团战"
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
