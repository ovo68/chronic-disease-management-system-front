<template>
<!--  导入储值明细导航栏布局组件-->
  <sn-row-has-four-col :one="6" :two="4" :three="6">
    <sn-date-picker-with-round slot="one-col" class="to-flex">
      <sn-text text="交易时间" slot="title" :move-down="10" class="margin-right"/>
    </sn-date-picker-with-round>

    <sn-select
        :select-style="{'width':'150px'}"
        :select-data="dealData"
        slot="two-col"
        class="to-flex">
      <sn-text slot="title" text="交易类型" :move-down="10" class="margin-right"/>
    </sn-select>
    <sn-search-input input-placeholder="输入会员卡号/患者姓名" slot="three-col"/>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "TheStoredValueSubsidiaryNavigation",
  data() {
    return {
      dealData: [
        {
          value:0,
          label:'全部'
        },
        {
          value:1,
          label:'充值'
        },
        {
          value:2,
          label:'充值退款'
        },
        {
          value:3,
          label:'消费'
        },
        {
          value:3,
          label:'消费退款'
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>