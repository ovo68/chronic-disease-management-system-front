<template>
  <sn-card-with-title>
    <!-- 标题 -->
    <stock-check-finish-title slot="title"/>
    <div slot="content">
      <!-- 搜索导航栏 -->
      <stock-check-find-bar input-placeholder="输入药品名称/编码/生产厂家"/>
      <!-- 表格 -->
      <finish-check-table :table-data="finishCheckTableData"/>
    </div>
  </sn-card-with-title>
</template>

<script>
import StockCheckFinishTitle
  from "@/views/drug_manage/stock_check/children/stock_check_title/StockCheckFinishTitle";
import FinishCheckTable
  from "@/views/drug_manage/stock_check/children/stock_check_table/FinishCheckTable";
import StockCheckFindBar
  from "@/views/drug_manage/stock_check/children/stock_check_find_bar/StockCheckFindBar";

export default {
  name: "StockCheckFinish",
  data() {
    return {
      finishCheckTableData: [
        {
          id: '1',
          drugId: '1231651',
          name: '超敏C-反应蛋白',
          locationId: '1001',
          prescriptionType: '西/成药',
          specification: '6g*10袋/盒',
          manufacturer: '上海医药集团',
          nowStock: '200盒',
          checkStock: '198盒',
          stockAddOrReduce: '-2盒',
          remark: '阿打算'
        },
      ]
    }
  },
  components: {
    StockCheckFindBar,
    FinishCheckTable,
    StockCheckFinishTitle
  }
}
</script>

<style scoped>

</style>