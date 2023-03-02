<template>
  <sn-row-has-two-col
      :left=12
      :right=12
      class="case-info-row">
    <sn-input
        :textarea-height="4"
        input-type="textarea"
        slot="one-col">
      <sn-text
          :text="leftDescription"
          slot="title"
          class="margin-bottom"/>
      <case-info-dialog slot="input-after"/>
    </sn-input>
    <sn-input
        :textarea-height="4"
        input-type="textarea"
        slot="two-col">
      <sn-text
          :text="rightDescription"
          slot="title"
          class="margin-bottom"/>
      <case-info-dialog slot="input-after"/>
    </sn-input>
  </sn-row-has-two-col>
</template>

<script>
import CaseInfoDialog from "@/components/content/case/common_case/children/case_info/children/CaseInfoDialog";

export default {
  name: "CaseInfoFirstRow",
  components: {CaseInfoDialog},
  props: {
    leftDescription: {
      type: String,
      default: ''
    },
    rightDescription: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
.case-info-row {

  margin-top: 30px;

  /deep/ .el-input__inner {
    height: 100px;
  }

  /deep/ .el-dialog__body {
    padding-top: 0;
  }
}

</style>