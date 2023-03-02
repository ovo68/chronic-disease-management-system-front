<!-- 患者统计 -->
<template>
  <div>
    <sick-statistics-bar></sick-statistics-bar>
  </div>
</template>

<script>
import SickStatisticsBar
  from "@/views/statistics_table/sick_statistics/children/SickStatisticsBar";

export default {
  name: "SickStatistics",
  components: {SickStatisticsBar}
}
</script>

<style scoped>

</style>