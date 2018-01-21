<template>
  <div>
    <Table
      border
      stripe
      :height="table.height"
      size="small"
      :columns="table.head"
      :data="table.data"
      style="margin-top: 15px"></Table>
      <div style="display: flex;justify-content: flex-end;margin: 15px 0;margin-bottom: 5px ">
        <Page :total="50" size="small" style="margin-bottom: 10px"></Page>
      </div>
  </div>
</template>

<script>
    export default {
      name: "normal_table",
      props:["table"]
    }
</script>

<style scoped>

</style>
<style lang="less">
  .ivu-table-small th,.ivu-table-row>td{
    text-align: center;
  }
</style>
