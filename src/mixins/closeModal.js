export default {
  props: ['show'],
  methods: {
    closeModal() {
      // this.show=false
      this.$emit('on-cancel',false)
    }
  }
}
