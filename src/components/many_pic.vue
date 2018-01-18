<template>
  <div id="manyPic">
    <Modal
      v-model="showModal"
      :title="'第'+`${index+1}`+'/'+`${src.length}`+'张'"
      width="500"
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
