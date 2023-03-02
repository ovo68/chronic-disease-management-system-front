import request from "@/network/request";

//7.字典表维护
//7.1.1 病例信息


let path = '/systemSettingRoot/dictionaryTableManage';
//7.1.1.1 获取诊断信息
export function getDiagnoseInfo() {
  return request({
    url: path + '/getDiagnosisInfo',
    method: 'get',
    params:{
      content: '',
    }
  })
}

//7.1.1.2 获取医嘱信息
export function getMedicalAdviceInfo() {
  return request({
    url: path + '/getMedicalAdviceInfo',
    method: 'get',
    params: {
      content: ''
    }
  })
}

//7.1.1.3 获取主诉信息
export function getComplaintInfo() {
  return request({
    url: path + '/getComplaintInfo',
    method:'get',
    params: {
      content:''
    }
  })
}

//7.1.1.4 获取现病史信息
export function getPresentHistoryInfo() {
  return request({
    url: path + '/getPresentHistoryInfo',
    method:'get',
    params: {
      content:''
    }
  })
}

//7.1.1.5获取既往史信息
export function getAnamnesisInfo() {
  return request({
    url: path + '/getAnamnesisInfo',
    method:'get',
    params: {
      content:''
    }
  })
}

//7.1.6获取过敏史信息
export function getAllergiesInfo() {
  return request({
    url: path + '/getAllergiesInfo',
    method:'get',
    params: {
      content:''
    }
  })
}

//7.1.1.7 获取个人史信息
export function getPersonalHistoryInfo() {
  return request({
    url: path + '/getPersonalHistoryInfo',
    method:'get',
    params: {
      content:''
    }
  })
}

//7.1.1.8 获取辅助检查信息
export function getAuxiliaryExamInfo() {
  return request({
    url: path + '/getAuxiliaryExamInfo',
    method:'get',
    params: {
      content:''
    }
  })
}

//7.1.1.9 获取治疗意见信息
export function getTreatAdviceInfo() {
  return request({
    url: path + '/getTreatAdviceInfo',
    method:'get',
    params: {
      content:''
    }
  })
}

//7.2 药品信息

//7.1.2.1 药品分类
export function getDrugTypeInfo() {
  return request({
    url: path + '/getDrugTypeInfo',
    method:'get',
    params: {
      content:''
    }
  })
}

//7.1.2.2 药品用法
export function getDrugUsageInfo() {
  return request({
    url: path + '/getDrugUsageInfo',
    method:'post',
    params: {
      content:''
    },
    data:{
      "value" : "1",
      "description" : "西/成药处方"
    }
  })
}

//7.1.2.3 药品剂型
export function getDrugFormInfo() {
  return request({
    url: path + '/getDrugFormInfo',
    method:'get',
    params: {
      content:''
    }
  })
}

//7.1.2.4 发票项目
export function getInvoiceInfo() {
  return request({
    url: path + '/getInvoiceInfo',
    method:'get',
    params: {
      content:''
    }
  })
}

//7.1.2.5 生产厂家
export function getFactoryInfo() {
  return request({
    url: path + '/getFactoryInfo',
    method:'get',
    params: {
      content:''
    }
  })
}

//7.1.2.6 包装单位
export function getPackUnitInfo() {
  return request({
    url: path + '/getPackUnitInfo',
    method:'get',
    params: {
      content:''
    }
  })
}

//7.1.2.7 入库类型
export function getStockTypeInfo() {
  return request({
    url: path + '/getStockTypeInfo',
    method:'get',
    params: {
      content:''
    }
  })
}

//7.1.2.8 出库类型
export function getOutTypeInfo() {
  return request({
    url: path + '/getOutTypeInfo',
    method:'get',
    params: {
      content:''
    }
  })
}

//7.1.3 检查项目
//7.1.3.1 项目分类
export function getCheckItemType() {
  return request({
    url: path + '/getCheckItemType',
    method:'get',
    params: {
      content:''
    }
  })
}

