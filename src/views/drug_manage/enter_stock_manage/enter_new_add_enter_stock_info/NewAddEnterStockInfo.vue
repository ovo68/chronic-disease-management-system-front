<template>
  <sn-card-with-title>
    <new-add-enter-stock-title slot="title"/>
    <div slot="content">
      <new-add-enter-stock-description/>
      <new-add-enter-stock-table :table-data="newAddEnterStockInfoData"/>
    </div>
  </sn-card-with-title>
</template>

<script>
import NewAddEnterStockDescription
  from "@/views/drug_manage/enter_stock_manage/enter_new_add_enter_stock_info/children/NewAddEnterStockDescription";
import NewAddEnterStockTable
  from "@/views/drug_manage/enter_stock_manage/enter_new_add_enter_stock_info/children/NewAddEnterStockTable";
import NewAddEnterStockTitle
  from "@/views/drug_manage/enter_stock_manage/enter_new_add_enter_stock_info/children/NewAddEnterStockTitle";

export default {
  name: "NewAddEnterStockInfo",
  components: {
    NewAddEnterStockDescription,
    NewAddEnterStockTable,
    NewAddEnterStockTitle
  },
  data() {
    return {
      newAddEnterStockInfoData: [
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
        },
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
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>