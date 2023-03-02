<!-- 收费统计 -->
<template>
  <sn-show-by-button-with-card
      :content-count="5"
      :button-names="buttonNames"
      :button-count="5">
    <sn-text text="收支明细" slot="buttonName0"/>
    <sn-text text="收费员收费统计" slot="buttonName1"/>
    <sn-text text="科室收费统计" slot="buttonName2"/>
    <sn-text text="医生业绩统计" slot="buttonName3"/>
    <sn-text text="储值明细" slot="buttonName4"/>
<!--    收支明细-->
    <div slot="content0">
      <detail-of-income-and-expenditure></detail-of-income-and-expenditure>
    </div>

<!--收费员收费统计-->
    <div slot="content1">
      <toll-collector-charge-statistics/>
    </div>
<!--    科室收费统计-->
    <div slot="content2">
      <department-charge></department-charge>
    </div>
<!--    医生业绩统计-->
    <div slot="content3">
     <doctor-performance-statistics></doctor-performance-statistics>
    </div>

    <!--    储值明细-->
    <div slot="content4">
     <the-stored-value-subsidiary></the-stored-value-subsidiary>
    </div>
  </sn-show-by-button-with-card>
</template>

<script>
import TheStoredValueSubsidiary
  from "@/views/statistics_table/cost_statistics/children/the_stored_value_subsidiary/TheStoredValueSubsidiary";
import DoctorPerformanceStatistics
  from "@/views/statistics_table/cost_statistics/children/doctor_performance_statistics/DoctorPerformanceStatistics";
import DepartmentCharge
  from "@/views/statistics_table/cost_statistics/children/department_charge/DepartmentCharge";
import TollCollectorChargeStatistics
  from "@/views/statistics_table/cost_statistics/children/toll_collector_charge_statistics/TollCollectorChargeStatistics";
import DetailOfIncomeAndExpenditure
  from "@/views/statistics_table/cost_statistics/children/detail_of_income_and_expenditure/DetailOfIncomeAndExpenditure";
export default {
  name: "CostStatistics",
  components:{
    DetailOfIncomeAndExpenditure,
    TollCollectorChargeStatistics,
    DepartmentCharge,
    DoctorPerformanceStatistics,
    TheStoredValueSubsidiary
  },
  data() {
    return {
      buttonNames: [
          '收支明细','收费员收费统计','科室收费','医生业绩统计','储值明细'
      ],
    }
  },

}
</script>

<style scoped>
el-button {
  width: 100%;
}
</style>