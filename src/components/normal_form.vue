<template>
    <Form
      label-position="right"
      :model="form.commitData"
      :label-width="form.formData.labelWidth"
      :inline="form.formData.formInline"
      :rules="form.rules">
      <template v-for="item in form.formData.show">
        <FormItem :label="item.label"
                  v-if="item.component==='input'"
                  :prop="item.prop">
          <Input v-model="form.commitData[item.model]"
                 :placeholder="item.placeholder"
                 :type="item.type"
                 style="width: 200px"
          />
        </FormItem>
        <div class="flex-center" v-if="item.conponent==='login_button'">
          <Button type="primary" @click="login">{{item.text}}</Button>
        </div>
      </template>
    </Form>
</template>

<script>
    export default {
        name: "normal_form",
        props:['form'],
        data(){
          return{
            formExample:{
              commitData:{
                name:""
              },
              formData:{
                labelWidth:80,
                formInline:true,
                show:[
                  {
                    component:"input",
                    label:"姓名",
                    model:"name",
                    placeholder:"请输入姓名",
                    type:"text"
                  },
                  {
                    conponent:"login_button",
                    text:" 登录账户"
                  }
                ]
              }
            }
          }
      },
        methods:{
           login(){
             console.log("***login***")
           },
          submit(){
             console.log("***submit***")
          }
        }
    }
</script>

<style scoped lang="less">
  .ivu-form-item-content{
    display: flex;
    flex-direction: row;
  }
</style>
