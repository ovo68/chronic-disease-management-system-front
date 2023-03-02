<template>
    <login-or-register>
      <login-form slot="loginOrRegister"/>
    </login-or-register>
</template>

<script>
import LoginForm from "@/views/login_register/login/children/LoginForm";
import LoginOrRegister from "@/views/login_register/LoginOrRegister";
//vuex辅助函数
import {mapActions} from 'vuex'

export default {
  name: "longin",
  components: {
    LoginForm,LoginOrRegister
  },
  methods: {
    ...mapActions([
      'asyncGetDiagnoseInfo',
      'asyncGetMedicalAdviceInfo',
      'asyncGetComplaintInfo',
      'asyncGetPresentHistoryInfo',
      'asyncGetAnamnesisInfo',
      'asyncGetAllergiesInfo',
      'asyncGetPersonalHistoryInfo',
      'asyncGetAuxiliaryExamInfo',
      'asyncGetTreatAdviceInfo',
      //药品信息
      'asyncGetDrugTypeInfo',
      'asyncGetDrugFormInfo',
      'asyncGetDrugUsageInfo',
      'asyncGetFactoryInfo',
      'asyncGetOutTypeInfo',
      'asyncGetStockTypeInfo',
      'asyncGetInvoiceInfo',
      'asyncGetPackUnitInfo',
      //检查项目
      'asyncGetCheckItemType',
      'asyncGetCheckItemUnit',
      //患者信息
      'asyncGetSickEducation',
      'asyncGetSickJob',
      'asyncGetSickOrigin',
      //项目检查设置
      'asyncGetCheckItemByNameAndCom',
      //供应商管理
      'asyncGetSupplierList',
      //费用管理
      'asyncGetAddtionCostByName',
      'asyncGetTreatCostByName',
      'asyncGetRegisterCostByName',
      //角色管理
      'asyncGetEmployeeByName',
      'asyncGetDepartmentByName',
      'asyncGetRoleByName',

    ]),
  },
  created() {
    this.asyncGetDiagnoseInfo(),
    this.asyncGetMedicalAdviceInfo(),
    this.asyncGetComplaintInfo(),
    this.asyncGetPresentHistoryInfo(),
    this.asyncGetAnamnesisInfo(),
    this.asyncGetAllergiesInfo(),
    this.asyncGetPersonalHistoryInfo(),
    this.asyncGetAuxiliaryExamInfo(),
    this.asyncGetTreatAdviceInfo(),
    //药品信息
    this.asyncGetDrugTypeInfo(),
    this.asyncGetDrugFormInfo(),
    this.asyncGetDrugUsageInfo(),
    this.asyncGetFactoryInfo(),
    this.asyncGetOutTypeInfo(),
    this.asyncGetStockTypeInfo(),
    this.asyncGetInvoiceInfo(),
    this.asyncGetPackUnitInfo(),
    //检查项目
    this.asyncGetCheckItemType(),
    this.asyncGetCheckItemUnit(),
    //患者信息
    this.asyncGetSickEducation(),
    this.asyncGetSickJob(),
    this.asyncGetSickOrigin(),
    //项目检查设置
    this.asyncGetCheckItemByNameAndCom(),
    //供应商管理
    this.asyncGetSupplierList(),
    //附加费用
    this.asyncGetAddtionCostByName(),
    this.asyncGetTreatCostByName(),
    this.asyncGetRegisterCostByName(),
    //角色管理
    this.asyncGetEmployeeByName(),
    this.asyncGetDepartmentByName(),
    this.asyncGetRoleByName()
  }
}
</script>

<style scoped>
</style>