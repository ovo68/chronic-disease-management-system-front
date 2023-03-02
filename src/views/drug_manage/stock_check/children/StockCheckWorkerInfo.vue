<template>
  <sn-row-has-four-col :one="6" :two="6" :three="6" class="to-flex check-info">
    <div slot="one-col" class="to-flex margin-left-20">
      <sn-text text="盘点单号 :" class="margin-right"/>
      <sn-text text="SA655231324156"/>
    </div>
    <div slot="two-col" class="to-flex">
      <sn-text text="盘点人 :" class="margin-right"/>
      <sn-text text="陈平安"/>
    </div>
    <div slot="three-col" class="to-flex">
      <sn-text text="创建时间 :" class="margin-right"/>
      <sn-text text="2019-12-11 10:23:22"/>
    </div>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "StockCheckWorkerInfo"
}
</script>

<style scoped>
.check-info {
  background-color: #EEEFFB;
  line-height: 60px;
}
</style>