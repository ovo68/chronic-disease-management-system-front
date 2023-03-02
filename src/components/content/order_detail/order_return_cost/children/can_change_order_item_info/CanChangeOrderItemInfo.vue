<template>
  <sn-show-by-button-no-card
      :button-count="3"
      :content-count="3"
      :button-names="buttonNames">

    <sn-text slot="buttonName0" text="西/成药处方"/>
    <sn-text slot="buttonName1" text="西/中药处方"/>
    <sn-text slot="buttonName2" text="西/检查项目"/>

    <west-drug-order-info-table slot="content0"/>


  </sn-show-by-button-no-card>
</template>

<script>
import WestDrugOrderInfoTable
  from "@/components/content/order_detail/order_return_cost/children/can_change_order_item_info/children/WestDrugOrderInfoTable";
export default {
  name: "CanChangeItemInfo",
  data() {
    return {
      buttonNames: ['西/成药处方','中药处方','检查项目']
    }
  },
  components:{
    WestDrugOrderInfoTable
  }
}
</script>

<style scoped>

</style>