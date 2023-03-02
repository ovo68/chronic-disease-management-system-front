<template>
  <div>
    <sn-title title="体格信息" :title-style="{'color':'#40B6FF'}"/>
    <body-info-first-row/>
    <body-info-second-row/>
  </div>
</template>

<script>
import BodyInfoFirstRow from "@/components/content/case/common_case/children/body_info/children/BodyInfoFirstRow";
import BodyInfoSecondRow from "@/components/content/case/common_case/children/body_info/children/BodyInfoSecondRow";
export default {
  name: "BodyInfo",
  components: {
    BodyInfoFirstRow,
    BodyInfoSecondRow
  }
}
</script>

<style scoped>

</style>