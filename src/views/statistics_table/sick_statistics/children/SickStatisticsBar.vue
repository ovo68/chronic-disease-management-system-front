<template>
  <div>
    <sn-show-by-button-with-card :button-count="7"
                                 :button-names="buttonNames"
                                 :content-count="7">
      <sn-text text="门诊日志" slot="buttonName0"/>
      <sn-text text="患者年龄分析" slot="buttonName1"/>
      <sn-text text="患者性别分析" slot="buttonName2"/>
      <sn-text text="患者婚姻情况分析" slot="buttonName3"/>
      <sn-text text="会员类型分析" slot="buttonName4"/>
      <sn-text text="就诊类型" slot="buttonName5"/>
      <sn-text text="患者来源分析" slot="buttonName6"/>
      <span slot="content0">
           <div>
             <outpatient-analyse-find-bar></outpatient-analyse-find-bar>
             <outpatient-analyse-table :table-data="SickStatisticsTableData"></outpatient-analyse-table>
           </div>

      </span>
      <span slot="content1">
      <patient-age-analyse></patient-age-analyse>
        <patient-age-analyse-picture></patient-age-analyse-picture>
        <patient-age-analyse-table></patient-age-analyse-table>
      </span>
      <span slot="content2">
        <patient-gender-analyse></patient-gender-analyse>
        <patient-gender-analyse-picture></patient-gender-analyse-picture>
        <patient-gender-analyse-table></patient-gender-analyse-table>
      </span>
      <span slot="content3">
        <patient-marital-status-analyse></patient-marital-status-analyse>
        <patient-marital-status-analyse-picture></patient-marital-status-analyse-picture>
        <patient-marital-status-analyse-table></patient-marital-status-analyse-table>
      </span>
      <span slot="content4">
        <member-type-analyse-picture></member-type-analyse-picture>
        <member-type-analyse-table></member-type-analyse-table>
      </span>
      <span slot="content5">
        <see-doctor-analyse></see-doctor-analyse>
        <see-doctor-analyse-picture></see-doctor-analyse-picture>
        <see-doctor-analyse-table></see-doctor-analyse-table>
      </span>
      <span slot="content6">
        <patients-with-source-analyse></patients-with-source-analyse>
        <patients-with-source-analyse-picture></patients-with-source-analyse-picture>
        <patients-with-source-analyse-table></patients-with-source-analyse-table>
      </span>
    </sn-show-by-button-with-card>
  </div>
</template>

<script>
// 导入门诊组件
import OutpatientAnalyseFindBar
  from "@/views/statistics_table/sick_statistics/children/outpatient_analyse/OutpatientAnalyseFindBar";
import OutpatientAnalyseTable
  from "@/views/statistics_table/sick_statistics/children/outpatient_analyse/OutpatientAnalyseTable";
// 导入年龄组件
import PatientAgeAnalysePicture
  from "@/views/statistics_table/sick_statistics/children/patient_age_analyse/PatientAgeAnalysePicture";
import PatientAgeAnalyseTable
  from "@/views/statistics_table/sick_statistics/children/patient_age_analyse/PatientAgeAnalyseTable";
import PatientAgeAnalyse
  from "@/views/statistics_table/sick_statistics/children/patient_age_analyse/PatientAgeAnalyse";
// 导入性别组件
import PatientGenderAnalyseTable
  from "@/views/statistics_table/sick_statistics/children/patient_gender_analyse/PatientGenderAnalyseTable";
import PatientGenderAnalysePicture
  from "@/views/statistics_table/sick_statistics/children/patient_gender_analyse/PatientGenderAnalysePicture";
import PatientGenderAnalyse
  from "@/views/statistics_table/sick_statistics/children/patient_gender_analyse/PatientGenderAnalyse";
// 导入婚姻组件
import PatientMaritalStatusAnalysePicture
  from "@/views/statistics_table/sick_statistics/children/patient_marital_status_analyse/PatientMaritalStatusAnalysePicture";
import PatientMaritalStatusAnalyse
  from "@/views/statistics_table/sick_statistics/children/patient_marital_status_analyse/PatientMaritalStatusAnalyse";
import PatientMaritalStatusAnalyseTable
  from "@/views/statistics_table/sick_statistics/children/patient_marital_status_analyse/PatientMaritalStatusAnalyseTable";
