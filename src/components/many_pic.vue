<template>
  <div id="manyPic">
    <Modal
      v-model="showModal"
      :title="'第'+`${index+1}`+'/'+`${src.length}`+'张'"
      width="460"
      @on-cancel="closeModal">
      <!--轮播图片放大-->
      <img :src="src[index]" alt="图片放大失败" style="width: 100%">
      <!--控制图片切换-->
      <div style="display: flex;justify-content: space-between;position: absolute;width: 100%;bottom: 45%">
        <div>
          <div
            v-if="index !== 0"
            @click="ruduceIndex"
            class="flex-align flex-center"
            style="width: 40px;height: 40px;background-color: rgba(0,0,0,0.4);border-radius: 20px;margin-left: 10px;cursor: pointer">
            <Icon type="chevron-left" color="white" size="20"></Icon>
          </div>
        </div>

        <div>
          <div
            v-if="index !== src.length-1"
            @click="addIndex"
            class="flex-align flex-center"
            style="width: 40px;height: 40px;background-color: rgba(0,0,0,0.4);border-radius: 20px;margin-right: 10px;cursor: pointer">
            <Icon type="chevron-right" color="white" size="20"></Icon>
          </div>
        </div>

      </div>
    </Modal>
  </div>
</template>

<script>
  import closeModal from '@/mixins/closeModal'
  export default {
    name: "pic_view",
    props: ['src','itemIndex'],
    mixins:[closeModal],
    data() {
      return {
        showModal: false,
        // index:this.itemIndex
        index:""
      }
    },
    watch:{
      show: function(){
        this.showModal = this.show
      },
      itemIndex:function () {
        this.index=this.itemIndex
      }
    },
    methods:{
      ruduceIndex(){
        this.index--
      },
      addIndex(){
        this.index++
      }
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
