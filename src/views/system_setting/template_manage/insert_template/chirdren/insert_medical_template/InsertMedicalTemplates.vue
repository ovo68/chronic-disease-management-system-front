<template>
<div>
  <insert-medical-template-top class="margin-bottom-20"/>
  <insert-medical-info/>
</div>
</template>

<script>
import InsertMedicalTemplateTop
  from "@/views/system_setting/template_manage/insert_template/chirdren/insert_medical_template/chirdren/InsertMedicalTemplateTop";
import InsertMedicalInfo
  from "@/views/system_setting/template_manage/insert_template/chirdren/insert_medical_template/chirdren/InsertMedicalInfo";

export default {
  name: "InsertMedicalTemplate",
  components:{
    InsertMedicalTemplateTop,
    InsertMedicalInfo
  }
}
</script>

<style scoped>

</style>