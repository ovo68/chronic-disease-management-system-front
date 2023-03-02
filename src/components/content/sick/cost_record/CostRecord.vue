<!-- 收费信息展示 -->
<template>
  <div>
    <cost-record-title/>
    <cost-record-table
        class="margin-top-20"
        :table-data="recordShowTableData"/>
  </div>
</template>

<script>
import CostRecordTable from "@/components/content/sick/cost_record/children/CostRecordTable";
import CostRecordTitle from "@/components/content/sick/cost_record/children/CostRecordTitle";

export default {
  name: "CostRecord",
  components: {
    CostRecordTable,
    CostRecordTitle
  },
  data() {
    return {}
  },
  props: {
    recordShowTableData: Array
  },
}
</script>

<style scoped>

</style>