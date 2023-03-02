<template>
  <div>
    <sn-title
        title="病例信息"
        :title-style="{'color':'#40B6FF'}" class="to-flex">
      <sn-text
          text="( 病例信息可在系统设置-基础设置中的自定义设置 )"
          class="margin-left"
          slot="other"
          font-color="#40B6FF"/>
    </sn-title>
    <case-info-first-row/>
    <case-info-row
        class="case-row"
        left-description="现病史"
        right-description="既往史"/>
    <case-info-row
        class="case-row"
        left-description="过敏史"
        right-description="个人史"/>
    <case-info-row
        class="case-row"
        left-description="家族史"
        right-description="辅助检查"/>
    <case-info-row
        left-description="治疗意见"
        right-description="备注"
        class="case-row"/>
  </div>
</template>

<script>
import CaseInfoRow from "@/components/content/case/common_case/children/case_info/children/CaseInfoRow";
import CaseInfoFirstRow from "@/components/content/case/common_case/children/case_info/children/CaseInfoFirstRow";

export default {
  name: "CaseInfo",
  components: {
    CaseInfoFirstRow,
    CaseInfoRow
  }
}
</script>

<style scoped>
.case-row {
  margin-bottom: 60px;
}
</style>