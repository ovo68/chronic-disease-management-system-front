<template>
  <div class="out-stock-pass-check-description">
    <sn-row-has-four-col :one="7" :two="7" :three="4" :four="6" class="to-flex">
      <div slot="one-col" class="to-flex margin-left-20">
        <sn-text text="入库单号 :" class="margin-right"/>
        <sn-text text="CB54213546"/>
      </div>
      <div slot="two-col" class="to-flex">
        <sn-text text="入库日期 :" class="margin-right"/>
        <sn-text text="2019-09-19"/>
      </div>
      <div slot="three-col" class="to-flex">
        <sn-text text="入库人员 :" class="margin-right"/>
        <sn-text text="宁姚"/>
      </div>
      <div slot="four-col" class="to-flex">
        <sn-text text="入库类型 :" class="margin-right"/>
        <sn-text text="采购入库"/>
      </div>
    </sn-row-has-four-col>

    <sn-row-has-four-col :one="7" :two="7" :three="4" class="to-flex">
      <div slot="one-col" class="to-flex margin-left-20">
        <sn-text text="制单日期 :" class="margin-right"/>
        <sn-text text="2019-11-12"/>
      </div>
      <div slot="two-col" class="to-flex">
        <sn-text text="制单人员 :" class="margin-right"/>
        <sn-text text="陈平安"/>
      </div>
      <div slot="three-col" class="to-flex">
        <sn-text text="审核人员 :" class="margin-right"/>
        <sn-text text="宁姚"/>
      </div>
      <div slot="four-col" class="to-flex">
        <sn-text text="审核日期 :" class="margin-right"/>
        <sn-text text="2019-11-12"/>
      </div>
    </sn-row-has-four-col>

    <sn-row-has-four-col :one="7" :two="17">
      <div slot="one-col" class="to-flex margin-left-20">
        <sn-text text="供应商 :" class="margin-right"/>
        <sn-text text="白云制药厂"/>
      </div>
      <div slot="two-col" class="to-flex">
        <sn-text text="入库备注 :" class="margin-right" font-color="orange"/>
        <sn-text text="卢卡斯记得拉上看见领导那算了" font-color="orange"/>
      </div>
    </sn-row-has-four-col>

  </div>
</template>

<script>
export default {
  name: "EnterStockNotPassCheckDescription"
}
</script>

<style scoped>
.out-stock-pass-check-description {
  background-color: #EEEFFB;
  line-height: 30px;
  padding-top: 10px;
}
</style>