//导入会员组件
import MemberTypeAnalysePicture
  from "@/views/statistics_table/sick_statistics/children/member_type_analyse/MemberTypeAnalysePicture";
import MemberTypeAnalyseTable
  from "@/views/statistics_table/sick_statistics/children/member_type_analyse/MemberTypeAnalyseTable";
//导入就诊组件
import SeeDoctorAnalyse
  from "@/views/statistics_table/sick_statistics/children/see_doctor_analyse/SeeDoctorAnalyse";
import SeeDoctorAnalysePicture
  from "@/views/statistics_table/sick_statistics/children/see_doctor_analyse/SeeDoctorAnalysePicture";
import SeeDoctorAnalyseTable
  from "@/views/statistics_table/sick_statistics/children/see_doctor_analyse/SeeDoctorAnalyseTable";
//导入患者来源组件
import PatientsWithSourceAnalyse
  from "@/views/statistics_table/sick_statistics/children/patients_with_source/PatientsWithSourceAnalyse";
import PatientsWithSourceAnalysePicture
  from "@/views/statistics_table/sick_statistics/children/patients_with_source/PatientsWithSourceAnalysePicture";
import PatientsWithSourceAnalyseTable
  from "@/views/statistics_table/sick_statistics/children/patients_with_source/PatientsWithSourceAnalyseTable";


export default {
  name: "SickStatisticsBar",
  components: {
    OutpatientAnalyseTable,
    OutpatientAnalyseFindBar,
    PatientAgeAnalysePicture,
    PatientAgeAnalyseTable,
    PatientAgeAnalyse,
    PatientGenderAnalyseTable,
    PatientGenderAnalysePicture,
    PatientGenderAnalyse,
    PatientMaritalStatusAnalyse,
    PatientMaritalStatusAnalysePicture,
    PatientMaritalStatusAnalyseTable,
    MemberTypeAnalysePicture,
    MemberTypeAnalyseTable,
    SeeDoctorAnalyse,
    SeeDoctorAnalysePicture,
    SeeDoctorAnalyseTable,
    PatientsWithSourceAnalyse,
    PatientsWithSourceAnalysePicture,
    PatientsWithSourceAnalyseTable
  },
  data() {
    return {
      buttonNames: ['门诊日志', '患者性别分析', '患者婚姻情况分析', '会员类型分析', '就诊类型', '患者来源分析'],
      SickStatisticsTableData: [
        {
          id: 12,
          cardId: 23,
          vipType: 23,
          name: 23,
          gender: 232,
          age: 232,
          telephone: 232,
          outpatienttype: 323,
          diagnose: 323,
          department: 323,
          doctor: 32,
          status: 23
        },
        {
          id: 12,
          cardId: 23,
          vipType: 23,
          name: 23,
          gender: 232,
          age: 232,
          telephone: 232,
          outpatienttype: 323,
          diagnose: 323,
          department: 323,
          doctor: 32,
          status: 23
        },
        {
          id: 12,
          cardId: 23,
          vipType: 23,
          name: 23,
          gender: 232,
          age: 232,
          telephone: 232,
          outpatienttype: 323,
          diagnose: 323,
          department: 323,
          doctor: 32,
          status: 23
        },
        {
          id: 12,
          cardId: 23,
          vipType: 23,
          name: 23,
          gender: 232,
          age: 232,
          telephone: 232,
          outpatienttype: 323,
          diagnose: 323,
          department: 323,
          doctor: 32,
          status: 23
        },
        {
          id: 12,
          cardId: 23,
          vipType: 23,
          name: 23,
          gender: 232,
          age: 232,
          telephone: 232,
          outpatienttype: 323,
          diagnose: 323,
          department: 323,
          doctor: 32,
          status: 23
        },
        {
          id: 12,
          cardId: 23,
          vipType: 23,
          name: 23,
          gender: 232,
          age: 232,
          telephone: 232,
          outpatienttype: 323,
          diagnose: 323,
          department: 323,
          doctor: 32,
          status: 23
        },
        {
          id: 12,
          cardId: 23,
          vipType: 23,
          name: 23,
          gender: 232,
          age: 232,
          telephone: 232,
          outpatienttype: 323,
          diagnose: 323,
          department: 323,
          doctor: 32,
          status: 23
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>