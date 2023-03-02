<template>
<sn-row-has-four-col :one="5" :two="3" :three="5">
  <sn-date-picker-with-round slot="one-col" class="to-flex">
    <sn-text text="订单时间" slot="title" :move-down="10" class="margin-right"/>
  </sn-date-picker-with-round>

  <sn-select
      :select-style="{'width':'150px'}"
      :select-data="enterData"
      slot="two-col"
      class="to-flex">
    <sn-text slot="title" text="订单类型" :move-down="10" class="margin-right"/>
  </sn-select>
  <sn-search-input input-placeholder="输订单编号/患者姓名" slot="three-col"/>
</sn-row-has-four-col>
</template>

<script>
export default {
name: "DetailExpenditureNavigation",
  data() {
    return {
      enterData: [
        {
          value:0,
          label:'全部'
        },
        {
          value:1,
          label:'药品零售'
        },
        {
          value:2,
          label:'处方开立'
        },
        {
          value:3,
          label:'挂号费'
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>