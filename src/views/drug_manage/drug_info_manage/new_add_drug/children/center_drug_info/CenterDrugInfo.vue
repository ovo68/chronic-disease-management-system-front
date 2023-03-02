<template>
  <div>
    <!-- 基本信息 -->
    <center-drug-base-info/>
    <el-divider/>
    <!-- 包装信息-->
    <center-drug-pack-info/>
    <el-divider/>
    <!-- 功效信息 -->
    <center-drug-efficacy-info/>
    <el-divider/>
    <!-- 其他信息 -->
    <center-drug-other-info/>
  </div>
</template>

<script>
import CenterDrugBaseInfo
  from "@/views/drug_manage/drug_info_manage/new_add_drug/children/center_drug_info/children/CenterDrugBaseInfo";
import CenterDrugEfficacyInfo
  from "@/views/drug_manage/drug_info_manage/new_add_drug/children/center_drug_info/children/CenterDrugEfficacyInfo";
import CenterDrugOtherInfo
  from "@/views/drug_manage/drug_info_manage/new_add_drug/children/center_drug_info/children/CenterDrugOtherInfo";
import CenterDrugPackInfo
  from "@/views/drug_manage/drug_info_manage/new_add_drug/children/center_drug_info/children/CenterDrugPackInfo";

export default {
  name: "CenterDrugInfo",
  components: {
    CenterDrugBaseInfo,
    CenterDrugEfficacyInfo,
    CenterDrugOtherInfo,
    CenterDrugPackInfo
  }
}
</script>

<style scoped>

</style>