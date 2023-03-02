<template>
  <sn-card-with-title>
    <out-stock-pass-check-title slot="title"/>
    <div slot="content">
      <out-stock-pass-check-description/>
      <out-stock-pass-check-table :table-data="OutStockPassCheckTableData"/>
    </div>
  </sn-card-with-title>
</template>

<script>
import OutStockPassCheckDescription
  from "@/views/drug_manage/out_stock_manage/out_stock_pass_check/children/OutStockPassCheckDescription";
import OutStockPassCheckTable
  from "@/views/drug_manage/out_stock_manage/out_stock_pass_check/children/OutStockPassCheckTable";
import OutStockPassCheckTitle
  from "@/views/drug_manage/out_stock_manage/out_stock_pass_check/children/OutStockPassCheckTitle";

export default {
  name: "OutStockPassCheck",
  components: {
    OutStockPassCheckTitle,
    OutStockPassCheckTable,
    OutStockPassCheckDescription
  },
  data() {
    return {
      OutStockPassCheckTableData: [
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