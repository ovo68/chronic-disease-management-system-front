<template>
  <sn-card-with-title>
    <out-stock-not-check-title slot="title"/>
    <div slot="content">
      <out-stock-not-check-description/>
      <out-stock-not-check-table :table-data="outStockNotCheckTableData"/>
    </div>
  </sn-card-with-title>
</template>

<script>
import OutStockNotCheckDescription
  from "@/views/drug_manage/out_stock_manage/out_stock_not_check/children/OutStockNotCheckDescription";
import OutStockNotCheckTable
  from "@/views/drug_manage/out_stock_manage/out_stock_not_check/children/OutStockNotCheckTable";
import OutStockNotCheckTitle
  from "@/views/drug_manage/out_stock_manage/out_stock_not_check/children/OutStockNotCheckTitle";

export default {
  name: "OutStockNotCheck",
  components: {
    OutStockNotCheckDescription,
    OutStockNotCheckTable,
    OutStockNotCheckTitle
  },
  data() {
    return {
      outStockNotCheckTableData: [
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