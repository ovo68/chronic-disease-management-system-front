<template>
  <sn-row-has-two-col :right="12" :left="12" class="margin-top-20">
    <sn-date-picker slot="one-col">
      <sn-must-text text="发病日期" slot="title"/>
    </sn-date-picker>
    <sn-input-with-advice slot="two-col">
      <sn-must-text text="主诉" slot="title"/>
    </sn-input-with-advice>
  </sn-row-has-two-col>
</template>

<script>
export default {
  name: "CaseInfoFirstRow",
}
</script>

<style scoped>

</style>