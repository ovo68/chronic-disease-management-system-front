<template>

  <div>
    <sn-row-has-four-col :one="7" :two="4" :three="8">
      <sn-date-picker-with-round
          :date-picker-style="{'width':'280px'}"
          slot="one-col" class="to-flex move-up">
        <sn-text text="订单时间" slot="title" :move-down="12" class="margin-right"/>
      </sn-date-picker-with-round>
      <sn-select
          :select-data="drugSalesDetailsFindBarData"
          slot="two-col"
          class="to-flex"
          :select-style="{'width':'120px'}">
        <sn-text text="订单类型" slot="title" :move-down="12" class="margin-right"/>
      </sn-select>
      <sn-search-input input-placeholder="输入单号/药品名称" slot="three-col"/>
    </sn-row-has-four-col>
  </div>
</template>

<script>
export default {
name: "DrugSalesDetailsFindBar",
  data() {
    return {
      drugSalesDetailsFindBarData: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '药品零售'
        },
        {
          value: 2,
          label: '处方开立'
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