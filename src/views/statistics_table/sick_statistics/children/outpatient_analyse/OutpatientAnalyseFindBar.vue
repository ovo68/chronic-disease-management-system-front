<template>

  <sn-row-has-four-col :one="8  " :two="6" :three="6" :four="4">

    <sn-date-picker-with-round slot="one-col" class="to-flex">
      <sn-text slot="title" text="就诊时间" class="margin-right" :move-down="8" ></sn-text>
    </sn-date-picker-with-round>

    <sn-select slot="two-col"
               :select-data="SelectDoctorData"
               :select-style="{'width':'200px'}"
               class="move-up to-flex">
      <sn-text slot="title" text="接诊医生" class="margin-right" :move-down="10"></sn-text>
    </sn-select>

    <sn-select slot="three-col" :select-data="SelectChargeData" :select-style="{'width':'200px'}"
               class="move-up to-flex">
      <sn-text slot="title" text="收费状态" class="margin-right" :move-down="10"></sn-text>
    </sn-select>

    <sn-search-input
        slot="four-col"
        input-placeholder="患者名字/手机号码">
    </sn-search-input>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "OutpatientAnalyseFindBar",
  data() {
    return {
      SelectDoctorData: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '王冕'
        },
        {
          value: 2,
          label: '李佳'
        },
        {
          value: 3,
          label: '和尚'
        }
      ],
      SelectChargeData: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '待收费'
        },
        {
          value: 2,
          label: '已收费'
        },
        {
          value: 3,
          label: '已退费'
        }
      ]
    }
  }
}
</script>

<style scoped>
.move-up {
  position: relative;
  bottom: 0px;
}

</style>