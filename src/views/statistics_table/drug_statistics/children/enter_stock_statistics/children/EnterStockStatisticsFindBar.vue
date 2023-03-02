<template>
 <sn-row-has-four-col :one="7" :two="4" :three="6">

   <sn-date-picker-with-round
       slot="one-col"
       :date-picker-style="{'width':'280px'}"
       class="to-flex move-up">
     <sn-text text="入库时间" slot="title" :move-down="13" class="margin-right"/>
   </sn-date-picker-with-round>

   <sn-select
       :select-style="{'width':'130px'}"
       :select-data="enterStockTypeData"
       slot="two-col"
       class="to-flex margin-right">
     <sn-text slot="title" text="入库类型" :move-down="12" class="margin-right"/>
   </sn-select>

   <sn-search-input input-placeholder="输入入库单号/供应商/药品名称" slot="three-col" class="margin-left-20"/>

 </sn-row-has-four-col>
</template>

<script>
export default {
name: "EnterStockStatisticsFindBar",
  data() {
    return {
      enterStockTypeData: [
        {
          value:0,
          label:'全部'
        },
        {
          value:1,
          label:'采购入库'
        },
        {
          value:2,
          label:'退货入库'
        },
        {
          value:3,
          label:'其他入库'
        },
      ]
    }
  },
}
</script>

<style scoped>
.move-up{
  position: relative;
  bottom: 3px;
}
</style>