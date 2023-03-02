<!-- 结算信息 -->
<template>
  <sn-card-with-title>
    <!-- 标题 -->
    <check-out-drug-title
        slot="title"
        class="move-down"/>
    <!-- 结算的药品信息 -->
    <div slot="content">
      <check-out-drug-info/>
    </div>
  </sn-card-with-title>
</template>

<script>
import CheckOutDrugTitle
  from "@/views/drug_sale/drug_check_out/children/check_out_drug_info/children/CheckOutDrugTitle";
import CheckOutDrugInfo from "@/views/drug_sale/drug_check_out/children/check_out_drug_info/CheckOutDrugInfo";


export default {
  name: "DrugCheckOut",
  components: {
    CheckOutDrugTitle,
    CheckOutDrugInfo
  },
}
</script>

<style scoped>
.move-down {
  position: relative;
  top: 10px;
}
</style>