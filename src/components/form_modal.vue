<template>
  <div id="form-modal">
    <Modal
      v-model="showModal"
      title="编辑页"
      width="460"
      @on-cancel="closeModal">
      <Form
        :model="form.commitData"
        :label-width="form.formData.labelWidth"
        :inline="form.formData.formInline"
        :rules="form.rules"
        id="common_form">
        <template v-for="item in form.formData.show">
          <!--输入框,type决定类型-->
          <FormItem :label="item.label"
                    v-if="item.component==='input'">
            <Input v-model="form.commitData[item.model]"
                   :placeholder="item.placeholder"
                   :type="item.type"
                   style="width: 200px"/>
          </FormItem>

          <!--电话输入框,正则表达式校验-->
          <!--<FormItem :label="item.label"-->
                    <!--v-if="item.component==='phone_input'">-->
            <!--<Input v-model="form.commitData[item.model]"-->
                   <!--:placeholder="item.placeholder"-->
                   <!--:type="item.type"-->
                   <!--style="width: 150px"-->
                   <!--@on-blur="phoneCheck(form.commitData[item.model])"/>-->
          <!--</FormItem>-->

          <!--普通下拉选择,不考虑多选->界面不友好,但是在弹框可以实现-->
          <FormItem :label="item.label"
                    v-if="item.component==='normal_select'">
            <Select
              :multiple="item.multiple"
              v-model="form.commitData[item.model]"
              style="width:200px"
              :placeholder="item.placeholder"
              clearable >
              <Option
                v-for="item in item.choiceList"
                :value="item.value"
                :key="item.value">{{ item.label }}</Option>
            </Select>
          </FormItem>

          <!--日期选择器,type决定是否为范围还是单日期选择,范围选择器绑定数组-->
          <FormItem :label="item.label"
                    v-if="item.component==='time_select'">
            <DatePicker :type="item.type"
                        :placeholder="item.placeholder"
                        style="width: 205px"
                        v-model="form.commitData[item.model]"
                        format="yy年MM月dd日"></DatePicker>
          </FormItem>

          <!--地区级联选择器-->
          <FormItem :label="item.label" v-if="item.component==='zone'">
            <div class="flex-col">
              <Cascader :data="zone" v-model="form.commitData[item.model_one]" placeholder="选择地区" style="width: 200px"></Cascader>
              <Input v-model="form.commitData[item.model_two]"
                     placeholder="请输入详细地址"
                     type="text"
                     style="width: 300px"/>
            </div>
          </FormItem>


          <!--编辑按钮组-->
          <FormItem v-if="item.component==='edit'">
            <Button type="primary" style="margin-bottom: 8px" @click="submit">提交</Button>
            <Button type="ghost" style="margin-left: 8px;margin-bottom: 8px" @click="closeModal">取消</Button>
          </FormItem>


          <!--图片上传组件,可控制张数-->
          <FormItem v-if="item.component==='uploadSinglePic'" :label="item.label">
            <div class="demo-upload-list" v-for="item in uploadList">
              <template v-if="item.status === 'finished'">
                <img :src="item.url">
                <div class="demo-upload-list-cover">
                  <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                  <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                </div>
              </template>
              <template v-else>
                <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
              </template>
            </div>
            <Upload
              ref="upload"
              :show-upload-list="false"
              :default-file-list="defaultList"
              :on-success="handleSuccess"
              :format="['jpg','jpeg','png']"
              :max-size="2048"
              :on-format-error="handleFormatError"
              :on-exceeded-size="handleMaxSize"
              :before-upload="handleBeforeUpload"
              multiple
              type="drag"
              action="//jsonplaceholder.typicode.com/posts/"
              style="display: inline-block;width:58px;">
              <div style="width: 58px;height:58px;line-height: 58px;">
                <Icon type="camera" size="20"></Icon>
              </div>
            </Upload>

          </FormItem>


        </template>
      </Form>
    </Modal>
    <Modal title="View Image" v-model="visible">
      <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
    </Modal>
  </div>
</template>

<script>
  import normalForm from '@/components/normal_form'
  import closeModal from '@/mixins/closeModal'
  import zone from '@/assets/zone.js'

  export default {
    name: "form_modal",
    props: ["form"],
    mixins:[closeModal],
    data(){
      return{
        showModal:false,
        zone,

        defaultList: [
          {
            'name': 'a42bdcc1178e62b4694c830f028db5c0',
            'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
          },
          {
            'name': 'bc7521e033abdd1e92222d733590f104',
            'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
          }
        ],
        imgName: '',
        visible: false,
        uploadList: []
      }
    },
    components: {
      normalForm
    },
    watch:{
      show: function(){
        this.showModal = this.show
      }
    },
    methods:{
      submit(){
        this.closeModal();
        this.$Message.success('提交成功');
      },

      handleView (name) {
        this.imgName = name;
        this.visible = true;
      },
      handleRemove (file) {
        const fileList = this.$refs.upload.fileList;
        this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      },
      handleSuccess (res, file) {
        file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
        file.name = '7eb99afb9d5f317c912f08b5212fd69a';
      },
      handleFormatError (file) {
        this.$Notice.warning({
          title: 'The file format is incorrect',
          desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
        });
      },
      handleMaxSize (file) {
        this.$Notice.warning({
          title: 'Exceeding file size limit',
          desc: 'File  ' + file.name + ' is too large, no more than 2M.'
        });
      },
      handleBeforeUpload () {
        const check = this.uploadList.length < 5;
        if (!check) {
          this.$Notice.warning({
            title: 'Up to five pictures can be uploaded.'
          });
        }
        return check;
      }
    }
  }
</script>

<style scoped>
  #common_form{
    margin-top: 10px;
  }
</style>
