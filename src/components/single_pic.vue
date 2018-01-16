<template>
  <div id="singlePic">
    <Modal
      v-model="showModal"
      title="查看图片"
      width="360"
      @on-cancel="closeModal">
      <!--单图片放大-->
      <img :src="src" alt="图片放大失败" style="width: 100%">
    </Modal>
  </div>
</template>

<script>
  import closeModal from '@/mixins/closeModal'
  export default {
    name: "pic_view",
    props: ['src'],
    mixins:[closeModal],
    data() {
      return {
        showModal: false,
        viewDemo: {
          show: true,
          title: "查看图片",
          src: "http://www.kunfan1996.pw/v_store_admin/pic/store/people/wangxiaoming.jpg"
        }
      }
    },
    watch:{
      show: function(newVal, oldVal){
        this.showModal = newVal
      }
    },
    methods:{
    }
  }
</script>

<style scoped>
</style>
<style lang="less">
  div.ivu-modal-body {
    padding: 0;
  }
  div.ivu-modal-footer {
    display: none;
  }
  .ivu-modal-header-inner {
    font-size: 15px;
    font-weight: normal;
    line-height: 22px;
  }
  .ivu-modal-close .ivu-icon-ios-close-empty {
    font-size: 35px;
    top: -8px;
  }
  .ivu-modal-header{
    padding: 8px 16px;
  }
</style>
