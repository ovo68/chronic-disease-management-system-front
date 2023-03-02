//修改页面标题
export const CHANGE_HOME_TITLE = 'changeHomeTitle'


//患者信息
export const GET_ALL_SICKS = 'getAllSick'


//1.字典表维护
//1.1 病例信息
//7.1.1.1 获取诊断信息数据
export const GET_DIAGNOSE_INFO = 'getDiagnoseInfo'

//7.1.1.2 获取医嘱信息数据
export const GET_MEDICAL_ADVICE_INFO = 'getMedicalAdviceInfo'

//7.1.1.3 获取主诉信息
export const GET_COMPLAINT_INFO = 'getComplaintInfo'

//7.1.1.4 获取现病史信息
export const GET_PRESENT_HISTORY_INFO = 'getPresentHistoryInfo'

//7.1.1.5 获取既往史信息
export const GET_ANAMNESIS_INFO = 'getAnamnesisInfo'

//7.1.1.6 获取过敏史信息
export const GET_ALLERGIES_INFO = 'getAllergiesInfo'

//7.1.1.7 获取个人史信息
export const GET_PERSONAL_HISTORY_INFO = 'getPersonalHistoryInfo'

//7.1.1.8 获取治疗意见信息
export const GET_AUXILIARY_EXAM_INFO = 'getAuxiliaryExamInfo'

//7.1.1.9 获取主诉信息
export const GET_TREAT_ADVICE_INFO = 'getTreatAdviceInfo'

// 7.1.2 药品信息
//7.1.2.1 药品分类
export const GET_DRUG_TYPE_INFO = 'getDrugTypeInfo';
//7.1.2.2 药品用法
export const GET_DRUG_USAGE_INFO = 'getDrugUsageInfo';
//7.1.2.3 药品剂型
export const GET_DRUG_FORM_INFO = 'getDrugFormInfo';
//7.1.2.4 发票项目
export const GET_INVOICE_INFO = 'getInvoiceInfo';
//7.1.2.5 生产厂家
export const GET_FACTORY_INFO = 'getFactoryInfo';
//7.1.2.6 包装单位
export const GET_PACK_UNIT_INFO = 'getPackUnitInfo';
//7.1.2.7 入库类型
export const GET_STOCK_TYPE_INFO = 'getStockTypeInfo';
//7.1.2.8 出库类型
export const GET_OUT_TYPE_INFO = 'getOutTypeInfo';

//7.1.3 检查项目

//7.1.3.1 项目分类
export const GET_CHECK_ITEM_TYPE = 'getCheckItemType';
//7.1.3.1 项目单位
export const GET_CHECK_ITEM_UNIT = 'getCheckItemUnit';

//7.1.4 患者信息
//7.1.4.1 患者学历
export const GET_GET_SICK_EDUCATION = 'getSickEducation';
//7.1.4.2 患者职业
export const GET_SICK_JOB = 'getSickJob';
//7.1.4.3 患者来源
export const GET_SICK_ORIGIN = 'getSickOrigin';

//7.2.1  项目检查设置
export const GET_CHECK_ITEM_BY_NAME_AND_COM = 'getCheckItemByNameAndCom';


//7.3.1  项目检查设置
export const GET_SUPPLIER_LIST = 'getSupplierList';

//7.4.1.1  附加费用
export const GET_ADDTION_COST_BY_NAME = 'getAddtionCostByName';

//7.4.1.2 诊疗费用
export const GET_TREAT_COST_BY_NAME = 'getTreatCostByName';

//7.4.1.3  挂号费用
export const GET_REGISTER_COST_BY_NAME = 'getRegisterCostByName';

//7.5 员工管理

//7.5.1 员工列表
export const GET_EMPLOYEE_BY_NAME = 'getEmployeeByName';

//7.5.2 科室列表
export const GET_DEPARTMENT_BY_NAME = 'getDepartmentByName';

//7.5.3 角色列表
export const GET_ROLE_BY_NAME = 'getRoleByName';











//通过id删除供应商
export const DEL_SUPPLIER_BY_ID = 'delSupplierById';
//通过id删除员工
export const DEL_EMPLOYEE_BY_ID = 'delEmployee';


//通过id修改供应商的状态
export const CHANGE_CHECK_ITEM_STATUS = 'changeCheckItemStatus';
//通过id修改员工的状态
export const CHANGE_EMPLOYEE_STATUS = 'changeEmployeeStatus';