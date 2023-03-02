<!-- 模板维护 -->
<template>
  <div>
    <sn-show-by-button-with-card
        :button-count="3"
        :content-count="3"
        :button-names="buttonNames">

      <sn-text text="病历模板" slot="buttonName0"/>
      <sn-text text="处方模板" slot="buttonName1"/>
      <sn-text text="编辑" slot="buttonName2"/>
      <div slot="content0">
        <medical-history-statistics/>
      </div>
      <div slot="content1">
        <prescription-statistics/>
      </div>
      <!--编辑页面-->
      <div slot="content2">
        <insert-medical-templates/>
      </div>
    </sn-show-by-button-with-card>
    <!--新增按钮-->
    <!--<div><el-button type="primary">新增</el-button></div>-->
  </div>
</template>

<script>
import MedicalHistoryStatistics
  from "@/views/system_setting/template_manage/children/medical_history_statistics/MedicalHistoryStatistics";
import PrescriptionStatistics
  from "@/views/system_setting/template_manage/children/prescription_statistics/PrescriptionStatistics";
/*编辑页面*/
import InsertMedicalTemplates
  from "@/views/system_setting/template_manage/insert_template/chirdren/insert_medical_template/InsertMedicalTemplates";

export default {
  name: "TemplateManage",
  components: {
    MedicalHistoryStatistics,
    PrescriptionStatistics,
    /*编辑页面*/
    InsertMedicalTemplates
  },
  data() {
    return {
      buttonNames: [
        '病历模板', '处方模板', '编辑'
      ]
    }
  }
}
</script>

<style scoped>
</style>