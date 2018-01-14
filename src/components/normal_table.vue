<template>
  <div>
    <Table border size="small" :columns="table.head" :data="table.data" style="margin-top: 15px"></Table>
    <div style="display: flex;justify-content: flex-end;margin: 15px 0 ">
      <Page :total="100"></Page>
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
