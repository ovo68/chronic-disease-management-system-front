<template>
<div>
  <prescription-statistics-find-bar/>
  <prescription-statistics-table :table-data="prescriptionStatisticsTableData"/>
</div>
</template>

<script>
import PrescriptionStatisticsFindBar
  from "@/views/system_setting/template_manage/children/prescription_statistics/children/PrescriptionStatisticsFindBar";
import PrescriptionStatisticsTable
  from "@/views/system_setting/template_manage/children/prescription_statistics/children/PrescriptionStatisticsTable";

export default {
  name: "PrescriptionStatistics",
  components: {
    PrescriptionStatisticsFindBar,
    PrescriptionStatisticsTable
  },
  data() {
    return {
      prescriptionStatisticsTableData:[
        {
          id:'1',
          templateNum:'001',
          templateName:'name01',
          prescriptionType:'中药',
          diagnosis:'心悸',
          templatePermission:'私人模板',
          createTime:'2019-11-12 12:08:28',
          creator:'王磊',
        }
      ]
    }

  }
}
</script>

<style scoped>

</style>