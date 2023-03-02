//导入字典表维护的api
import * as dictionaryTableManage from "@/api/system_setting/dictionaryTableManageApi";
//导入mutations方法名
import * as mutationsTypes from '@/store/mutations-types'


export default {
  //1.异步获取诊断信息数据 payload 传入数据
  asyncGetDiagnoseInfo({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getDiagnoseInfo().then(res => {
      commit(mutationsTypes.GET_DIAGNOSE_INFO, res.data)
    })
  },
  asyncGetMedicalAdviceInfo({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getMedicalAdviceInfo().then(res => {
      commit(mutationsTypes.GET_MEDICAL_ADVICE_INFO, res.data)
    })
  },
  asyncGetComplaintInfo({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getComplaintInfo().then((res => {
      commit(mutationsTypes.GET_COMPLAINT_INFO,res.data)
    }))
  },
  asyncGetPresentHistoryInfo ({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getPresentHistoryInfo().then((res => {
      commit(mutationsTypes.GET_PRESENT_HISTORY_INFO,res.data)
    }))
  },
  asyncGetAnamnesisInfo({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getAnamnesisInfo().then((res => {
      commit(mutationsTypes.GET_ANAMNESIS_INFO,res.data)
    }))
  },
  asyncGetAllergiesInfo({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getAllergiesInfo().then((res => {
      commit(mutationsTypes.GET_ALLERGIES_INFO,res.data)
    }))
  },
  asyncGetPersonalHistoryInfo({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getPersonalHistoryInfo().then((res => {
      commit(mutationsTypes.GET_PERSONAL_HISTORY_INFO,res.data)
    }))
  },
  asyncGetAuxiliaryExamInfo({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getMedicalAdviceInfo().then((res => {
      commit(mutationsTypes.GET_AUXILIARY_EXAM_INFO,res.data)
    }))
  },
  asyncGetTreatAdviceInfo({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getTreatAdviceInfo().then((res => {
      commit(mutationsTypes.GET_TREAT_ADVICE_INFO,res.data)
    }))
  },

  //药品信息
  asyncGetDrugTypeInfo({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getDrugTypeInfo().then((res => {
      commit(mutationsTypes.GET_DRUG_TYPE_INFO,res.data)
    }))
  },
  asyncGetDrugFormInfo({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getDrugFormInfo().then((res => {
      commit(mutationsTypes.GET_DRUG_FORM_INFO,res.data)
    }))
  },
  asyncGetDrugUsageInfo({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getDrugUsageInfo().then((res => {
      commit(mutationsTypes.GET_DRUG_USAGE_INFO,res.data)
    }))
  },
  asyncGetFactoryInfo({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getFactoryInfo().then((res => {
      commit(mutationsTypes.GET_FACTORY_INFO,res.data)
    }))
  },
  asyncGetOutTypeInfo({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getOutTypeInfo().then((res => {
      commit(mutationsTypes.GET_OUT_TYPE_INFO,res.data)
    }))
  },
  asyncGetStockTypeInfo({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getStockTypeInfo().then((res => {
      commit(mutationsTypes.GET_STOCK_TYPE_INFO,res.data)
    }))
  },
  asyncGetInvoiceInfo({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getInvoiceInfo().then((res => {
      commit(mutationsTypes.GET_INVOICE_INFO,res.data)
    }))
  },
  asyncGetPackUnitInfo({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getPackUnitInfo().then((res => {
      commit(mutationsTypes.GET_PACK_UNIT_INFO,res.data)
    }))
  },

  // 检查项目
  asyncGetCheckItemType({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getCheckItemType().then((res => {
      commit(mutationsTypes.GET_CHECK_ITEM_TYPE,res.data)
    }))
  },

  asyncGetCheckItemUnit({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getCheckItemUnit().then((res => {
      commit(mutationsTypes.GET_CHECK_ITEM_UNIT,res.data)
    }))
  },

  asyncGetSickEducation({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getSickEducation().then((res => {
      commit(mutationsTypes.GET_GET_SICK_EDUCATION,res.data)
    }))
  },


  asyncGetSickJob({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getSickJob().then((res => {
      commit(mutationsTypes.GET_SICK_JOB,res.data)
    }))
  },


  asyncGetSickOrigin({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getSickOrigin().then((res => {
      commit(mutationsTypes.GET_SICK_ORIGIN,res.data)
    }))
  },

  asyncGetCheckItemByNameAndCom({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getCheckItemByNameAndCom().then((res => {
      commit(mutationsTypes.GET_CHECK_ITEM_BY_NAME_AND_COM,res.data)
    }))

  },

  asyncGetSupplierList({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getSupplierList().then((res => {
      commit(mutationsTypes.GET_SUPPLIER_LIST,res.data)
    }))
  },

  asyncGetAddtionCostByName({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getAddtionCostByName().then((res => {
      commit(mutationsTypes.GET_ADDTION_COST_BY_NAME,res.data)
    }))
  },

  asyncGetTreatCostByName({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getTreatCostByName().then((res => {
      commit(mutationsTypes.GET_TREAT_COST_BY_NAME,res.data)
    }))
  },

  asyncGetRegisterCostByName({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getRegisterCostByName().then((res => {
      commit(mutationsTypes.GET_REGISTER_COST_BY_NAME,res.data)
    }))
  },

  asyncGetEmployeeByName({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getEmployeeByName().then((res => {
      commit(mutationsTypes.GET_EMPLOYEE_BY_NAME,res.data)
    }))
  },

  asyncGetDepartmentByName({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getDepartmentByName().then((res => {
      commit(mutationsTypes.GET_DEPARTMENT_BY_NAME,res.data)
    }))
  },

  asyncGetRoleByName({commit}) {
    //向后端发送请求获取数据
    dictionaryTableManage.getRoleByName().then((res => {
      commit(mutationsTypes.GET_ROLE_BY_NAME,res.data)
    }))
  },





// 删除供应商管理中的供应商
  asyncDelSupplierById({commit},payload) {
    //向后端发送请求获取数据
    dictionaryTableManage.delSupplierById(payload).then((res => {
      commit(mutationsTypes.DEL_SUPPLIER_BY_ID,payload)
    }))
  },

//删除员工列表中的员工asyncDelEmployeeById
  asyncDelEmployeeById({commit},payload) {
    //向后端发送请求获取数据
    dictionaryTableManage.delEmployeeById(payload).then((res => {
      commit(mutationsTypes.DEL_EMPLOYEE_BY_ID,payload)
    }))
  },

// 修改检查项目的状态
  asyncChangeCheckItemStatus({commit,dispatch},payload) {
    //向后端发送请求获取数据
    dictionaryTableManage.changeCheckItemStatus(payload).then((res => {
      dispatch('asyncGetCheckItemByNameAndCom')
    }))
  },

//修改员工列表状态
  asyncChangeEmployeeStatus({commit,dispatch},payload) {
    dictionaryTableManage.changeEmployeeStatus(payload).then((res) => {
      dispatch('asyncGetEmployeeByName')
    })
  }


}