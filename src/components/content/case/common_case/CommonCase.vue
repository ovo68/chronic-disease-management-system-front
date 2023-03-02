<template>
  <sn-card-no-title class="margin-top-20">
    <div slot="content">
      <!-- 体格信息 -->
      <body-info/>
      <!-- 病例信息 -->
      <case-info/>
    </div>
  </sn-card-no-title>
</template>

<script>
import BodyInfo from "@/components/content/case/common_case/children/body_info/BodyInfo";
import CaseInfo from "@/components/content/case/common_case/children/case_info/CaseInfo";

export default {
  name: "Case",
  components: {
    BodyInfo,
    CaseInfo
  }
}
</script>

<style scoped>

</style>