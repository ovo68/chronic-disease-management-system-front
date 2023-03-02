<template>
  <sn-show-by-button-with-card :button-names="buttonNames"
                               :content-count="4"
                               :button-count="4">
    <sn-text text="病历信息" slot="buttonName0"/>
    <sn-text text="药品信息" slot="buttonName1"/>
    <sn-text text="检查项目" slot="buttonName2"/>
    <sn-text text="患者信息" slot="buttonName3"/>
    <hr/>
    <!-- 病历信息 -->
    <div slot="content0">
      <sn-show-by-side-button
          :content-count="9"
          :button-names="sideButtonNames"
          :button-count="9">

        <sn-text text="诊断信息" slot="buttonName0"/>
        <sn-text text="医嘱信息" slot="buttonName1"/>
        <sn-text text="主诉信息" slot="buttonName2"/>
        <sn-text text="现病史" slot="buttonName3"/>
        <sn-text text="既往史" slot="buttonName4"/>
        <sn-text text="过敏史" slot="buttonName5"/>
        <sn-text text="个人史" slot="buttonName6"/>
        <sn-text text="辅助检查" slot="buttonName7"/>
        <sn-text text="治疗意见" slot="buttonName8"/>

        <!-- 诊断信息 -->
        <div slot="content0">
          <diagnose-info></diagnose-info>
          <diagnose-info-table></diagnose-info-table>
        </div>
        <!-- 医嘱信息 -->
        <div slot="content1">
          <doctor-advice-info></doctor-advice-info>
          <doctor-advice-info-table :table-data="DoctorAdviceData"></doctor-advice-info-table>
        </div>
        <!--主诉信息 -->
        <div slot="content2">
          <symptom-info></symptom-info>
          <symptom-info-table :table-data="SymptomData"></symptom-info-table>
        </div>
        <!-- 现病史-->
        <div slot="content3">
          <history-of-present-illness-info></history-of-present-illness-info>
          <history-of-present-illness-info-table
              :table-data="HistoryOfPresentIllnessData"></history-of-present-illness-info-table>
        </div>
        <!-- 既往史 -->
        <div slot="content4">
          <history-of-passing-illness-info></history-of-passing-illness-info>
          <history-of-passing-illness-info-table
              :table-data="HistoryOfPassingIllnessData"></history-of-passing-illness-info-table>
        </div>
        <!-- 过敏史 -->
        <div slot="content5">
          <allergic-history-info></allergic-history-info>
          <allergic-history-info-table :table-data="AllergicHistoryData"></allergic-history-info-table>
        </div>
        <!-- 个人史 -->
        <div slot="content6">
          <personal-history-info></personal-history-info>
          <personal-history-info-table :table-data="PersonalHistoryData"></personal-history-info-table>
        </div>
        <!-- 辅助检查 -->
        <div slot="content7">
          <auxiliary-examination-info></auxiliary-examination-info>
          <auxiliary-examination-info-table :table-data="AuxiliaryExaminationData"></auxiliary-examination-info-table>
        </div>
        <!-- 治疗意见 -->
        <div slot="content8">
          <treatment-options-info></treatment-options-info>
          <treatment-options-info-table :table-data="TreatmentOptionsData"></treatment-options-info-table>
        </div>

      </sn-show-by-side-button>
    </div>
    <!--药品信息  -->
    <div slot="content1">
      <div>
        <sn-show-by-side-button
            :content-count="8"
            :button-names="drugButtonNames"
            :button-count="8">
          <sn-text text="药品分类" slot="buttonName0"/>
          <sn-text text="药品用法" slot="buttonName1"/>
          <sn-text text="药品剂型" slot="buttonName2"/>
          <sn-text text="发票项目" slot="buttonName3"/>
          <sn-text text="生产厂家" slot="buttonName4"/>
          <sn-text text="包装单位" slot="buttonName5"/>
          <sn-text text="入库类型" slot="buttonName6"/>
          <sn-text text="出库类型" slot="buttonName7"/>

          <div slot="content0">
            <drug-classification-info></drug-classification-info>
            <drug-classification-info-table :table-data="DrugDlassificationData"></drug-classification-info-table>
          </div>
          <div slot="content1">
            <drug-usage-info></drug-usage-info>
            <drug-usage-info-table :table-data="DrugUsageData"></drug-usage-info-table>
          </div>
          <div slot="content2">
            <drug-dosage-from-info></drug-dosage-from-info>
            <drug-dosage-from-info-table :table-data="DrugDosageFromData"></drug-dosage-from-info-table>
          </div>
          <div slot="content3">
            <invoice-project-info></invoice-project-info>
            <invoice-project-info-table :table-data="InvoiceProjectData"></invoice-project-info-table>
          </div>
          <div slot="content4">
            <production-manufacturers-info></production-manufacturers-info>
            <production-manufacturers-info-table :table-data="ProductionManufacturersData"></production-manufacturers-info-table>
          </div>

          <div slot="content5">
            <packing-unit-info></packing-unit-info>
            <packing-unit-info-table :table-data="PackingUnitData"></packing-unit-info-table>
          </div>

          <div slot="content6">
            <put-in-warehouse-info></put-in-warehouse-info>
            <put-in-warehouse-info-table :table-data="PutInWarehouseData"></put-in-warehouse-info-table>
          </div>
          <div slot="content7">
            <out-warehouse-info></out-warehouse-info>
            <out-warehouse-info-table :table-data="OutWarehouseData"></out-warehouse-info-table>
          </div>
        </sn-show-by-side-button>
      </div>
    </div>
    <!--检查项目  -->
    <div slot="content2">
      <div>
        <sn-show-by-side-button
            :content-count="2"
            :button-names="InspectionButtonNames"
            :button-count="2">
          <sn-text text="项目分类" slot="buttonName0"/>
          <sn-text text="项目单位" slot="buttonName1"/>
          <div slot="content0">
            <project-classification-info></project-classification-info>
            <project-classification-info-table :table-data="ProjectClassificationData"></project-classification-info-table>
          </div>
          <div slot="content1">
            <project-unit-info></project-unit-info>
            <project-unit-info-table :table-data="ProjectUnitData"></project-unit-info-table>
          </div>
        </sn-show-by-side-button>
      </div>
    </div>
    <!-- 患者信息-->
    <div slot="content3">
      <div>
        <sn-show-by-side-button
            :content-count="3"
            :button-names="PatientInfoButtonNames"
            :button-count="3">
          <sn-text text="患者来源" slot="buttonName0"/>
          <sn-text text="患者学历" slot="buttonName1"/>
          <sn-text text="患者职业" slot="buttonName2"/>
          <div slot="content0">
            <patient-from-info></patient-from-info>
            <patient-from-info-table :table-data="PatientFromData"></patient-from-info-table>
          </div>
          <div slot="content1">
            <patient-enducation-info></patient-enducation-info>
            <patient-enducation-info-table :table-data="PatientEnducationData"></patient-enducation-info-table>
          </div>
          <div slot="content2">
            <patient-job-info></patient-job-info>
            <patient-job-info-table :table-data="PatientJobData"></patient-job-info-table>
          </div>

        </sn-show-by-side-button>
      </div>
    </div>
  </sn-show-by-button-with-card>
