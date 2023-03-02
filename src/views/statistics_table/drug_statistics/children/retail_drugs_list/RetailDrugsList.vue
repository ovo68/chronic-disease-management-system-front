<template>
 <div>
   <retail-drugs-list-find-bar/>
   <retail-drugs-list-table :table-data="retailDrugsListData"/>
 </div>
</template>

<script>
import RetailDrugsListFindBar
  from "@/views/statistics_table/drug_statistics/children/retail_drugs_list/children/RetailDrugsListFindBar";
import RetailDrugsListTable
  from "@/views/statistics_table/drug_statistics/children/retail_drugs_list/children/RetailDrugsListTable";
export default {
  name: "RetailDrugsList",
  components: {
    RetailDrugsListTable,
    RetailDrugsListFindBar
  },
  data() {
    return {
      retailDrugsListData: [
        {
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        },{
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        },{
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        },{
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        },{
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        },{
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        },{
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        },{
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        },{
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        },{
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>