<!--收费统计的查看详情-->
<template>
  <div>
    <view-details-navigation></view-details-navigation>
    <br><br>
     <project-details-to/>
  </div>

</template>

<script>
import ProjectDetailsTo
  from "@/views/statistics_table/cost_statistics/children/detail_of_income_and_expenditure/view-datails/ProjectDetailsTo";
import viewDetailsNavigation
  from "@/views/statistics_table/cost_statistics/children/detail_of_income_and_expenditure/view-datails/viewDetailsNavigation";
export default {
name: "viewDetails",
  components:{
    viewDetailsNavigation,
    ProjectDetailsTo
  }
}
</script>

<style scoped>

</style>