</template>

<script>


//病历信息组件
//导入诊断信息组件
import DiagnoseInfo
  from "@/views/system_setting/dictionary_table_manage/children/case_info/diagnose_info/DiagnoseInfo";
import DiagnoseInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/case_info/diagnose_info/DiagnoseInfoTable";
//导入辅助检查组件
import AuxiliaryExaminationInfo
  from "@/views/system_setting/dictionary_table_manage/children/case_info/auxiliary_examination_info/AuxiliaryExaminationInfo";
import AuxiliaryExaminationInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/case_info/auxiliary_examination_info/AuxiliaryExaminationInfoTable";

import SnShowBySideButton from "@/components/common/sn/button/SnShowBySideButton";
//导入过敏史组件
import AllergicHistoryInfo
  from "@/views/system_setting/dictionary_table_manage/children/case_info/allergic_history_info/AllergicHistoryInfo";
import AllergicHistoryInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/case_info/allergic_history_info/AllergicHistoryInfoTable";
//导入医嘱组件
import DoctorAdviceInfo
  from "@/views/system_setting/dictionary_table_manage/children/case_info/doctor_advice_info/DoctorAdviceInfo";
import DoctorAdviceInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/case_info/doctor_advice_info/DoctorAdviceInfoTable";
//导入既往史组件
import HistoryOfPassingIllnessInfo
  from "@/views/system_setting/dictionary_table_manage/children/case_info/history_of_passing_illness_info/HistoryOfPassingIllnessInfo";
import HistoryOfPassingIllnessInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/case_info/history_of_passing_illness_info/HistoryOfPassingIllnessInfoTable";
//导入现病史组件
import HistoryOfPresentIllnessInfo
  from "@/views/system_setting/dictionary_table_manage/children/case_info/history_of_present_illness_info/HistoryOfPresentIllnessInfo";
import HistoryOfPresentIllnessInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/case_info/history_of_present_illness_info/HistoryOfPresentIllnessInfoTable";
//导入个人史组件
import PersonalHistoryInfo
  from "@/views/system_setting/dictionary_table_manage/children/case_info/personal_history_info/PersonalHistoryInfo";
import PersonalHistoryInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/case_info/personal_history_info/PersonalHistoryInfoTable";
//导入治疗意见组件
import TreatmentOptionsInfo
  from "@/views/system_setting/dictionary_table_manage/children/case_info/treatment_options_info/TreatmentOptionsInfo";
import TreatmentOptionsInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/case_info/treatment_options_info/TreatmentOptionsInfoTable";
//导入主诉信息组件
import SymptomInfo
  from "@/views/system_setting/dictionary_table_manage/children/case_info/symptom_info/SymptomInfo";
import SymptomInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/case_info/symptom_info/SymptomInfoTable";


//药品信息组件
//导入药品分类信息
import DrugClassificationInfo
  from "@/views/system_setting/dictionary_table_manage/children/durg_info/drug_classification_info/DrugClassificationInfo";
import DrugClassificationInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/durg_info/drug_classification_info/DrugClassificationInfoTable";
//导入药品用法组件
import DrugUsageInfo
  from "@/views/system_setting/dictionary_table_manage/children/durg_info/drug_usage_info/DrugUsageInfo";
import DrugUsageInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/durg_info/drug_usage_info/DrugUsageInfoTable";
//导入药品剂型组件
import DrugDosageFromInfo
  from "@/views/system_setting/dictionary_table_manage/children/durg_info/drug_dosage_from_info/DrugDosageFromInfo";
import DrugDosageFromInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/durg_info/drug_dosage_from_info/DrugDosageFromInfoTable";
//导入发票项目组件
import InvoiceProjectInfo
  from "@/views/system_setting/dictionary_table_manage/children/durg_info/invoice_project_info/InvoiceProjectInfo";
import InvoiceProjectInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/durg_info/invoice_project_info/InvoiceProjectInfoTable";
//导入生产厂家组件
import ProductionManufacturersInfo
  from "@/views/system_setting/dictionary_table_manage/children/durg_info/production_manufacturers_info/ProductionManufacturersInfo";
import ProductionManufacturersInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/durg_info/production_manufacturers_info/ProductionManufacturersInfoTable";
//导入包装单位组价
import PackingUnitInfo
  from "@/views/system_setting/dictionary_table_manage/children/durg_info/packing_unit_info/PackingUnitInfo";
import PackingUnitInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/durg_info/packing_unit_info/PackingUnitInfoTable";
//导入入库类型组件
import PutInWarehouseInfo
  from "@/views/system_setting/dictionary_table_manage/children/durg_info/put_in_warehouse_info/PutInWarehouseInfo";
import PutInWarehouseInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/durg_info/put_in_warehouse_info/PutInWarehouseInfoTable";
//导入出库组件
import OutWarehouseInfo
  from "@/views/system_setting/dictionary_table_manage/children/durg_info/out_warehouse_info/OutWarehouseInfo";
import OutWarehouseInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/durg_info/out_warehouse_info/OutWarehouseInfoTable";


//导入检查项目组件
import ProjectClassificationInfo
  from "@/views/system_setting/dictionary_table_manage/children/inspection_item/project_classification/ProjectClassificationInfo";
import ProjectClassificationInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/inspection_item/project_classification/ProjectClassificationInfoTable";
//导入项目分类组价
import ProjectUnitInfo
  from "@/views/system_setting/dictionary_table_manage/children/inspection_item/project_unit/ProjectUnitInfo";
import ProjectUnitInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/inspection_item/project_unit/ProjectUnitInfoTable";

//导入患者组件
//患者来源组件
import PatientFromInfo
  from "@/views/system_setting/dictionary_table_manage/children/patient_info/patient_from_info/PatientFromInfo";
import PatientFromInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/patient_info/patient_from_info/PatientFromInfoTable";
//导入患者学历组件
import PatientEnducationInfo
  from "@/views/system_setting/dictionary_table_manage/children/patient_info/patient_enducation_info/PatientEnducationInfo";
import PatientEnducationInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/patient_info/patient_enducation_info/PatientEnducationInfoTable";
//导入患者职业组件
import PatientJobInfo
  from "@/views/system_setting/dictionary_table_manage/children/patient_info/patient_job_info/PatientJobInfo";
import PatientJobInfoTable
  from "@/views/system_setting/dictionary_table_manage/children/patient_info/patient_job_info/PatientJobInfoTable";

