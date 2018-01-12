<template>
   <div id="login" class="flex-align flex-end">
      <Card style="width:350px;margin-right: 100px;margin-bottom: 200px">
        <Tabs>
          <template v-for="item in panelForm">
            <TabPane :label="item.label">
              <normal-form :form="item.form"></normal-form>
            </TabPane>
          </template>
        </Tabs>
      </Card>
   </div>
</template>

<script>
  import normalForm from '@/components/normal_form'

    export default {
        name: "login",
        data(){
          return{
            panelForm:[{
              label:"手机登录",
              form:{
                commitData:{
                  name:"",
                  password:""
                },
                formData:{
                  formInline:true,
                  labelWidth:88,
                  show:[
                    {
                      component:"input",
                      label:"手机号码",
                      model:"phone",
                      placeholder:"请输入手机号码",
                      type:"text",
                      prop:"phone"
                    },
                    {
                      component:"input",
                      label:"密码",
                      model:"password",
                      placeholder:"请输入密码",
                      type:"password",
                      prop:"password"
                    },
                    {
                      conponent:"login_button",
                      text:" 登录账户"
                    }
                  ]
                },
                rules:{
                  phone:[{required:true,message:"手机号不能为空",triger:"blur"}],
                  password:[
                    {required:true,message:"密码不能为空",triger:"blur"},
                    {type:'string',min:6,message:"密码不得少于6位",triger:"blur"}
                    ]
                }
              }
            },{
              label:"工号登录" ,
              form:{
                commitData:{
                  name:"",
                  password:""
                },
                formData:{
                  formInline:true,
                  labelWidth:64,
                  show:[
                    {
                      component:"input",
                      label:"工号",
                      model:"worker",
                      placeholder:"请输入工号",
                      type:"text",
                      prop:"worker"
                    },
                    {
                      component:"input",
                      label:"密码",
                      model:"password",
                      placeholder:"请输入密码",
                      type:"password",
                      prop:"password"
                    },
                    {
                      conponent:"login_button",
                      text:" 登录账户"
                    }
                  ]
                },
                rules:{
                  worker:[
                    {required:true,message:"工号不能为空",triger:"blur"},
                    {type:'string',min:10,message:"工号不得少于10位",triger:"blur"}
                    ],
                  password:[
                    {required:true,message:"密码不能为空",triger:"blur"},
                    {type:'string',min:6,message:"密码不得少于6位",triger:"blur"}
                    ]
                }
              }
            }]
          }
        },
        components:{
          normalForm
        }
    }
</script>

<style scoped lang="less">
  #login{
    width: 100%;
    height: 100%;
    background:url("../../static/login.jpg") no-repeat;
    background-size: 100%;
  }
</style>
<style lang="less">
  .ivu-form-item-content{
    display: flex;
    flex-direction: row;
  }
</style>
