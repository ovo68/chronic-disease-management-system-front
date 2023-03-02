<template>
  <div>
    <sn-row-has-two-col :left="8" :right="8">
      <sn-date-picker-with-round slot="one-col" class="move-up to-flex">
        <sn-text text="操作时间" slot="title" class="margin-right" :move-down="12"/>
      </sn-date-picker-with-round>

      <sn-search-input
          slot="two-col"
          input-placeholder="输入药品名称/批号/入库单号"
          class="move-left"/>
    </sn-row-has-two-col>
  </div>
</template>

<script>
export default {
name: "AdjustPriceStatisticsFindBar"
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