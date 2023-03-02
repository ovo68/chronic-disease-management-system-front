<template>
  <prescription-template
      :info-table-title="$store.state.westDrugInfoTableTitle"
      :select-data="$store.state.westDrugInfoSelectData"
      @getChooseSelect="toQueryCenterDrugByType"
      @getInputChangeInfo="toQueryCenterDrugByName"
      :info-table-data="centerDrugInfoTableData"
      :select-description="centerSelectDescription"/>
</template>

<script>
import PrescriptionTemplate
  from "@/components/content/prescription/children/prescription_template/PrescriptionTemplate";
//导入处方api
import * as prescription from "@/api/common/prescriptionInfo";

export default {
  name: "CenterPrescription",
  components: {
    PrescriptionTemplate
  },
  data() {
    return {
      centerSelectDescription: '药品分类',
      centerDrugInfoTableData: []
    }
  },
  methods: {
    //2.中药
    //2.1 获取所有中药药品
    toQueryAllCenterDrug() {
      prescription.getAllDrugInfo(2).then(res => {
        this.centerDrugInfoTableData = res.data
      })
    },
    //2.2 根据类型获取中药药品
    toQueryCenterDrugByType(type) {
      prescription.queryCenterDrugByType(type).then(res => {
        this.centerDrugInfoTableData = res
      })
    },
    //2.3 根据药品名称获取中药
    toQueryCenterDrugByName(name) {

      if (this.myUtils.stringIsEmpty(name)) {
        this.toQueryAllCenterDrug()
        return
      }

      prescription.queryCenterDrugByName(name).then(res => {
        this.centerDrugInfoTableData = res
      })
    },
  },
  created() {
    this.toQueryAllCenterDrug()
  }
}
</script>

<style scoped>

</style>