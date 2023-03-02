import actions from "@/store/module/system_setting/dictionary_table_manage/actions";
import getters from "@/store/module/system_setting/dictionary_table_manage/getters";
import mutations from "@/store/module/system_setting/dictionary_table_manage/mutations";

const state = {

  //诊断信息
  diagnoseInfoData:[],
  //获取医嘱信息数据
  medicalAdviceInfoData:[],
  //7.1.1.3 获取主诉信息
  complaintInfoData:[],
  //7.1.1.4 获取现病史信息
  presentHistoryInfoData:[],
  //7.1.1.5 获取既往史信息
  anamnesisInfoData:[],
  //7.1.1.6 获取过敏史信息
  allergiesInfoData:[],
  //7.1.1.7 获取个人史信息
  personalHistoryInfoData:[],
  //7.1.1.8 获取治疗意见信息
  auxiliaryExamInfoData:[],
  //7.1.1.9 获取主诉信息
  treatAdviceInfoData:[],
  // 药品信息
  //7.1.2.1 药品分类
  drugTypeInfoData:[],
  //7.1.2.2 药品用法
  drugUsageInfoData:[],
  //7.1.2.3 药品剂型
  drugFormInfoData:[],
  //7.1.2.4 发票项目
  invoiceInfoData:[],
  //7.1.2.5 生产厂家
  factoryInfoData:[],
  //7.1.2.6 包装单位
  packUnitInfoData:[],
  //7.1.2.7 入库类型
  outTypeInfoData:[],
  //7.1.2.8 出库类型
  stockTypeInfoData:[],
  //7.1.3.1 项目分类
  checkItemTypeData:[],
  //7.1.3.1 项目单位
  checkItemUnitData:[],
  //7.1.4.1 患者学历
  sickEducationData:[],
  //7.1.4.2 患者职业
  sickJobData:[],
  //7.1.4.3 患者来源
  sickOriginData:[],
  //7.2.1  项目检查设置
  CheckItemByNameAndComData:[],
  //7.3.1  项目检查设置
  SupplierListData:[],
  //7.4.1.1  附加费用
  AddtionCostByNameData:[],
  //7.4.1.2 诊疗费用
  TreatCostByNameData:[],
  //7.4.1.3  挂号费用
  RegisterCostByNameData:[],
  //7.5.1 员工列表
  DepartmentByName:[],
  //7.5.2 科室列表
  RoleByName:[],
  //7.5.3 角色列表
  EmployeeByName:[],
}


//字典表维护
export default {
  state,
  actions,
  getters,
  mutations
}

