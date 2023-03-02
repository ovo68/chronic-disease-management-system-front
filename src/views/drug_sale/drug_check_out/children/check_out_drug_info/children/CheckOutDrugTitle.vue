<template>
  <sn-row-has-two-col :left="21" :right="3" class="to-flex">
    <div class="to-flex" slot="one-col">
      <sn-title title="应收金额 :" class="margin-right move-down"/>
      <sn-text :number="150.25"
               class="margin-right"
               font-color="orange"
               font-weight="bolder"
               :font-size="30"/>
      <sn-title title="元" class="move-down"/>
    </div>
    <div class="to-flex" slot="two-col">
      <collect-money-dialog
          ref="collectionMoneyDialog"
          @collectionMoney="collectionMoney"
          class="margin-left-20"/>
    </div>
  </sn-row-has-two-col>
</template>

<script>
import CollectMoneyDialog
  from "@/components/content/dialog/cost/CollectMoneyDialog";

export default {
  name: "CheckOutDrugTitle",
  components: {
    CollectMoneyDialog
  },
  methods: {
    collectionMoney() {
      this.$refs.collectionMoneyDialog.dialogFormVisible = true
    }
  },
}
</script>

<style scoped>
.move-down {
  position: relative;
  top: 8px;
}

.el-button {
  width: 100px;
  height: 40px;
}
</style>