<template>
  <sn-row-has-two-col :left="8" :right="8">
    <sn-date-picker-with-round
        slot="one-col"
        class="to-flex move-up">
      <sn-text text="最后操作时间" slot="title" :move-down="12" class="margin-right"/>
    </sn-date-picker-with-round>

    <sn-search-input input-placeholder="输入药品名称/批号/供应商" slot="two-col" class="move-left" />
  </sn-row-has-two-col>
</template>

<script>
export default {
name: "PurchaseSaleStockStatisticsFindBar"
}
</script>

<style scoped>
.move-up{
  position: relative;
  bottom: 3px;
}
.move-left{
  position: relative;
  right: 30px;
}
</style>