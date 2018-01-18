<template>
  <div id="singlePic">
    <Modal
      v-model="showModal"
      title=" "
      width="500"
      @on-cancel="closeModal">
      <!--单图片放大-->
      <img :src="src" alt="图片放大失败" style="width: 100%" @click="closeModal">
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
      show: function(){
        this.showModal = this.show
      }
    },
    methods:{
    }
  }
</script>

<style scoped>
</style>
<style lang="less">

</style>
