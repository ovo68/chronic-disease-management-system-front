<template>
  <sn-row-has-four-col
      :one=5
      :two=5
      :three=5
      :four=7
      class="margin-top-20">
    <body-info-input
        before-text="身高"
        after-text="cm"
        slot="one-col" />
    <body-info-input
        before-text="体重"
        after-text="Kg"
        slot="two-col" />
    <body-info-input
        before-text="血糖"
        after-text="mmol/l"
        slot="three-col" />
    <body-info-input
        before-text="血脂"
        after-text="mmol/l"
        slot="four-col" />
  </sn-row-has-four-col>
</template>

<script>
import BodyInfoInput from "@/components/content/case/common_case/children/body_info/children/BodyInfoInput";
export default {
  name: "BodyInfoSecondRow",
  components:{
    BodyInfoInput
  }
}
</script>

<style scoped>
</style>