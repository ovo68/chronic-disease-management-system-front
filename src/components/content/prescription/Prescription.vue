<!-- 处方 -->
<template>
  <add-prescription-tabs
      :sick-id="sickId"
      :down-data="downData">
    <sn-text text="选择处方" slot="title">
    </sn-text>
  </add-prescription-tabs>
</template>

<script>
import AddPrescriptionTabs from "@/components/content/prescription/children/add_prescription_tabs/AddPrescriptionTabs";

export default {
  name: "Prescription",
  components: {AddPrescriptionTabs},
  data() {
    return {
      downData: ['西/成药处方', '中药处方', '检查项目'],
    }
  },
  props: {
    sickId: Number
  },
}
</script>

<style scoped>
</style>