export default {
  name: "DictionaryTableAll",
  components: {
    PatientFromInfo,
    PatientFromInfoTable,
    PatientEnducationInfo,
    PatientEnducationInfoTable,
    PatientJobInfo,
    PatientJobInfoTable,
    ProjectUnitInfoTable,
    ProjectUnitInfo,
    ProjectClassificationInfoTable,
    ProjectClassificationInfo,
    OutWarehouseInfo,
    OutWarehouseInfoTable,
    PutInWarehouseInfo,
    PutInWarehouseInfoTable,
    PackingUnitInfo,
    PackingUnitInfoTable,
    DiagnoseInfo,
    SnShowBySideButton,
    DiagnoseInfoTable,
    AuxiliaryExaminationInfo,
    AuxiliaryExaminationInfoTable,
    AllergicHistoryInfo,
    AllergicHistoryInfoTable,
    DoctorAdviceInfo,
    DoctorAdviceInfoTable,
    HistoryOfPassingIllnessInfo,
    HistoryOfPassingIllnessInfoTable,
    HistoryOfPresentIllnessInfo,
    HistoryOfPresentIllnessInfoTable,
    PersonalHistoryInfo,
    PersonalHistoryInfoTable,
    TreatmentOptionsInfo,
    TreatmentOptionsInfoTable,
    SymptomInfo,
    SymptomInfoTable,
    DrugClassificationInfo,
    DrugClassificationInfoTable,
    DrugUsageInfo,
    DrugUsageInfoTable,
    DrugDosageFromInfo,
    DrugDosageFromInfoTable,
    InvoiceProjectInfoTable,
    InvoiceProjectInfo,
    ProductionManufacturersInfo,
    ProductionManufacturersInfoTable
  },
  data() {
    return {
      buttonNames: ['病历信息', '药品信息', '检查项目', '患者信息'],
      sideButtonNames: [
        '诊断信息', '医嘱信息', '主诉信息', '现病史', '既往史', '过敏史', '个人史', '辅助检查', '治疗意见'
      ],
      drugButtonNames: ['药品分类', '药品用法', '药品剂型', '发票项目', '生产厂家', '包装单位', '入库类型', '出库类型'],
      InspectionButtonNames:['项目分类','项目单位'],
      PatientInfoButtonNames:['患者来源','患者学历','患者职业'],

      AuxiliaryExaminationData: [
        {
          id: 1,
          auxiliaryExaminationCondition: '胃镜检查',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 2,
          auxiliaryExaminationCondition: '胃镜检查',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 3,
          auxiliaryExaminationCondition: '头部核磁共振',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 4,
          auxiliaryExaminationCondition: '心电图',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 5,
          auxiliaryExaminationCondition: '血液检查',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 6,
          auxiliaryExaminationCondition: '亲子鉴定',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        }
      ],
      AllergicHistoryData: [
        {
          id: 1,
          AllergicHistory: '系统性红斑苍狼症',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 2,
          AllergicHistory: '芹菜过敏',
          createTime: 2012 - 12 - 12,
          createPerson: '张东川'
        },
        {
          id: 3,
          AllergicHistory: '胃镜检查',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 4,
          AllergicHistory: '胃镜检查',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 5,
          AllergicHistory: '胃镜检查',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 6,
          AllergicHistory: '胃镜检查',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 7,
          AllergicHistory: '胃镜检查',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        }

      ],
      DoctorAdviceData: [
        {
          id: 1,
          doctorAdviceInfo: '多喝开水',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 2,
          doctorAdviceInfo: '多喝开水',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 3,
          doctorAdviceInfo: '多喝开水',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 4,
          doctorAdviceInfo: '多喝开水',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 5,
          doctorAdviceInfo: '多喝开水',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 6,
          doctorAdviceInfo: '多喝开水',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        }
      ],
      HistoryOfPassingIllnessData: [
        {
          id: 1,
          historyOfPassingIllness: '身心俱疲',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 2,
          historyOfPassingIllness: '身心俱疲',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 3,
          historyOfPassingIllness: '身心俱疲',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 4,
          historyOfPassingIllness: '身心俱疲',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 5,
          historyOfPassingIllness: '身心俱疲',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 6,
          historyOfPassingIllness: '身心俱疲',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 7,
          historyOfPassingIllness: '身心俱疲',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        }
      ],
      HistoryOfPresentIllnessData: [
        {
          id: 1,
          historyOfPresentIllness: '现病史',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 2,
          historyOfPresentIllness: '现病史',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 3,
          historyOfPresentIllness: '现病史',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 4,
          historyOfPresentIllness: '现病史',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 5,
          historyOfPresentIllness: '现病史',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 6,
          historyOfPresentIllness: '现病史',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 7,
          historyOfPresentIllness: '现病史',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        }
      ],
      TreatmentOptionsData: [
        {
          id: 1,
          treatmentOptions: '治疗意见',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 2,
          treatmentOptions: '治疗意见',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 3,
          treatmentOptions: '治疗意见',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 4,
          treatmentOptions: '治疗意见',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 5,
          treatmentOptions: '治疗意见',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 6,
          treatmentOptions: '治疗意见',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 7,
          treatmentOptions: '治疗意见',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        }
      ],
      PersonalHistoryData: [
        {
          id: 1,
          personalHistory: '个人史',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 1,
          personalHistory: '个人史',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 2,
          personalHistory: '个人史',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 3,
          personalHistory: '个人史',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 4,
          personalHistory: '个人史',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 5,
          personalHistory: '个人史',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 6,
          personalHistory: '个人史',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        }
      ],
      SymptomData: [
        {
          id: 1,
          classify: '分类1',
          symptom: '主诉的内容',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 2,
          classify: '分类2',
          symptom: '主诉的内容',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 3,
          classify: '分类3',
          symptom: '主诉的内容',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 4,
          classify: '分类4',
          symptom: '主诉的内容',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 5,
          classify: '分类5',
          symptom: '主诉的内容',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 6,
          classify: '分类6',
          symptom: '主诉的内容',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 7,
          classify: '分类7',
          symptom: '主诉的内容',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        }
      ],
      DrugDlassificationData: [
        {
          id: 1,
          classify: '中药处方',
          classifyName: '中药颗粒',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 2,
          classify: '西/成药处方',
          classifyName: '含片',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 1,
          classify: '中药处方',
          classifyName: '中药颗粒',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 2,
          classify: '西/成药处方',
          classifyName: '含片',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 3,
          classify: '中药处方',
          classifyName: '中药颗粒',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 4,
          classify: '西/成药处方',
          classifyName: '含片',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 5,
          classify: '中药处方',
          classifyName: '中药颗粒',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 6,
          classify: '西/成药处方',
          classifyName: '含片',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
      ],
      DrugUsageData:[
        {
          id: 1,
          classify: '中药处方',
          usageName: '口服',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 2,
          classify: '西/成处方',
          usageName: '外敷',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 3,
          classify: '中药处方',
          usageName: '口服',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 4,
          classify: '西/成处方',
          usageName: '外敷',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 5,
          classify: '中药处方',
          usageName: '口服',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:6,
          classify: '西/成处方',
          usageName: '外敷',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 7,
          classify: '中药处方',
          usageName: '口服',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 8,
          classify: '西/成处方',
          usageName: '外敷',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 9,
          classify: '中药处方',
          usageName: '口服',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 10,
          classify: '西/成处方',
          usageName: '外敷',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
      ],
      DrugDosageFromData:[
        {
          id: 1,
          dosageFromName: '溶剂',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 2,
          dosageFromName: '颗剂',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:3,
          dosageFromName: '丸剂',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 4,
          dosageFromName: '溶剂',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 5,
          dosageFromName: '颗剂',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:6,
          dosageFromName: '丸剂',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        }
      ],
      InvoiceProjectData:[
        {
          id: 1,
          projectName: '注射费',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 2,
          projectName: '检查费',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 3,
          projectName: '材料费',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id: 4,
          projectName: '材料费',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:5,
          projectName: '检查费',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        }
      ],
      ProductionManufacturersData:[
        {
          id:1,
          manufactureName: '上海医药(集团)有限公司',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:2,
          manufactureName: '山东罗欣药业股份有限公司',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:3,
          manufactureName: '昆明制药集团',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:4,
          manufactureName: '上海医药(集团)有限公司',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:5,
          manufactureName: '山东罗欣药业股份有限公司',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:6,
          manufactureName: '昆明制药集团',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:7,
          manufactureName: '上海医药(集团)有限公司',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:8,
          manufactureName: '山东罗欣药业股份有限公司',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:9,
          manufactureName: '昆明制药集团',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
      ],
      PackingUnitData:[
        {
          id:1,
          unitName: '包',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:2,
          unitName: '袋',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:3,
          unitName: '盒',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },

        {
          id:4,
          unitName: '包',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:5,
          unitName: '袋',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:6,
          unitName: '盒',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },

        {
          id:7,
          unitName: '包',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:8,
          unitName: '袋',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:9,
          unitName: '盒',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },

        {
          id:10,
          unitName: '包',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:11,
          unitName: '袋',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:12,
          unitName: '盒',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        }
      ],
      PutInWarehouseData:[
        {
          id:1,
          putInName: '采购入库',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:2,
          putInName: '退货入库',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:1,
          putInName: '其他入库',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        }
      ],
      OutWarehouseData:[
        {
          id:1,
          outName: '科室领药',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:2,
          outName: '药物损耗',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:3,
          outName: '采购出库',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
      ],
      ProjectClassificationData:[
        {
          id:1,
          classifyName: '检查费',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:2,
          classifyName: '针灸费',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:3,
          classifyName: '检查费',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:4,
          classifyName: '针灸费',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        }
      ],
      ProjectUnitData:[
        {
          id:1,
          unitName: '次',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:2,
          unitName: '项',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:3,
          unitName: '盒',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:4,
          unitName: '支',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
      ],
      PatientFromData:[
        {
          id:1,
          fromName: '自来',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:2,
          fromName: '广告',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:3,
          fromName: '朋友介绍',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        }
      ],
      PatientJobData:[
        {
          id:1,
          jobName: '工人',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:2,
          jobName: '公务员',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:3,
          jobName: '医生',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:4,
          jobName: '教师',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        }
      ],
      PatientEnducationData:[
        {
          id:1,
          enducationName: '中专',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:2,
          enducationName: '本科',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:3,
          enducationName: '硕士',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        },
        {
          id:4,
          enducationName: '幼儿园',
          createTime: 2012 - 12 - 12,
          createPerson: '不良人'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>