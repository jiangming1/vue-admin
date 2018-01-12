<template>
    <div id="index" class="flex-col">
      <div id="head" style="justify-content: space-between" class="flex-row">
        <div class="flex-align" style="height: 64px;margin-left: 40px">
          <Icon type="ios-chatboxes" style="font-size: 50px;color: white"></Icon>
          <div class="flex-align" style="height: 64px;color: white;font-size: 16px;margin-left: 20px;letter-spacing: 2px">
            V商城管理系统
          </div>
        </div>
        <div style="height: 64px;margin-right: 40px" class="flex-align flex-row">
          <span style="color: white;margin-right: 20px"> 欢迎你,{{reqData.roleName}}</span>
          <Icon type="log-out" style="font-size: 20px;color: white;cursor: pointer" title="退出登录"></Icon>
        </div>
      </div>
      <div style="flex: 1" class="flex-row">
        <div id="navMenu"></div>
        <div id="content"></div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "index",
      data(){
        return{
          reqData:{
            roleName:"杨坤凡"
          }
        }
      }
    }
</script>
<style lang="less">
  #index{
    width: 100%;
    height: 100%;
      #head{
        height: 64px;
        background-color: #08a2ba;
      }
  }
  #navMenu{
    height: calc(100vh-64 px);
    width: 200px;
    background-color: black;
  }
  #content{
    height: calc(100vh-64 px);
    flex: 1;
    background-color: red;
  }
</style>
<style scoped lang="less">
  #index{

  }
</style>
