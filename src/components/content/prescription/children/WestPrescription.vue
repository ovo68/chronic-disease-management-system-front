<template>
  <prescription-template
      :sick-id="sickId"
      @getInputChangeInfo="toQueryWestDrugByName"
      :info-table-data="westDrugInfoTableData"
      :info-table-title="$store.state.westDrugInfoTableTitle"
      :select-data="$store.state.westDrugInfoSelectData"
      :select-description="westDrugInfoSelectDescription"/>
</template>

<script>
import PrescriptionTemplate
  from "@/components/content/prescription/children/prescription_template/PrescriptionTemplate";
import * as prescription from "@/api/common/prescriptionInfo";

export default {
  name: "WestPrescription",
  components: {
    PrescriptionTemplate
  },
  data() {
    return {
      westDrugInfoSelectDescription: '药品分类',
      westDrugInfoTableData: []
    }
  },
  methods: {
    //1.西药
    //1.1 获取所有西药药品
    toQueryAllWestDrug() {
      prescription.getAllDrugInfo(1).then(res => {
        this.westDrugInfoTableData = res.data
      })
    },
    //1.3 根据药品名称获取西药
    toQueryWestDrugByName(name) {
      if (name === '') {
        this.toQueryAllWestDrug()
        return
      }

      prescription.getDrugsByLike(name).then(res => {
        this.westDrugInfoTableData = res.data
      })
    },
  },
  props: {
    sickId: Number
  },
  created() {
    this.toQueryAllWestDrug()
  }
}
</script>

<style scoped>

</style>