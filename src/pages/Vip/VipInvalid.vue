<template>
  <div>
    <Card style="margin: 15px">
      <normal-form :form="form"></normal-form>
    </Card>
    <Card style="margin: 15px">
      <normal-table :table="tableData"></normal-table>
    </Card>
    <table-modal :show="tableModalShow" :table-data="tableModalData" @on-cancel="closeEditInfo"></table-modal>
  </div>
</template>

<script>
  import normalForm from '@/components/normal_form'
  import normalTable from '@/components/normal_table'
  import tableModal from '@/components/table_modal'

  export default {
    name: "vip-invalid",
    data() {
      return {
        tableModalShow: false,
        tableModalData: {head: [], data: []},
        form: {
          commitData: {
            name: "",
            phone: "",
            card: ""
          },
          formData: {
            formInline: true,
            show: [
              {
                component: "input",
                label: "会员名字",
                model: "name",
                placeholder: "请输入会员名字",
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
                label: "会员卡号",
                model: "card",
                placeholder: "请输入会员卡号",
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
              title: '卡主',
              key: 'name'
            },
            {
              title: '卡号',
              key: 'card'
            },
            {
              title: '办卡手机',
              key: 'phone'
            },
            {
              title: "操作",
              key: "action",
              width: 220,
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
                        // console.log(params.index);
                        // console.log(this.tableData.data[params.index].detail);
                        this.$set(this.tableModalData, "head", this.tableData.data[params.index].detail.head)
                        this.$set(this.tableModalData, "data", this.tableData.data[params.index].detail.data)
                        // console.log(this.tableModalData);
                        // console.log(this.tableModalData);
                        this.tableModalShow = true
                      }
                    }
                  }, '查看消费记录'),
                  h('Button', {
                    props: {
                      type: 'warning',
                      size: 'small'
                    },
                    on: {
                      click: () => {
                        console.log(params);
                        this.tableData.data.splice(params.index, 1)
                      }
                    }
                  }, '续费成功')
                ])
              }
            }
          ],
          data: [
            {
              name: "1杜拉拉",
              card: "20188989898",
              phone: '13566557676',
              detail: {
                head: [
                  {
                    title: "消费时间",
                    key: "time"
                  },
                  {
                    title: "收银员",
                    key: "operator"
                  },
                  {
                    title: "消费金额",
                    key: "money"
                  }
                ],
                data: [
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  }
                ]
              }
            },
            {
              name: "1杜拉拉",
              card: "20188989898",
              phone: '13566557676',
              detail: {
                head: [
                  {
                    title: "消费时间",
                    key: "time"
                  },
                  {
                    title: "收银员",
                    key: "operator"
                  },
                  {
                    title: "消费金额",
                    key: "money"
                  }
                ],
                data: [
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  }
                ]
              }
            },
            {
              name: "1杜拉拉",
              card: "20188989898",
              phone: '13566557676',
              detail: {
                head: [
                  {
                    title: "消费时间",
                    key: "time"
                  },
                  {
                    title: "收银员",
                    key: "operator"
                  },
                  {
                    title: "消费金额",
                    key: "money"
                  }
                ],
                data: [
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  }
                ]
              }
            },
            {
              name: "1杜拉拉",
              card: "20188989898",
              phone: '13566557676',
              detail: {
                head: [
                  {
                    title: "消费时间",
                    key: "time"
                  },
                  {
                    title: "收银员",
                    key: "operator"
                  },
                  {
                    title: "消费金额",
                    key: "money"
                  }
                ],
                data: [
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  }
                ]
              }
            },
            {
              name: "1杜拉拉",
              card: "20188989898",
              phone: '13566557676',
              detail: {
                head: [
                  {
                    title: "消费时间",
                    key: "time"
                  },
                  {
                    title: "收银员",
                    key: "operator"
                  },
                  {
                    title: "消费金额",
                    key: "money"
                  }
                ],
                data: [
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  }
                ]
              }
            },
            {
              name: "1杜拉拉",
              card: "20188989898",
              phone: '13566557676',
              detail: {
                head: [
                  {
                    title: "消费时间",
                    key: "time"
                  },
                  {
                    title: "收银员",
                    key: "operator"
                  },
                  {
                    title: "消费金额",
                    key: "money"
                  }
                ],
                data: [
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  }
                ]
              }
            },
            {
              name: "1杜拉拉",
              card: "20188989898",
              phone: '13566557676',
              detail: {
                head: [
                  {
                    title: "消费时间",
                    key: "time"
                  },
                  {
                    title: "收银员",
                    key: "operator"
                  },
                  {
                    title: "消费金额",
                    key: "money"
                  }
                ],
                data: [
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  },
                  {
                    time: "2018-01-01",
                    operator: "MC秀芹",
                    money: "356"
                  }
                ]
              }
            }
          ]
        }
      }
    },
    methods: {
      closeEditInfo() {
        this.tableModalShow = false
      },
      openTableModal() {

      }
    },
    components: {
      normalForm, normalTable, tableModal
    }
  }
</script>

<style scoped>

</style>
