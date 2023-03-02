<template>
  <div>
    <purchase-sale-stock-statistics-find-bar/>
    <purchase-sale-stock-statistics-table :table-data="PurchaseSaleStockStatisticsTableData"/>
  </div>
</template>

<script>

import PurchaseSaleStockStatisticsFindBar
  from "@/views/statistics_table/drug_statistics/children/purchase_sale_stock_statistics/children/PurchaseSaleStockStatisticsFindBar";
import PurchaseSaleStockStatisticsTable
  from "@/views/statistics_table/drug_statistics/children/purchase_sale_stock_statistics/children/PurchaseSaleStockStatisticsTable";
export default {
name: "PurchaseSaleStockStatistics",
  components: {
    PurchaseSaleStockStatisticsTable,
    PurchaseSaleStockStatisticsFindBar
  },
  data() {
    return {
      PurchaseSaleStockStatisticsTableData: [
        {
          id:'合计',
          drugId:'0.00',
          name: '24000.00',
          specification: '-4000.00',
          manufacturer: '20000.00'

      },        {
          id:'1',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          blockNumber: '20191109897',
          beginMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          increaseStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          ReduceStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          endMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
        },        {
          id:'1',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          blockNumber: '20191109897',
          beginMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          increaseStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          ReduceStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          endMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
        },        {
          id:'1',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          blockNumber: '20191109897',
          beginMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          increaseStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          ReduceStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          endMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
        },        {
          id:'1',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          blockNumber: '20191109897',
          beginMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          increaseStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          ReduceStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          endMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
        },        {
          id:'1',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          blockNumber: '20191109897',
          beginMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          increaseStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          ReduceStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          endMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
        },        {
          id:'1',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          blockNumber: '20191109897',
          beginMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          increaseStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          ReduceStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          endMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
        },        {
          id:'1',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          blockNumber: '20191109897',
          beginMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          increaseStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          ReduceStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          endMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
        },        {
          id:'1',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          blockNumber: '20191109897',
          beginMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          increaseStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          ReduceStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          endMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
        },        {
          id:'1',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          blockNumber: '20191109897',
          beginMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          increaseStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          ReduceStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          endMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
        },        {
          id:'1',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          blockNumber: '20191109897',
          beginMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          increaseStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          ReduceStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          endMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
        },        {
          id:'1',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          blockNumber: '20191109897',
          beginMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          increaseStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          ReduceStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          endMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
        },        {
          id:'1',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          blockNumber: '20191109897',
          beginMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          increaseStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          ReduceStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          endMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
        },        {
          id:'1',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          blockNumber: '20191109897',
          beginMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          increaseStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          ReduceStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          endMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
        },        {
          id:'1',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          blockNumber: '20191109897',
          beginMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          increaseStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          ReduceStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          endMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
        },        {
          id:'1',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          blockNumber: '20191109897',
          beginMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          increaseStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          ReduceStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          endMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
        },        {
          id:'1',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          blockNumber: '20191109897',
          beginMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          increaseStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          ReduceStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          endMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
        },        {
          id:'1',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          blockNumber: '20191109897',
          beginMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          increaseStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          ReduceStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          endMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
        },        {
          id:'1',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          blockNumber: '20191109897',
          beginMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          increaseStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          ReduceStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          endMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
        },        {
          id:'1',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          blockNumber: '20191109897',
          beginMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          increaseStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          ReduceStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          endMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
        },        {
          id:'1',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          blockNumber: '20191109897',
          beginMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          increaseStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          ReduceStock: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
          endMouth: {
            price: '0.00',
            number: '0盒',
            purchasePrice: '0.00',
          },
        },
      ]

    }
  }
}
</script>

<style scoped>

</style>