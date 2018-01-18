<template>
  <div id="store_detail">
    <detail-table :table-data="tableData" :form="form"></detail-table>
  </div>
</template>

<script>
  import detailTable from '@/components/detail_table'

  export default {
    name: "detail_table",
    data() {
      return {
        tableData: [
          [
            {
              type: "avatar",
              colspan:2,
              rowspan:4,
              value: "http://www.kunfan1996.pw/v_store_admin/pic/store/people/wangxiaoming.jpg"
            },
            {
              type: "normal",
              text: "商店名",
              value: "正新鸡排"
            },
            {
              type: "normal",
              text: "类别",
              value: "餐饮"
            },
            {
              type: "normal",
              text: "状态",
              value: "营业中"
            }
          ],
          [
            {
              type: "normal",
              text: "店主名",
              value: "王小明"
            },
            {
              type: "normal",
              text: "法定人",
              value: "王大明"
            },
            {
              type: "normal",
              text: "工商号",
              value: "123456789ASDFG"
            }
          ],
          [
            {
              type: "normal",
              text: "店主身份证",
              value: "442233199800122345"
            },
            {
              type: "normal",
              text: "店主手机",
              value: "13455667788"
            },
            {
              type: 'normal',
              text: "备用手机",
              value: "13455667788"
            }
          ],
          [
            {
              type: 'normal',
              text: "店主固号",
              value: "0880-8867666"
            },
            {
              type: "normal",
              text: "店主QQ",
              value: "2244366789"
            },
            {
              type: "normal",
              text: "店主邮箱",
              value: "2244366789@qq.com"
            }
          ],
          [
            {
              type: "normal",
              text: "租金",
              value: "4000/月"
            },
            {
              type: "normal",
              text: "租期",
              value: "一年"
            },
            {
              type: "normal",
              text: "开店日期",
              value: "2018年1月1日"
            },
            {
              type: "normal",
              text: "搬迁日期",
              value: "无"
            }
          ],
          [
            {
              type: "word",
              colspan:7,
              text: "店主地址",
              value: "广东省AA市AA镇AAAA街道AA楼2层30号"
            }
          ],
          [
            {
              type: "word",
              colspan:7,
              text: "门店地址",
              value: "广东省AA市AA镇AAAA街道AA楼2层30号"
            }
          ],
          [
            {
              type: "image",
              colspan:7,
              text: "门店照片",
              value: ["http://www.kunfan1996.pw/v_store_admin/pic/store/view/store1-1.png", "http://www.kunfan1996.pw/v_store_admin/pic/store/view/store1-2.png", "http://www.kunfan1996.pw/v_store_admin/pic/store/view/store1-3.png"]
            }
          ],
          [
            {
              type: "image",
              colspan:7,
              text: "合同照片",
              value: ["http://www.kunfan1996.pw/v_store_admin/pic/store/contrast/contrast1-1.jpg", "http://www.kunfan1996.pw/v_store_admin/pic/store/contrast/contrast1-2.jpg"]
            }
          ]
        ],
        form: {
          commitData: {
            store: "正新鸡排",
            sort:"餐饮区",
            status:"营业",
            boss:"王小明",
            law:'王大明',
            num:"123456789ASDFG",
            idcard:"442233199800122345",
            phone:"0880-8867666",
            mobil_phone:"13455667788",
            ready_mobil_phone:'13455667788',
            qq:"2244366789",
            email:"2244366789@qq.com",
            hire_money:"4000",
            hire_time:"12",
            begin:"18-01-07",
            move:"19-01-07",
            zone:[19,197,1747],
            detail:"XX街道XX区XX楼XX号",
            boss_zone:[19,197,1747],
            boss_detail:"XX街道XX区XX楼XX号"
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
                component:"zone",
                label:"店主地址",
                model_one:"boss_zone",
                model_two:"boss_detail"
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
    },
    components:{
      detailTable
    }
  }
</script>

<style scoped lang="less">
  #normal_table{
    font-size: 16px;
      table{
        border: 1px solid #e9eaec;
      }
  }
</style>
<style lang="less">
  .demo-upload-list{
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
  }
  .demo-upload-list img{
    width: 100%;
    height: 100%;
  }
  .demo-upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
  }
  .demo-upload-list:hover .demo-upload-list-cover{
    display: block;
  }
  .demo-upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }
</style>
