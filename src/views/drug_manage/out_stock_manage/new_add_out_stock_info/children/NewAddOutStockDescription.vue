<template>
  <div class="out-stock-not-check-description">
    <sn-row-has-four-col
        :one="6"
        :two="6"
        :three="6"
        :four="6"
        class="to-flex">

      <sn-input
          slot="one-col"
          :is-disabled="true"
          input-value-from-parent="CB56132145641">
        <sn-text text="出库单号" slot="title"/>
      </sn-input>

      <sn-date-picker slot="two-col">
        <sn-text text="出库日期" slot="title"/>
      </sn-date-picker>

      <sn-select :select-data="outStockWorker" slot="three-col">
        <sn-text text="出库人员" slot="title"/>
      </sn-select>

      <sn-select :select-data="enterStockType" slot="four-col">
        <sn-text text="入库类型" slot="title"/>
      </sn-select>
    </sn-row-has-four-col>

    <sn-row-has-four-col :one="6" :two="6" :three="12" :four="0" class="to-flex">
      <sn-input
          input-value-from-parent="2019-09-06"
          slot="one-col"
          :is-disabled="true">
        <sn-text text="制单日期" slot="title"/>
      </sn-input>
      <sn-input
          input-value-from-parent="宁姚"
          slot="two-col"
          :is-disabled="true">
        <sn-text text="制单人员" slot="title"/>
      </sn-input>
      <sn-input slot="three-col">
        <sn-text text="备注" slot="title"/>
      </sn-input>
    </sn-row-has-four-col>
  </div>
</template>

<script>
export default {
  name: "OutStockInfoDetailDescription",
  data() {
    return {
      outStockWorker: [
        {
          value: 0,
          label: '宁姚'
        },
        {
          value: 1,
          label: '陈平安'
        }
      ],
      enterStockType: [
        {
          value: 0,
          label: '采购入库'
        },
        {
          value: 1,
          label: '退货入库'
        },
        {
          value: 1,
          label: '其他入库'
        },
      ]
    }
  },
}
</script>

<style scoped>
.out-stock-not-check-description {
  background-color: #EEEFFB;
  padding: 20px;
}
</style>