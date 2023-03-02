<template>
  <sn-card-with-title>
    <enter-stock-not-pass-check-title slot="title"/>
    <div slot="content">
      <enter-stock-not-pass-check-description/>
      <enter-stock-not-pass-check-table :table-data="enterStockNotPassCheckTableData"/>
    </div>
  </sn-card-with-title>
</template>

<script>
import EnterStockNotPassCheckDescription
  from "@/views/drug_manage/enter_stock_manage/enter_stock_not_pass_check/children/EnterStockNotPassCheckDescription";
import EnterStockNotPassCheckTable
  from "@/views/drug_manage/enter_stock_manage/enter_stock_not_pass_check/children/EnterStockNotPassCheckTable";
import EnterStockNotPassCheckTitle
  from "@/views/drug_manage/enter_stock_manage/enter_stock_not_pass_check/children/EnterStockNotPassCheckTitle";

export default {
  name: "EnterStockNotPassCheck",
  components: {
    EnterStockNotPassCheckDescription,
    EnterStockNotPassCheckTable,
    EnterStockNotPassCheckTitle
  },
  data() {
    return {
      enterStockNotPassCheckTableData: [
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