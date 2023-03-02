<template>
  <sn-row-has-four-col
      :one=5
      :two=5
      :three=5
      :four=7
      class="margin-top-20">
    <body-info-input
        before-text="体温"
        after-text="℃"
        slot="one-col" />
    <body-info-input
        before-text="呼吸"
        after-text="次/分"
        slot="two-col" />
    <body-info-input
        before-text="脉搏"
        after-text="次/分"
        slot="three-col" />
    <body-info-input
        before-text="血压"
        after-text="mmHg"
        slot="four-col" />
  </sn-row-has-four-col>
</template>

<script>
import BodyInfoInput from "@/components/content/case/common_case/children/body_info/children/BodyInfoInput";
export default {
  name: "BodyInfoFirstRow",
  components: {BodyInfoInput},
}
</script>

<style scoped>
</style>