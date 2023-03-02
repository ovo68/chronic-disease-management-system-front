<template>
  <sn-row-has-two-col
      :left="20"
      :right="4"
      class="to-flex move-down">
    <div class="to-flex" slot="one-col">
      <sn-text
          :font-size="20"
          font-weight="bold"
          text="应收金额 :"
          class="margin-right"
          :move-down="5"/>
      <sn-text
          :number="receivableMoney"
          class="margin-right"
          font-color="orange"
          font-weight="bolder"
          :font-size="30"/>
      <sn-text
          :font-size="20"
          font-weight="bold"
          text="元"
          :move-down="5"/>
    </div>
    <collect-money-dialog
        v-if="receivableMoney !== 0"
        ref="collectMoneyDialog"
        @collectionMoney="toCollectionMoney"
        :cost="cost"
        slot="two-col"/>
  </sn-row-has-two-col>
</template>

<script>
import CollectMoneyDialog
  from "@/components/content/dialog/cost/CollectMoneyDialog";

export default {
  name: "NotCostOrderTitle",
  data() {
    return {
      cost: {
        //应付金额
        needMoney: this.receivableMoney,
        // 医保支付
        medicalInsurancePay: 0,
        //折扣
        discount: this.orderInfo.sick.vip.discount,
        //实收金额
        actualMoney: '',
        //支付方式
        payMethod: '1',
        //折后金额
        afterDiscountMoney:
            Math.floor(this.receivableMoney * this.orderInfo.sick.vip.discount / 10 * 100) / 100,
        //优惠金额
        discountMoney:
            this.myUtils.saveTwoNumber(this.receivableMoney - Math.floor(this.receivableMoney * this.orderInfo.sick.vip.discount / 10 * 100) / 100),
        remark: ''
      },
    }
  },
  props: {
    receivableMoney: Number,
    orderInfo: Object
  },
  components: {
    CollectMoneyDialog
  },
  methods: {
    toCollectionMoney() {
      this.$refs.collectMoneyDialog.dialogFormVisible = true
    }
  },
}
</script>

<style scoped>
.el-button {
  width: 100px;
  height: 40px;
}

.move-down {
  position: relative;
  top: 10px;
}
</style>