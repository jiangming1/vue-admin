export default {
  props: ['show'],
  methods: {
    closeModal() {
      //子组件不可以修改prop,需要用emit触发实例组件时间on-cancel控制弹框消失出现
      this.$emit('on-cancel',false)
    }
  }
}
