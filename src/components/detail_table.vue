<template>
  <div id="normal_table">
    <Card style="margin: 15px">
      <div style="display: flex;justify-content: flex-end;margin-right: 20px;margin-bottom: 5px">
        <Button type="success" @click="editInfo()">修改信息</Button>
      </div>
      <table border="2" style="border-collapse: collapse;width: 100%">
        <tr v-for="tr in tableData">
          <template v-for="item in tr">
            <template v-if="item.type==='avatar'">
              <td :colspan="item.colspan" :rowspan="item.rowspan" align="center">
                <div>
                  <img :src="item.value" alt="加载失败" :style="{height:item.rowspan*30+'px'}"
                       @click="singlePicView(item.value)" class="image">
                </div>
              </td>
            </template>

            <template v-if="item.type==='normal'">
              <td style="height: 33px;color: #80848f" align="center">{{item.text}}</td>
              <td style="height: 33px;color: #495060;padding-left: 10px">{{item.value}}</td>
            </template>

            <template v-if="item.type==='word'">
              <td style="height: 33px;color: #80848f" align="center">{{item.text}}</td>
              <td :colspan="item.colspan" style="height: 35px;color: #495060;padding-left: 10px">{{item.value}}</td>
            </template>

            <template v-if="item.type==='image'">
              <td style="height: 33px;color: #80848f" align="center">{{item.text}}</td>
              <td :colspan="item.colspan" style="height: 35px">
                <div class="flex-row">
                  <template v-for="(pic,index) in item.value">
                    <img :src="pic" alt="加载失败" style="height: 110px;margin: 10px;cursor: pointer"
                         @click="manyPicView(index,item.value)"/>
                  </template>
                </div>
              </td>
            </template>
          </template>
        </tr>
      </table>
    </Card>
    <single-pic :show="singlePicShow" :src="singlePicSrc" @on-cancel="closeSinglePicModal"></single-pic>
    <many-pic :show="manyPicShow" :src="manyPicSrc" :item-index="manyPicSrcIndex"
              @on-cancel="closeManyPicModal"></many-pic>
    <form-modal :show="formModalShow" :form="form" @on-cancel="closeEditInfo"></form-modal>
  </div>
</template>

<script>
  import singlePic from '@/components/single_pic'
  import manyPic from '@/components/many_pic'
  import formModal from '@/components/form_modal'

  export default {
    name: "detail_table",
    props: ['tableData','form'],
    data() {
      return {
        //单图片 data
        singlePicShow: false,
        singlePicSrc: "",
        //多图片 data
        manyPicShow: false,
        manyPicSrc: "",
        manyPicSrcIndex: "",
        //表单弹框 data
        formModalShow:false
      }
    },
    methods: {
      singlePicView(src) {
        this.singlePicShow = true,
          this.singlePicSrc = src
      },
      closeSinglePicModal() {
        this.singlePicShow = false
      },
      closeManyPicModal() {
        this.manyPicSrcIndex = ""
        this.manyPicShow = false
      },
      manyPicView(index, src) {
        // console.log(index,src)
        this.manyPicShow = true
        this.manyPicSrc = src
        this.manyPicSrcIndex = index
      },
      editInfo() {
        this.formModalShow=true
      },
      closeEditInfo(){
        this.formModalShow=false
      }
    },
    components: {
      singlePic, manyPic,formModal
    }
  }
</script>

<style scoped lang="less">
  #normal_table {
    font-size: 16px;
    table {
      border: 1px solid #e9eaec;
    }
    .image{
      margin-top: 5px;
      cursor: pointer
    }
  }
</style>
