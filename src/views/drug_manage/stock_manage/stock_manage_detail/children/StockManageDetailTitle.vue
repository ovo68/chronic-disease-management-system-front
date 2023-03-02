<template>
  <sn-row-has-two-col :left="22" :right="2">
    <sn-text
        text="查看库存明细"
        :move-down="10"
        :font-size="20"
        slot="one-col"
        font-weight="bold"/>

    <el-button type="primary" plain @click="returnStockManage" slot="two-col">
      <sn-text text="返回"/>
    </el-button>
  </sn-row-has-two-col>
</template>

<script>
export default {
  name: "StockManageDetailTitle",
  methods: {
    returnStockManage() {
      history.back()
    }
  },
}
</script>

<style scoped>
.el-button{
  width: 100px;
}
</style>