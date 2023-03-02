<template>
  <sn-row-has-two-col :left="17" :right="7">
    <sn-text
        text="新增盘点"
        :move-down="10"
        :font-size="20"
        slot="one-col"
        font-color="#666EE8"
        font-weight="bold"/>

    <div slot="two-col" class="to-right">
      <el-button type="primary"
                 plain
                 @click="returnStockCheckRecord">
        <sn-text text="保存"/>
      </el-button>
      <el-button type="primary"
                 plain
                 @click="returnStockCheckRecord">
        <sn-text text="完成盘点"/>
      </el-button>
      <el-button type="primary"
                 plain
                 @click="returnStockCheckRecord">
        <sn-text text="返回"/>
      </el-button>
    </div>


  </sn-row-has-two-col>
</template>

<script>
export default {
  name: "StockCheckCurrentTitle",
  methods: {
    returnStockCheckRecord() {
      this.$emit('saveCheckStock')
      history.back()
    }
  },
}
</script>

<style scoped>
.el-button {
  width: 100px;
}

.to-right {
  position: relative;
  left: 25px;
}
</style>