<template>
  <sn-row-has-four-col :one="7" :two="4" :three="6">
    <sn-date-picker-with-round
        :date-picker-style="{'width':'280px'}"
        slot="one-col"
        class="to-flex move-up">
      <sn-text text="出库时间" slot="title" :move-down="13" class="margin-right"/>
    </sn-date-picker-with-round>

    <sn-select
        slot="two-col"
        :select-style="{'width':'130px'}"
        :select-data="outStockTypeData"
        class="to-flex">
      <sn-text slot="title" text="出库类型" :move-down="12" class="margin-right"/>
    </sn-select>

    <sn-search-input input-placeholder="输入出库单号/药品名称" slot="three-col" class="margin-left-20"/>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "OutStockStatisticsFindBar",
  data() {
    return {
      outStockTypeData: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '科室领药'
        },
        {
          value: 2,
          label: '报损出库'
        },
        {
          value: 3,
          label: '采购退货'
        },
      ]
    }
  }
}
</script>

<style scoped>
.move-up{
  position: relative;
  bottom: 3px;
}
</style>