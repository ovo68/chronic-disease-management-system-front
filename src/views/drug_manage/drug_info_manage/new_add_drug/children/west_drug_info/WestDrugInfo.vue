<template>
  <div>
    <west-drug-base-info/>
    <el-divider/>
    <west-drug-pack-info/>
    <el-divider/>
    <west-drug-efficacy-info/>
    <el-divider/>
    <west-drug-other-info/>
  </div>
</template>

<script>
import WestDrugBaseInfo
  from "@/views/drug_manage/drug_info_manage/new_add_drug/children/west_drug_info/children/WestDrugBaseInfo";
import WestDrugEfficacyInfo
  from "@/views/drug_manage/drug_info_manage/new_add_drug/children/west_drug_info/children/WestDrugEfficacyInfo";
import WestDrugOtherInfo
  from "@/views/drug_manage/drug_info_manage/new_add_drug/children/west_drug_info/children/WestDrugOtherInfo";
import WestDrugPackInfo
  from "@/views/drug_manage/drug_info_manage/new_add_drug/children/west_drug_info/children/WestDrugPackInfo";
export default {
  name: "WestDrugInfo",
  components:{
    WestDrugBaseInfo,
    WestDrugEfficacyInfo,
    WestDrugOtherInfo,
    WestDrugPackInfo
  }
}
</script>

<style scoped>

</style>