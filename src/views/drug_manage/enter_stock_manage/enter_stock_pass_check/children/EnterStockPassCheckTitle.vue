<template>
  <sn-row-has-two-col :left="19" :right="5">
    <sn-text
        slot="one-col"
        text="入库详情-审核通过"
        :move-down="10"
        font-weight="bold"
        :font-size="20"/>
    <div slot="two-col" class="pass-check-button">

      <el-button
          type="primary"
          plain
          @click="returnEnterStockInfo">
        <sn-text text="返回"/>
      </el-button>
    </div>
  </sn-row-has-two-col>
</template>

<script>
export default {
  name: "EnterStockPassCheckTitle",
  methods: {
    returnEnterStockInfo() {
      history.back()
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