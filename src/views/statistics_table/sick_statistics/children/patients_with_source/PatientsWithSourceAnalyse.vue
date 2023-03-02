<template>
  <sn-row-has-four-col :one="8">
    <sn-date-picker-with-round slot="one-col" class="to-flex">
      <sn-text slot="title" text="就诊时间" class="margin-right" :move-down="8" ></sn-text>
    </sn-date-picker-with-round>
  </sn-row-has-four-col>
</template>

<script>
export default {
name: "PatientsWithSourceAnalyse"
}
</script>

<style scoped>

</style>