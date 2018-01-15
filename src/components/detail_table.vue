<template>
  <div id="normal_table">
    <Card style="margin: 15px">
      <table border="1" style="border-collapse: collapse;width: 100%">
        <tr v-for="tr in tableData">
          <template v-for="item in tr">
            <template v-if="item.type==='avatar'">
              <td colspan="2" rowspan="4" align="center">
                <div>
                  <img :src="item.value" alt="加载失败" style="height:120px;margin-top: 5px">
                </div>
              </td>
            </template>

            <template v-if="item.type==='normal'">
              <td style="height: 35px;color: #80848f" align="center">{{item.text}}</td>
              <td style="height: 35px;color: #495060;padding-left: 10px">{{item.value}}</td>
            </template>

            <template v-if="item.type==='word'">
              <td style="height: 35px;color: #80848f" align="center">{{item.text}}</td>
              <td colspan="7" style="height: 35px;color: #495060;padding-left: 10px">{{item.value}}</td>
            </template>

            <template v-if="item.type==='image'">
              <td style="height: 35px;color: #80848f" align="center">{{item.text}}</td>
              <td colspan="7" style="height: 35px">
                <div class="flex-row">
                  <template v-for="pic in item.value">
                    <img :src="pic" alt="加载失败" style="height: 120px;margin: 10px">
                  </template>
                </div>
              </td>
            </template>
          </template>
        </tr>
      </table>
    </Card>
  </div>
</template>

<script>
  export default {
    name: "detail_table",
    props:['tableData'],
    data() {
      return {
        tableData111: [
          [
            {
              type: "avatar",
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
              text: "店主地址",
              value: "广东省AA市AA镇AAAA街道AA楼2层30号"
            }
          ],
          [
            {
              type: "word",
              text: "门店地址",
              value: "广东省AA市AA镇AAAA街道AA楼2层30号"
            }
          ],
          [
            {
              type: "image",
              text: "门店照片",
              value: ["http://www.kunfan1996.pw/v_store_admin/pic/store/view/store1-1.png", "http://www.kunfan1996.pw/v_store_admin/pic/store/view/store1-2.png", "http://www.kunfan1996.pw/v_store_admin/pic/store/view/store1-3.png"]
            }
          ],
          [
            {
              type: "image",
              text: "合同照片",
              value: ["http://www.kunfan1996.pw/v_store_admin/pic/store/contrast/contrast1-1.jpg", "http://www.kunfan1996.pw/v_store_admin/pic/store/contrast/contrast1-2.jpg"]
            }
          ]
        ]
      }
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
