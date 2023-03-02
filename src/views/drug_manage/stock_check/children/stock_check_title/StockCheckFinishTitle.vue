<template>
  <sn-row-has-two-col :left="22" :right="2">
    <sn-text
        text="查看盘点详情"
        :move-down="10"
        :font-size="20"
        slot="one-col"
        font-color="#666EE8"
        font-weight="bold"/>
    <el-button type="primary"
               slot="two-col"
               plain
               @click="returnStockCheckRecord">
      <sn-text text="返回"/>
    </el-button>
  </sn-row-has-two-col>
</template>

<script>
export default {
  name: "StockCheckFinishTitle",
  methods: {
    returnStockCheckRecord() {
      history.back()
    }
  },
}
</script>

<style scoped>
.el-button {
  width: 100px;
}
</style>