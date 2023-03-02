export default {
  //获取诊断信息
  getDiagnoseInfoData(state) {
    return state.diagnoseInfoData
  },
  //获取医嘱信息
  getMedicalAdviceInfoData(state) {
    return state.medicalAdviceInfoData
  },
  //获取主诉信息
  getComplaintInfoData(state) {
    return state.complaintInfoData
  },
  //获取现病史信息
  getPresentHistoryInfoData(state) {
    return state.presentHistoryInfoData
  },
  //获取既病史信息
  getAnamnesisInfoData(state) {
    return state.anamnesisInfoData
  },
  //获取过敏史信息
  getAllergiesInfoData(state) {
    return state.allergiesInfoData
  },
  //获取个人史信息
  getPersonalHistoryInfoData(state) {
    return state.personalHistoryInfoData
  },
  //获取辅助检查信息
  getAuxiliaryExamInfoData(state) {
    return state.auxiliaryExamInfoData
  },
  //获取治疗意见信息
  getTreatAdviceInfoData(state) {
    return state.treatAdviceInfoData
  },

  // 药品信息
  getDrugTypeInfoData(state) {
    return state.drugTypeInfoData
  },

  getDrugFormInfoData(state) {
    return state.drugFormInfoData
  },

  getDrugUsageInfoData(state) {
    return state.drugUsageInfoData
  },

  getFactoryInfoData(state) {
    return state.factoryInfoData
  },

  getInvoiceInfoData(state) {
    return state.invoiceInfoData
  },

  getOutTypeInfoData(state) {
    return state.outTypeInfoData
  },

  getPackUnitInfoData(state) {
    return state.packUnitInfoData
  },

  getStockTypeInfoData(state) {
    return state.stockTypeInfoData
  },

  // 检查项目
  getCheckItemTypeData(state) {
    return state.checkItemTypeData
  },

  getCheckItemUnitData(state) {
    return state.checkItemUnitData
  },

  // 患者信息
  getSickEducationData(state) {
    return state.sickEducationData
  },
  getSickJobData(state) {
    return state.sickJobData
  },
  getSickOriginData(state) {
    return state.sickOriginData
  },

  //项目检查设置
  getCheckItemByNameAndCom(state) {
    return state.CheckItemByNameAndComData
  },

  //供应商管理
  getSupplierList(state) {
    return state.SupplierListData
  },

  //费用设置

  getAddtionCostByName(state) {
    return state.AddtionCostByNameData
  },

  getTreatCostByName(state) {
    return state.TreatCostByNameData
  },

  getRegisterCostByName(state) {
    return state.RegisterCostByNameData
  },

  getEmployeeByNameData(state) {
    return state.EmployeeByName
  },

  getDepartmentByNameData(state) {
    return state.DepartmentByName
  },

  getRoleByNameData(state) {
    return state.RoleByName
  },





}