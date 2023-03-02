<template>
  <div>
    <adjust-price-statistics-find-bar/>
    <adjust-price-statistics-table :table-data="ajustPriceStatisticsData"/>
  </div>
</template>

<script>

import AdjustPriceStatisticsFindBar
  from "@/views/statistics_table/drug_statistics/children/adjust_price_statistics/children/AdjustPriceStatisticsFindBar";
import AdjustPriceStatisticsTable
  from "@/views/statistics_table/drug_statistics/children/adjust_price_statistics/children/AdjustPriceStatisticsTable";

export default {
  name: "AdjustPriceStatistics",
  components: {
    AdjustPriceStatisticsFindBar,
    AdjustPriceStatisticsTable,
  },
  data() {
    return {
      ajustPriceStatisticsData: [
        {
          id:'1',
          orderId:'SP201911090818',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          storageType: '采购入库',
          blockNumber: '20191109897',
          repertory: '40盒',
          purchasePrice: '10.00',
          oldRetailPrice: '12.00',
          nowRetailPrice: '15.00',
          spreadPrice: '3.00',
          proportion: '25%',
          operationDate: '2019-10-2',
          operationPerson: '王冕',
        },    {
          id:'1',
          orderId:'SP201911090818',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          storageType: '采购入库',
          blockNumber: '20191109897',
          repertory: '40盒',
          purchasePrice: '10.00',
          oldRetailPrice: '12.00',
          nowRetailPrice: '15.00',
          spreadPrice: '3.00',
          proportion: '25%',
          operationDate: '2019-10-2',
          operationPerson: '王冕',
        },    {
          id:'1',
          orderId:'SP201911090818',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          storageType: '采购入库',
          blockNumber: '20191109897',
          repertory: '40盒',
          purchasePrice: '10.00',
          oldRetailPrice: '12.00',
          nowRetailPrice: '15.00',
          spreadPrice: '3.00',
          proportion: '25%',
          operationDate: '2019-10-2',
          operationPerson: '王冕',
        },    {
          id:'1',
          orderId:'SP201911090818',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          storageType: '采购入库',
          blockNumber: '20191109897',
          repertory: '40盒',
          purchasePrice: '10.00',
          oldRetailPrice: '12.00',
          nowRetailPrice: '15.00',
          spreadPrice: '3.00',
          proportion: '25%',
          operationDate: '2019-10-2',
          operationPerson: '王冕',
        },    {
          id:'1',
          orderId:'SP201911090818',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          storageType: '采购入库',
          blockNumber: '20191109897',
          repertory: '40盒',
          purchasePrice: '10.00',
          oldRetailPrice: '12.00',
          nowRetailPrice: '15.00',
          spreadPrice: '3.00',
          proportion: '25%',
          operationDate: '2019-10-2',
          operationPerson: '王冕',
        },    {
          id:'1',
          orderId:'SP201911090818',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          storageType: '采购入库',
          blockNumber: '20191109897',
          repertory: '40盒',
          purchasePrice: '10.00',
          oldRetailPrice: '12.00',
          nowRetailPrice: '15.00',
          spreadPrice: '3.00',
          proportion: '25%',
          operationDate: '2019-10-2',
          operationPerson: '王冕',
        },    {
          id:'1',
          orderId:'SP201911090818',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          storageType: '采购入库',
          blockNumber: '20191109897',
          repertory: '40盒',
          purchasePrice: '10.00',
          oldRetailPrice: '12.00',
          nowRetailPrice: '15.00',
          spreadPrice: '3.00',
          proportion: '25%',
          operationDate: '2019-10-2',
          operationPerson: '王冕',
        },    {
          id:'1',
          orderId:'SP201911090818',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          storageType: '采购入库',
          blockNumber: '20191109897',
          repertory: '40盒',
          purchasePrice: '10.00',
          oldRetailPrice: '12.00',
          nowRetailPrice: '15.00',
          spreadPrice: '3.00',
          proportion: '25%',
          operationDate: '2019-10-2',
          operationPerson: '王冕',
        },    {
          id:'1',
          orderId:'SP201911090818',
          drugId:'1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          storageType: '采购入库',
          blockNumber: '20191109897',
          repertory: '40盒',
          purchasePrice: '10.00',
          oldRetailPrice: '12.00',
          nowRetailPrice: '15.00',
          spreadPrice: '3.00',
          proportion: '25%',
          operationDate: '2019-10-2',
          operationPerson: '王冕',
        },

      ]
    }
  }
}
</script>

<style scoped>

</style>