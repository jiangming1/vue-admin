export default {
  props: ['show'],
  methods: {
    closeModal() {
      this.$emit('on-cancel',false)
    }
  }
}
