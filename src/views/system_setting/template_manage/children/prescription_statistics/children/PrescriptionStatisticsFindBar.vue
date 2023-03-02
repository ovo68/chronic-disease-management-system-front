<template>
  <sn-row-has-four-col :one="6" :two="6" :three="8">
    <sn-select
        slot="one-col"
        class="to-flex"
        :select-data="prescriptionStatisticsData1"
        :select-style="{'width':'200px'}"
    >
      <sn-text slot="title" text="处方类别" move-down="10" class="margin-right"/>
    </sn-select>

    <sn-select
        slot="two-col"
        class="to-flex"
        :select-data="prescriptionStatisticsData2"
        :select-style="{'width':'200px'}"
    >
      <sn-text slot="title" text="模板权限" move-down="10" class="margin-right"/>
    </sn-select>

    <sn-search-input slot="three-col" input-placeholder="模板编码/模板名称"></sn-search-input>

  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "PrescriptionStatisticsFindBar",
  data() {
    return{
      prescriptionStatisticsData1: [
        {
          value: 0,
          label: "全部"
        },
        {
          value: 1,
          label: "西/成药处方"
        },
        {
          value: 2,
          label: "中药处方"
        },
        {
          value: 3,
          label: "检查项目"
        }
      ],
      prescriptionStatisticsData2: [
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