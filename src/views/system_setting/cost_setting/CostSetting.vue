<!-- 收费设置 -->
<template>
<div>
  <sn-show-by-button-with-card
      :button-count="4"
      :content-count="4"
      :button-names="buttonNames">
    <sn-text text="附加费用设置" slot="buttonName0"></sn-text>
    <sn-text text="诊疗费设置" slot="buttonName1"></sn-text>
    <sn-text text="挂号费设置" slot="buttonName2"></sn-text>
    <sn-text text="支付方式设置" slot="buttonName3"></sn-text>
    <span slot="content0">
      <additional-cost-table/>
      <additional-cost-list/>
    </span>
    <span slot="content1">
      <medical-cost-table/>
      <medical-cost-list/>
    </span>
    <span slot="content2">
      <register-cost-table/>
      <register-cost-list/>
    </span>
    <span slot="content3"></span>
  </sn-show-by-button-with-card>

</div>
</template>
  
<script>
import AdditionalCostTable from "@/views/system_setting/cost_setting/children/cost_setting_table/AdditionalCostTable";
import MedicalCostTable from "@/views/system_setting/cost_setting/children/cost_setting_table/MedicalCostTable";
import RegisterCostTable from "@/views/system_setting/cost_setting/children/cost_setting_table/RegisterCostTable";
import AdditionalCostList
  from "@/views/system_setting/cost_setting/children/cost_setting_table/cost_setting_list/AdditionalCostList";
import MedicalCostList
  from "@/views/system_setting/cost_setting/children/cost_setting_table/cost_setting_list/MedicalCostList";
import RegisterCostList
  from "@/views/system_setting/cost_setting/children/cost_setting_table/cost_setting_list/RegisterCostList";
export default {
  name: "CostSetting",
  components: {
    AdditionalCostTable,
    MedicalCostTable,
    RegisterCostTable,
    AdditionalCostList,
    MedicalCostList,
    RegisterCostList
  },
  data() {
    return {
      buttonNames:[
          '附加费用设置',
          '诊疗费设置',
          '挂号费设置',
          '支付方式设置'
      ]
    }
  }

}
</script>

<style scoped>
</style>