<template>
  <div>
    <drug-statistical-find-bar/>
    <drug-statistical-table :table-data="drugStatisticalData"/>
  </div>
</template>

<script>
import DrugStatisticalFindBar
  from "@/views/statistics_table/drug_statistics/children/drug_statistical/children/DrugStatisticalFindBar";
import DrugStatisticalTable
  from "@/views/statistics_table/drug_statistics/children/drug_statistical/children/DrugStatisticalTable";

export default {
name: "DrugStatistical",
  components: {
    DrugStatisticalTable,
    DrugStatisticalFindBar
  },
  data() {
    return {
      drugStatisticalData: [
        {
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        }, {
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        }, {
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        }, {
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        }, {
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        }, {
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        }, {
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        }, {
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        }, {
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        }, {
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        }, {
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        }, {
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        }, {
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        }, {
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        }, {
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        }, {
          id:'1',
          drugType: '西/成药',
          drugId: '1000001',
          name: '复方氯化钠注射液',
          specification: '6g*10袋/盒',
          manufacturer: '昆明制药集团',
          number: '2盒',
          price: '12.00',
        }, {
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