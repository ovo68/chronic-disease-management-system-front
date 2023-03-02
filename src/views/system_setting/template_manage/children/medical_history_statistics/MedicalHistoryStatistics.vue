<template>
  <div>
    <medical-history-statistics-find-bar/>
    <medical-history-statistics-table :table-data="medicalHistoryStatisticsTableData"/>
  </div>
</template>

<script>
import MedicalHistoryStatisticsTable
  from "@/views/system_setting/template_manage/children/medical_history_statistics/children/MedicalHistoryStatisticsTable";
import MedicalHistoryStatisticsFindBar
  from "@/views/system_setting/template_manage/children/medical_history_statistics/children/MedicalHistoryStatisticsFindBar";

export default {
  name: "MedicalHistoryStatics",
  components: {
    MedicalHistoryStatisticsFindBar,
    MedicalHistoryStatisticsTable
  },
  data(){
    return{
      medicalHistoryStatisticsTableData:[
        {
          id:'1',
          templateNum:'001',
          templateName:'name01',
          diagnosis:'心悸',
          templatePermission:'私人模板',
          createTime:'2019-11-12 12:08:28',
          creator:'王磊',
         /* operation:'编辑，删除'*/
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>