//7.1.3.1 项目单位
export function getCheckItemUnit() {
  return request({
    url: path + '/getCheckItemUnit',
    method:'get',
    params: {
      content:''
    }
  })
}

//7.1.4 患者信息
//7.1.4.1 患者来源
export function getSickOrigin() {
  return request({
    url: path + '/getSickOrigin',
    method:'get',
    params: {
      content:''
    }
  })
}

//7.1.4.2 患者学历
export function getSickEducation() {
  return request({
    url: path + '/getSickEducation',
    method:'get',
    params: {
      content:''
    }
  })
}

//7.1.4.3 患者职业
export function getSickJob() {
  return request({
    url: path + '/getSickJob',
    method:'get',
    params: {
      content:''
    }
  })
}

//7.2.1 项目检查设置
//7.2.1.1 项目检查设置
let pathCheckItem = '/systemSettingRoot/checkItemSetting'
export function getCheckItemByNameAndCom() {
  return request({
    url: pathCheckItem + '/getCheckItemByNameAndCom',
    method:'post',
    params: {
      name:''
    },
    data: {
      "value" : "0",
      "description" : "全部"
    }
  })
}

//7.3.1   供应商管理
//7.3.1.1 供应商管理
let pathSupplier = '/systemSettingRoot/supplierManage'
export function getSupplierList() {
  return request({
    url: pathSupplier + '/getSupplierList',
    method:'get',
    params: {
      name:''
    }
  })
}

//7.4.1 费用设置
//7.4.1.1 附加费用设置
let pathCostSetting = '/systemSettingRoot/costSetting'
export function getAddtionCostByName() {
  return request({
    url: pathCostSetting + '/getAddtionCostByName',
    method:'post',
    params: {
      name:''
    },
    data: {
      "value" : "0",
      "description" : "全部"
    }
  })
}

//7.4.1.2 诊疗费
export function getTreatCostByName() {
  return request({
    url: pathCostSetting + '/getTreatCostByName',
    method:'get',
    params: {
      name:''
    }
  })
}

//7.4.1.3 挂号费
export function getRegisterCostByName() {
  return request({
    url: pathCostSetting + '/getRegisterCostByName',
    method:'get',
    params: {
      name:''
    }
  })
}

//7.5 员工管理
let pathEmployeeManage = '/systemSettingRoot/employeeManage'
//7.5.1 部门列表
export function getDepartmentByName() {
  return request({
    url: pathEmployeeManage + '/getDepartmentByName',
    method:'get',
    params: {
      name:''
    }
  })
}

//7.5.1 员工列表
export function getEmployeeByName() {
  return request({
    url: pathEmployeeManage + '/getEmployeeByName',
    method:'get',
    params: {
      name:''
    }
  })
}

//7.5.1 角色列表
export function getRoleByName() {
  return request({
    url: pathEmployeeManage + '/getRoleByName',
    method:'get',
    params: {
      name:''
    }
  })
}






// 删除供应商管理中的供应商
export function delSupplierById(id) {
  return request({
    url: pathSupplier + '/delSupplierById',
    method:'delete',
    params: {
      id: id
    }
  })
}

// 删除员工列表中的员工
export function delEmployeeById(id) {
  return request({
    url: pathEmployeeManage + '/delEmployee',
    method:'delete',
    params: {
      id: id
    }
  })
}

//修改检查项目的状态
export function changeCheckItemStatus(checkItem) {
  return request({
    url: pathCheckItem + '/changeCheckItemStatus',
    method:'put',
    params: {
      id: checkItem.id
    },
    data: {
      "value": checkItem.status.value,
      "description": checkItem.status.description
    }
  })
}

export function changeEmployeeStatus(employee) {
  return request({
    url: pathEmployeeManage + '/changeEmployeeStatus',
    method:'put',
    params: {
      id: employee.id
    },
    data: {
      "value": employee.status.value,
      "description": employee.status.description
    }
  })
}