<template>
  <div>
    <Modal
      v-model="showModal"
      title="详情"
      width="460"
      @on-cancel="closeModal">
      <div style="margin: 15px">
        <normal-table :table="tableData"></normal-table>
      </div>
    </Modal>
  </div>
</template>

<script>
  import closeModal from '@/mixins/closeModal'
  import normalTable from '@/components/normal_table'

  export default {
    name: "table_modal",
    props: ['tableData'],
    mixins:[closeModal],
    data() {
      return {
        showModal:false,


        eg_tableData: {
          head: [
            {
              title: '收费类别',
              key: 'sort'
            },
            {
              title: '金额',
              key: 'money'
            },
            {
              title: '收费日期范围',
              key: 'date'
            }
          ],
          data: [
            {
              sort: "安保费",
              money: "388",
              date: "2018年01月01日-2018年02月01日"
            },
            {
              sort: "安保费",
              money: "388",
              date: "2018年01月01日-2018年02月01日"
            },
            {
              sort: "安保费",
              money: "388",
              date: "2018年01月01日-2018年02月01日"
            },
            {
              sort: "安保费",
              money: "388",
              date: "2018年01月01日-2018年02月01日"
            },
            {
              sort: "安保费",
              money: "388",
              date: "2018年01月01日-2018年02月01日"
            },
            {
              sort: "安保费",
              money: "388",
              date: "2018年01月01日-2018年02月01日"
            },
            {
              sort: "安保费",
              money: "388",
              date: "2018年01月01日-2018年02月01日"
            }
          ]
        }
      }
    },
    watch:{
      show: function(){
        this.showModal = this.show
      }
    },
    components:{
      normalTable
    }
  }
</script>

<style scoped lang="less">

</style>
