<!--病历模板-->
<template>
  <sn-row-has-two-col :left="6" :right="8">

    <sn-select
        slot="one-col"
        class="to-flex"
        :select-style="{'width':'200px'}"
        :select-data="medicalHistoryStatisticsData"
    >
      <sn-text slot="title" text="模板权限" move-down="10" class="margin-right" />
    </sn-select>

    <sn-search-input input-placeholder="模板编码/模板名称" slot="two-col">

    </sn-search-input>
  </sn-row-has-two-col>
</template>

<script>
export default {
  name: "MedicalHistoryStatisticsInfoBar",
  data() {
    return {
      medicalHistoryStatisticsData: [
        {
          value: 0,
          label: "全部"
        },
        {
          value: 1,
          label: "私人模板"
        },
        {
          value: 2,
          label: "公共模板"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>