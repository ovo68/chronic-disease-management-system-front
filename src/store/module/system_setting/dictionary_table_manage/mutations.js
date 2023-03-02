//导入mutations方法名

import * as mutationsTypes from '@/store/mutations-types'

export default {
  //7.1.1. 获取诊断信息数据
  [mutationsTypes.GET_DIAGNOSE_INFO](state, payload) {
    state.diagnoseInfoData = payload
  },

  //7.1.2. 获取医嘱信息数据
  [mutationsTypes.GET_MEDICAL_ADVICE_INFO](state, payload) {
    state.medicalAdviceInfoData = payload
  },

  //7.1.3 获取主诉信息
  [mutationsTypes.GET_COMPLAINT_INFO](state, payload) {
    state.complaintInfoData = payload
  },

  //7.1.4 获取现病史信息
  [mutationsTypes.GET_PRESENT_HISTORY_INFO](state, payload) {
    state.presentHistoryInfoData = payload
  },

  //7.1.5 获取既往史信息
  [mutationsTypes.GET_ANAMNESIS_INFO](state, payload) {
    state.anamnesisInfoData = payload
  },

  //7.1.6 获取过敏史信息
  [mutationsTypes.GET_ALLERGIES_INFO](state, payload) {
    state.allergiesInfoData = payload
  },

  //7.1.7 获取个人史信息
  [mutationsTypes.GET_PERSONAL_HISTORY_INFO](state, payload) {
    state.personalHistoryInfoData = payload
  },

  //7.1.8 获取辅助检查信息
  [mutationsTypes.GET_AUXILIARY_EXAM_INFO](state, payload) {
    state.auxiliaryExamInfoData = payload
  },

  //7.1.9 获取治疗意见信息
  [mutationsTypes.GET_TREAT_ADVICE_INFO](state, payload) {
    state.treatAdviceInfoData = payload
  },

  // 7.2 药品信息
  [mutationsTypes.GET_DRUG_TYPE_INFO](state, payload) {
    state.drugTypeInfoData = payload
  },

  [mutationsTypes.GET_DRUG_USAGE_INFO](state, payload) {
    state.drugUsageInfoData = payload
  },

  [mutationsTypes.GET_DRUG_FORM_INFO](state, payload) {
    state.drugFormInfoData = payload
  },

  [mutationsTypes.GET_INVOICE_INFO](state, payload) {
    state.invoiceInfoData = payload
  },

  [mutationsTypes.GET_FACTORY_INFO](state, payload) {
    state.factoryInfoData = payload
  },

  [mutationsTypes.GET_PACK_UNIT_INFO](state, payload) {
    state.packUnitInfoData = payload
  },

  [mutationsTypes.GET_OUT_TYPE_INFO](state, payload) {
    state.outTypeInfoData = payload
  },

  [mutationsTypes.GET_STOCK_TYPE_INFO](state, payload) {
    state.stockTypeInfoData = payload
  },

  // 检查项目
  [mutationsTypes.GET_CHECK_ITEM_TYPE](state, payload) {
    state.checkItemTypeData = payload
  },

  [mutationsTypes.GET_CHECK_ITEM_UNIT](state, payload) {
    state.checkItemUnitData = payload
  },

  // 患者信息
  [mutationsTypes.GET_GET_SICK_EDUCATION](state, payload) {
    state.sickEducationData = payload
  },
  [mutationsTypes.GET_SICK_JOB](state, payload) {
    state.sickJobData = payload
  },
  [mutationsTypes.GET_SICK_ORIGIN](state, payload) {
    state.sickOriginData = payload
  },

  //检查项目设置
  [mutationsTypes.GET_CHECK_ITEM_BY_NAME_AND_COM](state, payload) {
    state.CheckItemByNameAndComData = payload
  },

  //供应商管理
  [mutationsTypes.GET_SUPPLIER_LIST](state, payload) {
    state.SupplierListData = payload
  },

  //费用设置
  [mutationsTypes.GET_ADDTION_COST_BY_NAME](state, payload) {
    state.AddtionCostByNameData = payload
  },

  [mutationsTypes.GET_TREAT_COST_BY_NAME](state, payload) {
    state.TreatCostByNameData = payload
  },

  [mutationsTypes.GET_REGISTER_COST_BY_NAME](state, payload) {
    state.RegisterCostByNameData = payload
  },

  [mutationsTypes.GET_DEPARTMENT_BY_NAME](state, payload) {
    state.DepartmentByName = payload
  },

  [mutationsTypes.GET_ROLE_BY_NAME](state, payload) {
    state.RoleByName = payload
  },

  [mutationsTypes.GET_EMPLOYEE_BY_NAME](state, payload) {
    state.EmployeeByName = payload
  },


  //删除供应商管理中点击的供应商
  [mutationsTypes.DEL_SUPPLIER_BY_ID](state, payload) {
    let data = state.SupplierListData
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === payload){
        data.splice(i,1)
        break
      }
    }
  },

  //删除员工列表中点击的员工
  [mutationsTypes.DEL_EMPLOYEE_BY_ID](state, payload) {
    let data = state.EmployeeByName
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === payload){
        data.splice(i,1)
        break
      }
    }
  },


  // 修改检查项目的状态
  [mutationsTypes.CHANGE_CHECK_ITEM_STATUS](state, payload) {
  },

  // 修改员工的状态
  [mutationsTypes.CHANGE_EMPLOYEE_STATUS](state, payload) {
  },
}