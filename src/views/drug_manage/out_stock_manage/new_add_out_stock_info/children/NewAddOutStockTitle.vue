<template>
  <sn-row-has-two-col :left="17" :right="7">
    <sn-text
        slot="one-col"
        text="新增出库信息"
        :move-down="10"
        font-weight="bold"
        :font-size="20"/>
    <div slot="two-col" class="pass-check-button">
      <el-button
          type="primary"
          plain
          @click="returnOutStockInfo">
        <sn-text text="提交审核"/>
      </el-button>
      <el-button
          type="primary"
          plain
          @click="directOutStock">
        <sn-text text="直接出库"/>
      </el-button>
      <el-button
          type="primary"
          plain
          @click="returnOutStockInfo">
        <sn-text text="返回"/>
      </el-button>
    </div>
  </sn-row-has-two-col>
</template>

<script>
export default {
  name: "NewAddOutStockTitle",
  methods: {
    returnOutStockInfo() {
      history.back()
    },
    directOutStock() {

    }
  },
}
</script>

<style scoped>
.el-button {
  width: 100px;
}

.pass-check-button {
  position: relative;
  left: 30px;
}
</style>