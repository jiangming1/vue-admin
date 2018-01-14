<template>
  <div id="store-new">
    <Card style="margin: 15px">
      <normal-form :form="form"></normal-form>
    </Card>
    <Card style="margin: 15px">

    </Card>
  </div>
</template>

<script>
  import normalForm from '@/components/normal_form'

  export default {
    name: "store-new",
    data() {
      return{
        form:{
          commitData:{
            store:"",
            boss:"",
            sort:"",
            open:[],
          },
          formData:{
            formInline:true,
            show:[
              {
                component:"input",
                label:"商店名字",
                model:"store",
                placeholder:"请输入商店名字",
                type:"text",
              },
              {
                component:"input",
                label:"店主名字",
                model:"boss",
                placeholder:"请输入店主名字",
                type:"text",
              },
              {
                component:"normal_select",
                label:"商店类别",
                model:"sort",
                placeholder:"请选择类别",
                choiceList:[
                  {label:"衣服区",value:"衣服区"},
                  {label:"香烟专区",value:"香烟专区"},
                  {label:"化妆品区",value:"化妆品区"},
                  {label:"母婴区",value:"母婴区"},
                  {label:"餐饮区",value:"餐饮区"}
                  ]
              },
              {
                component:"time_select",
                label:"开店日期",
                type:"daterange",
                model:"open",
                placeholder:"请选择开店日期",
              },
              {
                component:"submit"
              }
            ]
          }
        }
      }
    },
    components:{
      normalForm
    }
  }
</script>

<style scoped>

</style>
