<template>
  <div>
    <doctor-performance-statistics-navigation></doctor-performance-statistics-navigation>
    <doctor-performance-statistics-table :table-data="doctorperformancestatisticstable"></doctor-performance-statistics-table>
  </div>
</template>

<script>
import DoctorPerformanceStatisticsTable
  from "@/views/statistics_table/cost_statistics/children/doctor_performance_statistics/children/DoctorPerformanceStatisticsTable";
import DoctorPerformanceStatisticsNavigation
  from "@/views/statistics_table/cost_statistics/children/doctor_performance_statistics/children/DoctorPerformanceStatisticsNavigation";
export default {
name: "DoctorPerformanceStatistics",
  components:{
    DoctorPerformanceStatisticsNavigation,
    DoctorPerformanceStatisticsTable
  },
  data(){
  return{
    doctorperformancestatisticstable:[
      {
        id:'合计',
        receivableMoney:'1200.00',
        discountsMoney:'50.00',
        trueMoney:'1150.00',
        clinicalReceptionNumber:'200',
        firstVisitNumber:'180',
        ReturnTheNumber:'20',
        TheCostOfMedicine:'500.00',
        ZhongYaoFei:'800.00',
        inspectionItem:'700.00',
        registrationFee:'600.00',
        consultationFee:'300.00'
      },
      {
        id:'1',
        doctor:'tom',
        receivableMoney:'1200.00',
        discountsMoney:'50.00',
        trueMoney:'1150.00',
        clinicalReceptionNumber:'200',
        firstVisitNumber:'180',
        ReturnTheNumber:'20',
        TheCostOfMedicine:'500.00',
        ZhongYaoFei:'800.00',
        inspectionItem:'700.00',
        registrationFee:'600.00',
        consultationFee:'300.00'
      },
      {
        id:'1',
        doctor:'tom',
        receivableMoney:'1200.00',
        discountsMoney:'50.00',
        trueMoney:'1150.00',
        clinicalReceptionNumber:'200',
        firstVisitNumber:'180',
        ReturnTheNumber:'20',
        TheCostOfMedicine:'500.00',
        ZhongYaoFei:'800.00',
        inspectionItem:'700.00',
        registrationFee:'600.00',
        consultationFee:'300.00'
      },
      {
        id:'1',
        doctor:'tom',
        receivableMoney:'1200.00',
        discountsMoney:'50.00',
        trueMoney:'1150.00',
        clinicalReceptionNumber:'200',
        firstVisitNumber:'180',
        ReturnTheNumber:'20',
        TheCostOfMedicine:'500.00',
        ZhongYaoFei:'800.00',
        inspectionItem:'700.00',
        registrationFee:'600.00',
        consultationFee:'300.00'
      }
    ]
  }
  }
}
</script>

<style scoped>

</style>