<template>
  <div class="cost-record-show-title to-flex">
    <sn-text
        :move-down="4"
        text="消费总计金额 :"
        :font-size="25"
        font-weight="bold"
        class="margin-right"/>
    <sn-text
        :move-down="4"
        text="210.00"
        :font-size="25"
        font-weight="bold"
        font-color="pink"
        class="margin-right"/>
    <sn-text
        :move-down="4"
        text="元"
        :font-size="25"
        font-weight="bold"/>
  </div>
</template>

<script>
export default {
  name: "CostRecordTitle"
}
</script>

<style scoped>
.cost-record-show-title {
  line-height: 60px;
  padding-left: 20px;
  background-color: #EEEFFB;
}
</style>