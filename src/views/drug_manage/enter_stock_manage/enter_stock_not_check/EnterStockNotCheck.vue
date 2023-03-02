<template>
  <sn-card-with-title>
    <enter-stock-not-check-title slot="title"/>
    <div slot="content">
      <enter-stock-not-check-description/>
      <enter-stock-not-check-table :table-data="enterStockNotCheckTableData"/>
    </div>
  </sn-card-with-title>
</template>

<script>
import EnterStockNotCheckDescription
  from "@/views/drug_manage/enter_stock_manage/enter_stock_not_check/children/EnterStockNotCheckDescription";
import EnterStockNotCheckTable
  from "@/views/drug_manage/enter_stock_manage/enter_stock_not_check/children/EnterStockNotCheckTable";
import EnterStockNotCheckTitle
  from "@/views/drug_manage/enter_stock_manage/enter_stock_not_check/children/EnterStockNotCheckTitle";

export default {
  name: "EnterStockNotCheck",
  components: {
    EnterStockNotCheckDescription,
    EnterStockNotCheckTable,
    EnterStockNotCheckTitle
  },
  data() {
    return {
      enterStockNotCheckTableData: [
        {
          id: '1',
          drugId: '10512',
          name: '替硝唑氯化钠注射液',
          manufacturer: '上海医药集团有限公司',
          count: '200',
          unit: '盒',
          buyPrice: '1.20',
          salePrice: '2.00',
          batchNumber: '25121651',
          drugValidity: '2022-11-09',
          totalBuyPrice: '240.00',
          totalSalePrice: '400.00',
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>